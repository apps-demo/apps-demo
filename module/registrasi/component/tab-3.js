var templateVar = `
<ul class="nav nav-tabs" v-show="isFormOn(activeForm)">
    <tab-back @goto-form="gotoForm"></tab-back>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">RADIOLOGI</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_3_0')]" @click="gotoForm('FORM_3_0')" href="#">CT SCAN</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_3_1')]" @click="gotoForm('FORM_3_1')" href="#">MRI</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_3_2')]" @click="gotoForm('FORM_3_2')" href="#">RONTGEN</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_3_3')]" @click="gotoForm('FORM_3_3')" href="#">USG</a>
    </li>
</ul>
`

Vue.component('tab-3', {
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
      return FORMS_3.includes(activeForm);
    },
    isActiveOn(paramForm) {
      return this.activeForm == paramForm ? 'active' : null;
    }
  }
});
