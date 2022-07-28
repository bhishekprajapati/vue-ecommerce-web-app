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
                <p class="p2-r">{{ getUserEmail }}</p>

                <button @click="logout" type="button" class="btn btn-secondary" style="margin-top: 1rem; border-color: red;">Logout</button>
            </section>
        </template>
    </GeneralSectionLayout>
</template>

<script>
import store from "../store/index";
import GeneralSectionLayout from "../layouts/GeneralSectionLayout.vue";

export default {
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },
        getUserEmail() {
            return this.$store.getters.userEmail;
        }
    },
    watch: {
        isUserAuthenticated(newState, prevState) {
            if(!newState) this.$router.push({ name: 'home' });
        }
    },
    components: {
        GeneralSectionLayout,
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, from);
        if(!store.getters.isUserAuthenticated) next({ name: 'authentication' });
        else next();
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    }
}
</script>