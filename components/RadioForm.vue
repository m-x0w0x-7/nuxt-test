<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="fieldName"
  >
    <div>
      <div v-for="(item, i) in options" :key="i">
        <label>
          <input
            :id="`option-${item.value}`"
            v-model="innerValue"
            :name="fieldName"
            :value="item.value"
            type="radio"
          />
          <span>{{ item.label }}</span>
        </label>
      </div>
    </div>

    <p v-show="errors.length">
      {{ errors[0] }}
    </p>
  </validation-provider>
</template>

<script>
export default {
  props: {
    rules: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
  },
  computed: {
    innerValue: {
      get () {
        return this.$props.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
