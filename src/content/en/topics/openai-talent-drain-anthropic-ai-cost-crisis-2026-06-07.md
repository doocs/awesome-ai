---
title: "Topic | OpenAI's Talent Drain to Anthropic, and AI's Emerging Cost Crisis"
date: "2026-06-07"
type: "topic"
tags: ["OpenAI", "Anthropic", "Talent Migration", "AI Costs", "Industry Analysis"]
summary: "OpenAI's '002 chip employee' Clive Chan announces his move to Anthropic, following Karpathy's departure just weeks earlier — while companies like Uber, miHoYo, and Meta report runaway AI token bills. The AI industry faces a dual reckoning: a talent reshuffle and a cost awakening."
---

> When OpenAI's chip engineer chooses to "climb a new mountain" at Anthropic, and when Uber burns through its annual AI budget in months and miHoYo incurs 2 million yuan in token costs in a single night — June 2026's AI industry is simultaneously playing out two unprecedented narratives: a reshuffling of talent and a moment of financial clarity.

---

## Yet Another "Leaving OpenAI, Joining Anthropic"

On June 7, 2026, Clive Chan — OpenAI's "002 employee" on the self-developed chip team — announced on X that he has left OpenAI and officially joined Anthropic this week.

In his departure statement, Chan reflected on his two-plus years at OpenAI. He was the second hire on OpenAI's hardware team, witnessing the chip project from its early formation to its current steady progress. He described OpenAI's chip team as having "an unbelievable density of talent," adding that he doesn't believe there's a better chip design team anywhere in the world.

But he also wrote that he could never shake off the urge to "once again start from the foot of a mountain and climb toward a new peak." That impulse is what ultimately led him to Anthropic. He noted that the talent, values, and ambition of the Anthropic team left a deep impression on him, and in just a few days since joining, he has already felt the "extremely high-intensity work pace," concluding: "It's time to build."

When asked about OpenAI's self-developed chip project following his departure, Chan said he couldn't share details beyond what OpenAI has publicly disclosed. However, he specifically pointed to a joint blog post between OpenAI and Broadcom — which revealed that deployment of their co-developed AI accelerator system is targeted to begin in the second half of 2026.

That blog post was published in October 2025. At the time, OpenAI and Broadcom announced a strategic partnership to build a self-developed AI accelerator system with a total scale of 10GW. OpenAI is responsible for chip and system design, while Broadcom handles accelerator and network system development and deployment. The first racks are planned to begin delivery in the second half of 2026, with the entire project expected to continue through the end of 2029. This was the first time OpenAI formally disclosed a concrete timeline for its self-developed AI chip project.

> **Awesome AI View:** Chan's departure is not an isolated event — it's the latest chapter in a trend. From Andrej Karpathy to Clive Chan, OpenAI is experiencing a systemic brain drain. And Anthropic's ability to consistently attract this caliber of talent is not just about compensation and valuation. It's about a fundamentally different narrative around AI safety, organizational culture, and technical vision that is forming a distinct gravitational pull.

## From Karpathy to Chan: A Talent Pipeline Is Taking Shape

Looking closely at Clive Chan's resume, he has worked or interned at multiple star companies including OpenAI, Tesla, Google, and SpaceX, with a long focus on AI infrastructure work. In January 2024, he officially joined OpenAI, where he was responsible for matrix multiplication (Matmul), performance analysis (Roofline Analysis), and hardware-related work — and participated in the construction of OpenAI's self-developed AI chip project.

After Chan announced his move to Anthropic, Tony CW Liu, an Anthropic employee responsible for GPU performance optimization, quickly appeared in the comments with a message: "Congrats and welcome!"

The move also sparked humor online. One user quipped: "Every time I see 'I've decided to leave OpenAI,' I know the next sentence will inevitably mention Anthropic." Another compared it to a football transfer: "It's like leaving Real Madrid for Barcelona."

Notably, less than a month earlier in May, OpenAI co-founding member and renowned AI researcher Andrej Karpathy announced he was joining Anthropic's pre-training team — a move that similarly set off industry discussion. From researchers to product leaders to chip engineers, talent migration between OpenAI and Anthropic is accelerating.

The timing of Chan's move is particularly telling. On June 1, Anthropic announced the completion of an H-round funding of up to $65 billion at a post-money valuation of $965 billion — just one step away from the trillion-dollar club and surpassing OpenAI's March valuation of $852 billion. Substantial capital and swelling technical ambition have made Anthropic the most attractive talent magnet in the current AI industry.

> **Awesome AI View:** Talent migration is never one-directional. But when Anthropic consecutively attracts top-tier talent like Karpathy and Chan, the signal is clear: in the AI industry's "arms race," talent is flowing from "first movers" to "latecomers." This isn't just about compensation or valuation — it's a competition of technical philosophy and safety vision. Anthropic is using a "safety first, slow is fast" narrative to attract top engineers who have grown skeptical of OpenAI's accelerating commercialization trajectory.

## Another Crisis: Companies Can't Afford to Burn Tokens Anymore

While the talent migration drama unfolds, the AI industry is confronting another, more widespread and insidious crisis — the runaway cost of AI adoption.

When AI first arrived, many executives thought they had found a cost-cutting opportunity. The vision was one AI replacing three people — tireless, always available, no raises, no social insurance, 24/7. But reality turned out differently: AI indeed doesn't slack off, and it indeed doesn't work overtime. It just charges a little more for every little bit more it does. And now many companies are saying: we can't afford to burn tokens anymore.

**Uber** gave 5,000 engineers access to Claude Code and burned through nearly its entire annual AI budget in just a few months. **Microsoft** has recently started pumping the brakes, tightening internal Claude Code access and no longer allowing engineers to call the model without limits. **Amazon** took an even more direct approach — it simply took down its internal AI usage leaderboard after discovering that once "how much AI you use" became a metric, employees started frantically burning tokens to game the system.

An even more extreme case comes from gaming company **miHoYo**: during a multi-agent experiment, dozens of agents ran in the background calling each other, waiting on each other, and confirming each other's outputs. The call chain kept growing longer and longer. In the end, a single night consumed approximately 2 million yuan worth of tokens, with the actual value produced being negligible.

> **Awesome AI View:** This is a classic Goodhart's Law scenario — when a measure becomes a target, it ceases to be a good measure. AI's cost model is fundamentally different from traditional software: it's not a fixed subscription fee, but a usage-based "electricity bill." When you turn AI usage into a performance metric, employees create meaningless calls to game the numbers, resulting in runaway bills with zero output.

## Meta's "Tokenmaxxing": 31.2 Trillion Tokens in One Month

The English-speaking world has even coined a term: **Tokenmaxxing** — pushing token usage to the极限 (extreme) — to describe this phenomenon of using AI just for the sake of using it.

Meta internally ran a leaderboard called "Claudeonomics" to track who was using AI the most. The top consumer burned through **31.2 trillion tokens in a single month** — a sum that, converted to cash, would be enough to hire two senior engineers for a full year. One company reportedly spent $500 million on Claude in a single month, and there have been cases where teams forgot to set API limits and tokens spiraled out of control.

The most ironic cost sink is multi-agent systems. In theory, one agent plans, one executes, one checks — like a digital team collaboration. But in practice, it's more like a meeting without a facilitator: you ask me, I ask you, one round of confirmation isn't enough so we go another. In most multi-agent systems, 30 to 60 percent of tokens are consumed in these meaningless loops.

> **Awesome AI View:** Capital markets are also changing how they evaluate AI companies. Before, it was about who had the most calls, the fastest growth, the hardest token burn. Now there's only one metric that matters: ROI. Did burning all those tokens actually return real money? Efficiency gains don't equal revenue — if code ships twice as fast but the product doesn't sell one more unit, you're just "spending faster," not making money.

## Where the Two Lines Meet: AI's "Adolescent Crisis"

Talent migration and cost crisis may seem like independent stories, but they actually point to the same core issue: **the AI industry is transitioning from "technology exploration" to "industrial deployment," and this process is far more painful than expected.**

Anthropic, at a $965 billion valuation, attracting OpenAI's top talent shows that AI industry competition is shifting from "technical differentiation" to "organizational and talent competition." When model capabilities converge, what decides the winner is no longer the algorithm itself, but who can attract and retain the best people.

Meanwhile, the cost crisis companies are experiencing with AI adoption shows that AI's "return on investment" hasn't yet reached market expectations. When Uber burns through its annual budget, miHoYo incurs 2 million yuan in one night, and a Meta employee consumes 31.2 trillion tokens in a month — these numbers reveal an uncomfortable truth: AI is revolutionary in capability, but its economic model is not yet mature.

**This is precisely why talent is flowing from OpenAI to Anthropic.** Anthropic's "safety-first" philosophy and relatively measured pace of commercialization have become attractive to engineers who have seen the "full sprint" side of the AI industry. They know how fast technology iterates, and they know the cost of reckless expansion.

> **Awesome AI View:** The AI industry in June 2026 is going through an "adolescent crisis" — technological capability outpaces commercial maturity, talent enthusiasm outpaces organizational management capacity, capital investment outpaces return validation. But this isn't a bad thing. Every cost crisis is market education, every talent migration is industry restructuring. The AI race is far from over, but it's becoming more rational and pragmatic.

## The Bigger Picture: DeepSeek V4's 500x Cost Advantage

Against this backdrop of cost reckoning, a message from academia deserves particular attention.

Princeton University researchers recently released an agent framework called **Goedel-Architect**, powered by the Chinese open-source model **DeepSeek-V4-Flash**. On PutnamBench, a standard benchmark for formal theorem proving, Goedel-Architect achieved a pass rate of 75.6 percent — higher than Hilbert, a system driven by Google's Gemini 2.5 Pro (70.0 percent) — while costing just $294. Hilbert's API call costs for the same benchmark were approximately $170,000. **That's a 500x difference.**

These numbers matter far beyond academia. They prove a trend that more and more enterprises are validating: **the most expensive model isn't necessarily the best choice.** As companies get "educated" on AI costs, rational model selection will become the norm. The rise of cost-effective models like DeepSeek isn't a replacement for premium models — it's a reshaping of the entire AI industry's cost structure.

> **Awesome AI View:** A 500x cost gap isn't a technical detail — it's an industry signal. It tells us the AI "arms race" is shifting from "who has the biggest model" to "who can achieve the best results within a given cost constraint." For startups and small-to-medium enterprises, this is good news: AI is no longer a game only giants can afford to play.

---

*This article synthesizes public reporting from 36Kr, Zhidx (智东西), Jiqizhixin (机器之心), Keji Hu (科技狐), and Jike Park (极客公园), as well as the Princeton Goedel-Architect paper (arXiv:2606.06468). All data and events are from verifiable public sources.*
