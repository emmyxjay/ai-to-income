(() => {
 'use strict';
 const KEY = 'ai-to-income:founding-offer-deadline:v1';
 const DURATION = 6 * 60 * 60 * 1000;
 const panel = document.getElementById('offer-countdown');
 const now = Date.now();
 let deadline;
 try {
  const saved = localStorage.getItem(KEY);
  const value = Number(saved);
  deadline = saved && Number.isFinite(value) && value > 0 ? value : now + DURATION;
  if (!saved || deadline !== value) localStorage.setItem(KEY, String(deadline));
 } catch {
  // Do not show a resetting scarcity timer when the browser cannot remember it.
  if (panel) {
   panel.hidden = false;
   panel.querySelector('.offer-clock').hidden = true;
   document.getElementById('offer-countdown-label').textContent = 'Offer timer unavailable';
   const note = document.getElementById('offer-countdown-note');
   note.hidden = false;
   note.textContent = 'Enable browser storage to start your six-hour offer window.';
  }
  return;
 }
 let expired = false;
 function expire() {
  if (expired) return;
  expired = true;
  document.querySelectorAll('[data-reserve]').forEach(button => {
   button.disabled = true;
   button.textContent = 'Apply for Founder Offer';
  });
  const label = document.getElementById('offer-countdown-label');
  const note = document.getElementById('offer-countdown-note');
  if (label) label.textContent = 'Your founding offer has expired';
  if (note) {note.hidden = false;note.textContent = 'This six-hour window has ended. It will not restart when you refresh.';note.setAttribute('role','status');}
  panel?.classList.add('offer-expired');
  const status = document.querySelector('.checkout-status');
  if (status) status.innerHTML = '<strong>Your founding offer window has expired.</strong><span>You can still explore the course. No payment has been collected.</span>';
 }
 function render() {
  const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  if (panel) {
   panel.hidden = false;
   const parts = [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60];
   ['hours','minutes','seconds'].forEach((part,index) => {
    document.getElementById('offer-' + part).textContent = String(parts[index]).padStart(2,'0');
   });
  }
  if (!seconds) expire();
 }
 render();
 const interval = setInterval(() => {render();if(expired) clearInterval(interval);}, 1000);
 document.addEventListener('visibilitychange', render);
 window.addEventListener('pageshow', render);
 window.addEventListener('storage', event => {
  if (event.key === KEY && event.newValue) {
   const otherDeadline = Number(event.newValue);
   if (Number.isFinite(otherDeadline) && otherDeadline > 0) deadline = Math.min(deadline, otherDeadline);
   render();
  }
 });
 // Prevent an offer click during a suspended-tab or timer-throttling boundary.
 document.addEventListener('click', event => {
  if (event.target.closest?.('[data-reserve]') && Date.now() >= deadline) {
   render();event.preventDefault();event.stopImmediatePropagation();
  }
 }, true);
})();
