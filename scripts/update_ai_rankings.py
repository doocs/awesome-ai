#!/usr/bin/env python3
"""Weekly AI Rankings Updater — fetches latest benchmark data and updates content files."""
import urllib.request
import json
import os
import sys
import hashlib
from datetime import datetime, timezone

CONTENT_BASE = "/tmp/awesome-ai/src/content"
DEPLOY_SCRIPT = "/tmp/awesome-ai/scripts/deploy_awesome_ai.py"

def today_str():
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")

def get_iso_week():
    """Return ISO week string like 2026-w19"""
    now = datetime.now(timezone.utc)
    iso = now.isocalendar()
    return f"{iso[0]}-w{iso[1]:02d}"

def sha_for_file(path):
    """Compute git blob SHA for change detection."""
    with open(path, "rb") as f:
        content = f.read()
    header = f"blob {len(content)}\x00".encode()
    return hashlib.sha1(header + content).hexdigest()

def fetch_lmsys_leaderboard():
    """Fetch LMSYS Chatbot Arena leaderboard via their API."""
    # Try the leaderboard API endpoint
    urls = [
        "https://lmarena.ai/api/leaderboard",
        "https://huggingface.co/api/spaces/lmsys/chatbot-arena-leaderboard",
    ]
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            resp = urllib.request.urlopen(req, timeout=15)
            data = json.loads(resp.read())
            if isinstance(data, list) and len(data) > 0:
                return data
        except Exception:
            continue
    return None

def generate_model_arena(entries):
    """Generate arena.md from LMSYS data."""
    if not entries:
        return None  # Use existing seed data
    
    rows = []
    for i, entry in enumerate(entries[:10], 1):
        rank = "🥇" if i == 1 else "🥈" if i == 2 else "🥉" if i == 3 else str(i)
        name = entry.get("model_display_name", entry.get("model_name", "Unknown"))
        vendor = entry.get("organization", "Unknown")
        elo = entry.get("arena_rating", entry.get("elo_rating", "—"))
        mtype = "Open" if entry.get("license", "") == "apache-2.0" else "Closed"
        rows.append(f"| {rank} | {name} | {vendor} | {elo} | {mtype} |")
    
    if not rows:
        return None
    
    return f"""---
title: "LMSYS Chatbot Arena Leaderboard"
icon: "🏆"
tags: [LMSYS, Elo, leaderboard, ranking]
summary: "Global AI model rankings based on LMSYS Chatbot Arena"
data_source: "https://lmarena.ai/leaderboard"
benchmarks: [Chatbot Arena, MMLU-Pro, IFEval]
last_updated: "{today_str()}"
auto_updated: true
date: "{today_str()}"
---

| Rank | Model | Vendor | Elo | Type |
|---|---|---|---|---|
{chr(10).join(rows)}

---

> Data sourced from [LMSYS Chatbot Arena](https://lmarena.ai/leaderboard). Updated weekly.
"""

def generate_model_zh_arena(entries):
    """Generate Chinese version of arena.md."""
    if not entries:
        return None
    
    rows = []
    for i, entry in enumerate(entries[:10], 1):
        rank = "🥇" if i == 1 else "🥈" if i == 2 else "🥉" if i == 3 else str(i)
        name = entry.get("model_display_name", entry.get("model_name", "Unknown"))
        vendor = entry.get("organization", "Unknown")
        elo = entry.get("arena_rating", entry.get("elo_rating", "—"))
        mtype = "开源" if entry.get("license", "") == "apache-2.0" else "闭源"
        rows.append(f"| {rank} | {name} | {vendor} | {elo} | {mtype} |")
    
    return f"""---
title: "LMSYS Chatbot Arena 排行榜"
icon: "🏆"
tags: [LMSYS, Elo, 综合排行]
summary: "基于 LMSYS Chatbot Arena 的全球 AI 模型综合排名"
data_source: "https://lmarena.ai/leaderboard"
benchmarks: [Chatbot Arena, MMLU-Pro, IFEval]
last_updated: "{today_str()}"
auto_updated: true
date: "{today_str()}"
---

| 排名 | 模型 | 厂商 | Elo | 类型 |
|---|---|---|---|---|
{chr(10).join(rows)}

---

> 数据来源：[LMSYS Chatbot Arena](https://lmarena.ai/leaderboard)，每周更新。
"""

def write_and_deploy(path, content, message):
    """Write content and deploy if changed."""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    
    # Check if content changed
    old_sha = None
    if os.path.exists(path):
        old_sha = sha_for_file(path)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    
    new_sha = sha_for_file(path)
    if old_sha == new_sha:
        print(f"  No change: {path}")
        return True
    
    # Deploy via GitHub API
    if os.path.exists(DEPLOY_SCRIPT):
        import subprocess
        result = subprocess.run(
            ["python3", DEPLOY_SCRIPT, path, message],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            print(f"  ✓ Deployed: {path}")
            return True
        else:
            print(f"  ✗ Deploy failed: {path} — {result.stderr}")
            return False
    else:
        print(f"  ⚠ Deploy script not found: {DEPLOY_SCRIPT}")
        return True

def main():
    today = today_str()
    print(f"=== AI Rankings Weekly Update — {today} ===")
    
    # 1. Try to fetch LMSYS data
    print("\n[1] Fetching LMSYS leaderboard...")
    lmsys_data = fetch_lmsys_leaderboard()
    
    if lmsys_data:
        print(f"  ✓ Got {len(lmsys_data)} entries from LMSYS")
        
        # Generate and deploy arena files
        zh_content = generate_model_zh_arena(lmsys_data)
        if zh_content:
            write_and_deploy(
                os.path.join(CONTENT_BASE, "models/arena.md"),
                zh_content,
                f"chore: update model rankings {today} (zh)"
            )
        
        en_content = generate_model_arena(lmsys_data)
        if en_content:
            write_and_deploy(
                os.path.join(CONTENT_BASE, "en/models/arena.md"),
                en_content,
                f"chore: update model rankings {today} (en)"
            )
    else:
        print("  ⚠ Could not fetch LMSYS data, keeping existing seed data")
    
    # 2. Update coding/reasoning/multimodal benchmark files
    # These would need specific API access; for now, update timestamps only
    print("\n[2] Checking benchmark data sources...")
    
    # SWE-bench, GPQA, MMMU etc. — these typically require web scraping
    # For now, we keep existing data and just confirm the files exist
    benchmark_files = [
        ("models/coding.md", "en/models/coding.md"),
        ("models/reasoning.md", "en/models/reasoning.md"),
        ("models/multimodal.md", "en/models/multimodal.md"),
    ]
    
    for zh_file, en_file in benchmark_files:
        zh_path = os.path.join(CONTENT_BASE, zh_file)
        en_path = os.path.join(CONTENT_BASE, en_file)
        if os.path.exists(zh_path) and os.path.exists(en_path):
            print(f"  ✓ {zh_file} and {en_file} exist")
        else:
            print(f"  ⚠ Missing: {zh_file} or {en_file}")
    
    # 3. Update tool files — check GitHub stars for popularity
    print("\n[3] Checking tool popularity...")
    tools_to_check = [
        ("cursor", "anthropic/cursor"),
        ("github-copilot", "github/copilot"),
        ("dify", "langgenius/dify"),
    ]
    
    for name, repo in tools_to_check:
        try:
            url = f"https://api.github.com/repos/{repo}"
            req = urllib.request.Request(url, headers={"User-Agent": "AI-Pulse/1.0"})
            resp = urllib.request.urlopen(req, timeout=10)
            data = json.loads(resp.read())
            stars = data.get("stargazers_count", "?")
            print(f"  ✓ {name}: {stars} stars")
        except Exception as e:
            print(f"  ⚠ {name}: could not fetch — {e}")
    
    print(f"\n=== Update complete ===")

if __name__ == "__main__":
    main()
