var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group">
          <label>Keluhan Utama Sesuai Kronologis</label>
          <div class="row">
              <div class="col-6">
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_0" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_0" class="custom-control-label">Nyeri
                              Kepala kronis progresif</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_1" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_1" class="custom-control-label">Muntah
                              proyektil</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_2" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_2"
                              class="custom-control-label">Vertigo</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_3" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_3" class="custom-control-label">Parese
                              N. VII</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_4" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_4"
                              class="custom-control-label">Tuli</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_5" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_5"
                              class="custom-control-label">Penurunan Visus</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_6" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_6"
                              class="custom-control-label">Anosmia</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_7" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_7"
                              class="custom-control-label">Hemianospia
                              Bitemporal</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_8" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_8"
                              class="custom-control-label">Diplopia</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_9" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_9"
                              class="custom-control-label">Nistagmus</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_10" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_10"
                              class="custom-control-label">Penurunan Kesadaran</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_11" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_11"
                              class="custom-control-label">Kejang</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_12" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_12"
                              class="custom-control-label">Hemiparese</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_13" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_13"
                              class="custom-control-label">Proptosis</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_14" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_14" class="custom-control-label">Parese
                              N. III, IV, VI</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_15" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_15"
                              class="custom-control-label">Perubahan
                              Kepribadian</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_16" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_16" class="custom-control-label">Afasia
                              (Broca, Wernicke, Transkortikal
                              Sensorik/Motorik/Global)</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_17" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_17"
                              class="custom-control-label">Inkontinesia Uri &
                              Alvi</label>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_18" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_18" class="custom-control-label">Nyeri
                              Punggung bawah menjajar</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_19" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_19" class="custom-control-label">Nyeri
                              pada tulang belakang</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_20" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_20"
                              class="custom-control-label">Monoparese/Paraparese
                              (kekuatan motorik berapa?)</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_21" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_21" class="custom-control-label">Mati
                              rasa pada kedua tungkai</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_22" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_22" class="custom-control-label">Tidak
                              dapat menahan BAK dan BAB</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_23" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_23"
                              class="custom-control-label">Ginekomasia</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_24" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_24"
                              class="custom-control-label">Galaktorrhea</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_25" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_25"
                              class="custom-control-label">Hipertiroidisme</label>
                      </div>
                  </div>
                  <div class="custom-controls-stacked">
                      <div class="custom-control custom-checkbox">
                          <input name="checkbox" id="checkbox_26" type="checkbox"
                              class="custom-control-input" value="">
                          <label for="checkbox_26"
                              class="custom-control-label">Keluhan lain:</label>
                      </div>
                      <input id="text" name="text" type="text" class="form-control">
                  </div>
              </div>

          </div>
      </div>
  </form>
</div>
`

Vue.component('form-2-0', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
