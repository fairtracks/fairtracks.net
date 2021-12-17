<template>
  <v-dialog v-model="show">
    <v-card>
      <slot></slot>

      <v-col align-self="end" cols="12" class="simplebutton">
        <v-row
          no-gutters
          :class="buttons.length == 1 ? 'justify-end' : 'justify-space-between'"
        >
          <v-col
            v-for="(button, b_index) in buttons"
            :key="'s_' + b_index"
            cols="auto"
            class="pa-0 ma-0"
            align-self="end"
          >
            <UiStyledButton
              :id="'btn_' + b_index"
              class="text-weight-light"
              :href="button.link"
              :text="button.text"
              @btn-click="button.link ? null : (show = false)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

