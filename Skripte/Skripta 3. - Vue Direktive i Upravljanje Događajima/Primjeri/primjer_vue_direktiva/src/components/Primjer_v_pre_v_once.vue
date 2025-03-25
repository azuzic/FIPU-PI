<script setup>
    import { ref } from 'vue';

    const text = ref("Lorem ipsum")
</script>

<template>
    <ComponentWrapper :data="{text: text}">

        <input type="text" v-model="text" class="border px-1 rounded">

        <div>
            <b>Normal:</b> {{ text }}
        </div>

        <div v-once>
            <b>v-once:</b> {{ text }}
        </div>

        <div v-pre>
            <b>v-pre:</b> {{ text }}
        </div>


    </ComponentWrapper>
</template>