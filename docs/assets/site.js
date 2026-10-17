// MOVEWELL website: mobile menu, hero video (landscape or portrait cut, pause control) and the booking form.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  if (btn) btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.drawer a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

  // Hero video: tall cut on portrait screens, wide cut elsewhere
  const v = document.getElementById('heroVideo');
  if (v) {
    const tall = matchMedia('(max-aspect-ratio: 4/5)').matches;
    const base = tall ? v.dataset.tall : v.dataset.wide;
    v.poster = base + '-poster.jpg';
    v.innerHTML = `<source src="${base}.webm" type="video/webm"><source src="${base}.mp4" type="video/mp4">`;
    v.load();
    const b = document.getElementById('vToggle');
    const set = p => { p ? v.pause() : v.play().catch(() => {}); b.textContent = p ? '▶ Play' : '❚❚ Pause'; b.setAttribute('aria-pressed', p); };
    b.addEventListener('click', () => set(!v.paused));
    if (reduce) set(true); else v.play().catch(() => {});
  }

  // Booking form: no backend yet, so confirm on the page
  const form = document.getElementById('bookForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const note = form.querySelector('.note');
    note.hidden = false;
    note.textContent = 'Thank you. This form is a preview: when the site goes live it will send your request to the clinic by email or WhatsApp.';
  });
})();
