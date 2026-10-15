// Illustrative design content only. Replace with approved quotes and portraits before publication as social proof.
const stories = [{"name": "Sample member 01", "role": "Finding a starting point", "quote": "I kept saving AI tutorials without knowing what to do next. Choosing one workflow and making a sample finally gave me a starting point I could understand.", "image": "media/testimonials/portrait-1.webp"}, {"name": "Sample member 02", "role": "Making the first sample", "quote": "Seeing the whole process on screen made it feel less intimidating. I could pause, try the same step, and improve the result instead of guessing.", "image": "media/testimonials/portrait-2.webp"}, {"name": "Sample member 03", "role": "Creating something personal", "quote": "A sample made for one business felt completely different from a generic pitch. I had something concrete to show, and a much clearer reason to start a conversation.", "image": "media/testimonials/portrait-3.webp"}, {"name": "Sample member 04", "role": "Getting useful feedback", "quote": "The hardest part was knowing whether my sample was ready. Having someone look at the work and suggest a specific change helped me take the next step.", "image": "media/testimonials/portrait-4.webp"}, {"name": "Sample member 05", "role": "Keeping the offer simple", "quote": "I was trying to offer everything at once. Defining one deliverable and one price made the idea easier to explain—and easier for me to get started.", "image": "media/testimonials/portrait-5.webp"}, {"name": "Sample member 06", "role": "Learning around a day job", "quote": "I needed a way to practise without reorganizing my whole life. A short walkthrough and one small task gave me something I could work on after my day job.", "image": "media/testimonials/portrait-6.webp"}, {"name": "Sample member 07", "role": "Sending the first message", "quote": "I didn’t need a perfect pitch. I needed a relevant sample and a clear next step. That made the first message feel much less like asking a stranger for a favour.", "image": "media/testimonials/portrait-7.webp"}, {"name": "Sample member 08", "role": "Thinking beyond one project", "quote": "Planning the next useful offer changed how I looked at a first project. I started thinking about when that same business might need help again.", "image": "media/testimonials/portrait-8.webp"}];
const section = document.getElementById('member-stories');
const backgrounds = [...section.querySelectorAll('[data-story-background]')];
const buttons = [...section.querySelectorAll('[data-story-index]')];
let active = 0;

function animateText(element, value) {
  const next = element.cloneNode(false);
  next.textContent = value;
  next.classList.add('story-text-enter');
  element.replaceWith(next);
}
export function selectStory(index) {
  if (!Number.isInteger(index) || index < 0 || index >= stories.length || index === active) return;
  active = index;
  const story = stories[index];
  backgrounds.forEach((background, i) => background.classList.toggle('is-active', i === index));
  buttons.forEach((button, i) => {
    button.classList.toggle('is-active', i === index);
    button.setAttribute('aria-pressed', String(i === index));
  });
  animateText(document.getElementById('story-quote'), `“${story.quote}”`);
  animateText(document.getElementById('story-name'), story.name);
  document.getElementById('story-role').textContent = story.role;
}
buttons.forEach((button, index) => {
  button.addEventListener('click', () => selectStory(index));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % stories.length;
    if (event.key === 'ArrowLeft') next = (index + stories.length - 1) % stories.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = stories.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectStory(next);
      buttons[next].focus({preventScroll: true});
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      buttons[next].scrollIntoView({block: 'nearest', inline: 'nearest', behavior: reduced ? 'instant' : 'smooth'});
    }
  });
});
