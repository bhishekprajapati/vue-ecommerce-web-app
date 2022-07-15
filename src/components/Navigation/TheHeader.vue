<template>
  <header id="primary-header" class="l-header l-page-pad-x">
    <div class="l-header__primary">
      <input type="checkbox" id="hamburger-toggler" />
      <label
        class="hamburger-btn"
        for="hamburger-toggler"
        onclick="document.getElementById('primary-header').classList.toggle('l-expand')"
      >
        <svg id="hamburger-icon" class="icon icon-sm icon-sw-2">
          <use href="#menu"></use>
        </svg>
        <svg id="close-icon" class="icon icon-filled icon-sw-0">
          <use href="#cross"></use>
        </svg>
      </label>

      <RouterLink to="/" class="site-logo">
        <img src="../../assets/logo.svg" alt="site-logo" />
      </RouterLink>

      <div class="nav-icons">
        <button class="header-btn header-btn--search" type="button">
          <svg class="icon icon-sm icon-sw-2">
            <use href="#search"></use>
          </svg>
        </button>

        <RouterLink to="/cart">
          <button class="header-btn header-btn--cart" type="button">
            <svg class="icon icon-md icon-sw-2">
              <use href="#cart"></use>
            </svg>
          </button>
        </RouterLink>

        <RouterLink to="/auth">
          <button class="header-btn header-btn--profile" type="button">
            <svg class="icon icon-sm icon-sw-2">
              <use href="#profile"></use>
            </svg>
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="l-header__collapsible">
      <!-- content -->
    </div>

    <div class="header-collapsible-content">
      <h2 class="sub-title">Collapsible Header content</h2>
    </div>
  </header>
</template>

<script>
export default {};
</script>