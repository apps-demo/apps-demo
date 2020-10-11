var templateVar = `
<ul class="nav nav-tabs" v-show="isFormOn(activeForm)">
    <tab-back @goto-form="gotoForm"></tab-back>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">KLINIS</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_0')]" @click="gotoForm('FORM_2_0')" href="#">KELUHAN UMUM</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_1')]" @click="gotoForm('FORM_2_1')" href="#">RIWAYAT PENYAKIT</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_2')]" @click="gotoForm('FORM_2_2')" href="#">RIWAYAT PENYAKIT (2)</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_3')]" @click="gotoForm('FORM_2_3')" href="#">PEMERIKSAAN FISIK</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_4')]" @click="gotoForm('FORM_2_4')" href="#">PEMERIKSAAN FISIK (2)</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_5')]" @click="gotoForm('FORM_2_5')" href="#">PEMERIKSAAN FISIK (3)</a>
    </li>
    <li class="nav-item">
        <a :class="['nav-link', isActiveOn('FORM_2_6')]" @click="gotoForm('FORM_2_6')" href="#">PEMERIKSAAN FISIK (4)</a>
    </li>
</ul>
`

Vue.component('tab-2', {
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
      return FORMS_2.includes(activeForm);
    },
    isActiveOn(paramForm) {
      return this.activeForm == paramForm ? 'active' : null;
    }
  }
});
