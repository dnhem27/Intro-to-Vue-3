const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            isOnSale: true,
            selectedItemIndex: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            inventory: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    computed: {
        title() {
            return (this.isOnSale ? this.brand + " " + this.product + " is on sale" : this.brand + " " + this.product)
        },
        image() {
            return this.inventory[this.selectedItemIndex].image
        },
        inStock() {
            return this.inventory[this.selectedItemIndex].quantity
        },
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        getItemIndex(itemIndex) {
            this.selectedItemIndex =  itemIndex
        }
    }
})
