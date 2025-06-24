<template>
  <div 
    v-if="showWelcome"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
  >
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
    </div>
    
    <!-- Elegant frame border -->
   <div class="hidden md:block absolute inset-0 pointer-events-none">
     <div class="absolute inset-8 border border-gray-700 rounded-lg opacity-30"></div>
    <div class="absolute inset-12 border border-gray-600 rounded-lg opacity-20"></div>
   </div>
    
    <!-- Main content -->
    <div class="text-center relative z-10 max-w-4xl mx-auto px-8">
      <!-- Decorative top element -->
      <div class="mb-8 flex justify-center">
        <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-fadeIn"></div>
      </div>
      
      <!-- Main title -->
      <div class="mb-8">
        <h1 class="text-4xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-wider leading-tight">
          <span 
            v-for="(word, index) in words" 
            :key="index"
            class="inline-block mx-3 opacity-0 animate-elegantSlide"
            :style="{ 
              animationDelay: `${index * 0.6}s`,
              animationFillMode: 'forwards'
            }"
          >
            {{ word }}
          </span>
        </h1>
      </div>
      
      <!-- Subtitle -->
      <div class="mb-12 opacity-0 animate-fadeInUp" style="animation-delay: 2.4s; animation-fill-mode: forwards;">
        <p class="text-lg md:text-2xl text-gray-300 font-light italic tracking-wide">
          {{ displayedText }}<span class="animate-blink">|</span>
        </p>
      </div>
      
      <!-- Elegant progress indicator -->
      <div class="mb-8 opacity-0 animate-fadeInUp" style="animation-delay: 3s; animation-fill-mode: forwards;">
        <div class="flex justify-center items-center space-x-2 mb-4">
          <div 
            v-for="i in 5" 
            :key="i"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="progress >= (i * 20) ? 'bg-white' : 'bg-gray-600'"
          ></div>
        </div>
        <div class="w-50 md:w-80 mx-auto bg-gray-800 rounded-full h-px overflow-hidden">
          <div 
            class="bg-gradient-to-r from-gray-400 to-white h-px transition-all duration-300 ease-out"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
      
      <!-- Decorative bottom element -->
      <div class="mt-12 flex justify-center opacity-0 animate-fadeIn" style="animation-delay: 3.5s; animation-fill-mode: forwards;">
        <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
    </div>
    
    <!-- Subtle corner decorations -->
   <div class=" md:absolute inset-0 pointer-events-none">
     <div class="absolute top-8 left-8 w-12 h-12 border-l border-t border-gray-600 opacity-30"></div>
    <div class="absolute top-8 right-8 w-12 h-12 border-r border-t border-gray-600 opacity-30"></div>
    <div class="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-gray-600 opacity-30"></div>
    <div class="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-gray-600 opacity-30"></div>
   </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  duration: {
    type: Number,
    default: 6000 // 5 seconds
  }
})

// Emits
const emit = defineEmits(['complete'])

// Reactive data
const showWelcome = ref(true)
const progress = ref(0)
const words = ['THE', 'DOMINION', 'SHIFT']
const typewriterText = 'Ready to vote for #4 candidates?'
const displayedText = ref('')
const currentTextIndex = ref(0)

// Animation intervals
let progressInterval = null
let hideTimeout = null
let typewriterInterval = null

// Methods
const startAnimation = () => {
  // Delayed typewriter effect to start after title animation
  setTimeout(() => {
    typewriterInterval = setInterval(() => {
      if (currentTextIndex.value < typewriterText.length) {
        displayedText.value += typewriterText[currentTextIndex.value]
        currentTextIndex.value++
      } else {
        clearInterval(typewriterInterval)
      }
    }, 80)
  }, 3000)
  
  // Progress bar animation
  setTimeout(() => {
    progressInterval = setInterval(() => {
      if (progress.value < 100) {
        progress.value += 2
      }
    }, props.duration / 50)
  }, 300)
  
  // Hide welcome screen after duration
  hideTimeout = setTimeout(() => {
    showWelcome.value = false
    emit('complete')
  }, props.duration)
}

// Lifecycle
onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  if (typewriterInterval) {
    clearInterval(typewriterInterval)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

@keyframes elegantSlide {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  60% {
    transform: translateY(-8px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.animate-elegantSlide {
  animation: elegantSlide 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

/* Subtle glow effect for text */
h1 {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Elegant transitions */
* {
  transition: all 0.3s ease;
}
</style>