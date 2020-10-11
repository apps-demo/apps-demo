var templateVar = `
<ul class="nav nav-tabs" v-show="isFormOn(activeForm)">
    <tab-back @goto-form="gotoForm"></tab-back>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">OPERASI</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_4_0')]" @click="gotoForm('FORM_4_0')" href="#">OPERASI 1</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_4_1')]" @click="gotoForm('FORM_4_1')" href="#">OPERASI 2</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_4_2')]" @click="gotoForm('FORM_4_2')" href="#">OPERASI 3</a>
    </li>
</ul>
`

Vue.component('tab-4', {
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
      return FORMS_4.includes(activeForm);
    },
    isActiveOn(paramForm) {
      return this.activeForm == paramForm ? 'active' : null;
    }
  }
});
