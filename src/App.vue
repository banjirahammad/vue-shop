<script setup>

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <router-link class="navbar-brand" aria-current="page" :to="{ name: 'products' }">Vue Shop </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{ name: 'products' }">Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'products' }">Products </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section class="container my-4">
    <router-view />
  </section>
</template>

<style scoped></style>
