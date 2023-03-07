<template>
    <Header  @toggle-menu-show="$emit('toggle-menu-show', $event)"/>
    <main>
        <section class="categories">
            <Category product="iphone" />
            <Category product="macbook" />
            <Category product="ipad" />
        </section>
        <IPM2Preview/>
        <MA2Preview />
        <I14PMPreview/>
        <AboutSection/>
    </main>
</template>
  
<script>
import Header from '../components/Homepage/Header.vue'
import Category from '../components/Homepage/Category.vue'
import I14PMPreview from '../components/Homepage/I14PMPreview.vue';
import IPM2Preview from '@/components/Homepage/IPM2Preview.vue';
import MA2Preview from '@/components/Homepage/MA2Preview.vue';
import AboutSection from '@/components/Homepage/AboutSection.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Category,
        MA2Preview,
        I14PMPreview,
        IPM2Preview,
        AboutSection
    },
    emits: ["toggle-menu-show"]
}
</script>
  
<style lang="scss" scoped>

.categories {
    padding: 9.2rem 2.4rem 0 2.4rem;

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        padding: 9.6rem 4rem 0 4rem;
    }

    @media (min-width: 1205px) {
        padding: 12rem 16.5rem 0 16.5rem;
    }
}
</style>
  