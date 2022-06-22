<template>
  <footer class="l-page-pad-x l-footer">
    <div class="l-footer__row">
      <button type="button" class="btn-toggle">
        <input type="checkbox" id="theme-toggler" />
        <label
          class="toggle-icon-wrapper"
          for="theme-toggler"
          onclick="document.body.classList.toggle('dark-theme');"
        >
          <svg class="icon icon-sw-1">
            <use href="#sun"></use>
            <use href="#moon"></use>
          </svg>
        </label>
      </button>
    </div>
    <div class="l-footer__row">
      <div class="l-footer__title">
        <em class="h4-b h3-b:sm">Categories</em>
      </div>
      <nav>
        <ul class="l-footer__links">
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">On Sale</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Featured</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Masks</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Eye Care</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Moisturizers</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Treatments</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Night Care</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Sun Care</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="l-footer__row">
      <div class="l-footer__title">
        <em class="h4-b h3-b:sm">Legal</em>
      </div>
      <nav>
        <ul class="l-footer__links">
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Terms of Service</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Privacy Policy</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Returns Policy</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Shipping</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Data Protection</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="l-footer__row">
      <div class="l-footer__title">
        <em class="h4-b h3-b:sm">Company</em>
      </div>
      <nav>
        <ul class="l-footer__links">
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">About</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Team</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Contact</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Careers</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Vision</a>
          </li>
          <li class="l-footer__link">
            <a href="#" class="link p5-r p4-r:sm">Culture</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {};
</script>