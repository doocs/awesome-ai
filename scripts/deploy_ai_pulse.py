#!/usr/bin/env python3
"""deploy_ai_pulse.py - Stage, commit, and push content files to doocs/awesome-ai."""

import subprocess
import sys
import os


def run(cmd, cwd="/tmp/awesome-ai"):
    result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"ERROR: {cmd}")
        print(result.stderr)
        sys.exit(1)
    return result.stdout


def main():
    if len(sys.argv) < 3:
        print("Usage: deploy_ai_pulse.py <file_path> <commit_message>")
        sys.exit(1)

    file_path = sys.argv[1]
    commit_msg = sys.argv[2]
    repo_dir = "/tmp/awesome-ai"

    # Stage the file
    run(f"git add {file_path}")

    # Commit
    run(f'git commit -m "{commit_msg}"')

    # Push
    result = run("git push origin main")
    print(result)
    print(f"Successfully pushed: {file_path}")


if __name__ == "__main__":
    main()
