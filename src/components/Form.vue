<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="card-group">
          <div class="card">
            <h5 class="card-title bg-secondary p-3">Key Words and Phases</h5>
            <p class="p-3 pb-0 mb-0">
              Separate by spaces or commas.<br />Use single or double quotes for
              phrases.
            </p>
            <div class="card-body">
              <textarea
                :value="inputs['keywordsPhrases']"
                @input="update($event, 'keywordsPhrases')"
                class="w-100 h-100"
                style="min-height: 200px"
              ></textarea>
            </div>
          </div>
          <div class="card">
            <h5 class="card-title bg-primary p-3">Document Text</h5>
            <p class="p-3 pb-0 mb-0">
              Document text to be redacted.<br /><br />
            </p>
            <div class="card-body">
              <textarea
                :value="inputs['document']"
                @input="update($event, 'document')"
                class="w-100 h-100"
                style="min-height: 200px"
              ></textarea>
            </div>
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
import redactor from "../redactor";
import debounce from "lodash.debounce";

export default {
  name: "Form",
  data() {
    return {
      inputs: {
        keywordsPhrases: "",
        document: "",
      },
    };
  },
  computed: {
    redacted() {
      return redactor.redact(
        this.inputs["keywordsPhrases"],
        this.inputs["document"]
      );
    },
  },
  methods: {
    update: debounce(function (event, key) {
      this.inputs[key] = event.target.value;
    }, 500),
  },
};
</script>