# 💜 Mom's 55th Birthday — Family Feud: Purple & Silver Edition

A two-screen, unofficial Family Feud-inspired party game for 25+ guests, now with a purple/chrome-silver theme, 20 more challenging family/social scenario rounds, on-screen answer timers, face-off buzzers, dramatic sound effects, play/pass/steal phases, and a Fast Money bonus.

## Set up the laptop and TV

1. Connect a laptop to the TV via HDMI.
2. On Windows press **Windows + P → Extend**, **not Duplicate**. The laptop retains private host controls.
3. Open the **host** page: https://brazygryl-cell.github.io/birthday_game/host.html
4. Click **OPEN TV DISPLAY** (or open https://brazygryl-cell.github.io/birthday_game/tv.html in a new browser window). Move the separate TV window to the extended television and maximize it (F11).
5. Keep the host page on the laptop. The audience sees only the board, timer, phase indicator, strikes, scores, and reveal effects, **not** the host-only answer key.
6. If needed, click the host's **Sound on** button and route the laptop's audio to the TV over HDMI. Some browsers may block audio in unattended TV windows, but host audio remains available.

**Important:** Both pages must be in the **same browser profile on the same computer** (and same website origin) for synchronized updates. An independent smart-TV browser will not sync to the laptop without a separate networking service. GitHub Pages must be enabled: Settings → Pages → Deploy from a branch → main / (root).

## How a round works

1. Host introduces the round; invite one contestant from each team to the face-off.
2. Host clicks **Team A Buzzer** or **Team B Buzzer** (Q/W) when that player buzzes in. These are **host-operated sound buttons**, not wireless contestant buzzers. Reset face-off as needed.
3. Host reveals the matching accepted answer using the **private answer key**. Accept reasonable synonyms. Decide who wins the face-off, then select **Play** or **Pass**. The current stage is shown on the TV.
4. For each guess, start the answer clock with **T** or the green timer button. Choose 10, 15, 20, 30, 45, or 60 seconds. The last five seconds trigger ticks and a red countdown. Timeouts sound a buzzer; the host decides whether to add a strike.
5. On a correct guess, click the answer in the private answer key to reveal it. The clock stops and a correct-answer chime plays. On a miss, hit **Strike** (X): the clock stops and a wrong-answer buzzer plays.
6. On the third strike, **Steal Chance** displays. Ask the opposing team for one answer; reveal or strike it manually. Award the accumulated revealed points to the appropriate team using **Award Team A/B**. This is intentionally host-controlled so house rules and contested answers are manageable.
7. Advance to the next round. The game automatically uses single points for rounds 1–9, double points 10–14, triple points 15–20.

Use **Winner** for a finale fanfare and **Fast Money** as an optional two-player bonus round (20 and 25-second timers). The game saves scores and round state in the browser's localStorage.

## Host shortcuts

- **1–6** — Reveal / re-hide an answer
- **Q / W** — Team A / Team B buzzer
- **T** — Restart answer timer
- **X** — Strike
- **A / B** — Award revealed points
- **N** — Next round
- **P** — Toggle host controls
- **Escape** — Restore controls

## Game assets and limitations

Everything is contained in `index.html`, including question and answer data, styling, and synthetic Web Audio sound effects. No original copyrighted show theme or recordings are included; add licensed party music later. Survey answer rankings and points are fictional for entertainment and are **not collected survey results**. Browsers may mute autoplay until user interaction. TV remote support varies by device; HDMI + laptop is the dependable option.
