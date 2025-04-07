<script setup>
    import { ref } from "vue";

    const ucenici = ref([
        { ime: "Ana", bodovi: 85 },
        { ime: "Marko", bodovi: 92 },
        { ime: "Petra", bodovi: 78 },
        { ime: "Ivan", bodovi: 60 }
    ]);

    const minBodovi = ref(70);

    const novoIme = ref('');
    const noviBodovi = ref(0);

</script>

<template>
    <div class="h-full flex flex-col p-8 items-center justify-center">

        <div class="h-96">
            <div class="flex gap-1">
                <label>
                    Minimalan broj bodova:
                    <input type="number" v-model="minBodovi" class="border p-1 rounded w-32">
                </label>
                <input type="text" v-model="novoIme" class="border px-1 w-32 rounded" placeholder="Ime...">
                <input type="number" v-model="noviBodovi" class="border px-1 w-16 rounded" placeholder="Bodovi...">
                <button @click="ucenici.push({'ime': novoIme, 'bodovi': noviBodovi})"
                    class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
                    push()
                </button>
                <button @click="ucenici.pop()"
                    class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
                    pop()
                </button>
                <button @click="ucenici.unshift({'ime': novoIme, 'bodovi': noviBodovi})"
                    class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
                    unshift()
                </button>
                <button @click="ucenici.shift()"
                    class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
                    shift()
                </button>
            </div>

            <TransitionGroup name="list">
                <div v-for="ucenik, i in ucenici.filter(u => u.bodovi >= minBodovi)" :key="ucenik.ime">
                    <b>{{ ucenik.ime }}</b> - {{ ucenik.bodovi }} bodova
                </div>
            </TransitionGroup>
        </div>

    </div>
</template>

<style scoped>
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>