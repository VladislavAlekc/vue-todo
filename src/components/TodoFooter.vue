<template>
    <footer class="app-footer">{{ count.active }} more to do, {{count.done}} done</footer>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export interface Count {
active: number,
done: number,
}

export default defineComponent({
    props:{
        count: {
            type: Object as PropType<Count>,
                required: true
        }
    }
})
</script>