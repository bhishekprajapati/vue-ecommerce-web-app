<template>
    <GeneralSectionLayout>
        <template v-slot:sub-title>
            - welcome!
        </template>
        <template v-slot:title>
            Account
        </template>
        <template v-slot:section-content>
            <section class="th-card-bg" style="padding: 4%; border-radius: 1rem;">
                <h3 class="h3-sb">Email</h3>
                <p class="p2-r">{{ $store.getters.userEmail }}</p>

                <button type="button" class="btn btn-secondary" style="margin-top: 1rem; border-color: red;">Logout</button>
            </section>
        </template>
    </GeneralSectionLayout>
</template>

<script>
import store from "../store/index";
import GeneralSectionLayout from "../layouts/GeneralSectionLayout.vue";

export default {
    components: {
        GeneralSectionLayout,
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, from);
        if(!store.getters.isUserAuthenticated) next({ name: 'authentication' });
        else next();
    }    
}
</script>