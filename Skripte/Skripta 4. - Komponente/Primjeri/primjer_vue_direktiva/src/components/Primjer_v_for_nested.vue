<script setup>
    import { ref } from "vue";

    const kategorije = ref([
        { naziv: "Voće", proizvodi: ["Jabuka", "Banana", "Jagoda"] },
        { naziv: "Povrće", proizvodi: ["Mrkva", "Krumpir", "Rajčica"] },
    ]);
</script>

<template>
    <ComponentWrapper :data="{kategorije: kategorije}">

        <div class="flex gap-8">
            <div v-for="kategorija in kategorije">
                <b>{{ kategorija.naziv }}</b>
                <hr class="my-1">
                <p v-for="proizvod in kategorija.proizvodi" class="text-sm">
                    - {{ proizvod }}
                </p>
            </div>
        </div>

    </ComponentWrapper>
</template>