<template>
              <li class="todo-item" :class="{'todo-item--done': todo.completed}" @click="toggleTodo">
            <div class="todo-item__status">
              <i class="bi bi-check2"></i>
            </div>
            <span class="todo-item__text" >{{ todo.text }}</span>
            <button class="todo-item__use-button fix" @click="editTodo">
              <i class="bi bi-pen-fill"></i>
            </button>
            <button class="todo-item__use-button remove" @click.stop="removeTodo">
              <i class="bi bi-trash3"></i>
            </button>
          </li>
</template>

<script lang="ts">
import type { Todo } from '@/types/TypeTodo';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true,
        }
     
    },
    methods: {
          toggleTodo() {
            this.$emit('toggleTodo', this.todo.id)
          },
          removeTodo() {
            this.$emit('removeTodo', this.todo.id)
          },
          editTodo(){
            this.$emit('editTodo', this.todo)
          }
        },
        emits: {
          toggleTodo: (id: number) => Number.isInteger(id),
          removeTodo: (id: number) => Number.isInteger(id),
          editTodo: (editTodo: Todo) => editTodo,
        }
})
</script>