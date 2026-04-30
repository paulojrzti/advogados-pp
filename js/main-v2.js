document.addEventListener("DOMContentLoaded", () => {
  // Configurações do GSAP
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.hero-copy > *', {
      y: 24,
      opacity: 0,
      filter: 'blur(8px)',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08
    });

    gsap.from('.hero-img', {
      scale: window.innerWidth > 767 ? 1.04 : 1,
      opacity: 0.92,
      duration: 1.2,
      ease: 'power2.out'
    });

    // Elementos com reveal ao scrollar
    document.querySelectorAll('.soft-card, .method-card, .person-card, .print-tile, .video-card, .pain-card').forEach((el) => {
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true
        }
      });
    });

    // Efeito Parallax sutil na imagem hero no Desktop
    if (window.innerWidth > 1023) {
      gsap.to('.hero-img', {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }

  // Lightbox para os prints
  const dialog = document.getElementById('lightbox');
  const dialogImg = dialog?.querySelector('.lightbox-image');
  
  document.querySelectorAll('.js-lightbox').forEach(btn => {
    btn.addEventListener('click', () => {
      if(dialogImg) {
        dialogImg.src = btn.dataset.full;
        dialogImg.alt = btn.querySelector('img')?.alt || 'Depoimento ampliado';
      }
      dialog?.showModal();
    });
  });
  
  dialog?.addEventListener('click', e => {
    if (e.target === dialog || e.target.classList.contains('lightbox-close')) {
      dialog.close();
    }
  });
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dialog?.open) {
      dialog.close();
    }
  });

  // Load Iframe under demand para Vídeos
  document.querySelectorAll('.js-yt-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.youtubeId;
      const title = card.dataset.title || 'Depoimento em vídeo';
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.title = title;
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
      iframe.style.border = 'none';
      card.replaceWith(iframe);
    }, { once: true });
  });

  // Impede submit default do form demonstrativo
  const leadForm = document.querySelector('.lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Formulário enviado com sucesso!");
    });
  }
});
