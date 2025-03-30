<script setup>
import { ref } from "vue";

const size = ref("24");
const selected = ref(false);
const style = ref("");
</script>

<template>
    <ComponentWrapper :data="{size: size, selected: selected, style: style}">
        <input type="range" min="12" max="36" v-model="size"/>
        <div :style="`font-size: ${size}px;`">
            font-size: {{size}}px
        </div>
        
        <input type="checkbox" v-model="selected" class="mr-2"/> 
        <span :class="selected ? 'opacity-100 text-green-700': 'opacity-50 text-red-700'">
            {{selected}}
        </span>

        <br>
        <textarea class="border" type="text" :style="style" v-model="style" :rows="8"/>
    </ComponentWrapper>
</template>