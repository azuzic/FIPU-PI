<script setup>
import { ref } from "vue";
import MonacoEditorWrapper from "@/components/MonacoEditorWrapper.vue";
import Primjer_1_v_html_and_v_text from "@/components/Primjer_1_v_html_and_v_text.vue";
import Primjer_2_template_syntax_v_text from "@/components/Primjer_2_template_syntax_v_text.vue";
import Primjer_3_v_bind from "@/components/Primjer_3_v_bind.vue";
import Primjer_4_v_bind2 from "@/components/Primjer_4_v_bind2.vue";
import Primjer_5_v_if from "@/components/Primjer_5_v_if.vue";
import Primjer_6_v_show from "@/components/Primjer_6_v_show.vue";
import Primjer_7_v_model from "@/components/Primjer_7_v_model.vue";
import { primjeri }  from "@/utils/primjeri.js"; 

const trenutniPrimjer = ref(5);
</script>

<template>
    <div class="h-full flex flex-col gap-1 px-8 pb-4 pt-2 bg-zinc-50 text-zinc-800">     
        <h1 class="text-center text-2xl font-bold">
            Primjeri
        </h1>
        <div class="flex flex-wrap w-full items-center justify-center border-y-1 border-zinc-700/25 py-4 gap-2">

            <button v-for="(primjer, i) in primjeri" class="ring-1 rounded px-2 transition whitespace-nowrap" 
                @click="trenutniPrimjer = i" :class="i==trenutniPrimjer ? 'bg-emerald-200 ring-emerald-800' : 
                    'hover:bg-sky-200 hover:ring-2 cursor-pointer bg-sky-50 ring-sky-800'">
                <b>{{ i+1 }}.</b> {{ primjer.title }}
            </button>

        </div>
        <div class="grid grid-cols-2 h-full place-items-center overflow-auto">

            <MonacoEditorWrapper :code="primjeri[trenutniPrimjer].code"/>
            <Primjer_1_v_html_and_v_text v-if="trenutniPrimjer == 0"/>
            <Primjer_2_template_syntax_v_text v-if="trenutniPrimjer == 1"/>
            <Primjer_3_v_bind v-if="trenutniPrimjer == 2"/>
            <Primjer_4_v_bind2 v-if="trenutniPrimjer == 3"/>
            <Primjer_5_v_if v-if="trenutniPrimjer == 4"/>
            <Primjer_6_v_show v-if="trenutniPrimjer == 5"/>
            <Primjer_7_v_model v-if="trenutniPrimjer == 6"/>

        </div>
    </div>
</template>