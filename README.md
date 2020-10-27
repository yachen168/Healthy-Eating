# 呷呼健康 🍤

## 說明
這是一款簡易的個人飲食規劃紀錄工具，共由 3 位前端、1 位後端與 1 位設計師合作開發，支援手機、平板、桌機等裝置。一共串接 19 支 Restful API。

註冊並登入後始可開始使用，會員登入後可編輯個人資訊，例如生日、性別、修改密碼與上傳大頭照等。

會員在設定個人體重、每日飲食與飲水目標規劃後，即可紀錄每日體重、飲水量，以及每餐六大類營養攝取份數，使用者亦可透過圖表檢視每一週的飲水量、體重變化與缺乏的六大類營養。另外也提供日曆，highlight 有歷史紀錄的日期，讓使用者可以快速查詢歷史紀錄。



<br>

## 使用技術
- Sass
- Vue CLI
- Vue Router
- Vuex
- BootstrapVue
- Vue.js Datepicker
- Axios
- dayjs
- VeeValidate
- Chart.js、vue-chartjs
- vue-svg-loader
- vue-cropper
<br>

## 實現功能
- 註冊、登入、忘記密碼、修改密碼、登出。
- 設定個人每日營養規劃、飲水規劃。
- 可紀錄每日飲水量、早餐、午餐、點心、晚餐與宵夜的六大類營養攝取。
- 可紀錄每日體重。
- 若該日體重無紀錄，則顯示距離該日最近一次體重紀錄。
- 以淺綠色卡片提示使用者該項目未紀錄，深綠色代表該項目當日已紀錄。
- 在日曆上 highlight 有紀錄飲水 | 飲食 | 體重的日期。
- 點擊日曆上的任一日期，可進一步查看該日期的歷史紀錄。
- 可修改 2 日內的歷史紀錄。
- 可編輯個人資料，包括暱稱、性別、生日、體重與上傳大頭照等。
- 添加 loading，提高使用者體驗。
- 可透過圖表檢視每一週所缺乏的營養攝取、飲水量紀錄與體重變化。

<br>

## Demo

