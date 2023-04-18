window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  // * ===== Show Filters Mobile
  (function showFiltersMobile() {
    const menuBtn = document.querySelector('.catalog__btn-filters');
    const menu = document.querySelector('.filters-mobile');
    const menuCloseBtn = document.querySelector('.filters-mobile__close');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
      });

      menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
      });
    }
  })();

  // * ==== show dropdown
  (function showDropdown() {
    const links = document.querySelectorAll('.menu__link');
    const dropdowns = document.querySelectorAll('.dropmenu');

    links.forEach((link) => {
      if (link) {
        link.addEventListener('mouseover', (e) => {
          dropdowns.forEach((dropdown) => {
            console.log(dropdown.dataset.target);

            if (link.dataset.target === dropdown.dataset.target) {
              dropdown.classList.toggle('active');
            }
          });
        });
        link.addEventListener('mouseleave', (e) => {
          dropdowns.forEach((dropdown) => {
            dropdown.classList.remove('active');
          });
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.hero__slider .swiper-button-next',
        prevEl: '.hero__slider .swiper-button-prev',
      },
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-request', '.popup--request', '.popup__close');
    bindModal('.btn-request-product', '.popup--request-product', '.popup__close');
  })();
});
