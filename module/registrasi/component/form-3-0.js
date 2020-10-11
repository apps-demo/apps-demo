var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group row">
          <label class="col-4 col-form-label" for="jenis_lokasi">Jenis Lokasi</label>
          <div class="col-8">
              <select id="jenis_lokasi" name="jenis_lokasi" class="custom-select" aria-describedby="jenis_lokasiHelpBlock">
              <option value=""></option>
              </select>
              <span id="jenis_lokasiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-4">CT-Scan</label>
          <div class="col-8">
              <div class="custom-control custom-radio custom-control-inline">
              <input name="ct_scan" id="ct_scan_0" type="radio" class="custom-control-input" value="pre_op" aria-describedby="ct_scanHelpBlock">
              <label for="ct_scan_0" class="custom-control-label">PRE OP</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
              <input name="ct_scan" id="ct_scan_1" type="radio" class="custom-control-input" value="post_op" aria-describedby="ct_scanHelpBlock">
              <label for="ct_scan_1" class="custom-control-label">POST-OP</label>
              </div>
              <span id="ct_scanHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="tgl_ct_scan" class="col-4 col-form-label">Tgl CT-Scan</label>
          <div class="col-8">
              <div class="input-group">
              <div class="input-group-prepend">
                  <div class="input-group-text">
                  <i class="fa fa-calendar"></i>
                  </div>
              </div>
              <input id="tgl_ct_scan" name="tgl_ct_scan" type="text" class="form-control" aria-describedby="tgl_ct_scanHelpBlock">
              </div>
              <span id="tgl_ct_scanHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_ct_scan" class="col-4 col-form-label">Foto CT-Scan</label>
          <div class="col-8">
              <input id="foto_ct_scan" name="foto_ct_scan" placeholder="Pilih File ..." type="file" class="form-control" aria-describedby="foto_ct_scanHelpBlock">
              <span id="foto_ct_scanHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="analisis_ct_scan_bedah_syaraf" class="col-4 col-form-label">Analisisi CT-Scan Bedah Syaraf</label>
          <div class="col-8">
              <input id="analisis_ct_scan_bedah_syaraf" name="analisis_ct_scan_bedah_syaraf" type="text" aria-describedby="analisis_ct_scan_bedah_syarafHelpBlock" class="form-control">
              <span id="analisis_ct_scan_bedah_syarafHelpBlock" class="form-text text-muted"></span>
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
              <select id="jenis_lokasi_lainnya" name="jenis_lokasi_lainnya" class="custom-select" aria-describedby="jenis_lokasi_lainnyaHelpBlock"></select>
              <span id="jenis_lokasi_lainnyaHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_ct_scan_lainnya" class="col-4 col-form-label">Foto CT-Scan Lainnya</label>
          <div class="col-8">
              <input id="foto_ct_scan_lainnya" name="foto_ct_scan_lainnya" placeholder="Pilih File ..." type="file" class="form-control" aria-describedby="foto_ct_scan_lainnyaHelpBlock">
              <span id="foto_ct_scan_lainnyaHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <div class="offset-4 col-8">
              <button name="submit" type="submit" class="btn btn-primary">Submit</button>
          </div>
      </div>
  </form>
</div>
`

Vue.component('form-3-0', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
