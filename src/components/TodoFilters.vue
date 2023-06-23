<template>
       <aside class="app-filters">
        <section class="toggle-group">
          <button v-for="filter in filters" :key="filter" class="button" :class="{'button--primary' : activeFilter === filter}" @click="setFilter(filter)">{{filter}}</button>
        </section>
      </aside>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {Filtr} from "../types/Filter.ts";
interface State {
  filters: Filtr[]
}

export default defineComponent({
  props: {
    activeFilter: {
      type: String as PropType<Filtr>,
      required: true,
    }
  },
  data(): State { 
    return{
      filters: ['All', 'Active', 'Done']
    }
  },
  methods: {
    setFilter(filter: Filtr) {
 this.$emit('setFilter', filter)
    }
  },
  emits: {
    setFilter: (filter: Filtr) => filter
  }
})
</script>