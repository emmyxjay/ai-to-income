'use strict';
const roomRange = document.getElementById('room-range');
const roomCompare = document.getElementById('room-compare');
roomRange.addEventListener('input', () => {
  roomCompare.style.setProperty('--split', `${roomRange.value}%`);
  roomRange.setAttribute('aria-valuetext', `${roomRange.value} percent empty room`);
});
const demoAudio = document.getElementById('jingle-demo');
const audioDemo = document.querySelector('.audio-demo');
demoAudio.addEventListener('play', () => audioDemo.classList.add('is-playing'));
for (const event of ['pause', 'ended']) demoAudio.addEventListener(event, () => audioDemo.classList.remove('is-playing'));
new MutationObserver(() => {
  if (document.getElementById('panel-1').hidden) demoAudio.pause();
}).observe(document.getElementById('panel-1'), { attributes: true, attributeFilter: ['hidden'] });
document.addEventListener('visibilitychange', () => { if (document.hidden) demoAudio.pause(); });
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('will-reveal'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('will-reveal');
    observer.observe(element);
  });
  reduceMotion.addEventListener('change', event => {
    if (event.matches) { document.querySelectorAll('.will-reveal').forEach(el => el.classList.remove('will-reveal')); observer.disconnect(); }
  });
}
