<template>
  <Cart
    :show="showCart"
    :cart="cart"
    @change-quantity="changeQuantity"
    @empty-cart="emptyCart"
    @toggle-menu-show="toggleMenu"
  />
  <div 
  :class="[
    'wrapper',
    showCart ||  showConfirmation ? 'stop-scroll' : '',
  ]"
  >
    <router-view
      @toggle-menu-show="toggleMenu"
      @add-to-cart="addToCart"
      @empty-cart="emptyCart"
      :cart="cart"
      :showConfirmation="showConfirmation"

    />
    <Footer/>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
import Footer from './components/Footer.vue'
import data from './data.json'

export default {
  name: 'App',
  components: {
    Cart,
    Footer
  },
  data() {
    return {
      showCart: false,
      scrollTop: false,
      showConfirmation: false,
      cart: [],
      products: data
    }
  },
  methods: {
    toggleMenu(myVar) {
      if (myVar === "cart") {
        this.showCart = !this.showCart
      } else if (myVar === "confirmation") {
        this.showConfirmation = !this.showConfirmation;
      }
      this.scrollTop = !this.scrollTop
    },
    storeCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart))
    },
    addToCart(data) {
      let product = this.products.find(
        (product) => product.id === data.productId
      )

      if (this.cart.find((prod) => prod.id === product.id)) {
        const index = this.cart.findIndex((prod) => prod.id === product.id);
        this.cart[index] = {
          ...this.cart[index],
          addedQuantity: this.cart[index].addedQuantity + data.addedQuantity,
        }
      } else {
        product = { ...product, addedQuantity: data.addedQuantity}
        this.cart.push(product)
      }
      this.storeCart()
    },
    changeQuantity(data) {
      const index = this.cart.findIndex((prod) => prod.id === data.productId);
      if (data.operation === "subtract") {
        if (this.cart[index].addedQuantity === 1) {
          this.cart = this.cart
            .slice()
            .filter((prod) => prod.id !== data.productId);
        } else {
          this.cart[index] = {
            ...this.cart[index],
            addedQuantity: this.cart[index].addedQuantity - 1,
          };
        }
      } else if (data.operation === "add") {
        this.cart[index] = {
          ...this.cart[index],
          addedQuantity: this.cart[index].addedQuantity + 1,
        };
      }
      this.storeCart();
    },
    emptyCart() {
      this.cart = [];
      this.storeCart();
    }
  },

  created() {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify(this.cart))
    } 
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"))
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  &::-webkit-scrollbar{
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px grey;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb{
    background: #e6c462;
    border-radius: 1rem;
  }
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

.default-btn {
  background: #e6c462;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.776rem;
  letter-spacing: 0.1rem;
  border: none;
  padding: 1.5rem 3rem;
  transition: all 0.3s ease;
  
  &:hover{
  background: #ffffff;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.stop-scroll {
  max-height: calc(100vh - 9.1rem);
  overflow: hidden;
}

.toasting {
  color: white !important;
  background-color: rgb(64, 241, 64) !important;
}

</style>
