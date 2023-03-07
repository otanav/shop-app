<template>
    <Header :category="category" 
    @toggle-menu-show="$emit('toggle-menu-show', $event)"
    />
    <Product 
    v-for="product in sortedProducts"
    :key="product.id"
    :product="product"
    />
    <ProductPageNavigation/>
</template>
  
<script>
import ProductPageNavigation from '@/components/ProductPageNavigation.vue';
import Header from '@/components/CategoryPage/Header.vue';
import Product from '@/components/CategoryPage/Product.vue';
import data from "../data.json"
  
export default {
    name: 'CategoryPage',
    components: {
        ProductPageNavigation,
        Header,
        Product
    },
    emits: ["toggle-menu-show"],
    data() {
        return {
            products: data
        }
    },
    computed: {
        category() {
            return this.$route.params.category;
        },
        iphone() {
            return this.products.filter(
                (product) => product.category === "iphone"
            )
        },
        macbook() {
            return this.products.filter(
                (product) => product.category === "macbook"
            )
        },
        ipad() {
            return this.products.filter(
                (product) => product.category === "ipad"
            )
        },
        currentProducts() {
            return this.category === "iphone"
            ? this.iphone
            : this.category === "macbook"
            ? this.macbook
            :this.ipad
        },
        sortedProducts() {
            return this.currentProducts.slice().sort((a,b) => b.new - a.new)
        }
    }
}
</script>
  
<style lang="scss" scoped>
  
</style>
  