// Local-only personalization: no GPS, IP lookup, location permission, or data collection.
// A time zone identifies a representative city, not the visitor's exact location.
const cityNames = {
  'Asia/Calcutta': 'Kolkata',
  'Asia/Katmandu': 'Kathmandu',
  'Europe/Kiev': 'Kyiv',
  'America/Argentina/Buenos_Aires': 'Buenos Aires',
};

export function visitorHeading(now = new Date(), requestedZone) {
  let timeZone;
  let city = '';
  try {
    const options = requestedZone ? { timeZone: requestedZone } : {};
    timeZone = new Intl.DateTimeFormat('en-US', options).resolvedOptions().timeZone;
    if (/^(Africa|America|Antarctica|Arctic|Asia|Atlantic|Australia|Europe|Indian|Pacific)\//.test(timeZone)) {
      city = cityNames[timeZone] || timeZone.split('/').at(-1).replaceAll('_', ' ');
    }
  } catch {
    // If the browser supplies an invalid zone, use its local clock without a city.
    timeZone = undefined;
  }
  const options = timeZone ? { timeZone } : {};
  const day = new Intl.DateTimeFormat('en-US', { ...options, weekday: 'short' }).format(now);
  const clock = new Intl.DateTimeFormat('en-US', {
    ...options, hour: 'numeric', minute: '2-digit', hour12: true,
  }).formatToParts(now);
  const hour = clock.find(part => part.type === 'hour').value;
  const minute = clock.find(part => part.type === 'minute').value;
  const period = clock.find(part => part.type === 'dayPeriod').value.toLowerCase() === 'am' ? 'a.m.' : 'p.m.';
  return {
    text: `Here${city ? ` in ${city}` : ''}, ${day} ${hour}:${minute} ${period}` ,
    city,
    timeZone,
  };
}

if (typeof document !== 'undefined') {
  const heading = document.getElementById('visitor-moment');
  let minuteTimer;
  function refresh() {
    clearTimeout(minuteTimer);
    if (!heading) return;
    try {
      const context = visitorHeading();
      heading.textContent = context.text;
      heading.title = context.city
        ? 'City inferred from your device’s time zone; it may differ from your exact location.'
        : 'Based on your device’s local clock.';
    } catch {
      // Retain the useful static heading if the browser cannot format local time.
    }
    if (!document.hidden) minuteTimer = setTimeout(refresh, 60000 - (Date.now() % 60000) + 50);
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearTimeout(minuteTimer);
    else refresh();
  });
  window.addEventListener('pageshow', refresh);
  window.addEventListener('pagehide', () => clearTimeout(minuteTimer));
  refresh();
}
