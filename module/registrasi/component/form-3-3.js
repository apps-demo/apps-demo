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
        <label class="col-4">USG</label>
        <div class="col-8">
        <div class="custom-control custom-radio custom-control-inline">
            <input name="usg" id="usg_0" type="radio" class="custom-control-input" value="pre_op" aria-describedby="usgHelpBlock">
            <label for="usg_0" class="custom-control-label">Pre OP</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input name="usg" id="usg_1" type="radio" class="custom-control-input" value="post_op" aria-describedby="usgHelpBlock">
            <label for="usg_1" class="custom-control-label">Post-OP</label>
        </div>
        <span id="usgHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="tgl_usg" class="col-4 col-form-label">Tgl USB</label>
        <div class="col-8">
        <div class="input-group">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <i class="fa fa-calendar"></i>
            </div>
            </div>
            <input id="tgl_usg" name="tgl_usg" type="text" aria-describedby="tgl_usgHelpBlock" class="form-control">
        </div>
        <span id="tgl_usgHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
    <div class="form-group row">
        <label for="foto_usg" class="col-4 col-form-label">Foto USG</label>
        <div class="col-8">
        <input id="foto_usg" name="foto_usg" placeholder="Pilih File ..." type="file" aria-describedby="foto_usgHelpBlock" class="form-control">
        <span id="foto_usgHelpBlock" class="form-text text-muted"></span>
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
        <label for="foto_usg_lainnya" class="col-4 col-form-label">Foto USG Lainnya</label>
        <div class="col-8">
        <input id="foto_usg_lainnya" name="foto_usg_lainnya" placeholder="Pilih File ..." type="text" aria-describedby="foto_usg_lainnyaHelpBlock" class="form-control">
        <span id="foto_usg_lainnyaHelpBlock" class="form-text text-muted"></span>
        </div>
    </div>
</form>
</div>
`

Vue.component('form-3-3', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
