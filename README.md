# Birthday Family Feud — The Birthday Showdown

A TV-friendly, unofficial Family Feud-inspired birthday game made for a party of 25+ guests.

## How to play

1. Open `index.html` in a modern browser, or enable GitHub Pages for this repo: **Settings → Pages → Deploy from a branch → main → / (root)**.
2. Connect your laptop to the TV with HDMI, then click **Fullscreen**. Native TV remote arrow/OK navigation varies by browser; laptop control is more reliable.
3. Split into two large teams, rotate contestants, and appoint a host. Read the survey question, conduct face-offs, then let the winning team play or pass.
4. The host reveals correct answers (numbered buttons), adds strikes for incorrect guesses, and permits the other team one steal attempt after three strikes. Award displayed board points to the team that wins the round.
5. Rounds 10–14 are double points; rounds 15–20 are triple points. Use **Fast Money** at the end for a bonus challenge.

## Shortcuts

`1`–`6` reveal answers · `X` strike · `A` / `B` award points · `N` next round · `P` presentation mode · `Esc` restore controls.

## Customizing

Everything is contained in `index.html`. Edit its `data` array to replace questions or answers, and `fastQuestions` to customize Fast Money. Basic synthesized reveal and strike sound effects are included; music can be added later. Progress is stored in the browser using localStorage. The survey answers and scores are fictional and intended for party entertainment only.
