<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="labelMessage"
  >
    <div class="container">
      <label :for="formComponentName">
        {{ labelMessage }}:
      </label>
      <input
        :id="formComponentName"
        v-model="inputValueModel"
        :type="inputType"
        :name="formComponentName"
        :placeholder="placeHolderMessage"
      />
      <!-- 入力値と最大文字数を親Componentで扱えるようにする -->
      <slot :inputValue="inputValue" />
      <p v-show="errors.length">
        {{ errors[0] }}
      </p>
    </div>
  </validation-provider>
</template>
<script>
export default {
  props: {
    rules: {
      type: String,
      required: true
    },
    labelMessage: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    formComponentName: {
      type: String,
      required: true
    },
    placeHolderMessage: {
      type: String,
      required: true
    },
    inputValue: {
      type: String,
      required: true
    }
  },
  computed: {
    inputValueModel: {
      get() {
        return this.$props.inputValue
      },
      set(val) {
        this.$emit('update:inputValue', val)
      }
    }
  }
}
</script>
