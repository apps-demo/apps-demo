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
            <label class="col-4">Keterangan MRI</label>
            <div class="col-8">
            <div class="custom-control custom-radio custom-control-inline">
                <input name="keterangan_mri" id="keterangan_mri_0" type="radio" class="custom-control-input" value="pre_op" aria-describedby="keterangan_mriHelpBlock">
                <label for="keterangan_mri_0" class="custom-control-label">Pre OP</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input name="keterangan_mri" id="keterangan_mri_1" type="radio" class="custom-control-input" value="post_op" aria-describedby="keterangan_mriHelpBlock">
                <label for="keterangan_mri_1" class="custom-control-label">Post-OP</label>
            </div>
            <span id="keterangan_mriHelpBlock" class="form-text text-muted"></span>
            </div>
        </div>
        <div class="form-group row">
            <label for="tgl_mri" class="col-4 col-form-label">Tgl MRI</label>
            <div class="col-8">
            <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text">
                    <i class="fa fa-calendar"></i>
                </div>
                </div>
                <input id="tgl_mri" name="tgl_mri" type="text" class="form-control" aria-describedby="tgl_mriHelpBlock">
            </div>
            <span id="tgl_mriHelpBlock" class="form-text text-muted"></span>
            </div>
        </div>
        <div class="form-group row">
            <label for="foto_mri" class="col-4 col-form-label">Foto MRI</label>
            <div class="col-8">
            <input id="foto_mri" name="foto_mri" placeholder="Pilih File ..." type="text" class="form-control" aria-describedby="foto_mriHelpBlock">
            <span id="foto_mriHelpBlock" class="form-text text-muted"></span>
            </div>
        </div>
        <div class="form-group row">
            <label for="ukuran_tumor" class="col-4 col-form-label">Ukuran Tumor</label>
            <div class="col-8">
            <input id="ukuran_tumor" name="ukuran_tumor" type="text" class="form-control" aria-describedby="ukuran_tumorHelpBlock">
            <span id="ukuran_tumorHelpBlock" class="form-text text-muted"></span>
            </div>
        </div>
        <div class="form-group row">
            <label for="expertise_radiologi" class="col-4 col-form-label">Expertise Radiologi</label>
            <div class="col-8">
            <input id="expertise_radiologi" name="expertise_radiologi" placeholder="Pilih File ..." type="text" class="form-control" aria-describedby="expertise_radiologiHelpBlock">
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
            <label for="foto_mri_lainnya" class="col-4 col-form-label">Foto MRI Lainnya</label>
            <div class="col-8">
            <input id="foto_mri_lainnya" name="foto_mri_lainnya" type="text" class="form-control" aria-describedby="foto_mri_lainnyaHelpBlock">
            <span id="foto_mri_lainnyaHelpBlock" class="form-text text-muted"></span>
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

Vue.component('form-3-1', {
  template: templateVar,
  prop: ['isShow'],
  data() {
    return {
      // checked: false,
      // title: 'Check me'
    }
  },
  methods: {
  }
});
