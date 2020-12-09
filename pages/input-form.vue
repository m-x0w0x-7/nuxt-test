<template>
  <div class="contact-form">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      tag="form"
      @submit.prevent="submit()"
    >
      <div>
        <validation-input
          rules="required|max:4"
          labelMessage="お名前"
          inputType="number"
          formComponentName="name"
          placeHolderMessage="名前を入力してください"
          :inputValue.sync="inputName"
        />
      </div>
      <ValidationInput
        rules="required|email|max:256"
        labelMessage="メールアドレス"
        inputType="email"
        formComponentName="email"
        placeHolderMessage="メールアドレスを入力してください"
        :inputValue.sync="inputEmail"
      />
      <button type="submit" :disabled="invalid">
        Submit
      </button>
    </validation-observer>
  </div>
</template>
<script>
import ValidationInput from '@/components/ValidationInput'

export default {
  components: {
    ValidationInput
  },
  data() {
    return {
      inputName: '',
      inputEmail: '',
      inputMessage: ''
    }
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.inputName = ''
        this.inputEmail = ''
        this.inputMessage = ''
        requestAnimationFrame(() => {
          this.$refs.observer.reset();
        });
      }
    }
  }
}
</script>
