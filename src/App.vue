<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import WelcomeAnimate from './components/WelcomeAnimate.vue'

// Reactive state to control when to show main content
const showMainContent = ref(false)

const onWelcomeComplete = () => {
  console.log('Welcome animation completed!')
  showMainContent.value = true
}
</script>

<template>
  <main class="w-screen h-full">
    <!-- Show welcome animation until it completes -->
    <WelcomeAnimate 
      v-if="!showMainContent" 
      @complete="onWelcomeComplete" 
    />
    
    <!-- Show main app content after welcome animation -->
    <template v-if="showMainContent">
      <header class="main-color h-14 w-screen z-50">
        <Header />
      </header>
      <section class="h-[calc(100vh-56px)] z-0 w-screen overflow-hidden overflow-y-scroll">
        <main class="h-full w-full 2xl:w-4/5 justify-self-center">
          <RouterView />
        </main>
      </section>
    </template>
  </main>
</template>