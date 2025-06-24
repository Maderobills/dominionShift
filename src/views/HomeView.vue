<script setup>
</script>

<template>
  <section class="min-h-screen md:h-full bg-gradient-to-br from-slate-100 via-gray-50 to-white relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
    </div>
    
   
    
    <!-- Main content container -->
    <div class="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-16">
      
      <!-- Left side - Candidate image and info -->
      <div class="lg:w-1/2 flex flex-col items-center mb-12 lg:mb-0 lg:pr-12">
        <!-- Candidate image placeholder -->
        <div class="relative mb-8">
          <div class="w-80 h-80 rounded-full border-4 border-gray-300 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
            <!-- Replace this div with actual image when available -->
            <div class="w-full h-full flex items-center justify-center text-gray-500 text-lg font-light">
              <img src="/src/assets/President.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
            </div>
            <!-- Uncomment and use this when you have the image -->
            
          </div>
          <!-- Decorative ring -->
          <div class="absolute -inset-4 border border-gray-400 rounded-full opacity-20"></div>
        </div>
        
        <!-- Candidate name and title -->
        <div class="text-center">
          <h2 class="text-2xl lg:text-3xl font-serif font-light text-gray-800 tracking-wide mb-2">
            NICOLINA NICOSIA
          </h2>
          <h3 class="text-xl lg:text-2xl font-serif font-light text-gray-800 tracking-wide mb-4">
            NANA NSOWAH-NUAMAH
          </h3>
          <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-4"></div>
          <p class="text-lg text-gray-600 font-light italic tracking-wide">
            SRC PRESIDENT HOPEFUL '25
          </p>
        </div>
      </div>
      
      <!-- Right side - Platform content -->
      <div class="h-fit lg:w-1/2 lg:pl-12">
        <!-- Main headline -->
        <div class="text-center lg:text-left mb-12">
          <h1 class="text-4xl lg:text-5xl font-serif font-light text-gray-800 leading-tight mb-4">
            <span class="text-7xl lg:text-8xl font-light text-gray-700">5</span>
            <span class="block text-2xl lg:text-3xl tracking-wider">PILLARS OF</span>
            <span class="block text-3xl lg:text-4xl font-normal tracking-widest text-gray-900">REAL CHANGE</span>
          </h1>
          <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto lg:mx-0 mt-6"></div>
        </div>
        
        <!-- Mission statement -->
        <div class="mb-10 text-center lg:text-left">
          <p class="text-xl text-gray-600 font-light italic leading-relaxed">
            We are committed to making a positive impact through:
          </p>
        </div>
        
        <!-- Pillars list -->
        <div class="space-y-6">
          <div class="flex items-start space-x-4 group">
            <div class="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
            <p class="text-lg text-gray-700 font-light leading-relaxed">
              The <span class="font-medium">Student Life & Culture</span> Pillar
            </p>
          </div>
          
          <div class="flex items-start space-x-4 group">
            <div class="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
            <p class="text-lg text-gray-700 font-light leading-relaxed">
              The <span class="font-medium">Academic Elevation</span> Pillar
            </p>
          </div>
          
          <div class="flex items-start space-x-4 group">
            <div class="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
            <p class="text-lg text-gray-700 font-light leading-relaxed">
              The <span class="font-medium">Mental Welfare & Wellbeing</span> Pillar
            </p>
          </div>
          
          <div class="flex items-start space-x-4 group">
            <div class="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
            <p class="text-lg text-gray-700 font-light leading-relaxed">
              The <span class="font-medium">Innovation & Opportunity</span> Pillar
            </p>
          </div>
          
          <div class="flex items-start space-x-4 group">
            <div class="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
            <p class="text-lg text-gray-700 font-light leading-relaxed">
              The <span class="font-medium">Legacy & Transparency</span> Pillar
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom call-to-action -->
    <div class="md:absolute bottom-0 left-0 right-0 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white py-6 px-8">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="text-center md:text-left mb-4 md:mb-0">
          <div class="text-sm font-light tracking-widest uppercase text-gray-300 mb-1">
            Vote for Change
          </div>
          <div class="text-3xl md:text-4xl font-serif font-light tracking-wide">
            Vote <span class="font-normal">#4</span>
          </div>
        </div>
        
        <div class="text-center md:text-right">
          <div class="text-lg md:text-xl font-light tracking-wide">
            NICOLINA NICOSIA NANA NSOWAH-NUAMAH
          </div>
          <div class="text-sm font-light tracking-widest uppercase text-gray-300 mt-1">
            Your Voice, Your Future
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Elegant transitions */
* {
  transition: all 0.3s ease;
}

/* Subtle text shadows for depth */
h1, h2, h3 {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Hover effects for interactive elements */
.group:hover .font-medium {
  color: #374151;
}
</style>