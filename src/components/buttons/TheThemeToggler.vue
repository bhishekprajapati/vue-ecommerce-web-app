<template>
  <button type="button" class="btn-toggle">
    <input type="checkbox" id="theme-toggler" />
    <label
      class="toggle-icon-wrapper"
      for="theme-toggler"
      @click="toggleTheme"
    >
      <svg class="icon icon-sw-1">
        <use href="#sun"></use>
        <use href="#moon"></use>
      </svg>
    </label>
  </button>
</template>

<script>
export default {
  mounted() {
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if(darkTheme.matches) this.toggleTheme();
  },

  methods: {
    toggleTheme() {
      const themeTogglerCheckbox = document.getElementById('theme-toggler');
      themeTogglerCheckbox.checked = !themeTogglerCheckbox.checked;
      document.body.classList.toggle('dark-theme');
    }
  }
};
</script>