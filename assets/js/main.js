/* ---- Main JS for 60YR Support Hub ---- */

// Search data
const ARTICLES = [
  // Buyer
  { id: 'b1', title: 'How to purchase a game account', cat: 'buyer', tag: 'Buyer' },
  { id: 'b2', title: 'What payment methods are accepted', cat: 'buyer', tag: 'Buyer' },
  { id: 'b3', title: 'How to check order status', cat: 'buyer', tag: 'Buyer' },
  { id: 'b4', title: 'Account delivery & handover process', cat: 'buyer', tag: 'Buyer' },
  { id: 'b5', title: '60YR refund policy explained', cat: 'buyer', tag: 'Buyer' },
  { id: 'b6', title: 'How to open a dispute', cat: 'buyer', tag: 'Buyer' },
  { id: 'b7', title: 'Dispute resolution timeline', cat: 'buyer', tag: 'Buyer' },
  { id: 'b8', title: 'Chargeback information', cat: 'buyer', tag: 'Buyer' },
  { id: 'b9', title: 'Account not received after purchase', cat: 'buyer', tag: 'Buyer' },
  { id: 'b10', title: 'How to contact the seller', cat: 'buyer', tag: 'Buyer' },
  { id: 'b11', title: 'How to leave a review', cat: 'buyer', tag: 'Buyer' },
  { id: 'b12', title: 'How to use coupon or promo code', cat: 'buyer', tag: 'Buyer' },
  // Seller
  { id: 's1', title: 'How to start selling on 60YR', cat: 'seller', tag: 'Seller' },
  { id: 's2', title: 'How to create a game account listing', cat: 'seller', tag: 'Seller' },
  { id: 's3', title: 'Seller verification requirements', cat: 'seller', tag: 'Seller' },
  { id: 's4', title: 'How to handle a buyer dispute', cat: 'seller', tag: 'Seller' },
  { id: 's5', title: 'Order management guide', cat: 'seller', tag: 'Seller' },
  { id: 's6', title: 'Fee schedule & commission rates', cat: 'seller', tag: 'Seller' },
  { id: 's7', title: 'How to withdraw your earnings', cat: 'seller', tag: 'Seller' },
  { id: 's8', title: 'Payout processing time', cat: 'seller', tag: 'Seller' },
  { id: 's9', title: 'Supported withdrawal methods', cat: 'seller', tag: 'Seller' },
  { id: 's10', title: 'How to become a Verified Seller', cat: 'seller', tag: 'Seller' },
  { id: 's11', title: 'Account suspension and reinstatement', cat: 'seller', tag: 'Seller' },
  { id: 's12', title: 'How to edit or delete a listing', cat: 'seller', tag: 'Seller' },
  // Account
  { id: 'a1', title: 'How to enable two-factor authentication', cat: 'account', tag: 'Account' },
  { id: 'a2', title: 'Forgot password recovery', cat: 'account', tag: 'Account' },
  { id: 'a3', title: 'Suspicious activity on my account', cat: 'account', tag: 'Account' },
  { id: 'a4', title: 'How to delete my account', cat: 'account', tag: 'Account' },
  { id: 'a5', title: 'How to change email or username', cat: 'account', tag: 'Account' },
  { id: 'a6', title: 'Why is my account restricted', cat: 'account', tag: 'Account' },
];

// ---- Search ----
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

function doSearch() {
  const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
  if (!q) return;
  const results = ARTICLES.filter(a => a.title.toLowerCase().includes(q)).slice(0, 6);
  if (searchDropdown) renderDropdown(results, q);
}

function renderDropdown(results, q) {
  if (!searchDropdown) return;
  if (!results.length) {
    searchDropdown.innerHTML = '<div class="search-result-item"><span class="search-result-title" style="color:var(--text-3)">No results found. Try different keywords.</span></div>';
    searchDropdown.classList.add('show');
    return;
  }
  searchDropdown.innerHTML = results.map(r => {
    const tagCls = r.cat === 'buyer' ? 'tag-buyer' : r.cat === 'seller' ? 'tag-seller' : 'tag-account';
    return `<div class="search-result-item" onclick="window.location='article.html?id=${r.id}'">
      <span class="search-result-tag ${tagCls}">${r.tag}</span>
      <span class="search-result-title">${highlight(r.title, q)}</span>
    </div>`;
  }).join('');
  searchDropdown.classList.add('show');
}

function highlight(text, q) {
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(124,92,252,0.3);color:#fff;border-radius:2px">$1</mark>');
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchDropdown.classList.remove('show'); return; }
    const results = ARTICLES.filter(a => a.title.toLowerCase().includes(q)).slice(0, 6);
    renderDropdown(results, q);
  });
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#searchBox') && !e.target.closest('#searchDropdown')) {
      searchDropdown && searchDropdown.classList.remove('show');
    }
  });
}

// ---- Hamburger ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ---- Smooth scroll to hash ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ---- Sidebar active highlight ----
(function () {
  const sections = document.querySelectorAll('.content-section[id]');
  if (!sections.length) return;
  const links = document.querySelectorAll('.sidebar-link[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.sidebar-link[href="#${en.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach(s => observer.observe(s));
})();

// ---- Feedback buttons ----
document.querySelectorAll('.feedback-btns button').forEach(btn => {
  btn.addEventListener('click', function () {
    const box = this.closest('.feedback-box');
    box.innerHTML = '<p style="color:var(--success)">✓ Thank you for your feedback!</p>';
  });
});
