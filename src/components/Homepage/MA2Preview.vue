<template>
    <article class="preview">
        <h2 class="preview__header">MacBook Air M2</h2>
        <router-link to="/product/macbook-air-m2">
            <button class="preview__btn default-btn">See product</button>
        </router-link>
    </article>
</template>

<script>
export default {
    name: "ZX7Preview"
}
</script>

<style lang="scss" scoped>

.preview {
    margin: 2.4rem auto;
    width: 32.7rem;
    border-radius: 0.8rem;
    background: url("../../assets/home/mobile/image-macbook-air-m2.jpg");
    padding: 10.1rem 0 10.1rem 2.4rem;
    background-position: center;
    background-size: cover;

    @media (min-width: 768px) {
        background: url("../../assets/home/tablet/image-macbook-air-m2.jpg");
        padding: 10.1rem 0 10.1rem 6.2rem;
        background-size: cover;
        background-position: center;
        width: 68.9rem;
    }

    @media (min-width: 1205px) {
        margin: 4.8rem auto;
        width: 111rem;
        padding: 10.1rem 0 10.1rem 9.5rem;
        background: url("../../assets/home/desktop/image-macbook-air-m2.jpg");
        background-size: cover;
        background-position: center;
    }

    &__header {
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 3.825rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
    }

    &__btn {
        margin-top: 3.2rem;
        background: none;
        color: black;
        border: 0.2rem solid black;
        transition: all 0.3s ease;

        &:hover{
            background: #e6c462;
            color: black;
        }
    }
}



</style>