<template>
    <div class="absolute top-1/2 -translate-y-1/2 h-[90%] aspect-square rounded-full 
                group-hover:translate-x-3/5 transition-all duration-300 shadow-xl z-10 overflow-hidden">

        <!-- Vinyl Base -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full"></div>
        
        <!-- Vinyl Grooves (concentric circles) -->
        <div class="absolute inset-0 flex items-center justify-center">
            <div v-for="i in 15" :key="i" class="absolute rounded-full border border-gray-600 opacity-6"
                :style="`width: ${100 - (i * 3)}%; height: ${100 - (i * 3)}%; border-width: ${0.5 + (i * 0.1)}px;`"></div>
        </div>
        
        <!-- Vinyl Songs -->
        <div class="absolute inset-0 flex items-center justify-center">
            <div v-for="i in 4" :key="i" class="absolute rounded-full border border-gray-600 opacity-12"
                :style="`width: ${100 - (i * 9)}%; height: ${100 - (i * 9)}%; border-width: ${0.5 + (i * 0.1)}px;`"></div>
        </div>
        
        <slot></slot>

        <!-- Vinyl Border -->
        <div class="absolute inset-0 rounded-full border border-gray-600 opacity-25" 
            style="box-shadow: 
                0 0 0 4px rgba(255,255,255,0.05),
                0 0 0 8px rgba(255,255,255,0.04),
                0 0 0 12px rgba(255,255,255,0.03),
                0 0 0 16px rgba(255,255,255,0.02)"></div>
        
        <!-- Center Label -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-1/3 h-1/3 rounded-full bg-gradient-to-br from-amber-100 to-stone-300 
                    flex items-center justify-center shadow-inner">
            <!-- Center Hole -->
            <div class="w-1/4 h-1/4 rounded-full bg-gray-800"></div>
        </div>
        
        <!-- Shine Effect -->
        <div class="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none overflow-hidden">
            <div class="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white opacity-5 rounded-full blur-sm"></div>
        </div>

    </div>
</template>