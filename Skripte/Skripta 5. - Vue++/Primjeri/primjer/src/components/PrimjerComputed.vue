<script setup>
    import { ref, computed } from 'vue'

    const novoIme = ref("");
    const noviBodovi = ref(0);

    const studenti = ref([
        { ime: "Marko", bodovi: 75 },
        { ime: "Ana", bodovi: 82 },
        { ime: "Ivan", bodovi: 90 },
    ])

    const filterIme = ref("");
    const filterMinBodovi = ref(0);

    const filtriraniStudent = computed(() => {
        const tempStudenti = studenti.value.filter(student =>             
            student.ime.toLowerCase().includes(filterIme.value.toLowerCase()) &&
            student.bodovi >= filterMinBodovi.value
        )
        console.log("filtriranje")
        return tempStudenti;
    })

    function addStudent() {
        const noviStudent = {
            ime: novoIme.value,
            bodovi: noviBodovi.value
        }
        studenti.value.push(noviStudent);
    }

</script>

<template>
    <div class="h-full flex p-8 items-center justify-center">

        <div class="h-64">

            <b>Novi student:</b>

            <div class="flex gap-2 items-center mt-2">
                Ime
                <input type="text" v-model="novoIme" class="p-1 border rounded w-32">
                Bodovi
                <input type="number" v-model="noviBodovi" class="p-1 border rounded w-12">
                <button class="p-1 border rounded hover:bg-blue-200 bg-blue-300 cursor-pointer"
                    @click="addStudent()">
                    Dodaj
                </button>
            </div>
            
            <hr class="my-4">

            <b>Filter:</b>

            <div class="flex gap-2 items-center mt-2">
                Ime
                <input type="text" v-model="filterIme" class="p-1 border rounded w-32">
                Min. Bodovi
                <input type="number" v-model="filterMinBodovi" class="p-1 border rounded w-12">
            </div>
            
            <hr class="my-4">

            <div v-for="student in filtriraniStudent">
                <b>{{ student.ime }}</b>: {{ student.bodovi }}
            </div>

        </div>

    </div>
</template>