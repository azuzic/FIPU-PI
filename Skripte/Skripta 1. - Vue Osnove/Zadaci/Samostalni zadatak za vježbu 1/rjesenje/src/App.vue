<script setup>
</script>

<template>
  <div ref="dark" class="p-8 lg:p-12 xl:p-16 overflow-auto w-full min-h-fit h-screen 
    flex items-center justify-center bg-stone-200 dark:bg-stone-950">

    <button @click="$refs.dark.classList.toggle('dark');"
      class="fixed top-4 right-4 p-2 rounded-md text-sm cursor-pointer
        bg-stone-300/75 dark:bg-stone-800/75
        text-stone-700 dark:text-stone-300">
      Promijeni temu
    </button>

    <section class="p-6 lg:p-8 xl:p-16 rounded-4xl flex flex-col gap-6 xl:gap-8 items-center bg-linear-to-br 
      from-stone-300 via-amber-600/10 to-olive-300 text-stone-900
      dark:from-stone-900 dark:via-amber-500/10 dark:to-olive-900 dark:text-amber-100">
      
      <h1 class="text-2xl lg:text-4xl xl:text-6xl text-center">
        Pozdrav, ja sam <b class="text-amber-400">Alesandro Žužić</b>
      </h1>
      
      <hr class="border-2 w-full opacity-75 rounded-full"/>

      <div class="flex flex-col gap-4 p-2 xl:p-4">
        
        <h2 class="text-2xl text-amber-950/50 dark:text-amber-200/75">
          Moji omiljeni filmovi
        </h2>

        <ul class="flex flex-wrap justify-center gap-4 [&>li]:full lg:[&>li]:1/3
            [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:gap-4">
          <li>
            <img src="./assets/images/movie_poster_1.png" 
              class="object-cover w-full h-80 lg:h-120 rounded-md"
              alt="Lord of the Rings: The Fellowship of the Ring"/>
            <h3 class="text-xl lg:text-2xl text-amber-950 dark:text-amber-50 text-center">
              Lord of the Rings: <br/>
              <span class="text-base lg:text-xl text-yellow-600 dark:text-amber-400">The Fellowship of the Ring</span>
            </h3>
          </li>
          <li>
            <img src="./assets/images/movie_poster_2.png" 
              class="object-cover w-full h-80 lg:h-120 rounded-md"
              alt="Lord of the Rings: The Two Towers"/>
            <h3 class="text-xl lg:text-2xl text-amber-950 dark:text-amber-50 text-center">
              Lord of the Rings: <br/> 
              <span class="text-base lg:text-xl text-yellow-600 dark:text-amber-400">The Two Towers</span>
            </h3>
          </li>
          <li>
            <img src="./assets/images/movie_poster_3.png" 
              class="object-cover w-full h-80 lg:h-120 rounded-md"
              alt="Lord of the Rings: The Return of the King"/>
            <h3 class="text-xl lg:text-2xl text-amber-950 dark:text-amber-50 text-center">
              Lord of the Rings: <br/>
              <span class="text-base lg:text-xl text-yellow-600 dark:text-amber-400">The Return of the King</span>
            </h3>
          </li>
        </ul>

      </div>

    </section>

  </div>
</template>