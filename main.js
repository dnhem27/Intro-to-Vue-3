const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id, methodName) {
            if (methodName === "add") {
                this.cart.push(id)
            }
            if (methodName === "remove") {
                this.cart.splice(this.cart.indexOf(id), 1)
            }
        }

    }
})
