<script setup>
    const ime = "Marko";
    const prezime = "Markić";
    const sadrzaj = `Pozdrav, ja sam ${ime} ${prezime}`;
</script>

<template>
    <ComponentWrapper :data="{ime: ime, prezime: prezime, sadrzaj: sadrzaj}">       
        <div v-text="sadrzaj"> 
        </div>
        
        <div> 
            Pozdrav, ja sam {{ime}} {{prezime}}
        </div>
    </ComponentWrapper>
</template>