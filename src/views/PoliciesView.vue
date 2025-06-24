<script setup>
import { ref } from 'vue'

const activePillar = ref(null)

const pillars = [
  {
    id: 1,
    title: "Student Life & Culture",
    subtitle: "Enriching Campus Experience",
    policies: [
      "Establish monthly cultural festivals celebrating diverse student backgrounds and traditions",
      "Create dedicated spaces for student organizations and cultural activities",
      "Implement a peer mentorship program connecting senior and junior students",
      "Organize regular social events and networking opportunities across departments",
      "Develop a student talent showcase platform for creative expression"
    ]
  },
  {
    id: 2,
    title: "Academic Elevation",
    subtitle: "Excellence in Learning",
    policies: [
      "Advocate for extended library hours and improved study facilities",
      "Establish academic support centers with peer tutoring programs",
      "Create research funding opportunities for undergraduate students",
      "Implement digital learning resources and online course materials access",
      "Develop career guidance and internship placement programs"
    ]
  },
  {
    id: 3,
    title: "Mental Welfare & Wellbeing",
    subtitle: "Holistic Student Support",
    policies: [
      "Establish confidential counseling services with trained professionals",
      "Create wellness programs including meditation and stress management workshops",
      "Implement mental health awareness campaigns and destigmatization initiatives",
      "Develop peer support networks for students facing academic or personal challenges",
      "Provide recreational facilities and fitness programs for physical wellbeing"
    ]
  },
  {
    id: 4,
    title: "Innovation & Opportunity",
    subtitle: "Empowering Future Leaders",
    policies: [
      "Launch an entrepreneurship incubator program for student startups",
      "Create technology access points with modern computing resources",
      "Establish partnerships with industry leaders for internship opportunities",
      "Develop innovation challenges and competitions with meaningful prizes",
      "Implement skills development workshops in emerging technologies"
    ]
  },
  {
    id: 5,
    title: "Legacy & Transparency",
    subtitle: "Accountable Leadership",
    policies: [
      "Publish monthly progress reports on all campaign promises and initiatives",
      "Establish regular town hall meetings for student feedback and concerns",
      "Create an open-door policy for direct communication with student leadership",
      "Implement a suggestion box system with guaranteed response timelines",
      "Document and share all SRC meeting minutes and decisions publicly"
    ]
  }
]

const togglePillar = (pillarId) => {
  activePillar.value = activePillar.value === pillarId ? null : pillarId
}
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-white relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
    </div>
  
    
    <!-- Main content -->
    <div class="relative z-10 max-w-6xl mx-auto px-8 py-16">
      
      <!-- Page header -->
      <div class="text-center mb-16">
        <h1 class="text-lg md:text-5xl lg:text-6xl font-serif font-light text-gray-800 leading-tight mb-6">
          <span class="block text-sm  md:text-2xl lg:text-3xl tracking-wider text-gray-600 mb-2">OUR COMPREHENSIVE</span>
          <span class="block font-normal tracking-widest text-gray-900">POLICY PLATFORM</span>
        </h1>
        <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
        <p class="text-sm md:text-xl text-gray-600 font-light italic leading-relaxed max-w-3xl mx-auto">
          Detailed initiatives and actionable commitments for transforming student life through the Five Pillars of Real Change
        </p>
      </div>
      
      <!-- Pillars accordion -->
      <div class="space-y-6">
        <div v-for="pillar in pillars" :key="pillar.id" class="border border-gray-200 rounded-lg shadow-sm bg-white/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-md">
          
          <!-- Pillar header -->
          <button 
            @click="togglePillar(pillar.id)"
            class="w-full px-8 py-6 text-left hover:bg-gray-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-serif font-bold text-xl">{{ pillar.id }}</span>
                </div>
                <div>
                  <h3 class="md:text-2xl font-serif font-light text-gray-800 tracking-wide">
                    {{ pillar.title }}
                  </h3>
                  <p class="text-sm md:text-lg text-gray-600 font-light italic">
                    {{ pillar.subtitle }}
                  </p>
                </div>
              </div>
              <div class="text-gray-400 transition-transform duration-300" :class="{ 'rotate-180': activePillar === pillar.id }">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </button>
          
          <!-- Pillar content -->
          <div 
            v-if="activePillar === pillar.id"
            class="px-8 pb-8 border-t border-gray-100"
          >
            <div class="pt-6">
              <h4 class="text-lg font-serif font-medium text-gray-800 mb-6 tracking-wide">
                Key Policy Initiatives:
              </h4>
              <div class="space-y-4">
                <div 
                  v-for="(policy, index) in pillar.policies" 
                  :key="index"
                  class="flex items-start space-x-4 group"
                >
                  <div class="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
                  <p class="text-sm md:text-lg text-gray-700 font-light leading-relaxed">
                    {{ policy }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Implementation timeline -->
      <div class="mt-20 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-sm">
        <div class="text-center mb-8">
          <h2 class="text-xl md:text-3xl font-serif font-light text-gray-800 tracking-wide mb-4">
            Implementation Timeline
          </h2>
          <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-4"></div>
          <p class="md:text-lg text-gray-600 font-light italic">
            Our commitment to measurable progress and accountability
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-serif font-bold text-xl">30</span>
            </div>
            <h3 class="text-xl font-serif font-light text-gray-800 mb-2">First 30 Days</h3>
            <p class="text-gray-600 font-light">
              Establish communication channels, form policy committees, and begin immediate welfare initiatives
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-serif font-bold text-xl">90</span>
            </div>
            <h3 class="text-xl font-serif font-light text-gray-800 mb-2">First 90 Days</h3>
            <p class="text-gray-600 font-light">
              Launch major programs, secure funding for key initiatives, and deliver first progress report
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-serif font-bold text-xl">12</span>
            </div>
            <h3 class="text-xl font-serif font-light text-gray-800 mb-2">Full Year</h3>
            <p class="text-gray-600 font-light">
              Complete implementation of all five pillars with measurable outcomes and sustainable systems
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom call-to-action -->
    <div class="relative z-10 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white py-8 px-8 mt-16">
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-6">
          <div class="text-sm font-light tracking-widest uppercase text-gray-300 mb-2">
            Ready for Real Change?
          </div>
          <div class="text-4xl md:text-5xl font-serif font-light tracking-wide mb-4">
            Vote <span class="font-normal">#4</span>
          </div>
          <div class="text-xl md:text-2xl font-light tracking-wide">
            NICOLINA NICOSIA NANA NSOWAH-NUAMAH
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div class="text-center">
            <div class="text-sm font-light tracking-widest uppercase text-gray-300">
              Your Voice
            </div>
            <div class="text-lg font-light">
              Heard & Valued
            </div>
          </div>
          <div class="hidden md:block w-px h-8 bg-gray-600"></div>
          <div class="text-center">
            <div class="text-sm font-light tracking-widest uppercase text-gray-300">
              Your Future
            </div>
            <div class="text-lg font-light">
              Bright & Promising
            </div>
          </div>
          <div class="hidden md:block w-px h-8 bg-gray-600"></div>
          <div class="text-center">
            <div class="text-sm font-light tracking-widest uppercase text-gray-300">
              Your Campus
            </div>
            <div class="text-lg font-light">
              Transformed & Thriving
            </div>
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

/* Smooth accordion animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>