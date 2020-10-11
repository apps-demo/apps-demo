var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
  <div class="form-group row">
      <label for="select4" class="col-4 col-form-label">Keadaan Umum</label>
      <div class="col-8">
        <select id="select4" name="select4" class="custom-select">
          <option value="">Baik</option>
          <option value="">Sedang</option>
          <option value="">Buruk</option>
        </select>
      </div>
  </div>
  </form>
</div>
`

Vue.component('form-2-3', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
