var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group">
          <label for="textarea">Riwayat Penyakit Sekarang</label>
          <textarea id="textarea" name="textarea" cols="40" rows="4"
              class="form-control"></textarea>
      </div>
      <div class="form-group">
          <label>Keluhan Kedua Sesuai Kronologis</label>
          <div>
              <div class="custom-controls-stacked">
                  <div class="custom-control custom-checkbox">
                      <input name="checkbox" id="checkbox_0" type="checkbox"
                          class="custom-control-input" value="">
                      <label for="checkbox_0" class="custom-control-label">Nyeri
                          Punggung bawah menjajar</label>
                  </div>
              </div>
              <div class="custom-controls-stacked">
                  <div class="custom-control custom-checkbox">
                      <input name="checkbox" id="checkbox_1" type="checkbox"
                          class="custom-control-input" value="">
                      <label for="checkbox_1" class="custom-control-label">Nyeri pada
                          tulang belakang</label>
                  </div>
              </div>
              <div class="custom-controls-stacked">
                  <div class="custom-control custom-checkbox">
                      <input name="checkbox" id="checkbox_2" type="checkbox"
                          class="custom-control-input" value="">
                      <label for="checkbox_2"
                          class="custom-control-label">Monoparese/Paraparese (kekuatan
                          motorik berapa?)</label>
                  </div>
              </div>
              <div class="custom-controls-stacked">
                  <div class="custom-control custom-checkbox">
                      <input name="checkbox" id="checkbox_3" type="checkbox"
                          class="custom-control-input" value="">
                      <label for="checkbox_3" class="custom-control-label">Mati rasa
                          pada kedua tungkai</label>
                  </div>
              </div>
              <div class="custom-controls-stacked">
                  <div class="custom-control custom-checkbox">
                      <input name="checkbox" id="checkbox_4" type="checkbox"
                          class="custom-control-input" value="">
                      <label for="checkbox_4" class="custom-control-label">Tidak dapat
                          menahan BAK dan BAB</label>
                  </div>
              </div>
          </div>
      </div>
  </form>
</div>
`

Vue.component('form-2-1', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
