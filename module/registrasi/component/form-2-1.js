var templateVar = `
<div class="card-body" v-show="isShow">
  <form>
      <div class="form-group">
          <label for="textarea">Riwayat Penyakit Sekarang</label>
          <textarea id="textarea" name="textarea" cols="40" rows="4"
              class="form-control"></textarea>
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
