<template>
    <article class="preview">
        <div class="preview__thumbnail"></div>
        <div class="preview__text">
            <h2 class="preview__text__header">IPAD PRO M2</h2>
            <p class="preview__text__description">
                The new iPad Pro with the M2 chip, delivering the ultimate combination of portability,
                versatility, and unbelievable performance.
            </p>
            <router-link to="/product/ipad-pro-m2" class="preview__text__link">
                <button class="preview__text__link__btn default-btn">
                    See Product
                </button>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    name: "IPM2Preview"
}
</script>

<style lang="scss" scoped>

.preview {
    margin: 7rem auto 0 auto;
    width: 32.7rem;
    background: #9bd1cb;
    padding: 5.2rem 2.4rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (min-width: 768px) {
        margin-top: 6rem;
        width: 68.9rem;
    }

    @media (min-width: 1205px) {
        margin-top: 10rem;
        flex-direction: row;
        justify-content: center;
        width: 111rem;
    }

    * {
        text-align: center;
    }

    &__thumbnail {
        width: 22.225rem;
        height: 17.7rem;
        background: url("../../assets/home/mobile/image-ipad-pro.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        @media (min-width: 768px) {
            background: url("../../assets/home/tablet/image-ipad-pro.png");
            background-size: contain;
            background-repeat: no-repeat;
            width: 27.7rem;
            height: 20.7rem;
        }

        @media (min-width: 1205px) {
            background: url("../../assets/home/desktop/image-ipad-pro.png");
            background-size: contain;
            background-repeat: no-repeat;
            width: 41.023rem;
            height: 30.3rem;
            align-self: flex-end;
            position: relative;
        }
    }

    &__text {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 768px ) {
            width: 34.9rem;
        }

        @media (min-width: 1205px) {
            margin-left: 13.8rem;
            align-items: flex-start;
        }

        &__header {
            margin-top: 3.2rem;
            margin-bottom: 2.4rem;
            font-weight: 700;
            font-size: 3.6rem;
            line-height: 4rem;
            letter-spacing: 0.129rem;
            color: black;

            @media (min-width: 768px) {
                font-size: 5.6rem;
                line-height: 5.8rem;
                letter-spacing: 0.2rem;
                width: 26rem;
            }

            @media (min-width: 1205px) {
                text-align: left;
            }
        }

        &__description {
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: black;
            margin-bottom: 2.4rem;

            @media (min-width: 1205px) {
                text-align: left;
            }
        }

        &__link {
            &__btn {
                background: black;
                transition: all 0.3s ease;
                color: white;

                &:hover{
                    background: #f1f1f1;
                    color: black;
                }
            }
        }
    }
}

</style>