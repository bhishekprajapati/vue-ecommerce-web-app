<template>
    <GeneralSectionLayout>
        <template v-slot:sub-title>-Our Products</template>
        <template v-slot:title>Explore Our Products</template>
        <template v-slot:section-content>
            <ProductGrid />
        </template>
    </GeneralSectionLayout>
</template>

<script>
import GeneralSectionLayout from '../../layouts/GeneralSectionLayout.vue';
import ProductGrid from '../products/ProductGrid.vue';

export default {
    components: {
        GeneralSectionLayout,
        ProductGrid
    }    
}
</script>