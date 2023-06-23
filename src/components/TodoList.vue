<template>
    <ul class="todo-list">
       <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-todo="toggleTodo" @remove-todo="removeTodo" @edit-todo="editTodo"/>

        </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import TodoItem from './TodoItem.vue'; 
import type { Todo } from '@/types/TypeTodo';

export default defineComponent({
  components: {
    TodoItem,
  },
  props: {
todos: {
  type: Array as PropType<Todo[]>
}
  },

  methods: {
    toggleTodo(id: number) {
    this.$emit('toggleTodo', id)
    },
    removeTodo(id: number) {
      this.$emit('removeTodo', id)
  },
   editTodo(todo: Todo){
      this.$emit('editTodo', todo)
   }
 
},
emits: {
  toggleTodo: (id: number) => Number.isInteger(id),
  removeTodo: (id: number) => Number.isInteger(id),
  editTodo: (editTodo: Todo) => editTodo,
}
})
</script>