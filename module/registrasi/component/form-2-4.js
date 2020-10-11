var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="row">
          <div class="col-6">
              <div class="form-group row">
                  <label for="select5" class="col-4 col-form-label">Kesadaran
                      Kualitatif</label>
                  <div class="col-8">
                      <select id="select5" name="select5" class="custom-select">
                          <option value="">Compos Mentis</option>
                          <option value="">Somnolen</option>
                          <option value="">Sopor</option>
                          <option value="">Koma</option>
                      </select>
                  </div>
              </div>
          </div>
          <div class="col-6">
              <label for="kuantitatif">Kuantitatif</label>
              <div class="form-group row">
                  <label class="col-4">Eye</label>
                  <div class="col-8">
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_0" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio_0" class="custom-control-label">1</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_1" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio_1" class="custom-control-label">2</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_2" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio_2" class="custom-control-label">3</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_3" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio_3" class="custom-control-label">4</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio" id="radio_4" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio_4" class="custom-control-label">5</label>
                      </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-4">Verbal</label>
                  <div class="col-8">
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio1" id="radio1_0" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio1_0" class="custom-control-label">1</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio1" id="radio1_1" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio1_1" class="custom-control-label">2</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio1" id="radio1_2" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio1_2" class="custom-control-label">3</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio1" id="radio1_3" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio1_3" class="custom-control-label">4</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio1" id="radio1_4" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio1_4" class="custom-control-label">5</label>
                      </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-4">Motorik</label>
                  <div class="col-8">
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio2" id="radio2_0" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio2_0" class="custom-control-label">1</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio2" id="radio2_1" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio2_1" class="custom-control-label">2</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio2" id="radio2_2" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio2_2" class="custom-control-label">3</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio2" id="radio2_3" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio2_3" class="custom-control-label">4</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input name="radio2" id="radio2_4" type="radio"
                              class="custom-control-input" value="">
                          <label for="radio2_4" class="custom-control-label">5</label>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-6">
              <strong>Vital Sign</strong>
              <br>
              <br>
              <div class="form-group row">
                  <label for="text1" class="col-4 col-form-label">Tensi Darah</label>
                  <div class="col-8">
                      <div class="input-group">
                          <input id="text1" name="text1" type="text"
                              class="form-control">
                          <div class="input-group-append">
                              <div class="input-group-text">mmHg</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text2" class="col-4 col-form-label">Denyut Nadi</label>
                  <div class="col-8">
                      <div class="input-group">
                          <input id="text2" name="text2" type="text"
                              class="form-control">
                          <div class="input-group-append">
                              <div class="input-group-text">X/menit</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text3" class="col-4 col-form-label">Frekuensi
                      Nafas</label>
                  <div class="col-8">
                      <div class="input-group">
                          <input id="text3" name="text3" type="text"
                              class="form-control">
                          <div class="input-group-append">
                              <div class="input-group-text">X/menit</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="text4" class="col-4 col-form-label">Suhu Tubuh</label>
                  <div class="col-8">
                      <div class="input-group">
                          <input id="text4" name="text4" type="text"
                              class="form-control">
                          <div class="input-group-append">
                              <div class="input-group-text">C</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-6"></div>
      </div>
  </form>
</div>
`

Vue.component('form-2-4', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
