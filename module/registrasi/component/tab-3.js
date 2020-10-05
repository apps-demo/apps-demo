var templateVar = `
<ul class="nav nav-pills" v-show="! isShow">
    <tab-back />
    <li class="nav-item">
        <a class="nav-link active" href="#">CT SCAN</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">MRI</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">RONTGENT POLOS</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">USG</a>
    </li>
</ul>
`

Vue.component('tab-3', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
      // checked: false,
      // title: 'Check me'
    }
  },
  methods: {
  }
});
