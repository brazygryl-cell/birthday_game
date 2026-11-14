# 🎤 Mom's Birthday Showdown — PARTY DAY EDITION

A self-contained, unofficial Family Feud-inspired game for Mom's 55th birthday. Designed for 25+ guests.

## Open it

- **Host:** https://brazygryl-cell.github.io/birthday_game/host.html
- **TV audience:** https://brazygryl-cell.github.io/birthday_game/tv.html

**Laptop + HDMI (recommended):** Connect laptop to TV → press **Win + P → Extend** (never Duplicate) → open host page on laptop → click **OPEN TV DISPLAY** → drag its window to the TV and press F11. Keep the host's answer key on the laptop only. Both windows must run **in the same browser profile/computer**, not on two independent devices. TV browser opened independently will *not* sync.

If Pages is disabled, enable it under Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

**After updating:** reload both windows with **Ctrl+Shift+R**. If you need to refresh the host, scores persist in that browser. Don't click **New game** unless you want to erase scores.

## Changes for party day

- **No purple**: ultra-readable classic navy-and-gold, strong white text, huge scores and numbers, clean white revealed answer tiles, gold borders.
- **Full host display**: original 20 difficult family/social questions, all private answers and point values, click to reveal.
- **Live stages**: face-off, play, pass, steal, round complete.
- **10–60 second answer clock**: displayed on both screens, last five seconds pulse and tick, timeout buzzes.
- **Show effects**: board shake on strikes, stage flash on answers, synced confetti, victory glow, dramatic drumroll and simulated applause.
- **Music desk** on host screen: intro, thinking, correct, wrong, buzzer, steal and win MP3 slots with volume/preview/stop and optional automatic cues. Synthesized sounds still work with no MP3s.
- **Fast Money** remains an optional host-managed bonus game.

## Music — easiest method for today

On the **host screen**, find **Music & Showtime Effects**. Pick a track type → click **MP3 file** → select the downloaded audio from the laptop → click **Play track** to test. Repeat for the other types. Enable **Automatically use loaded MP3s** only when ready. Local files stay assigned only as long as the host page remains open; do not refresh once you've selected them.

**Important:** Sound from these uploaded files comes from **your laptop browser**. Set Windows audio output to the HDMI-connected TV (or party speaker). Browser playback may require clicking a play button once.

## Music — permanent upload method

Create `music/` in the repository by uploading any of the following exact filenames via GitHub **Add file → Upload files**:

```text
music/intro.mp3
music/thinking.mp3
music/correct.mp3
music/wrong.mp3
music/buzzer.mp3
music/steal.mp3
music/win.mp3
```

Then on the host screen click **Use uploaded music/ folder**, choose the track and click Play to verify. Missing files will not play. No copyrighted music has been included; use music you have the rights to play.

## Suggested party structure

Split 25+ people into two teams; rotate two representatives for each face-off. Host clicks Q or W to buzz that team. Highest-ranked accepted answer wins face-off; winning team chooses Play or Pass. Start clock T for a guess. Reveal an accepted answer from host answer sheet, or use X for a strike. On three strikes, other team gets one steal guess. Host awards all visible board points to the correct team with A/B. Later rounds are automatically 2× (rounds 10–14) and 3× (rounds 15–20). Optional Fast Money at the end.

## Host keyboard shortcuts

`Q`/`W` — face-off buzzers · `T` — start/restart answer timer · `1`–`6` — reveal answers · `X` — strike · `A`/`B` — award points · `N` — next round · `P` — hide host controls · `Escape` — show controls.

## Limitations

This is a host-controlled party game, not networked phones/physical buzzers. The TV and host windows synchronize using same-browser localStorage events; separate devices do not sync without a backend. On-screen survey values are **fictional party-game rankings**, not real surveyed responses. Some smart TVs do not support the required sound or browser features. For reliability use a laptop + HDMI.
