let vm = Vue.createApp({
  
})

vm.component('hello', {
  data(){
    return {
      message: 'Hello world'
    }
  },
  template: `<h1>{{message}}</h1>`
})

vm.mount('#app')

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   template: `{{message}}`,
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount("#app2")