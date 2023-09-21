import { createRouter, createWebHistory } from 'vue-router';

import ProductList from '../components/ProductList.vue'
import ProductDetaials from '../components/ProductDetails.vue'

const routes = [
    {path:'/', component:ProductList, name:'products'},
    {path:'/product/:id', component:ProductDetaials, name:'productDetails'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
