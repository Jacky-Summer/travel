let defaultCity = '深圳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default {
  city: defaultCity
}
