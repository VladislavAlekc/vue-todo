<template>
    <header class="app-header">
         <span class="logo">TODOS</span>
       </header>
       <TodoFilters :active-filter="activeFilter" @set-filter="setFilter"/>
       <main class="app-main">
         <TodoList :todos="filterTodo" @toggle-todo="toggleTodo" @remove-todo="removeTodo" @edit-todo="editTodo"/>
         <TodoAdd @add-event="addEvent" @edit-todo="editTodo"/>
       </main>
      <TodoFooter :count="count"/>

 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import TodoFilters from '../components/TodoFilters.vue';
 import TodoFooter, { type Count } from '../components/TodoFooter.vue';
 import TodoList from '../components/TodoList.vue'; 
 import TodoAdd from '../components/TodoAdd.vue'; 
 import type { Filtr } from '../types/Filter';
 import type { Todo } from '../types/TypeTodo';
 
 
 interface State {
   todos: Todo[],
   activeFilter: Filtr,
 }
 
 export default defineComponent({
 components: {
   TodoFilters,
   TodoList,
   TodoAdd,
   TodoFooter,
 },
 data(): State {
     return {
       todos: [
         {id: 0, completed: true,  text: 'Makes Todo list'},
         {id: 1, completed: false,  text: 'Makes Routers'},
         {id: 2, completed: false,  text: 'Save to LocalStorage'},
        
       ],
       activeFilter: 'All'
     }
     
   },
   async mounted(){
     const data = await localStorage.getItem('todos')
     if(data){
       this.todos = JSON.parse(data)
     }
    
   },
 
   computed: {
 filterTodo(): Todo[] {
       switch (this.activeFilter) {
         case 'Active':
           return this.activeTodos
         case 'Done':
           return this.activeDone
         case 'All':
         default:
           return this.todos
       }
   },
   count(): Count {
     return {
       active: this.activeTodos.length,
       done: this.activeDone.length,
     }
   },
   activeTodos(): Todo[] {
     return this.todos.filter(todo => !todo.completed)
   },
   activeDone(): Todo[] {
     return this.todos.filter(todo => todo.completed)
   },
 
   },
 methods: {
   addEvent(todo: Todo){

   this.todos.push(todo)
   localStorage.setItem('todos', JSON.stringify(this.todos))
   },
   toggleTodo(id: number) {
       const targetTodo = this.todos.find(todo => todo.id === id)
       
       if(targetTodo) {
         targetTodo.completed = !targetTodo.completed
       }
     },
     removeTodo(id: number) {
       this.todos = this.todos.filter(todo => todo.id !== id)
       localStorage.setItem('todos', JSON.stringify(this.todos))
     },
     setFilter(filter: Filtr) {
     this.activeFilter = filter
     },
     editTodo(editTodo: Todo) {
      this.todos.forEach(todo => {
        if(todo.id === editTodo.id){
          console.log(true)
          todo.text = editTodo.text
        }
      })
     },
 }
 })
 </script>
