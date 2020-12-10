<template>
  <validation-provider v-slot="{ errors }" :rules="rules" :name="fieldname" :vid="inputVid">
    <input
       v-model="innerValue"
      :placeholder="fieldname"
      :type="inputType"
      :name="inputName"
    />
    <p v-show="errors.length" class="help is-danger">
      {{ errors[0] }}
    </p>
  </validation-provider>
</template>

<script>
export default {
  name: 'TextFieldWithValidation',
  props: {
    rules: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    fieldname: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    inputVid: {
      type: String,
      required: false
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
