<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__content__first-line">
                <img
                src="../assets/shared/desktop/z.png"
                alt="audiophile logo"
                class="footer__content__first-line__logo"/>
                <ul class="footer__content__first-line__link-list">
                    <li class="footer__content__first-line__link-list__link">
                        <router-link @click="scrollToTop" to="/">Home</router-link>
                    </li>
                    <li class="footer__content__first-line__link-list__link">
                        <router-link @click="scrollToTop" to="/category/iphone">Iphone</router-link>
                    </li>
                    <li class="footer__content__first-line__link-list__link">
                        <router-link @click="scrollToTop" to="/category/macbook">Macbook</router-link>
                    </li>
                    <li class="footer__content__first-line__link-list__link">
                        <router-link @click="scrollToTop" to="/category/ipad">Ipad</router-link>
                    </li>
                </ul>
            </div>
            <p class="footer__content__text">
                Z shop is an all in one stop to fulfill your product. 
                Come and visit Z shop - we’re open 6 days a week.
            </p>
            <div class="footer__content__section">
                <ul class="footer__content__section__social-media-links">
                    <li class="footer__content__section__social-media-links__link">
                        <router-link to="#">
                            <i>
                                <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                            </i>
                        </router-link>
                    </li>
                    <li class="footer__content__section__social-media-links__link">
                        <router-link to="#">
                            <i>
                                <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                            </i>
                        </router-link>
                    </li>
                    <li class="footer__content__section__social-media-links__link">
                        <router-link to="#">
                            <i>
                                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                            </i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>

.footer{
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start;
        padding: 0 4rem 4.6rem 4rem;
    }

    * {
        color: white;
        text-align: center;  
    }

    &__content{
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: 768px) {
            margin: 0 auto;
            width: 68.9rem;
            align-items: flex-start;
        }

        @media (min-width: 1205px) {
            width: 111rem;
        }


        &__first-line {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;


            @media (min-width: 768px) {
                align-items: flex-start;
            }

            @media (min-width: 1205px) {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-top: 6.1rem;
            }

            &__logo {
                width: 7rem;
                height: 7rem;
                margin: 4.8rem 0;
        
                @media (min-width: 768px) {
                  margin: 5.6rem 0 3.2rem 0;
                }
        
                @media (min-width: 1205px) {
                  margin: 0;
                }
            }
            
            &__link-list {
                @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                }

                &__link {
                    margin-bottom: 1.6rem;
                    font-weight: 700;
                    font-size: 1.3rem;
                    line-height: 2.5rem;
                    letter-spacing: 0.2rem;
                    text-transform: uppercase;

                    * {
                        transition: all 0.3s ease;
                    }

                    @media (min-width: 768px) {
                        margin: 0;
                        margin-right: 3.4rem;
                    }

                    &:hover *{
                        color: #e6c462;
                    }

                    &:last-child {
                        margin-bottom: 0;
                        margin-right: 0;
                    }
                }
            }
        }

        &__text {
            margin: 4.8rem auto;
            color: #808080;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 2.5rem;
            width: 32.7rem;

            @media (min-width: 768px) {
                text-align: left;
                margin: 3.2rem 0 8rem 0;
                width: 68.9rem;
            }

            @media (min-width: 1205px) {
                width: 37rem;
            }
        }

        &__section{
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (min-width: 768px) {
                width: 100%;
            }

            &__social-media-links {
                display: flex;
                align-items: center;
                margin: 4.8rem 0 3.8rem 0;

                @media (min-width: 768px) {
                    margin: 0;
                }

                &__link {
                    margin-right: 1.6rem;

                    & i {
                        transition: all 0.3 ease;
                        font-size: 1.6rem;

                        .icon:hover {
                            color: #e6c462;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>