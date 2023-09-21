<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const product = ref([])

onBeforeMount(() => {
    if (route.params.id == undefined) {
        return
    }
    fetch(`https://dummyjson.com/products/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
            product.value = data
        })
})
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'products' }">Home </router-link>
            </li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'products' }">Products </router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
    </nav>
    <div class="section">
        <div class="row">
            <div class="col-md-6">
                <img :src="product.thumbnail" alt="" class="img-thumbnail">
            </div>
            <div class="col-md-6">
                <h2 class="my-2">{{ product.title }}</h2>
                <h5>Category: {{ product.category }}</h5>
                <h5>Brand: {{ product.brand }}</h5>
                <h5>Rating: <span class="text-danger">{{ product.rating }}</span></h5>
                <h5>Price: <span class="text-danger">{{ product.price }}</span>tk</h5>
                <p><span class="fw-bold">Short Description:</span> <br>
                    {{ product.description }}</p>
                <button class="btn btn-info me-4">Add to Cart</button>
                <button class="btn btn-success">Buy Now</button>
            </div>
            <div class="col-md-12 my-4">
                <h2>Description</h2>
                <hr>
                <p>{{ product.description }}</p>
            </div>
        </div>


    </div>
</template>

<style scoped></style>