// ====== JS do site (JavaScript, não Java) ======
// Menu mobile
const wpp = '351910426627';
['whats-cta', 'whats-cta-2', 'float-wpp'].forEach(id=>{
  const a = document.getElementById(id);
  if (!a) return;
  const text = 'Olá! Quero fazer uma encomenda da P&C Mãos com Alma 💕';
  a.hred='http://wa.me/${WPP}?text=${encodURIComponent(text)}';
});


const hamb = document.getElementById('hamb');
const nav = document.getElementById('nav');
if (hamb && nav) {
  hamb.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamb.setAttribute('aria-expanded', String(open));
  });
}

// Atualiza ano no footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Copiar número do WhatsApp
const copyBtn = document.getElementById('copy-wpp');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const numero = '351910426627'; // <-- substitui aqui
    try {
      await navigator.clipboard.writeText(numero);
      copyBtn.textContent = 'Copiado!';
      setTimeout(() => (copyBtn.textContent = 'Copiar número'), 1500);
    } catch (e) { alert('Não foi possível copiar.'); }
  });
}

// Pequena interação de destaques nos testemunhos
const quotes = document.querySelectorAll('#testi .quote');
let q = 0;
setInterval(() => {
  if (!quotes.length) return;
  quotes[q].classList.remove('active');
  q = (q + 1) % quotes.length;
  quotes[q].classList.add('active');
}, 3500);
