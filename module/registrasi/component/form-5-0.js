var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group row">
          <label for="tgl_kemoterapi_pertama" class="col-4 col-form-label">Tgl Kemoterapi Pertama</label>
          <div class="col-8">
          <input id="tgl_kemoterapi_pertama" name="tgl_kemoterapi_pertama" type="text" class="form-control" aria-describedby="tgl_kemoterapi_pertamaHelpBlock">
          <span id="tgl_kemoterapi_pertamaHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="rs_tempat_kemoterapi" class="col-4 col-form-label">RS Tempat Kemoterapi</label>
          <div class="col-8">
          <input id="rs_tempat_kemoterapi" name="rs_tempat_kemoterapi" type="text" class="form-control" aria-describedby="rs_tempat_kemoterapiHelpBlock">
          <span id="rs_tempat_kemoterapiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="dpjp_kemoterapi" class="col-4 col-form-label">DPJP Kemoterapi</label>
          <div class="col-8">
          <input id="dpjp_kemoterapi" name="dpjp_kemoterapi" type="text" class="form-control" aria-describedby="dpjp_kemoterapiHelpBlock">
          <span id="dpjp_kemoterapiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="target_jumlah_kemoterapi_dalam_1_siklus" class="col-4 col-form-label">Target Jumlah Kemoterapi Dalam 1 Siklus</label>
          <div class="col-8">
          <input id="target_jumlah_kemoterapi_dalam_1_siklus" name="target_jumlah_kemoterapi_dalam_1_siklus" placeholder=" " type="text" class="form-control" aria-describedby="target_jumlah_kemoterapi_dalam_1_siklusHelpBlock">
          <span id="target_jumlah_kemoterapi_dalam_1_siklusHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="nama_kemoterapi_yang_digunakan" class="col-4 col-form-label">Nama Kemoterapi Yang Digunakan</label>
          <div class="col-8">
          <input id="nama_kemoterapi_yang_digunakan" name="nama_kemoterapi_yang_digunakan" type="text" class="form-control" aria-describedby="nama_kemoterapi_yang_digunakanHelpBlock">
          <span id="nama_kemoterapi_yang_digunakanHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="dosis_kemoterapi_yang_digunakan" class="col-4 col-form-label">Dosis Kemoterapi yang  digunakan</label>
          <div class="col-8">
          <input id="dosis_kemoterapi_yang_digunakan" name="dosis_kemoterapi_yang_digunakan" type="text" class="form-control" aria-describedby="dosis_kemoterapi_yang_digunakanHelpBlock">
          <span id="dosis_kemoterapi_yang_digunakanHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="klinis_pre_kemoterapi" class="col-4 col-form-label">Klinis Pre Kemoterapi</label>
          <div class="col-8">
          <input id="klinis_pre_kemoterapi" name="klinis_pre_kemoterapi" type="text" class="form-control" aria-describedby="klinis_pre_kemoterapiHelpBlock">
          <span id="klinis_pre_kemoterapiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="klinis_post_kemoterapi" class="col-4 col-form-label">Klinis Post Kemoterapi</label>
          <div class="col-8">
          <input id="klinis_post_kemoterapi" name="klinis_post_kemoterapi" type="text" class="form-control" aria-describedby="klinis_post_kemoterapiHelpBlock">
          <span id="klinis_post_kemoterapiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="ct_scan_kemoterapi" class="col-4 col-form-label">CT-Scan Kemoterapi</label>
          <div class="col-8">
          <input id="ct_scan_kemoterapi" name="ct_scan_kemoterapi" placeholder="Pilih File ..." type="text" class="form-control" aria-describedby="ct_scan_kemoterapiHelpBlock">
          <span id="ct_scan_kemoterapiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
  </form>
</div>
`
Vue.component('form-5-0', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
