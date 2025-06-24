<script setup>
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-white relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
    </div>
    
    <!-- Main content container -->
    <div class="relative z-10 px-8 py-16">
      
      <!-- Header section -->
      <div class="max-w-6xl mx-auto text-center mb-20">
        <h1 class="text-lg md:text-5xl lg:text-6xl font-serif font-light text-gray-800 leading-tight mb-6">
          <span class="block text-sm  md:text-2xl lg:text-3xl tracking-wider uppercase text-gray-600 font-light mb-2">Meet Our</span>
          <span class="text-gray-900 font-normal tracking-wide">DEDICATED TEAM HOPEFUL '25</span>
        </h1>
        <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
        <p class="text-sm md:text-xl text-gray-600 font-light italic leading-relaxed max-w-3xl mx-auto">
          United in purpose, driven by excellence, and committed to serving the student body with integrity and innovation.
        </p>
      </div>

      <!-- Team members grid -->
      <div class="max-w-7xl mx-auto">
        
        <!-- Presidential Candidate - Featured -->
        <div class="mb-20">
          <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            <div class="relative">
              <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-300 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <div class="w-full h-full flex items-center justify-center text-gray-500 text-lg font-light">
                  <img src="/src/assets/President.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
                </div>
              </div>
              <div class="absolute -inset-4 border border-gray-400 rounded-full opacity-20"></div>
            </div>
            
            <div class="text-center lg:text-left">
              <div class="mb-4">
                <h2 class="md:text-3xl lg:text-4xl font-serif font-light text-gray-800 tracking-wide mb-2">
                  NICOLINA NICOSIA
                </h2>
                <h3 class="md:text-2xl lg:text-3xl font-serif font-light text-gray-800 tracking-wide mb-4">
                  NANA NSOWAH-NUAMAH
                </h3>
                <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto lg:mx-0 mb-4"></div>
                <p class="text-sm md:text-xl text-gray-600 font-light italic tracking-wide mb-6">
                  SRC PRESIDENT HOPEFUL '25
                </p>
              </div>
              <p class="text-xs md:text-lg text-gray-700 font-light leading-relaxed max-w-2xl">
                A visionary leader committed to transformative change, bringing together experience, passion, and an unwavering dedication to student excellence. Leading the charge for a more inclusive, innovative, and empowered student community.
              </p>
            </div>
          </div>
        </div>

        <!-- Core Team Members -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          
          <!-- Vice President -->
          <div class="text-center group">
            <div class="relative mb-8">
              <div class="w-48 h-48 mx-auto rounded-full border-3 border-gray-300 shadow-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group-hover:shadow-2xl transition-all duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-500 text-base font-light">
                  <img src="/src/assets/Vice.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
                </div>
              </div>
              <div class="absolute -inset-2 border border-gray-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h3 class="md:text-xl font-serif font-light text-gray-800 tracking-wide mb-2">
                DENNIS BORTEY BORTIER
              </h3>
              <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-3"></div>
              <p class="text-sm md:text-lg text-gray-600 font-light italic mb-4">
               Vice President Candidate
              </p>
              <p class="text-xs md:text-base text-gray-700 font-light leading-relaxed">
                Strategic thinker and collaborative leader, focused on bridging student needs with administrative excellence and fostering inclusive campus dialogue.
              </p>
            </div>
          </div>

          <!-- Campaign Manager -->
          <div class="text-center group">
            <div class="relative mb-8">
              <div class="w-48 h-48 mx-auto rounded-full border-3 border-gray-300 shadow-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group-hover:shadow-2xl transition-all duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-500 text-base font-light">
                  <img src="/src/assets/Secretary.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
                </div>
              </div>
              <div class="absolute -inset-2 border border-gray-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h3 class="md:text-xl font-serif font-light text-gray-800 tracking-wide mb-2">
               VICTORIA OLUWANSOLA BAMIDLELE 
              </h3>
              <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-3"></div>
              <p class="text-sm md:text-lg text-gray-600 font-light italic mb-4">
                General Secretary Candidate
              </p>
              <p class="text-xs md:text-base text-gray-700 font-light leading-relaxed">
                Strategic thinker and collaborative leader, focused on bridging student needs with administrative excellence and fostering inclusive campus dialogue.
              </p>
            </div>
          </div>

          <!-- Communications Director -->
          <div class="text-center group">
            <div class="relative mb-8">
              <div class="w-48 h-48 mx-auto rounded-full border-3 border-gray-300 shadow-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group-hover:shadow-2xl transition-all duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-500 text-base font-light">
                  <img src="/src/assets/Finance.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
                </div>
              </div>
              <div class="absolute -inset-2 border border-gray-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h3 class="md:text-xl font-serif font-light text-gray-800 tracking-wide mb-2">
                EMMANUEL ADDO
              </h3>
              <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-3"></div>
              <p class="text-sm md:text-lg text-gray-600 font-light italic mb-4">
                Financial Secretary Candidate
              </p>
              <p class="text-xs md:text-base text-gray-700 font-light leading-relaxed">
                Strategic thinker and collaborative leader, focused on bridging student needs with administrative excellence and fostering inclusive campus dialogue.
              </p>
            </div>
          </div>

          <!-- Policy Advisor -->
          <div class="text-center group">
            <div class="relative mb-8">
              <div class="w-48 h-48 mx-auto rounded-full border-3 border-gray-300 shadow-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group-hover:shadow-2xl transition-all duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-500 text-base font-light">
                  <img src="/src/assets/pro.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
                </div>
              </div>
              <div class="absolute -inset-2 border border-gray-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h3 class="md:text-xl font-serif font-light text-gray-800 tracking-wide mb-2">
                JONATHAN ADO-KAMASAH
              </h3>
              <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-3"></div>
              <p class="text-sm md:text-lg text-gray-600 font-light italic mb-4">
                Public Relation Officer Candidate
              </p>
              <p class="text-xs md:text-base text-gray-700 font-light leading-relaxed">
                Strategic thinker and collaborative leader, focused on bridging student needs with administrative excellence and fostering inclusive campus dialogue.
              </p>
            </div>
          </div>

          <!-- Student Outreach Coordinator -->
          <div class="text-center group">
            <div class="relative mb-8">
              <div class="w-48 h-48 mx-auto rounded-full border-3 border-gray-300 shadow-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group-hover:shadow-2xl transition-all duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-500 text-base font-light">
                 <img src="/src/assets/woc.jpg" alt="Nicolina Nicosia Nana Nsowah-Nuamah" class="w-full h-full object-cover">
                </div>
              </div>
              <div class="absolute -inset-2 border border-gray-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h3 class="md:text-xl font-serif font-light text-gray-800 tracking-wide mb-2">
                NAOMI ISSAC
              </h3>
              <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-3"></div>
              <p class="text-sm md:text-lg text-gray-600 font-light italic mb-4">
                Women's Commisioner Candidate
              </p>
              <p class="text-xs md:text-base text-gray-700 font-light leading-relaxed">
                Strategic thinker and collaborative leader, focused on bridging student needs with administrative excellence and fostering inclusive campus dialogue.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Values Section -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-light text-gray-800 mb-8 tracking-wide">
            OUR <span class="font-normal">SHARED VALUES</span>
          </h2>
          <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12"></div>
          
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="text-center group">
              <div class="w-3 h-3 rounded-full bg-gray-400 mx-auto mb-4 group-hover:bg-gray-600 transition-colors"></div>
              <h4 class="text-lg font-serif font-light text-gray-800 mb-3 tracking-wide">INTEGRITY</h4>
              <p class="text-base text-gray-600 font-light leading-relaxed">
                Upholding the highest standards of honesty and ethical conduct in all our endeavors.
              </p>
            </div>
            
            <div class="text-center group">
              <div class="w-3 h-3 rounded-full bg-gray-400 mx-auto mb-4 group-hover:bg-gray-600 transition-colors"></div>
              <h4 class="text-lg font-serif font-light text-gray-800 mb-3 tracking-wide">COLLABORATION</h4>
              <p class="text-base text-gray-600 font-light leading-relaxed">
                Working together across all divisions to create meaningful change for every student.
              </p>
            </div>
            
            <div class="text-center group">
              <div class="w-3 h-3 rounded-full bg-gray-400 mx-auto mb-4 group-hover:bg-gray-600 transition-colors"></div>
              <h4 class="text-lg font-serif font-light text-gray-800 mb-3 tracking-wide">EXCELLENCE</h4>
              <p class="text-base text-gray-600 font-light leading-relaxed">
                Pursuing the highest quality in leadership, service, and student representation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom call-to-action -->
    <div class="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white py-8 px-8">
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-6">
          <div class="text-sm font-light tracking-widest uppercase text-gray-300 mb-2">
            Join Our Movement
          </div>
          <div class="text-3xl md:text-4xl font-serif font-light tracking-wide mb-4">
            Together We <span class="font-normal">Rise</span>
          </div>
          <p class="text-lg font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to be part of transformative change? Connect with our team and help shape the future of student leadership.
          </p>
        </div>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div>
            <div class="text-xl font-light tracking-wide">
              Vote <span class="font-normal text-2xl">#4</span>
            </div>
            <div class="text-sm font-light tracking-widest uppercase text-gray-300 mt-1">
              For Real Change
            </div>
          </div>
          <div class="hidden md:block w-px h-12 bg-gray-600"></div>
          <div>
            <div class="text-lg font-light tracking-wide">
              NICOLINA NICOSIA NANA NSOWAH-NUAMAH
            </div>
            <div class="text-sm font-light tracking-widest uppercase text-gray-300 mt-1">
              Your Voice, Your Future
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
h1, h2, h3, h4 {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Hover effects for interactive elements */
.group:hover h3 {
  color: #374151;
}

.group:hover p {
  color: #4B5563;
}
</style>