var templateVar = `
<div class="card-body" v-show="isShow">
<form>
    <label for="neuro">NEUROLOGIS</label>
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Pemeriksaan Fungsi Luhur</label>
      <div class="col-8">
        <input id="text" name="text" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text1" class="col-4 col-form-label">Pemeriksaan Saraf Otak</label>
      <div class="col-8">
        <input id="text1" name="text1" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text2" class="col-4 col-form-label">Pemeriksaan Tanda Meningeal</label>
      <div class="col-8">
        <input id="text2" name="text2" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text3" class="col-4 col-form-label">Tes Provokasi Nervus Ischiadicus</label>
      <div class="col-8">
        <input id="text3" name="text3" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text4" class="col-4 col-form-label">Pemeriksaan Sensorik</label>
      <div class="col-8">
        <input id="text4" name="text4" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text5" class="col-4 col-form-label">Pemeriksaan Motorik</label>
      <div class="col-8">
        <input id="text5" name="text5" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text6" class="col-4 col-form-label">Pemeriksaan Refleks Fisiologis</label>
      <div class="col-8">
        <input id="text6" name="text6" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text7" class="col-4 col-form-label">Pemeriksaan Refleks Patologis</label>
      <div class="col-8">
        <input id="text7" name="text7" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="text8" class="col-4 col-form-label">Pemeriksaan Serebelum</label>
      <div class="col-8">
        <input id="text8" name="text8" type="text" class="form-control">
      </div>
    </div>
  </form>
</div>
`

Vue.component('form-2-6', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
