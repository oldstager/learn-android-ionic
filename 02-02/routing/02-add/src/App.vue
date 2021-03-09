<template>
  <div id="nav">
    <router-link :to="{ name: 'Awal' }">Awal</router-link> |
    <router-link :to="{ name: 'Tentang' }">Tentang</router-link>
    <p>
    Masuk ke <router-link to="/dept/sistem-informasi">Departemen Sistem Informasi</router-link> 
    </p>
  </div>
  <router-view />
</template>
