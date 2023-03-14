<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GameBoard from '@/components/game/GameBoard.vue'
import Navbar from './components/navbar/Navbar.vue'
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>

  <body class="bg-white">
    <GameBoard></GameBoard>
  </body>

  <RouterView />
</template>
