'use strict';
const dialog = document.querySelector('#reservation-dialog');
let reservationTrigger = null;
document.querySelectorAll('[data-reserve]').forEach(button => {
  button.addEventListener('click', () => {
    reservationTrigger = button;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  reservationTrigger?.focus();
});
const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(index, focus = false) {
  tabs.forEach((tab, current) => {
    const active = current === index;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(index));
  tab.addEventListener('keydown', event => {
    let target;
    if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = tabs.length - 1;
    if (target !== undefined) { event.preventDefault(); activateTab(target, true); }
  });
});

// Load decorative motion only after the poster; respect data and motion preferences.
const heroVideo = document.getElementById('hero-video');
const videoToggle = document.getElementById('video-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let userPausedVideo = motionPreference.matches || Boolean(navigator.connection?.saveData);
let videoLoaded = false;
function updateVideoControl() {
  const paused = heroVideo.paused;
  videoToggle.setAttribute('aria-pressed', String(paused));
  videoToggle.setAttribute('aria-label', paused ? 'Play background video' : 'Pause background video');
  videoToggle.querySelector('[aria-hidden]').textContent = paused ? '▷' : 'Ⅱ';
  videoToggle.querySelector('.video-state').textContent = paused ? 'Play motion' : 'Pause motion';
}
function applyVideoState() {
  if (userPausedVideo || document.hidden) heroVideo.pause();
  else {
    if (!videoLoaded) {
      heroVideo.querySelectorAll('source').forEach(source => { source.src = source.dataset.src; });
      heroVideo.load();
      videoLoaded = true;
    }
    heroVideo.play().catch(updateVideoControl);
  }
  updateVideoControl();
}
videoToggle.addEventListener('click', () => { userPausedVideo = !heroVideo.paused; applyVideoState(); });
heroVideo.addEventListener('play', updateVideoControl);
heroVideo.addEventListener('pause', updateVideoControl);
heroVideo.addEventListener('error', () => { videoToggle.hidden = true; });
motionPreference.addEventListener('change', event => { userPausedVideo = event.matches; applyVideoState(); });
document.addEventListener('visibilitychange', applyVideoState);
updateVideoControl();
window.addEventListener('load', () => {
  if ('requestIdleCallback' in window) window.requestIdleCallback(applyVideoState, { timeout: 1500 });
  else setTimeout(applyVideoState, 500);
}, { once: true });

// The preview offers useful destinations while paid reservations are unavailable.
document.getElementById('dialog-course-link').addEventListener('click', () => dialog.close());
const copyButton = document.getElementById('copy-reply');
copyButton.addEventListener('click', async () => {
  const reply = document.getElementById('sample-reply');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(reply.textContent);
    status.textContent = 'Copied. Adapt it to your business.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(reply);
    const selection = window.getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Text selected. Use your device’s Copy command.';
  }
});
