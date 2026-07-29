/* =============================================
   MAXPATRIE — JavaScript Principal
   ============================================= */

// --- Scroll Animations ---
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// --- Mobile Navigation ---
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    if (navOverlay) navOverlay.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      if (navOverlay) navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// --- Smooth Counter Animation ---
function animateCounter(el, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);

    el.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// Animate counters when visible
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      if (target) {
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stat-value[data-target]').forEach(el => counterObserver.observe(el));

// --- Countdown Timer ---
function updateCountdown() {
  const targetDate = new Date('2028-06-01T00:00:00+02:00');
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelectorAll('.countdown-value.days').forEach(el => el.textContent = '0');
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const remainingDays = days % 30;

  const monthEls = document.querySelectorAll('.countdown-value.months');
  const dayEls = document.querySelectorAll('.countdown-value.days-remaining');

  monthEls.forEach(el => el.textContent = months);
  dayEls.forEach(el => el.textContent = remainingDays);
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // Every hour

// --- Budget Calculator ---
function initBudgetCalculator() {
  const scenarioBtns = document.querySelectorAll('.calc-scenario button');
  if (!scenarioBtns.length) return;

  const scenarios = {
    sobre: {
      loyer: 950, charges: 155, internet: 45, courses: 600,
      transports: 90, cantine: 270, activites: 150, mutuelle: 0,
      restos: 100, divers: 100
    },
    confort: {
      loyer: 1200, charges: 215, internet: 55, courses: 700,
      transports: 100, cantine: 360, activites: 220, mutuelle: 200,
      restos: 200, divers: 150
    },
    tranquille: {
      loyer: 1500, charges: 275, internet: 65, courses: 800,
      transports: 110, cantine: 450, activites: 300, mutuelle: 250,
      restos: 400, divers: 250
    }
  };

  function updateCalculator(scenario) {
    const data = scenarios[scenario];

    const map = {
      'calc-loyer': data.loyer,
      'calc-charges': data.charges,
      'calc-internet': data.internet,
      'calc-courses': data.courses,
      'calc-transports': data.transports,
      'calc-cantine': data.cantine,
      'calc-activites': data.activites,
      'calc-mutuelle': data.mutuelle,
      'calc-restos': data.restos,
      'calc-divers': data.divers
    };

    let total = 0;
    for (const [id, value] of Object.entries(map)) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = value.toLocaleString() + ' €';
        total += value;
      }
    }

    const totalEl = document.getElementById('calc-total');
    if (totalEl) {
      totalEl.textContent = total.toLocaleString() + ' €';
      // Animate
      totalEl.style.transform = 'scale(1.1)';
      setTimeout(() => totalEl.style.transform = 'scale(1)', 150);
    }
  }

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateCalculator(btn.dataset.scenario);
    });
  });

  // Initialize with "confort"
  updateCalculator('confort');
}

// --- Quartier Filter ---
function initQuartierFilter() {
  const filterBtns = document.querySelectorAll('.quartier-filter button');
  const cards = document.querySelectorAll('.quartier-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });

      cards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
      });
    });
  });
}

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
  initBudgetCalculator();
  initQuartierFilter();

  // Add fade-in class to sections
  document.querySelectorAll('.section > *, .card, .quartier-card').forEach(el => {
    if (!el.classList.contains('fade-in')) {
      el.classList.add('fade-in');
      observer.observe(el);
    }
  });
});
