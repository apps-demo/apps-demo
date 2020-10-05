var templateVar = `
<div class="card-body" v-show="isShow">
<form>
    <div class="form-group row">
        <label for="tgl_radiologi_pertama" class="col-4 col-form-label">Tgl Radiologi Pertama</label>
        <div class="col-8">
        <input id="tgl_radiologi_pertama" name="tgl_radiologi_pertama" type="text" class="form-control" aria-describedby="tgl_radiologi_pertamaHelpBlock">
        <span id="tgl_radiologi_pertamaHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="rs_tempat_radioterapi" class="col-4 col-form-label">RS Tempat Radioterapi</label>
        <div class="col-8">
        <input id="rs_tempat_radioterapi" name="rs_tempat_radioterapi" type="text" class="form-control" aria-describedby="rs_tempat_radioterapiHelpBlock">
        <span id="rs_tempat_radioterapiHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="target_jumlah_radioterapi_dalam_1_siklus" class="col-4 col-form-label">Target Jumlah Radioterapi  Dalam 1 Siklus</label>
        <div class="col-8">
        <input id="target_jumlah_radioterapi_dalam_1_siklus" name="target_jumlah_radioterapi_dalam_1_siklus" type="text" class="form-control" aria-describedby="target_jumlah_radioterapi_dalam_1_siklusHelpBlock">
        <span id="target_jumlah_radioterapi_dalam_1_siklusHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="dosis_radioterapi_yang_digunakan" class="col-4 col-form-label">Dosis Radioterapi Yang Digunakan</label>
        <div class="col-8">
        <input id="dosis_radioterapi_yang_digunakan" name="dosis_radioterapi_yang_digunakan" type="text" class="form-control" aria-describedby="dosis_radioterapi_yang_digunakanHelpBlock">
        <span id="dosis_radioterapi_yang_digunakanHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="fraksi_radioterapi_yang_digunakan" class="col-4 col-form-label">Fraksi Radioterapi Yang Digunakan</label>
        <div class="col-8">
        <input id="fraksi_radioterapi_yang_digunakan" name="fraksi_radioterapi_yang_digunakan" type="text" class="form-control" aria-describedby="fraksi_radioterapi_yang_digunakanHelpBlock">
        <span id="fraksi_radioterapi_yang_digunakanHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="klinis_pre_radioterapi" class="col-4 col-form-label">Klinis Pre Radioterapi</label>
        <div class="col-8">
        <input id="klinis_pre_radioterapi" name="klinis_pre_radioterapi" type="text" class="form-control" aria-describedby="klinis_pre_radioterapiHelpBlock">
        <span id="klinis_pre_radioterapiHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="jenis_radioterapi" class="col-4 col-form-label">Jenis Radioterapi</label>
        <div class="col-8">
        <input id="jenis_radioterapi" name="jenis_radioterapi" type="text" class="form-control" aria-describedby="jenis_radioterapiHelpBlock">
        <span id="jenis_radioterapiHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
</form>
</div>
`
Vue.component('form-5-1', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
