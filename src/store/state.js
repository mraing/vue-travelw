
// 防止某些浏览器禁用本地存储功能，而导致报错，需要使用错误引导
let defaultCity = '长沙'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default {
  city: defaultCity
}
