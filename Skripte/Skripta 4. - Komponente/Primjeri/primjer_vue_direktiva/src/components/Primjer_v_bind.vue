<script setup>
    const slikaURL = "https://www.svgrepo.com/show/179114/painting-painting.svg";
    const link = "https://vuejs.org/guide/essentials/class-and-style.html";
    const disabledDugme = true;
    const stil = {
        color: "red",
        fontSize: "20px"
    };
    const atributi = {
        class: "rounded hover:bg-green-100",
        placeholder: "Upiši text..."
    };
    const bold = "font-bold";
    const hasError = true;
    const isActive = true;
</script>

<template>
    <ComponentWrapper :data="{ 
            slikaURL: slikaURL, link: link, disabledDugme: disabledDugme, 
            stil: stil, atributi: atributi, bold: bold, hasError: hasError, isActive: isActive,
        }">
        <!-- Vezivanje href atributa -->
        <a :href="link" class="underline hover:text-blue-600" target="_blank">Vue Docs Link</a>
        
        <!-- Vezivanje src atributa -->
        <img :src="slikaURL" class="w-16"> <!-- Kraći zapis -->

        <!-- Vezivanje boolean atributa -->
        <button :disabled="disabledDugme" 
            class="bg-gray-300 p-1 rounded disabled:opacity-25 disabled:cursor-not-allowed">
            Onemogućeno dugme
        </button>

        <!-- Vezivanje stila -->
        <p :style="stil">Ovaj tekst je crven i ima veličinu 20px</p>

        <!-- Vezivanje više atributa odjednom -->
        <input v-bind="atributi" class="border p-2">

        <!-- Dinamička klasa -->
        <div :class="[
                bold, 
                { 'text-rose-700' : hasError}, 
                isActive ? 'border-2 border-orange-400/75 rounded p-1 m-1 w-fit' : ''
            ]">
            Dinamička klasa
        </div>
    </ComponentWrapper>
</template>