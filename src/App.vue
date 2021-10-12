<template>
  <div id="app">

    <div class="bg-dark">
      <div class="container text-white">
        <div class="row">
          <div class="col">
            <h1>Redactorv</h1>
          </div>
        </div>
      </div>
    </div>

    <main>
      <Form />
    </main>
  
  </div>
</template>

<script>
import Form from "./components/Form.vue"

export default {
  name: "App",
  components: {
    Form
  }
}
</script>
