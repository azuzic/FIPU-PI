<script setup>
    import { ref } from "vue";

    const unos = ref("");
    const potvrda = ref(false);
</script>

<template>
    <ComponentWrapper :data="{unos: unos, potvrda: potvrda}">

        
    <div class="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <label class="block font-semibold">Unesite lozinku:</label>
        <input v-model="lozinka" type="password"
            class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
            @input="provjeriLozinku">

        <!-- Indikator sigurnosti lozinke -->
        <div class="h-2 mt-3 w-full bg-gray-300 rounded">
            <div :class="[
                    uvjetiIspunjeni.value === 0 ? 'bg-red-500 w-1/12' : 
                    uvjetiIspunjeni.value === 1 ? 'bg-orange-400 w-1/4' : 
                    uvjetiIspunjeni.value === 2 ? 'bg-yellow-400 w-1/2' : 
                    uvjetiIspunjeni.value === 3 ? 'bg-yellow-500 w-3/4' : 
                    uvjetiIspunjeni.value === 4 ? 'bg-green-500 w-full' : ''
                ]" class="h-2 rounded transition-all">
            </div>
        </div>

        <!-- Uvjeti lozinke -->
        <ul class="mt-3 text-sm">
            <li :class="imaDovoljnoZnakova() ? 'text-green-600' : 'text-red-500'">
                ✅ Minimalno 8 znakova
            </li>
            <li :class="imaVelikoSlovo() ? 'text-green-600' : 'text-red-500'">
                ✅ Najmanje jedno veliko slovo
            </li>
            <li :class="imaSpecijalniZnak() ? 'text-green-600' : 'text-red-500'">
                ✅ Najmanje jedan specijalni znak
            </li>
            <li :class="imaBrojku() ? 'text-green-600' : 'text-red-500'">
                ✅ Najmanje jedna brojka
            </li>
        </ul>

        <!-- Poruka o sigurnosti lozinke -->
        <p v-if="uvjetiIspunjeni.value === 4" class="mt-3 text-green-600 font-semibold">
            🎉 Lozinka je sigurna!
        </p>
    </div>

    </ComponentWrapper>
</template>