import Vue from "vue"
// 使用する機能
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate"

// エラーメッセージの日本語化用
import ja from "vee-validate/dist/locale/ja.json"

// 使用するvalidate rule
import { required, max, min, email, numeric, regex, confirmed, alpha_num } from "vee-validate/dist/rules"
extend("required", required)
extend("email", email)
extend("max", max)
extend("min", min)
extend("numeric", numeric)
extend("regex", regex)
extend("confirmed", confirmed)
extend("alpha_num", alpha_num)


Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)
localize("ja", ja)
