<template>
    <section class="about">
        <div class="about__image"></div>
        <div class="about__text">
            <h2 class="about__text__heading">
                Bringing you the <span>best</span> product
            </h2>
            <p class="about__text__description">
                Located at the heart of New York City, Z Shop is the premier store
                for high end Apple's products. Stop by our store
                to meet some of the fantastic people who make Z Shop the best place
                to buy Apple's products.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutSection"
}
</script>

<style lang="scss" scoped>

.about{
    margin: 12rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32.7rem;

    @media (min-width: 768px) {
        margin: 9.6rem auto;
        width: 68.9rem;
    }

    @media (min-width: 1205px) {
        width: 111rem;
        margin: 20rem auto;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    &__image {
        width: 100%;
        border-radius: 0.8rem;
        background: url("../../assets/shared/mobile/image-best-product.png");
        background-size: cover;
        background-position: top center;
        height: 30rem;

        @media (min-width: 768px) {
            background: url("../../assets/shared/tablet/image-best-product.png");
            background-size: cover;
            background-position: center;
        }

        @media (min-width: 1205px) {
            width: 54rem;
            height: 58.8rem;
            background: url("../../assets/shared/desktop/image-best-product.png");
            background-size: cover;
            background-position: center;
        }
    }

    &__text {
        @media (min-width: 1205px) {
            & * {
                text-align: left;
            }
        }

        &__heading {
            margin-top: 4rem;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 2.8rem;
            line-height: 3.825rem;
            letter-spacing: 0.1rem;

            @media (min-width: 768px) {
                font-size: 4rem;
                line-height: 4.4rem;
                letter-spacing: 0.143rem;
                width: 57.3rem;
                margin-top: 6.3rem;
            }

            @media (min-width: 1205px) {
                width: 44.5rem;
                margin-top: 0;
            }

            & span {
                color: #e6c462;
            }
        }

        &__description {
            margin-top: 3.2rem;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: black;

            @media (min-width: 768px) {
                width: 57.3rem;
            }

            @media (min-width: 1205px) {
                width: 48.5rem;
            }
        }
    }
}

</style>