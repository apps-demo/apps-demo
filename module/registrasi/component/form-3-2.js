var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group row">
          <label for="jenis_lokasi" class="col-4 col-form-label">Jenis Lokasi</label>
          <div class="col-8">
          <select id="jenis_lokasi" name="jenis_lokasi" class="custom-select" aria-describedby="jenis_lokasiHelpBlock"></select>
          <span id="jenis_lokasiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-4">Rontgen</label>
          <div class="col-8">
          <div class="custom-control custom-radio custom-control-inline">
              <input name="rongent" id="rongent_0" type="radio" aria-describedby="rongentHelpBlock" class="custom-control-input" value="pre_op">
              <label for="rongent_0" class="custom-control-label">Pre OP</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
              <input name="rongent" id="rongent_1" type="radio" aria-describedby="rongentHelpBlock" class="custom-control-input" value="post_op">
              <label for="rongent_1" class="custom-control-label">Post-OP</label>
          </div>
          <span id="rongentHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="tgl_rontgen" class="col-4 col-form-label">Tgl Rontgen</label>
          <div class="col-8">
          <div class="input-group">
              <div class="input-group-prepend">
              <div class="input-group-text">
                  <i class="fa fa-calendar"></i>
              </div>
              </div>
              <input id="tgl_rontgen" name="tgl_rontgen" type="text" class="form-control" aria-describedby="tgl_rontgenHelpBlock">
          </div>
          <span id="tgl_rontgenHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_mri" class="col-4 col-form-label">Foto MRI</label>
          <div class="col-8">
          <input id="foto_mri" name="foto_mri" placeholder="Pilih File ..." type="file" class="form-control" aria-describedby="foto_mriHelpBlock">
          <span id="foto_mriHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="expertise_radiologi" class="col-4 col-form-label">Expertise Radiologi</label>
          <div class="col-8">
          <input id="expertise_radiologi" name="expertise_radiologi" placeholder="Pilih File ..." type="file" class="form-control" aria-describedby="expertise_radiologiHelpBlock">
          <span id="expertise_radiologiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="rs_tempat_scan" class="col-4 col-form-label">RS Tempat Scan</label>
          <div class="col-8">
          <input id="rs_tempat_scan" name="rs_tempat_scan" type="text" class="form-control" aria-describedby="rs_tempat_scanHelpBlock">
          <span id="rs_tempat_scanHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="jenis_lokasi_lainnya" class="col-4 col-form-label">Jenis Lokasi Lainnya</label>
          <div class="col-8">
          <select id="jenis_lokasi_lainnya" name="jenis_lokasi_lainnya" aria-describedby="jenis_lokasi_lainnyaHelpBlock" class="custom-select"></select>
          <span id="jenis_lokasi_lainnyaHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_rontgen_lainnya" class="col-4 col-form-label">Foto Rontgen Lainnya</label>
          <div class="col-8">
          <input id="foto_rontgen_lainnya" name="foto_rontgen_lainnya" type="file" aria-describedby="foto_rontgen_lainnyaHelpBlock" class="form-control">
          <span id="foto_rontgen_lainnyaHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
  </form>
</div>
`

Vue.component('form-3-2', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
