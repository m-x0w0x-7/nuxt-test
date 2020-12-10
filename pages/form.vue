<template>
  <section class="section">
    <div class="columns is-mobile">
      <validation-observer ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">
      <div class="field">
        <label class="label">お名前</label>
          <div class="control">
            <text-field-with-validation v-model="textValue" rules="required" fieldname="お名前" inputType="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">メールアドレス</label>
          <div class="control">
            <text-field-with-validation v-model="emailValue" rules="required|email" fieldname="メールアドレス" inputType="email" />
        </div>
      </div>
      <div class="field">
        <label class="label">パスワード</label>
          <div class="control">
            <text-field-with-validation v-model="passwordValue" rules="required" fieldname="パスワード" :inputType="inputStatus" />
            <input type="checkbox" v-model="isChecked">表示する
        </div>
      </div>
      <div class="field">
          <div class="control">
            <button class="button is-link" :disabled="invalid">送信する</button>
            <p v-show="invalid" class="help is-danger">
             全ての必須項目を入力すると「新規追加」ボタンが有効化されます。
            </p>
        </div>
      </div>
    </validation-observer>
    </div>
  </section>
</template>

<script>
import TextFieldWithValidation from '@/components/TextFieldWithValidation'

export default {
  components: {
    TextFieldWithValidation
  },
  data () {
    return {
      textValue: '',
      emailValue: '',
      passwordValue: '',
      isChecked: false,
    }
  },
  computed: {
    inputStatus: function() {
      return this.isChecked ? "text" : "password";
    }
  },
  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        // バリデーションが通る前に送信ボタンがクリックされた場合の処理
      }
       // バリデーションが通っている状態で送信ボタンがクリックされた場合の処理
       // フォーム送信などの処理完了後、以下のリセットを呼び出す。
       requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
