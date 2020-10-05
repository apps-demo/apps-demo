
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
      this.activeForm = formSection;
    }
  },
})
