<script setup>
import { ref } from "vue";
import MonacoEditorWrapper from "@/components/MonacoEditorWrapper.vue";
import Primjer_v_html_and_v_text from "@/components/Primjer_v_html_and_v_text.vue";
import Primjer_template_syntax_v_text from "@/components/Primjer_template_syntax_v_text.vue";
import Primjer_v_bind from "@/components/Primjer_v_bind.vue";
import Primjer_v_bind2 from "@/components/Primjer_v_bind2.vue";
import Primjer_v_if from "@/components/Primjer_v_if.vue";
import Primjer_v_show from "@/components/Primjer_v_show.vue";
import Primjer_v_model from "@/components/Primjer_v_model.vue";
import Primjer_v_for from "@/components/Primjer_v_for.vue";
import Primjer_v_for_index from "@/components/Primjer_v_for_index.vue";
import Primjer_v_for_list_of_objects from "@/components/Primjer_v_for_list_of_objects.vue";
import Primjer_v_for_object from "@/components/Primjer_v_for_object.vue";
import Primjer_v_for_range from "@/components/Primjer_v_for_range.vue";
import Primjer_v_for_v_if from "@/components/Primjer_v_for_v_if.vue";
import Primjer_v_for_nested from "@/components/Primjer_v_for_nested.vue";
import Primjer_v_for_filter from "@/components/Primjer_v_for_filter.vue";
import Primjer_v_for_mutate from "@/components/Primjer_v_for_mutate.vue";
import Primjer_v_pre_v_once from "@/components/Primjer_v_pre_v_once.vue";
import { primjeri }  from "@/utils/primjeri.js"; 

const trenutniPrimjer = ref(16);
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
            <Primjer_v_html_and_v_text v-if="trenutniPrimjer == 0"/>
            <Primjer_template_syntax_v_text v-if="trenutniPrimjer == 1"/>
            <Primjer_v_model v-if="trenutniPrimjer == 2"/>
            <Primjer_v_bind v-if="trenutniPrimjer == 3"/>
            <Primjer_v_bind2 v-if="trenutniPrimjer == 4"/>
            <Primjer_v_if v-if="trenutniPrimjer == 5"/>
            <Primjer_v_show v-if="trenutniPrimjer == 6"/>
            <Primjer_v_for v-if="trenutniPrimjer == 7"/>
            <Primjer_v_for_index v-if="trenutniPrimjer == 8"/>
            <Primjer_v_for_v_if v-if="trenutniPrimjer == 9"/>
            <Primjer_v_for_list_of_objects v-if="trenutniPrimjer == 10"/>
            <Primjer_v_for_object v-if="trenutniPrimjer == 11"/>
            <Primjer_v_for_range v-if="trenutniPrimjer == 12"/>
            <Primjer_v_for_nested v-if="trenutniPrimjer == 13"/>
            <Primjer_v_for_filter v-if="trenutniPrimjer == 14"/>
            <Primjer_v_for_mutate v-if="trenutniPrimjer == 15"/>
            <Primjer_v_pre_v_once v-if="trenutniPrimjer == 16"/>
        </div>
    </div>
</template>