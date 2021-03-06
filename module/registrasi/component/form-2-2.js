var templateVar = `
<div class="card-body" v-show="isShow">
    <form>
        <label for="anu">RIWAYAT PENYAKIT DAHULU</label>
        <div class="form-group row">
            <label for="select" class="col-4 col-form-label">Jenis Penyakit</label>
            <div class="col-8">
              <select id="select" name="select" class="custom-select" v-model="jenis_penyakit">
                <option value="">Diabetes</option>
                <option value="">Asma</option>
                <option value="">Dispepsia</option>
                <option value="">Hypertensi</option>
                <option value="">Riwayat Kehamilan</option>
                <option value="">TBC</option>
                <option value="kb">KB</option>
              </select>
            </div>
        </div>
        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Masa / Lama</label>
          <div class="col-8">
            <div class="input-group">
              <input id="text" name="text" type="text" class="form-control">
              <div class="input-group-append">
                <div class="input-group-text">Tahun</div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group row" v-if="jenis_penyakit == 'kb'">
          <label for="text" class="col-4 col-form-label">Jenis</label>
          <div class="col-8">
            <input id="text" name="text" type="text" class="form-control">
          </div>
        </div>


        <div class="form-group row" v-if="jenis_penyakit == 'kb'">
          <label for="text" class="col-4 col-form-label">Obat</label>
          <div class="col-8">
            <input id="text" name="text" type="text" class="form-control">
          </div>
        </div>
      </form>
</div>
`

Vue.component('form-2-2', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
      'jenis_penyakit' : null
    }
  },
  methods: {
  }
});
