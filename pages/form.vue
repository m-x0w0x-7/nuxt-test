<template>
  <section class="section">
    <div class="columns is-mobile">
      <validation-observer ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">
      <div class="field">
        <label class="label">お名前</label>
          <div class="control">
            <text-field-with-validation v-model="textValue" rules="required" fieldname="お名前" inputType="text" inputName="name" />
        </div>
      </div>
      <div class="field">
        <label class="label">メールアドレス</label>
          <div class="control">
            <text-field-with-validation v-model="emailValue" rules="required|email" fieldname="メールアドレス" inputType="email" inputName="email" inputVid="emailVid" />
            <p>メールアドレス：{{ emailValue }}</p>
        </div>
      </div>
      <div class="field">
        <label class="label">メールアドレス（確認）</label>
          <div class="control">
            <text-field-with-validation v-model="emailComfirmValue" rules="required|email|confirmed:emailVid" fieldname="メールアドレス（確認）" inputType="email" inputName="emailConfirm" />
            <p>メールアドレス：{{ emailComfirmValue }}</p>
        </div>
      </div>
      <div class="field">
        <label class="label">パスワード</label>
          <div class="control">
            <text-field-with-validation v-model="passwordValue" rules="required|min:8|alpha_num" fieldname="パスワード" :inputType="inputStatus" inputName="password" />
            <input type="checkbox" v-model="isChecked">表示する
        </div>
      </div>

      <div class="field">
        <select-form
          v-model="option1"
          :options="options1"
          placeholder="選択してください"
          fieldName="Selectbox"
          rules="required"
        />
        <p>select: {{ option1 }}</p>
      </div>

      <div class="field">
        <radio-form
          v-model="option2"
          :options="options2"
          field-name="Radio"
          rules="required"
        />
        <p>radio: {{ option2 }}</p>
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
import SelectForm from '@/components/SelectForm'
import RadioForm from '@/components/RadioForm'

export default {
  components: {
    TextFieldWithValidation,
    SelectForm,
    RadioForm
  },
  data () {
    return {
      textValue: '',
      emailValue: '',
      emailComfirmValue: '',
      passwordValue: '',
      passwordConfValue: '',
      isChecked: false,
      option1: '',
      options1: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
      ],
      option2: '',
      options2: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
        { label: 'Option 6', value: '6' },
        { label: 'Option 7', value: '7' },
        { label: 'Option 8', value: '8' },
      ]
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

<style scoped>
.is-danger {
  font-size: 14px;
  color: rgb(255, 138, 138);
}
.field {
  margin-bottom: 40px;
}
</style>
