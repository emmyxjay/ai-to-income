// Illustrative copy, not attributed to real members. Replace with approved quotes and photos.
export const feedbacks = [
 {quote:'I needed a starting point, not another list of AI tools. The course helped me focus on one useful deliverable, and the club gave me a place to ask questions while I built a sample I could show a local business.',author:'Finding a clear starting point',title:'Illustrative member story',avatar:'media/member-profile-1.svg'},
 {quote:'The biggest value was having someone look at my work. I could bring a rough sample to the club, get specific feedback, and improve my offer before reaching out to a business.',author:'Getting feedback that helps',title:'Illustrative member story',avatar:'media/member-profile-2.svg'},
 {quote:'I did not need to become technical to get moving. The step-by-step course gave me a process to follow, and the community helped me stay focused on creating something useful instead of collecting more tutorials.',author:'Turning learning into action',title:'Illustrative member story',avatar:'media/member-profile-3.svg'}
];
export const slideIndex = (current: number, direction: number) => (current + direction + feedbacks.length) % feedbacks.length;
