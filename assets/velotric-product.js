(function () {
  'use strict';

  var section = document.getElementById('velotric-product-section');
  if (!section) return;

  var mainImage = document.getElementById('vp-main-image');
  var thumbnails = section.querySelectorAll('.vp-thumbnail');
  var sizeBtns = section.querySelectorAll('.vp-size-btn');
  var sizeGuide = document.getElementById('vp-size-guide');
  var swatches = section.querySelectorAll('.vp-swatch');
  var colorName = document.getElementById('vp-color-name');
  var specCategories = section.querySelectorAll('.vp-spec-category');
  var specSizeBtns = section.querySelectorAll('.vp-specs-size-btn');
  var tabBtns = section.querySelectorAll('.vp-tab-btn');
  var tabPanels = section.querySelectorAll('.vp-tab-panel');
  var faqItems = section.querySelectorAll('.vp-faq-item');
  var stickyBar = document.getElementById('vp-sticky-bar');
  var videoCards = section.querySelectorAll('.vp-video-card');

  var sizeGuideMap = {
    regular: "5'2''-5'11''",
    large: "5'9''-6'7''"
  };

  function initGallery() {
    thumbnails.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var imgSrc = this.getAttribute('data-image');
        if (imgSrc && mainImage) {
          mainImage.style.opacity = '0';
          setTimeout(function () {
            mainImage.src = imgSrc;
            mainImage.style.opacity = '1';
          }, 150);
        }
        thumbnails.forEach(function (t) { t.classList.remove('is-active'); });
        this.classList.add('is-active');
      });
    });
  }

  function initSizeSelector() {
    sizeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var size = this.getAttribute('data-size');
        sizeBtns.forEach(function (b) { b.classList.remove('is-active'); });
        this.classList.add('is-active');
        if (sizeGuide && sizeGuideMap[size]) {
          sizeGuide.textContent = sizeGuideMap[size];
        }
        syncSpecSize(size);
      });
    });
  }

  function initColorSelector() {
    swatches.forEach(function (swatch) {
      swatch.addEventListener('click', function () {
        var color = this.getAttribute('data-color');
        var imgSrc = this.getAttribute('data-image');
        swatches.forEach(function (s) { s.classList.remove('is-active'); });
        this.classList.add('is-active');
        if (colorName) {
          colorName.textContent = color;
        }
        if (imgSrc && mainImage) {
          mainImage.style.opacity = '0';
          setTimeout(function () {
            mainImage.src = imgSrc;
            mainImage.style.opacity = '1';
          }, 150);
          thumbnails.forEach(function (t) { t.classList.remove('is-active'); });
        }
      });
    });
  }

  function initSpecAccordions() {
    specCategories.forEach(function (cat) {
      var header = cat.querySelector('.vp-spec-category__header');
      if (header) {
        header.addEventListener('click', function () {
          var isOpen = cat.classList.contains('is-open');
          cat.classList.toggle('is-open');
          header.setAttribute('aria-expanded', !isOpen);
        });
      }
    });
  }

  function initSpecSizeToggle() {
    specSizeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var size = this.getAttribute('data-specs-size');
        specSizeBtns.forEach(function (b) { b.classList.remove('is-active'); });
        this.classList.add('is-active');
        updateSpecSizeDisplay(size);
      });
    });
    updateSpecSizeDisplay('regular');
  }

  function updateSpecSizeDisplay(size) {
    var sizeSpans = section.querySelectorAll('[data-specs-size]');
    sizeSpans.forEach(function (span) {
      if (span.getAttribute('data-specs-size') === size) {
        span.classList.add('is-visible');
      } else {
        span.classList.remove('is-visible');
      }
    });
  }

  function syncSpecSize(size) {
    specSizeBtns.forEach(function (btn) {
      if (btn.getAttribute('data-specs-size') === size) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
    updateSpecSizeDisplay(size);
  }

  function initTabs() {
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tab = this.getAttribute('data-tab');
        tabBtns.forEach(function (b) { b.classList.remove('is-active'); });
        tabPanels.forEach(function (p) { p.classList.remove('is-active'); });
        this.classList.add('is-active');
        var panel = section.querySelector('.vp-tab-panel[data-tab="' + tab + '"]');
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  function initFaq() {
    faqItems.forEach(function (item) {
      var question = item.querySelector('.vp-faq-item__question');
      if (question) {
        question.addEventListener('click', function () {
          var isOpen = item.classList.contains('is-open');
          faqItems.forEach(function (i) { i.classList.remove('is-open'); });
          if (!isOpen) {
            item.classList.add('is-open');
          }
          question.setAttribute('aria-expanded', !isOpen);
        });
      }
    });
  }

  function initSmoothScroll() {
    var links = section.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href.length > 1) {
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  function initVideoObserver() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target.querySelector('video');
          if (!video) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            video.play().catch(function () {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    videoCards.forEach(function (card) {
      observer.observe(card);
    });
  }

  function initStickyBar() {
    if (!stickyBar) return;

    var heroSection = section.querySelector('.vp-hero');
    if (!heroSection) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            stickyBar.classList.remove('is-visible');
          } else {
            stickyBar.classList.add('is-visible');
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(heroSection);
  }

  function init() {
    initGallery();
    initSizeSelector();
    initColorSelector();
    initSpecAccordions();
    initSpecSizeToggle();
    initTabs();
    initFaq();
    initSmoothScroll();
    initVideoObserver();
    initStickyBar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
