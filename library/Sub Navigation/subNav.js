(function () {
    function SubNav() {
      this.overlay = document.getElementById('overlay');
      this.mobileNavButton = document.querySelector('.mobileNavOpen');
      this.dataElem = document.querySelector('[data-active-menu]');

      this.isMobileNavExpanded = false;
      this.build();
    }

    SubNav.prototype.build = function () {
      var self = this;
      self.setMobileMenuTitle();
      self.setActiveLink(self.dataElem);
      self.setParentActiveLink(self.dataElem);
      self.offsetMenu(self.dataElem);
      self.setClickHandler();
      self.addMobileExpandListeners();
      window.addEventListener('resize', debounce(self.handleTabIndexMobileResize.bind(self), 100));
    };

    SubNav.prototype.setActiveLink = function (dataElem) {
      if (dataElem) {
        var activeLink = document.querySelector('#' + dataElem.dataset.activeMenu + ' .navLink');
        activeLink.classList.add('active');
        activeLink.classList.add('mainNav-link-current');
      } else {
        console.error('SubNav: Unable to find element with SubNav Information');
      }
    };

    SubNav.prototype.setParentActiveLink = function (dataElem) {
      var activeLink = document.querySelector('#' + dataElem.dataset.activeMenu + ' .navLink');
      var subNav = document.querySelector('#' + dataElem.dataset.activeMenu + ' .subNav');
      subNav && activeLink.classList.add('caretActive');
      var isSubNavItem = findAncestor(activeLink, 'mainNavItem', 'secondaryNav');
      if (isSubNavItem) {
        findAncestor(activeLink, 'mainNavItem', 'secondaryNav').querySelector('.mainNav-link').classList.add('active');
      }
    };

    SubNav.prototype.offsetMenu = function (dataElem) {
      var activeLink = document.querySelector('#' + dataElem.dataset.activeMenu + ' .navLink');
      var parentElem = findAncestor(activeLink, 'subNav', 'navHolder');
      if (parentElem) {
        parentElem.classList.add('currentActive');
        parentElem.parentElement.querySelector('.mainNav-link').classList.add('currentAlwaysActive');
        document.querySelector('.subnav-offset').classList.add('offsetActive');
      }
    };

    SubNav.prototype.setMobileMenuTitle = function () {
      var dataElem = document.querySelector('[data-menu-title]');
      this.mobileNavLabel = dataElem && dataElem.dataset.menuTitle;
      if (this.mobileNavLabel) {
        this.mobileNavButton.textContent = this.mobileNavLabel;
      } else {
        console.error('SubNav: Unable to find element with SubNav Information [data-menu-title] ');
      }
    };

    SubNav.prototype.setClickHandler = function () {
      var body = document.querySelector('body');
      body.addEventListener('mouseover', this.handleHover);
      body.addEventListener('focusin', this.handleHover);
    };

    SubNav.prototype.handleHover = function (e) {
      var activeLink = document.querySelector('.mainNav-link-active');
      if (activeLink && !isDescendant(activeLink.parentElement, e.target)) {
        var subnav = activeLink.parentElement.querySelector('.subNav');
        var indicator = document.querySelector('.caretActive');
        indicator && indicator.classList.remove('caretActive');
        activeLink.classList.remove('mainNav-link-active');
        if (subnav) {
          subnav.classList.remove('activeSubNav');
        }
      }
      if (e.target.classList.contains('mainNav-link')) {
        var parent = e.target.parentElement;
        var subNav = parent.querySelector('.subNav');
        if (subNav) {
          e.target.classList.add('mainNav-link-active');
          e.target.classList.add('caretActive');
          subNav.classList.add('activeSubNav');
        }
      }
    };

    SubNav.prototype.addMobileExpandListeners = function () {
      var _this = this;

      var self = this;
      var expandableLinks = document.querySelectorAll('.expand-trigger');
      Array.prototype.slice.call(expandableLinks).forEach(function (item) {
        item.addEventListener('click', self.openSubNav);
        item.addEventListener('keydown', function (event) {
          if (event.keyCode === 13) return self.openSubNav;
        });
      });

      var allMenuTabs = document.querySelectorAll('.mobileMenuTab');
      Array.prototype.slice.call(allMenuTabs).forEach(function (item) {
        item.addEventListener('click', self.mobileNavOpenClose.bind(_this));
        item.addEventListener('keydown', function (event) {
          if (event.keyCode === 13) this.click();
        });
      });

      this.overlay.addEventListener('click', self.mobileNavOpenClose.bind(this));
    };

    SubNav.prototype.openSubNav = function (e) {
      var link = this;
      if (link.parentElement.querySelector('.subNav')) {
        e.preventDefault();
      }
      if (this.classList.contains('expanded')) {
        link.classList.remove('expanded');
      } else {
        link.classList.add('expanded');
      }
    };

    SubNav.prototype.toggleOverlay = function (status) {
      if (status === 'show') this.overlay.classList.add('active');
      if (status === 'hide') this.overlay.classList.remove('active');
    };

    SubNav.prototype.mobileNavOpenClose = function (e) {
      var menu = document.getElementById('navHolder');
      var clickedLink = document.querySelector('.mainNav');
      var subNav = document.querySelector('.secondaryNav');
      menu.style.top = '-' + menu.clientHeight + 'px';
      if (!clickedLink.classList.contains('expanded')) {
        clickedLink.className += ' expanded';
        document.querySelector('.page-wrapper').setAttribute('style', 'overflow:visible;'); // Overrides global overflow hidden
        this.toggleOverlay('show');
        this.mobileNavButton.textContent = 'Close Menu';
        document.addEventListener('keydown', this.handleFocusTrap);
        Array.prototype.slice.call(subNav.querySelectorAll('a')).forEach(function (link) {
          link.tabIndex = 0;
        });
        this.isMobileNavExpanded = true;
      } else {
        clickedLink.classList.remove('expanded');
        document.querySelector('.page-wrapper').setAttribute('style', 'overflow:hidden;');
        this.toggleOverlay('hide');
        this.mobileNavButton.textContent = this.mobileNavLabel;
        document.removeEventListener('keydown', this.handleFocusTrap);
        Array.prototype.slice.call(subNav.querySelectorAll('a')).forEach(function (link) {
          link.tabIndex = -1;
        });
        this.isMobileNavExpanded = false;
      }
    };

    SubNav.prototype.handleFocusTrap = function (e) {
      var subNav = document.querySelector('.secondaryNav');
      var allFocusableElems = Array.prototype.slice.call(subNav.querySelectorAll('a,button, .mobileMenuTab'));
      var firstFocusableEl = allFocusableElems[0];
      var lastFocusableEl = allFocusableElems[allFocusableElems.length - 1];
      var TabKeycode = 9;
      if (e.key === 'Tab' || e.keyCode === TabKeycode) {
        if (e.shiftKey) {
          /* shift + tab */
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          /* tab */
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    SubNav.prototype.handleTabIndexMobileResize = function (e) {
      var self = this;
      var breakpoint = 970;
      var tabIndex = window.innerWidth < breakpoint && self.isMobileNavExpanded ? -1 : 0;
      var subNav = document.querySelector('.secondaryNav');
      Array.prototype.slice.call(subNav.querySelectorAll('a')).forEach(function (link) {
        link.tabIndex = tabIndex;
      });
    };

    new SubNav();

    // Utilities
    function isDescendant(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) return true;
        node = node.parentNode;
      }
      return false;
    }

    function findAncestor(el, cls, limit) {
      limit = limit || 'main-content';
      while (!el.classList.contains(cls)) {
        if (el.classList.contains(limit)) return null;
        el = el.parentElement;
      }
      return el;
    }

    function debounce(func, wait, immediate) {
      var timeout = void 0;
      return function () {
        var self = this;
        var args = arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) {
            func.apply(self, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(self, args);
        }
      };
    }

  })();