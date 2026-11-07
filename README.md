# Birthday Family Feud — Two-Screen Host Edition

An unofficial Family Feud–inspired game for Mom's birthday, designed for 25+ guests.

## The important part: two private screens

- **Host screen:** [host.html](host.html) — private answer key with *all six correct answers and point values*, clickable reveals, strikes, scores, round selection, and Fast Money controls.
- **Audience screen:** [tv.html](tv.html) — only the big hidden answer board, scores, strikes, and reveal animations; no answer key or host controls.

Both must be open **in the same browser profile on the same computer / origin** for instant synchronization. They communicate with browser localStorage events; opening the TV URL on an independent TV device will not synchronize because it has separate browser storage.

### Recommended Windows setup: laptop + TV via HDMI

1. Connect laptop to TV using HDMI.
2. Press **Windows + P** and choose **Extend** (NOT Duplicate).
3. Open `host.html` (or `index.html`) on the laptop.
4. Click **OPEN TV DISPLAY** on the host screen. If the popup is blocked, manually open `tv.html` in a new browser window.
5. Drag the TV window onto the TV's extended screen and maximize it or use browser fullscreen (**F11**).
6. Keep the host window on the laptop. Click any item in your **HOST-ONLY ANSWER KEY** to reveal its matching TV answer.
7. Operate scoring and strikes on the host only. Guests won't see the private list.

To host from GitHub Pages: **Settings → Pages → Deploy from branch → main / (root)**, then access:
- Host: `https://brazygryl-cell.github.io/birthday_game/host.html`
- TV: `https://brazygryl-cell.github.io/birthday_game/tv.html`

Do not open the two HTML pages directly with different `file://` origins in some browsers: localStorage synchronization can be inconsistent for local file paths. **Use GitHub Pages** for the best experience.

## How to play

Split 25+ guests into two teams, rotate players, pick a host. Conduct a faceoff, choose play or pass, then give correct guesses answer reveals and incorrect guesses strikes. After three strikes, allow a steal, then award the round points to the winning team. Later rounds are double and triple points. Fast Money is an optional 200-point bonus challenge.

## Host keyboard shortcuts

1–6 reveal · X strike · A / B award points · N next round · P presentation toggle · Escape restores controls.

## Customizing

Everything lives in `index.html`, including the original fictional survey `data` list and `fastQuestions` list. Questions aren't based on a real survey. Sounds are synthesized in JavaScript; any chosen licensed music can be added later. Scores and game progress save in the browser.
