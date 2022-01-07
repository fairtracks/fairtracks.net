<template>
  <vue-if-bot>
    <footer>
      <cookie-law
        class="secondary grey--text text--lighten-1"
        button-text="Accept"
        button-class="v-btn v-size--large white black--text"
        storage-type="cookies"
      >
        <div slot="message">
          This website uses cookies to ensure you get the best experience on our
          website.
          <a href="https://elixir-oslo.github.io/gdpr/">
            Read more about your privacy and our terms of service .
          </a>
        </div>
      </cookie-law>
    </footer>
  </vue-if-bot>
</template>
