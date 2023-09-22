<template>
  <div class="mb-20">
    <DetailSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailSection from "@/components/details/DetailSection.vue";
import { useCarsStore } from '@/store/cars.store';

export default defineComponent({
    components: {
        DetailSection,
    },
    data() {
        return {};
    },
});
</script>
