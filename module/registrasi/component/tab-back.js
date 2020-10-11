var templateVar = `
<li class="nav-item" style="margin-right: 1rem">
    <a class="nav-link active" href="javascript:" @click="gotoForm('FORM_1')"><i class="fa fa-chevron-left"></i></a>
</li>
`

Vue.component('tab-back', {
  template: templateVar,
  data() {
    return {
    }
  },
  methods: {
    gotoForm(formSection) {
      this.$emit("goto-form", formSection);
    },
  }
});
