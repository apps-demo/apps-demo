var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="row">
          <div class="col-6">
              <div class="form-group row">
                  <label for="text1" class="col-4 col-form-label">Registrasi</label>
                  <div class="col-8">
                      <input id="text1" name="text1" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-4 col-form-label" for="text">NO. RM</label>
                  <div class="col-8">
                      <input id="text" name="text" type="text" class="form-control"
                          required="required">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text2" class="col-4 col-form-label">Nama Lengkap</label>
                  <div class="col-8">
                      <input id="text2" name="text2" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text3" class="col-4 col-form-label">Tanggal
                      Lahir</label>
                  <div class="col-8">
                      <input id="text3" name="text3" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-4">Jenis Kelamin</label>
                  <div class="col-8">
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_0" type="radio"
                              class="custom-control-input" value="Laki-laki">
                          <label for="radio_0"
                              class="custom-control-label">Laki-laki</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_1" type="radio"
                              class="custom-control-input" value="Perempuan">
                          <label for="radio_1"
                              class="custom-control-label">Perempuan</label>
                      </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="textarea" class="col-4 col-form-label">Alamat</label>
                  <div class="col-8">
                      <textarea id="textarea" name="textarea" cols="40" rows="3"
                          class="form-control"></textarea>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text4" class="col-4 col-form-label">Tgl Masuk RS</label>
                  <div class="col-8">
                      <input id="text4" name="text4" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="select" class="col-4 col-form-label">Jenis
                      Pembayaran</label>
                  <div class="col-8">
                      <select id="select" name="select" class="custom-select">
                          <option value="">Umum</option>
                          <option value="">Asuransi</option>
                          <option value="">BPJS</option>
                      </select>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="select1" class="col-4 col-form-label">DPJP</label>
                  <div class="col-8">
                      <select id="select1" name="select1" class="custom-select">
                          <option value="">dr. Sandhi Arif</option>
                          <option value="">dr. Suryono</option>
                          <option value="">dr. Iriawan</option>
                          <option value="">dr. Tio Sani</option>
                      </select>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="select2" class="col-4 col-form-label">PPDS</label>
                  <div class="col-8">
                      <select id="select2" name="select2" class="custom-select">
                          <option value="">dr. Fatiha</option>
                          <option value="">dr. Nurul Sani</option>
                          <option value="">dr. Firmansya</option>
                          <option value="">dr. Adnan</option>
                      </select>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="select3" class="col-4 col-form-label">Diagnosa</label>
                  <div class="col-8">
                      <select id="select3" name="select3" class="custom-select">
                          <option value="">A</option>
                          <option value="">B</option>
                          <option value="">C</option>
                      </select>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text5" class="col-4 col-form-label">Kode ICD-X</label>
                  <div class="col-8">
                      <input id="text5" name="text5" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="select4" class="col-4 col-form-label">Status
                      Pasien</label>
                  <div class="col-8">
                      <select id="select4" name="select4" class="custom-select">
                          <option value="">PRE</option>
                          <option value="">POST</option>
                          <option value="">PLAN</option>
                      </select>
                  </div>
              </div>
          </div>

          <div class="col-6">
              <div class="form-group row">
                  <label for="text6" class="col-4 col-form-label">Komplikasi</label>
                  <div class="col-8">
                      <input id="text6" name="text6" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text7" class="col-4 col-form-label">Penanganan
                      Komplikasi</label>
                  <div class="col-8">
                      <input id="text7" name="text7" type="text" class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text8" class="col-4 col-form-label">Tgl Keluar
                      RS</label>
                  <div class="col-8">
                      <input id="text8" name="text8" type="text" class="form-control">
                  </div>
              </div>
              <div>
                  <button class="btn btn btn-primary" @click="gotoForm('FORM_2_0')">KLINIS</button>
                  <br><br>
              </div>
              <div class="form-group row">
                  <label for="text9" class="col-4 col-form-label">Lab Darah</label>
                  <div class="col-8">
                      <input id="text9" name="text9" type="file" class="form-control">
                  </div>
              </div>
              <div>
                  <button class="btn btn btn-primary" @click="gotoForm('FORM_3_0')">RADIOLOGI</button>
                  <br><br>
              </div>
              <div class="form-group row">
                  <label for="text10" class="col-4 col-form-label">Lab
                      Mikrobiologi</label>
                  <div class="col-8">
                      <input id="text10" name="text10" type="file"
                          class="form-control">
                  </div>
              </div>
              <div>
                  <button class="btn btn btn-primary" @click="gotoForm('FORM_4_0')">OPERASI</button>
                  <br><br>
              </div>
              <div class="form-group row">
                  <label for="text11" class="col-4 col-form-label">Lab Patologi
                      Anatomi</label>
                  <div class="col-8">
                      <input id="text11" name="text11" type="file"
                          class="form-control">
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text12" class="col-4 col-form-label">Klip Video Durante
                      OP</label>
                  <div class="col-8">
                      <input id="text12" name="text12" type="file"
                          class="form-control">
                  </div>
              </div>
              <div>
                  <button class="btn btn btn-primary" @click="gotoForm('FORM_5_0')">KLINIS SETELAH OP</button>
                  <br><br>
              </div>
              <div class="form-group row">
                  <label for="select5" class="col-4 col-form-label">Kondisi klinis
                      pasien saat keluar RS</label>
                  <div class="col-8">
                      <select id="select5" name="select5" class="custom-select">
                          <option value="">Membaik</option>
                          <option value="">Tidak ada perubahan</option>
                          <option value="">Mengalami Kecacatan/Sequelae</option>
                          <option value="">Meninggal Dunia</option>
                      </select>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="select6" class="col-4 col-form-label">Cara pasien keluar
                      dari RS</label>
                  <div class="col-8">
                      <select id="select6" name="select6" class="custom-select">
                          <option value="">Dirujuk</option>
                          <option value="">Dipulangkan</option>
                          <option value="">ARS</option>
                      </select>
                  </div>
              </div>
          </div>
      </div>
  </form>
</div>
`

Vue.component('form-1', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
    gotoForm(formSection) {
      this.$emit("goto-form", formSection);
    },
  }
});
