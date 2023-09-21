<script setup>
import { ref, reactive, onBeforeMount } from 'vue'

let products = ref([])

onBeforeMount(() => {
    fetch(`https://dummyjson.com/products?limit=9`)
        .then(response => response.json())
        .then(data => {
            products.value = data.products
        })
})

function loadMore() {
    var limit = products.value.length;
    fetch(`https://dummyjson.com/products?limit=9&skip=${limit}`)
        .then(response => response.json())
        .then(data => {
            products.value = [...products.value, ...data.products]
        })
}


</script>

<template>
    <div class="row">
        <div class=" col-md-4 col-6 mb-4" v-for="item in products" :key="item.id">
            <div class="card">
                <router-link :to="{
                    name: 'productDetails', params: {
                        id: item.id
                    }
                }"><img :src="item.thumbnail" class="img-thumbnail" alt="..."></router-link>

                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <router-link class="btn btn-info" :to="{
                        name: 'productDetails', params: {
                            id: item.id
                        }
                    }">Details</router-link>
                </div>
            </div>
        </div>
        <div class="text-center" v-if="products.length > 0">
            <button @click="loadMore()" class="btn btn-info">Load More</button>
        </div>





    </div>
</template>

<style scoped></style>