// Keep previously shared journal links working after the page split.
if (location.pathname === '/' || location.pathname === '/index.html') {
  if (location.hash === '#my-life-with-christ') location.replace('/apps.html#my-life-with-christ');
}
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-navigation');
const mobile = window.matchMedia('(max-width: 40rem)');
function closeMenu(returnFocus = false) {
  nav.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  if (returnFocus) button.focus();
}
button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
mobile.addEventListener('change', () => closeMenu(nav.contains(document.activeElement) && mobile.matches));
document.documentElement.classList.add('js');
