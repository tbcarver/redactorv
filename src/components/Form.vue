<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">

          <div class="card-group">
            <div class="card">
              <h5 class="card-title bg-secondary p-3">Key Words and Phases</h5>
              <div class="card-body">
                <p class="card-text">Separate by spaces or commas.<br>Use single or double quotes
                  for
                  phrases.</p>
              </div>
              <p class="m-2"><textarea :value="inputs['keywordsPhrases']" @input="update($event, 'keywordsPhrases')" class="w-100" style="min-height: 200px;"></textarea></p>
            </div>
            <div class="card">
              <h5 class="card-title bg-primary p-3">Document Text</h5>
              <div class="card-body">
                <p class="card-text">Document text to be redacted.</p>
              </div>
              <p class="m-2"><textarea :value="inputs['document']" @input="update($event, 'document')" class="w-100" style="min-height: 200px;"></textarea></p>
            </div>
            <div class="card">
              <h5 class="card-title bg-success p-3">Results</h5>
              <div class="card-body">
                <p class="card-text">{{ redacted }}</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce"

export default {
  name: 'Form',
   data() {
    return {
      inputs: {
        keywordsPhrases: "",
      document: ""}
    }
  },
  computed: {
    redacted () {
      return this.inputs["keywordsPhrases"] + this.inputs["document"]
    }
  },
  methods: {
    update:
      debounce(function(event, key) {
      this.inputs[key] = event.target.value;
    }, 300)
  }
}
</script>