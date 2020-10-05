var templateVar = `
<ul class="nav nav-tabs" v-show="isFormOn(activeForm)">
    <tab-back @goto-form="gotoForm"></tab-back>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">KLINIS SETELAH OP</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_5_0')]" @click="gotoForm('FORM_5_0')" href="#">KEMOTERAPI</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_5_1')]" @click="gotoForm('FORM_5_1')" href="#">WBXRT/Radioterapi</a>
    </li>
</ul>
`

Vue.component('tab-5', {
  template: templateVar,
  props: ['activeForm'],
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    gotoForm(formSection) {
      this.$emit("goto-form", formSection);
    },
    isFormOn(activeForm) {
      return FORMS_5.includes(activeForm);
    },
    isActiveOn(paramForm) {
      return this.activeForm == paramForm ? 'active' : null;
    }
  }
});
