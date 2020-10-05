var templateVar = `
<div class="card-body">
  Formulir Data Pasien

  <br><br>
  <button class="btn btn-primary">KLINIS</button>
  <br><br>
  <button class="btn btn-primary">RADIOLOGI</button>
  <br><br>
  <button class="btn btn-primary">OPERASI</button>
  <br><br>
  <button class="btn btn-primary">KLINIS SETELAH OP</button>
</div>
`

Vue.component('form-3-0', {
  template: templateVar,
  data() {
    return {
      // checked: false,
      // title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});
