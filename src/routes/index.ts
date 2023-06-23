import { createRouter, createWebHashHistory } from "vue-router";
import TodoPage from '../pages/TodoPage.vue'
import MainPage from '../pages/MainPage.vue'

const routes = [
    {path: '/', component: MainPage},
    {path: '/todo', component: TodoPage},
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
