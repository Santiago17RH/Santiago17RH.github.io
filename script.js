const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const links = menu.querySelectorAll('a');

function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'Cerrar' : 'Menú';
}

toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
links.forEach(link => link.addEventListener('click', () => setMenu(false)));

// Marca en el menú la sección que se está viendo
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));

// Carrusel de logos: repite los logos hasta llenar la pantalla y duplica el grupo para un bucle sin cortes
const marquee = document.querySelector('.marquee');
if (marquee) {
  const group = marquee.querySelector('.marquee-group');
  const originals = [...group.children];
  const loaded = originals.map(img => img.complete ? Promise.resolve() : new Promise(r => { img.onload = img.onerror = r; }));

  Promise.all(loaded).then(() => {
    let guard = 0;
    while (group.scrollWidth < marquee.clientWidth * 1.5 && guard++ < 10) {
      originals.forEach(img => {
        const clone = img.cloneNode(true);
        clone.classList.add('clone');
        clone.alt = '';
        group.appendChild(clone);
      });
    }
    const copy = group.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    marquee.appendChild(copy);
  });
}
