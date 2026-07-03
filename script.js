document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // PANTALLA DE CARGA (LOADING SCREEN)
  // ==========================================
  const loader = document.getElementById('loader');
  const loaderProgress = document.getElementById('loader-progress');
  document.body.classList.add('loading');

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      
      setTimeout(() => {
        loader.classList.add('fade-out');
        document.body.classList.remove('loading');
        
        setTimeout(() => {
          loader.style.display = 'none';
        }, 600);
      }, 300);
    }
    if (loaderProgress) {
      loaderProgress.style.width = progress + '%';
    }
  }, 80);

  // ==========================================
  // MOBILE NAVIGATION MENU (BREAKPOINT 900PX)
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-cta');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link or mobile CTA button inside the menu is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================
  // DYNAMIC HEADER & SCROLL PROGRESS BAR
  // ==========================================
  const header = document.getElementById('header');
  const scrollProgressBar = document.getElementById('scroll-progress');
  
  const handleScrollEffects = () => {
    // Sticky/Glassmorphism navbar state
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll progress bar calculation
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolledPercent = (winScroll / height) * 100;
      if (scrollProgressBar) {
        scrollProgressBar.style.width = scrolledPercent + '%';
      }
    }
  };

  window.addEventListener('scroll', handleScrollEffects);
  handleScrollEffects();

  // ==========================================
  // SMOOTH SCROLL WITH HEADER OFFSET
  // ==========================================
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset (header height scrolled is 70px)
        const headerHeight = 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // INTERSECTION OBSERVER FOR SCROLL REVEAL
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-grid');
  
  const revealOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(element => {
    revealOnScroll.observe(element);
  });

  // ==========================================
  // CUSTOM CURSOR WITH LAG
  // ==========================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  let cursorInitialized = false;

  if (cursorDot && cursorRing) {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!cursorInitialized) {
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
        ringX = mouseX;
        ringY = mouseY;
        cursorInitialized = true;
      }

      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    const animateCursorRing = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      
      ringX += dx * 0.15;
      ringY += dy * 0.15;

      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';

      requestAnimationFrame(animateCursorRing);
    };
    requestAnimationFrame(animateCursorRing);

    // Expand cursor ring on links, buttons, and card hovers
    const hoverTargets = document.querySelectorAll('a, button, .tilt-card, .btn, .menu-toggle, .contact-resource-btn');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered');
      });
      target.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered');
      });
    });
  }

  // ==========================================
  // 3D TILT EFFECT & GLOW CARD ANIMATIONS
  // ==========================================
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // ==========================================
  // CONTACT FORM SUBMISSION MOCKUP
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';

        contactForm.reset();

        if (formSuccess) {
          formSuccess.style.display = 'flex';
          
          setTimeout(() => {
            formSuccess.style.animation = 'slide-down 0.4s ease-out reverse';
            setTimeout(() => {
              formSuccess.style.display = 'none';
              formSuccess.style.animation = 'slide-down 0.4s ease-out forwards';
            }, 400);
          }, 5000);
        }
      }, 1500);
    });
  }
});
