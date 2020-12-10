<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="fieldName"
  >
    <select
      v-model="innerValue"
      :name="fieldName"
      @change="selected = true"
    >
      <option value selected disabled hidden>
        {{ placeholder }}
      </option>
      <option v-for="(item, i) in options" :key="i" :value="item.value">
        {{ item.label }}
      </option>
    </select>

    <p v-show="errors.length" class="help is-danger">
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
    placeholder: {
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
