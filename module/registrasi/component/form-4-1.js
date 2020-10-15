var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group row">
          <label for="nama_operasi" class="col-4 col-form-label">Nama Tindakan</label>
          <div class="col-8">
          <input id="nama_operasi" name="nama_operasi" placeholder=" " type="text" class="form-control" aria-describedby="nama_operasiHelpBlock">
          <span id="nama_operasiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="kode_icd_9" class="col-4 col-form-label">Kode ICD-9</label>
          <div class="col-8">
          <input id="kode_icd_9" name="kode_icd_9" type="text" class="form-control" aria-describedby="kode_icd_9HelpBlock">
          <span id="kode_icd_9HelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="tanggal_op" class="col-4 col-form-label">Tanggal OP</label>
          <div class="col-8">
          <div class="input-group">
              <div class="input-group-prepend">
              <div class="input-group-text">
                  <i class="fa fa-calendar"></i>
              </div>
              </div>
              <input id="tanggal_op" name="tanggal_op" type="text" aria-describedby="tanggal_opHelpBlock" class="form-control">
          </div>
          <span id="tanggal_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="alasan_indikasi_op" class="col-4 col-form-label">Alasan/Indikasi OP</label>
          <div class="col-8">
          <input id="alasan_indikasi_op" name="alasan_indikasi_op" type="text" class="form-control" aria-describedby="alasan_indikasi_opHelpBlock">
          <span id="alasan_indikasi_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="klinis_sebelum_op" class="col-4 col-form-label">Klinis Sebelum OP</label>
          <div class="col-8">
          <input id="klinis_sebelum_op" name="klinis_sebelum_op" type="text" class="form-control" aria-describedby="klinis_sebelum_opHelpBlock">
          <span id="klinis_sebelum_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="rs_tempat_op" class="col-4 col-form-label">RS Tempat OP</label>
          <div class="col-8">
          <input id="rs_tempat_op" name="rs_tempat_op" type="text" class="form-control" aria-describedby="rs_tempat_opHelpBlock">
          <span id="rs_tempat_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="durasi_op" class="col-4 col-form-label">Durasi OP</label>
          <div class="col-8">
          <input id="durasi_op" name="durasi_op" type="text" class="form-control" aria-describedby="durasi_opHelpBlock">
          <span id="durasi_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="hasil_patologi_antonomi" class="col-4 col-form-label">Hasil Patologi Antonomi</label>
          <div class="col-8">
          <input id="hasil_patologi_antonomi" name="hasil_patologi_antonomi" type="text" class="form-control" aria-describedby="hasil_patologi_antonomiHelpBlock">
          <span id="hasil_patologi_antonomiHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="dokter_operator" class="col-4 col-form-label">Dokter Operator</label>
          <div class="col-8">
          <input id="dokter_operator" name="dokter_operator" type="text" class="form-control" aria-describedby="dokter_operatorHelpBlock">
          <span id="dokter_operatorHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="keterangan_laporan_op" class="col-4 col-form-label">Keterangan Laporan OP</label>
          <div class="col-8">
          <input id="keterangan_laporan_op" name="keterangan_laporan_op" type="text" class="form-control" aria-describedby="keterangan_laporan_opHelpBlock">
          <span id="keterangan_laporan_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="lab_pre_op" class="col-4 col-form-label">LAB Pre OP</label>
          <div class="col-8">
          <input id="lab_pre_op" name="lab_pre_op" type="text" class="form-control" aria-describedby="lab_pre_opHelpBlock">
          <span id="lab_pre_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="lab_post_op" class="col-4 col-form-label">LAB Post OP</label>
          <div class="col-8">
          <input id="lab_post_op" name="lab_post_op" type="text" class="form-control" aria-describedby="lab_post_opHelpBlock">
          <span id="lab_post_opHelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_ct_scan_mri_post_op_serial_ke_1" class="col-4 col-form-label">Foto CT-Scan /MRI Post OP Serial Ke 1</label>
          <div class="col-8">
          <select id="foto_ct_scan_mri_post_op_serial_ke_1" name="foto_ct_scan_mri_post_op_serial_ke_1" class="custom-select" aria-describedby="foto_ct_scan_mri_post_op_serial_ke_1HelpBlock">
              <option value=""></option>
          </select>
          <span id="foto_ct_scan_mri_post_op_serial_ke_1HelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_ct_scan_mri_post_op_serial_ke_1" class="col-4 col-form-label">Foto CT-Scan /MRI Post OP Serial Ke 2</label>
          <div class="col-8">
          <select id="foto_ct_scan_mri_post_op_serial_ke_1" name="foto_ct_scan_mri_post_op_serial_ke_1" class="custom-select" aria-describedby="foto_ct_scan_mri_post_op_serial_ke_1HelpBlock">
              <option value=""></option>
          </select>
          <span id="foto_ct_scan_mri_post_op_serial_ke_1HelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
      <div class="form-group row">
          <label for="foto_ct_scan_mri_post_op_serial_ke_1" class="col-4 col-form-label">Foto CT-Scan /MRI Post OP Serial Ke 3</label>
          <div class="col-8">
          <select id="foto_ct_scan_mri_post_op_serial_ke_1" name="foto_ct_scan_mri_post_op_serial_ke_1" aria-describedby="foto_ct_scan_mri_post_op_serial_ke_1HelpBlock" class="custom-select"></select>
          <span id="foto_ct_scan_mri_post_op_serial_ke_1HelpBlock" class="form-text text-muted"></span>
          </div>
      </div>
  </form>
</div>
`

Vue.component('form-4-1', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
