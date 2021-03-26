// TS 无法识别.vue文件文件，此文件是告诉TS将.vue文件识别成Vue构造函数
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
