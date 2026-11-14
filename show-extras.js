
(() => {
'use strict';
const fx=document.createElement('div');fx.id='partyFx';fx.setAttribute('aria-hidden','true');document.body.append(fx);
let clearFx;
function confetti(n=70){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const colors=['#ffd54f','#fff','#6bc6ff','#ff9e49'];for(let i=0;i<n;i++){const p=document.createElement('i');p.className='party-particle';p.style.left=Math.random()*100+'vw';p.style.background=colors[i%colors.length];p.style.setProperty('--drift',(Math.random()-.5)*260+'px');p.style.setProperty('--fall',(2+Math.random()*2.2)+'s');if(i%3===0)p.style.borderRadius='50%';fx.append(p);p.addEventListener('animationend',()=>p.remove(),{once:true});setTimeout(()=>p.remove(),5500)}}
function visual(kind){const cls=['wrong','time'].includes(kind)?'party-shake':kind==='win'?'party-winner':'party-strobe';document.body.classList.remove('party-shake','party-winner','party-strobe');void document.body.offsetWidth;document.body.classList.add(cls);clearTimeout(clearFx);clearFx=setTimeout(()=>document.body.classList.remove(cls),cls==='party-winner'?4200:750);if(kind==='win')confetti(120)}
function emitVisual(kind){visual(kind);try{localStorage.setItem('birthday-extra-vfx',JSON.stringify({kind,at:Date.now(),random:Math.random()}))}catch(e){}}
window.addEventListener('storage',e=>{if(e.key==='birthday-extra-vfx'&&e.newValue){try{visual(JSON.parse(e.newValue).kind)}catch(err){}}});
if(screenMode)return;
const byId=id=>document.getElementById(id);
const desk=document.createElement('section');desk.className='music-desk';desk.innerHTML="<h2>🎵 MUSIC & SHOWTIME EFFECTS</h2><p class=\"music-note\">Choose local MP3s or upload files to the GitHub music/ folder. Music plays from your laptop, so set audio output to HDMI/TV.</p><div class=\"row\"><label>Track <select id=\"musicCue\"><option value=\"intro\">Intro</option><option value=\"thinking\">Thinking timer</option><option value=\"correct\">Correct answer</option><option value=\"wrong\">Wrong answer</option><option value=\"buzzer\">Face-off buzzer</option><option value=\"steal\">Steal</option><option value=\"win\">Victory</option></select></label><label>MP3 file <input type=\"file\" id=\"musicFile\" accept=\"audio/*\"></label></div><div class=\"row\"><button id=\"repoMusic\">Use uploaded music/ folder</button><button class=\"gold\" id=\"playMusic\">▶ Play track</button><button id=\"pauseMusic\">⏸ Pause</button><button id=\"stopMusic\">■ Stop</button><label>Volume <input type=\"range\" id=\"musicVolume\" min=\"0\" max=\"100\" value=\"70\"></label></div><div class=\"row\"><label><input type=\"checkbox\" id=\"autoCues\"> Automatically use loaded MP3s for buzzers / answers / victory</label><button class=\"gold\" id=\"partyConfetti\">🎊 Confetti</button><button id=\"partyDrumroll\">🥁 Drumroll</button><button id=\"partyApplause\">👏 Applause</button><button id=\"partyIntro\">🎤 Show intro</button></div><p class=\"music-status\" id=\"musicStatus\" role=\"status\">Choose a track type, then select an MP3. Built-in sound effects work without files.</p><p class=\"music-note\">For permanent music, upload MP3s in GitHub named music/intro.mp3, music/thinking.mp3, music/correct.mp3, music/wrong.mp3, music/buzzer.mp3, music/steal.mp3, music/win.mp3. Exact filenames. Only use audio you have the rights to play.</p>";
const panel=document.querySelector('.controls');panel?.prepend(desk);
const player=new Audio();player.volume=.7;player.preload='none';
const sources={},urls={};let current=null;
function status(s){byId('musicStatus').textContent=s}
function stopMusic(){player.pause();player.removeAttribute('src');player.load();current=null}
function source(cue){return urls[cue]||sources[cue]||null}
async function play(cue,loop=false){const url=source(cue);if(!url){status('No MP3 assigned to '+cue+'. Built-in sound effects are available.');return}try{if(current!==cue){player.src=url;current=cue}player.loop=loop;player.currentTime=0;await player.play();status('Playing '+cue+(loop?' (loop)':''))}catch(err){status('Could not play '+cue+'. Check that the MP3 file exists and click Play to test.')}}
byId('musicFile').onchange=e=>{const file=e.target.files?.[0];if(!file)return;const cue=byId('musicCue').value;if(urls[cue])URL.revokeObjectURL(urls[cue]);urls[cue]=URL.createObjectURL(file);current=null;status(file.name+' assigned to '+cue+' for this session.')};
byId('repoMusic').onclick=()=>{['intro','thinking','correct','wrong','buzzer','steal','win'].forEach(cue=>sources[cue]='music/'+cue+'.mp3');current=null;status('GitHub paths assigned. Upload files to the music/ folder, then press Play to test.')};
byId('playMusic').onclick=()=>play(byId('musicCue').value,byId('musicCue').value==='thinking');
byId('pauseMusic').onclick=()=>{player.pause();status('Paused')};
byId('stopMusic').onclick=()=>{stopMusic();status('Stopped')};
byId('musicVolume').oninput=e=>player.volume=Number(e.target.value)/100;
const oldEmit=emit;
emit=function(kind){oldEmit(kind);emitVisual(kind);if(byId('autoCues').checked){const cue=kind.startsWith('buzz')?'buzzer':kind==='win'?'win':kind==='correct'?'correct':['wrong','time'].includes(kind)?'wrong':null;if(cue&&source(cue))void play(cue)}};
const oldGo=go;go=function(n){oldGo(n);emitVisual('bell')};
const oldStart=startTimer;startTimer=function(){oldStart();if(byId('autoCues').checked&&source('thinking'))void play('thinking',true)};
const oldStop=stopClock;stopClock=function(){oldStop();if(current==='thinking')stopMusic()};
byId('partyConfetti').onclick=()=>{emitVisual('win');flash('🎊 LET’S GO! 🎊',false,1800)};
byId('partyDrumroll').onclick=()=>{for(let i=0;i<20;i++)tone(95+(i%4)*30,.075,'sawtooth',.06,i*.07);[523,659,784].forEach((f,i)=>tone(f,.25,'triangle',.12,1.5+i*.14))};
byId('partyApplause').onclick=()=>{for(let i=0;i<19;i++)tone(180+(i%5)*60,.055,'sawtooth',.035,i*.095);emitVisual('points')};
byId('partyIntro').onclick=()=>{flash('🎤 THE BIRTHDAY SHOWDOWN!',false,2600);emitVisual('win');if(source('intro'))void play('intro');else [392,523,659,784,1047].forEach((f,i)=>tone(f,.24,'triangle',.1,i*.15))};
})();