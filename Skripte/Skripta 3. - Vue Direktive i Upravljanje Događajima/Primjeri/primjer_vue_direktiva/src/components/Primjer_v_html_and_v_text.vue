<script setup>
    const sadrzaj = "<span> Ovo je <b>span</b> element </span>"
</script>

<template>
    <ComponentWrapper :data="{sadrzaj: sadrzaj}">
        <div v-html="sadrzaj"> 
        </div>
        
        <div v-text="sadrzaj"> 
        </div>
        
        <div> 
            {{ sadrzaj }}
        </div>
    </ComponentWrapper>
</template>