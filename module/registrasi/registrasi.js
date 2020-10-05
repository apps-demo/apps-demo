
// import constants.js

var app = new Vue({
  el: '#vue-app',
  data() {
    return {
      FORMS: FORMS,
      activeForm: FORMS.FORM_1
    }
  },
  methods: {
    isFormOn(formSection) {
      return this.activeForm == formSection;
    },
    gotoForm(formSection) {
      this.scrollToTop();
      this.activeForm = formSection;
    },
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
})
