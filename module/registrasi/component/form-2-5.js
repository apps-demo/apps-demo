var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="row">
          <div class="col-6">
              <div class="form-group row">
                  <label for="text" class="col-4 col-form-label">Kepala</label>
                  <div class="col-8">
                    <input id="text" name="text" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text1" class="col-4 col-form-label">Mata</label>
                  <div class="col-8">
                    <input id="text1" name="text1" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text2" class="col-4 col-form-label">Hidung</label>
                  <div class="col-8">
                    <input id="text2" name="text2" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text3" class="col-4 col-form-label">Telinga</label>
                  <div class="col-8">
                    <input id="text3" name="text3" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text4" class="col-4 col-form-label">Mulut</label>
                  <div class="col-8">
                    <input id="text4" name="text4" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text5" class="col-4 col-form-label">Thorax</label>
                  <div class="col-8">
                    <input id="text5" name="text5" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text6" class="col-4 col-form-label">Abdomain</label>
                  <div class="col-8">
                    <input id="text6" name="text6" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text7" class="col-4 col-form-label">Extremitas</label>
                  <div class="col-8">
                    <input id="text7" name="text7" type="text" class="form-control">
                  </div>
                </div>
          </div>
          <div class="col-6"></div>
      </div>

    </form>
</div>
`

Vue.component('form-2-5', {
  template: templateVar,
  props: ['isShow'],
  data() {
    return {
    }
  },
  methods: {
  }
});
