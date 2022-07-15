<template>
  <TheGeneralSection>
    <template v-slot:sub-title> -Almost There </template>
    <template v-slot:title>Checkout</template>
    <template v-slot:checkout-steps>
      <TheCheckoutSteps />
    </template>

    <template v-slot:section-content>
        <TheStepLayout>
            <template v-slot:checkout-step>
                <TheStep1 />
            </template>

            <template v-slot:checkout-bill>
                <TheCheckoutBill />
            </template>
        </TheStepLayout>
    </template>
  </TheGeneralSection>
</template>

<script>
import TheGeneralSection from "../layouts/GeneralSectionLayout.vue";
import TheCheckoutBill from '../components/checkout/TheCheckoutBill.vue';

import TheCheckoutSteps from "../components/checkout/TheCheckoutSteps.vue";
import TheStepLayout from '../components/checkout/steps/TheStepLayout.vue';
import TheStep1 from '../components/checkout/steps/TheStep1.vue';
import TheStep2 from '../components/checkout/steps/TheStep2.vue';
import TheStep3 from '../components/checkout/steps/TheStep3.vue';
import TheStep4 from '../components/checkout/steps/TheStep4.vue';

export default {
  components: {
    TheGeneralSection,
    TheCheckoutBill,

    TheStepLayout,
    TheCheckoutSteps,
    TheStep1,
    TheStep2,
    TheStep3,
    TheStep4,
  },
};
</script>