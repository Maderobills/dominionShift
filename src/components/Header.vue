<template>
  <nav class="relative w-full bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white shadow-lg border-b border-gray-700">
    
    <!-- Desktop Navigation -->
    <div class="hidden md:flex justify-center items-center h-full w-full px-4">
      <!-- Campaign logo/identifier -->
      <div class="absolute left-4 flex items-center space-x-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-white to-gray-100 flex items-center justify-center shadow-md">
          <img src="/src/assets/President.jpg" alt="" class="w-8 h-8 rounded-full object-cover transition-transform duration-200 hover:scale-105">
        </div>
        <div class="hidden lg:block">
          <div class="text-sm font-serif font-light tracking-wider text-gray-200">
            NICOLINA '25
          </div>
        </div>
      </div>

      <!-- Navigation links -->
      <div class="flex space-x-8 lg:space-x-12">
        <router-link 
          to="/" 
          class="nav-link group relative py-3 px-1"
        >
          <span class="relative z-10 font-light tracking-wide text-sm lg:text-base transition-all duration-300 group-hover:text-gray-200">
            Home
          </span>
          <div class="nav-indicator"></div>
        </router-link>
        
        <router-link 
          to="/policies" 
          class="nav-link group relative py-3 px-1"
        >
          <span class="relative z-10 font-light tracking-wide text-sm lg:text-base transition-all duration-300 group-hover:text-gray-200">
            Policies
          </span>
          <div class="nav-indicator"></div>
        </router-link>
        
        <router-link 
          to="/goals" 
          class="nav-link group relative py-3 px-1"
        >
          <span class="relative z-10 font-light tracking-wide text-sm lg:text-base transition-all duration-300 group-hover:text-gray-200">
            Goals
          </span>
          <div class="nav-indicator"></div>
        </router-link>
        
        <router-link 
          to="/team" 
          class="nav-link group relative py-3 px-1"
        >
          <span class="relative z-10 font-light tracking-wide text-sm lg:text-base transition-all duration-300 group-hover:text-gray-200">
            Team
          </span>
          <div class="nav-indicator"></div>
        </router-link>
        
        <router-link 
          to="/achievements" 
          class="nav-link group relative py-3 px-1"
        >
          <span class="relative z-10 font-light tracking-wide text-sm lg:text-base transition-all duration-300 group-hover:text-gray-200">
            Achievements
          </span>
          <div class="nav-indicator"></div>
        </router-link>
      </div>

      <!-- Vote reminder -->
      <div class="absolute right-4 hidden lg:flex items-center space-x-2">
        <div class="text-xs font-light tracking-widest uppercase text-gray-400">
          Vote
        </div>
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
          <span class="text-gray-800 font-serif font-bold text-sm">4</span>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden">
      <!-- Mobile Header -->
      <div class="flex items-center justify-between px-4 py-3">
        <!-- Mobile logo -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-white to-gray-100 flex items-center justify-center shadow-md">
            <img src="/src/assets/President.jpg" alt="" class="w-8 h-8 rounded-full object-cover">
          </div>
          <div>
            <div class="text-sm font-serif font-light tracking-wider text-gray-200">
              NICOLINA '25
            </div>
          </div>
        </div>

        <!-- Mobile vote button and hamburger -->
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <div class="text-xs font-light tracking-widest uppercase text-gray-400">
              Vote
            </div>
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
              <span class="text-gray-800 font-serif font-bold text-sm">4</span>
            </div>
          </div>
          
          <!-- Hamburger Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 transition-all duration-300 hover:scale-105"
            :class="{ 'open': isMobileMenuOpen }"
          >
            <span class="hamburger-line w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
            <span class="hamburger-line w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
            <span class="hamburger-line w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Side Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Side Menu -->
    <div 
      class="fixed top-0 right-0 h-full w-80 max-w-sm bg-gradient-to-b from-slate-800 via-gray-800 to-slate-900 transform transition-transform duration-300 ease-in-out z-50 md:hidden shadow-2xl"
      :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }"
    >
      <!-- Side Menu Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-white to-gray-100 flex items-center justify-center shadow-md">
            <img src="/src/assets/President.jpg" alt="" class="w-8 h-8 rounded-full object-cover">
          </div>
          <div>
            <div class="text-sm font-serif font-light tracking-wider text-gray-200">
              NICOLINA '25
            </div>
          </div>
        </div>
        
        <!-- Close Button -->
        <button 
          @click="closeMobileMenu"
          class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-200"
        >
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Side Menu Navigation Links -->
      <div class="px-6 py-8">
        <nav class="space-y-4">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="mobile-side-nav-link block group"
          >
            <div class="flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5">
              <span class="font-light tracking-wide text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                Home
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </router-link>
          
          <router-link 
            to="/policies" 
            @click="closeMobileMenu"
            class="mobile-side-nav-link block group"
          >
            <div class="flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5">
              <span class="font-light tracking-wide text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                Policies
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </router-link>
          
          <router-link 
            to="/goals" 
            @click="closeMobileMenu"
            class="mobile-side-nav-link block group"
          >
            <div class="flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5">
              <span class="font-light tracking-wide text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                Goals
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </router-link>
          
          <router-link 
            to="/team" 
            @click="closeMobileMenu"
            class="mobile-side-nav-link block group"
          >
            <div class="flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5">
              <span class="font-light tracking-wide text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                Team
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </router-link>
          
          <router-link 
            to="/achievements" 
            @click="closeMobileMenu"
            class="mobile-side-nav-link block group"
          >
            <div class="flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5">
              <span class="font-light tracking-wide text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                Achievements
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </router-link>
        </nav>
      </div>

      <!-- Side Menu Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
        <div class="flex items-center justify-center space-x-3">
          <div class="text-sm font-light tracking-widest uppercase text-gray-400">
            Don't forget to vote
          </div>
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
            <span class="text-gray-800 font-serif font-bold text-base">4</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close menu on escape key
const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

// Add escape key listener
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleEscapeKey)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Navigation link styles */
.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

/* Hover effect underline */
.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%);
  transform: translateX(-50%);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover .nav-indicator {
  width: 80%;
}

/* Active link styles */
.router-link-active {
  color: #f8fafc !important;
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.router-link-active .nav-indicator {
  width: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 100%);
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
}

/* Subtle text shadows for better readability */
.nav-link span {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Enhanced hover states */
.nav-link:hover span {
  transform: translateY(-1px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Hamburger Menu Animation */
.hamburger-line {
  transform-origin: center;
}

button.open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(2px, 2px);
}

button.open .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

button.open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(2px, -2px);
}

/* Mobile Side Menu Styles */
.mobile-side-nav-link.router-link-active div {
  background: rgba(255, 255, 255, 0.1);
  border-left: 4px solid white;
}

.mobile-side-nav-link.router-link-active span {
  color: white !important;
  font-weight: 400;
}

.mobile-side-nav-link.router-link-active svg {
  color: white !important;
  transform: translateX(4px);
}

/* Smooth gradient animation */
.bg-gradient-to-r, .bg-gradient-to-b {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Logo hover effect */
.w-10:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}

/* Vote button hover effect */
.w-8:hover, .w-10:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
}

/* Prevent body scroll when menu is open */
body.menu-open {
  overflow: hidden;
}

/* Mobile menu backdrop blur effect */
.fixed.inset-0 {
  backdrop-filter: blur(2px);
}

/* Side menu shadow */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .w-80 {
    width: 100vw;
  }
}

/* Smooth transitions for menu items */
.mobile-side-nav-link div {
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
}

.mobile-side-nav-link:hover div {
  border-left-color: rgba(255, 255, 255, 0.3);
}

/* Focus states for accessibility */
.mobile-side-nav-link:focus {
  outline: none;
}

.mobile-side-nav-link:focus div {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.5);
}

button:focus {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  outline-offset: 2px;
}
</style>