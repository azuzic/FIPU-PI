<script setup>
    import { ref } from 'vue'
    const links = [
        { name: "POČETNA", active: true},
        { name: "SLIKA", active: true},
        { name: "ZVUK", active: false},
        { name: "GRAFIKA", active: true},
        { name: "MODEL", active: false},
        { name: "VIDEO", active: false}
    ];
    const activeLink = ref("POČETNA");
</script>

<template>
    <div class="fixed w-full h-full flex justify-center poppins text-sm text-indigo-300
        bg-gradient-to-b from-[#1B1A55] via-[#2B428D] to-[#3B39BB]">

        <div style="background-image: url('./src/assets/images/pattern.jpg'); 
            background-size: 200px;"
            class="fixed w-full h-full bg-repeat opacity-[3%] -z-10"></div>

        <div class="bg-[#535C91]/25 border-x border-[#9290C3]/10 w-[700px] max-w-[700px] shadow-lg
            flex flex-col justify-between px-8 gap-4 overflow-auto">
                
            <header class="flex justify-center items-center relative min-h-96">
                <img src="./assets/images/baner.jpg" alt="baner"
                    class="absolute w-full h-full object-cover rounded-b-lg">
                <p class="z-10 font-extralight text-slate-100 sm:text-5xl text-3xl text-center">
                    Multimedijalni<br>Sustavi
                </p>
            </header>

            <nav class="sticky top-0 w-full flex gap-4 flex-wrap items-center justify-around bg-[#070F2B]/25 backdrop-blur-sm py-2 px-8 rounded-lg">
                <div v-for="link in links" class="text-sm z-10 relative transition" @click="activeLink = link.name"
                        :class="[link.name == activeLink ? 'underline text-purple-100' : 'cursor-pointer text-indigo-300 text-sm hover:text-indigo-200 hover:scale-105', 
                            link.active ? '' : 'text-indigo-500/50 text-sm pointer-events-none font line-through']">
                    {{ link.name }} 
                    <b v-if="link.name == activeLink" class="text-purple-400 -z-[5] absolute -left-0.5 blur-sm">
                        {{ link.name }}
                    </b>
                </div>
            </nav>

            <div v-if="activeLink == 'POČETNA'" class="grow flex flex-col gap-4">
                <h1 class="text-indigo-100 text-2xl font-light mt-2">
                    Dobro došli na moju web stranicu!
                </h1>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="grid grid-cols-2 items-center text-justify">
                    <p>
                        Ova stranica napravljena je za projekt iz kolegija Multimedijalni sustavi. 
                        Dizajn stranice izrađen je u Figmi.
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="figma logo"
                        class="h-16 w-full object-contain">
                </section>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="text-justify">
                    Zadatak nam je bio da za određenu temu, uz pomoć različitih alata za izradu 
                    reklama za tisak ili brošura, za uređivanje i obradu fotografija, za kreiranje 
                    i obradu grafičkih elemenata vektorske grafike i/ili animacija, za snimanje i 
                    obradu audio sadržaja te za uređivanje i sastavljanje videozapisa, izradimo 
                    vlastite slike, grafike i zvukove kojima ćemo predstaviti odabranu temu.
                </section>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="text-justify">
                    Svaki uradak ćemo opisati korak po korak, uz detaljan postupak izrade u svakome
                    od alata, a svaki uradak bit će prikazan u zasebnoj kartici.
                </section>
            </div>

            <div v-if="activeLink == 'SLIKA'" class="grow flex flex-col gap-4">
                <h1 class="text-indigo-100 text-2xl text-center font-medium mt-2">
                    SLIKA
                </h1>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="grid grid-cols-2 items-center text-justify">
                    <p>
                        Za ovaj dio projekta trebali smo urediti sliku.Koristit ćemo program GIMP, 
                        pomoću kojeg ćemo izraditi dizajn majice i detaljno opisati postupak izrade.
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1200px-The_GIMP_icon_-_gnome.svg.png" alt="gimp logo"
                        class="h-24 w-full object-contain">
                </section>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="flex w-full items-center">
                    <img src="./assets/images/shirt.png" alt="shirt"
                        class="h-52 grow object-contain">
                    <img src="./assets/images/layers.png" alt="layers"
                        class="h-32 grow object-contain">
                </section>

                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="text-justify flex flex-col gap-2">
                    Koraci izrade:
                    <ol class="flex flex-col gap-1 list-decimal pl-8">
                        <li>
                            Priprema podloge
                            <ul class="list-disc pl-8">
                                <li>
                                    Otvara se slika crne majice u GIMP-u kao osnovna podloga.                                    
                                </li>
                                <li>
                                    Dodaje se nova prozirna slojna maska za područja na kojima će se crtati ili dodavati elementi.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Dodavanje dizajna
                            <ul class="list-disc pl-8">
                                <li>
                                    Grafika (npr. prirodni motiv s planinama) uvozi se kao novi sloj.
                                </li>
                                <li>
                                    Veličina grafike podešava se pomoću alata Scale Tool kako bi odgovarala prednjem dijelu majice.
                                </li>
                                <li>
                                    Dizajn se postavlja unutar sloja povezanog s majicom.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Tekstualni elementi
                            <ul class="list-disc pl-8">
                                <li>
                                    Pomoću alata Text Tool dodaje se natpis "NATURE" iznad grafike.
                                </li>
                                <li>
                                    Odabire se font i boja teksta koji odgovaraju prirodnom stilu dizajna.
                                </li>
                                <li>
                                    Tekst se prilagođava veličinom i pozicijom kako bi bio centriran.
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            Detalji rukava
                            <ul class="list-disc pl-8">
                                <li>
                                    Kreira se novi sloj u kombinaciji s maskom za crtanje detalja na rukavima.
                                </li>
                                <li>
                                    Koristi se četka (Brush Tool) s prilagođenim uzorkom za dodavanje teksture na rubove rukava.
                                </li>
                                <li>
                                    Neprozirnost i boja četke podešavaju se kako bi dizajn izgledao prirodno.
                                </li>
                            </ul>
                        </li>
                    </ol>

                </section>

                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="grid grid-cols-2 text-justify">
                    
                    <div class="text-justify flex flex-col gap-2">
                        <p>Izgled maske korištene za crtanje detalja unutar majice:</p>
                        <ul class="flex flex-col justify-center list-disc pl-8 h-full gap-2 pb-8">
                            <li>
                                Crna boja = prozirno
                            </li>
                            <li>
                                Bijela boja = vidljivo
                            </li>
                        </ul>
                    </div>

                    <img src="./assets/images/mask.png" alt="mask"
                        class="h-48 w-full object-contain">

                </section>
            </div>

            <div v-if="activeLink == 'GRAFIKA'" class="grow flex flex-col gap-4">
                <h1 class="text-indigo-100 text-2xl text-center font-medium mt-2">
                    GRAFIKA
                </h1>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="grid grid-cols-2 items-center text-justify">
                    <p>
                        Za ovaj dio projekta izrađena je vektorska grafika. Koristit će se program Inkscape, 
                        pomoću kojeg će se izraditi dizajn mačke, uz detaljan opis postupka izrade.
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1200px-Inkscape_Logo.svg.png" alt="inkscape logo"
                        class="h-24 w-full object-contain">
                </section>
                
                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="flex w-full items-center">
                    <img src="./assets/images/cats.png" alt="figma logo"
                        class="h-64 grow object-contain">
                </section>

                <hr class="border-indigo-200/50 border rounded-full my-2">

                <section class="text-justify flex flex-col gap-2">
                    Koraci izrade:
                    <ol class="flex flex-col gap-1 list-decimal pl-8">
                        <li>
                            Priprema dokumenta
                            <ul class="list-disc pl-8">
                                <li>
                                    Otvori se novi dokument u Inkscapeu i postavi odgovarajuće dimenzije canvas-a.                                 
                                </li>
                                <li>
                                    Kreiraju se tri sloja: Obris, Pozadina, i Efekti za bolje upravljanje elementima.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Dodaje se gotovi obris mačke
                            <ul class="list-disc pl-8">
                                <li>
                                    Boja obrisa postavlja se na crvenu.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Dodavanje pozadine
                            <ul class="list-disc pl-8">
                                <li>
                                    Na sloj Pozadina dodaje se pravokutnik koji prekriva cijelu površinu platna.
                                </li>
                                <li>
                                    Primjenjuje se gradijent (linearni ili radijalni) pomoću alata Gradient Tool (Ctrl+F1), 
                                    s nijansama koje prelaze od svijetle ružičaste do ljubičaste.
                                </li>
                                <li>
                                    Oblik mačke kopira se (Ctrl+C), a zatim zalijepi (Ctrl+V) unutar sloja Pozadina 
                                    kako bi se koristio kao maska.
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            Primjena maske
                            <ul class="list-disc pl-8">
                                <li>
                                    Izabere se oblik mačke na sloju Pozadina i grupira (Ctrl+G) s gradijentom.
                                </li>
                                <li>
                                    Maskiranje se primjenjuje putem opcije Set Clip ili Set Mask u izborniku Object.
                                </li>
                                <li>
                                    Na ovaj način pozadina je ograničena na unutar obrisa mačke.
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            Dodavanje efekata i sjena
                            <ul class="list-disc pl-8">
                                <li>
                                    Na sloj Efekti dodaje se duplicirani oblik mačke, koji se zatim malo pomiče 
                                    prema dolje i desno kako bi se stvorila sjena.
                                </li>
                                <li>
                                    Sjena se popuni tamnijom nijansom postojeće pozadine i smanji joj se 
                                    neprozirnost (Opacity) putem izbornika Fill and Stroke.
                                </li>
                                <li>
                                    Dodatno, unutar sloja Efekti, koriste se prilagodbe gradijenta i 
                                    blagog zamućenja (Blur) kako bi se naglasili detalji na tijelu mačke.
                                </li>
                            </ul>
                        </li>
                    </ol>

                </section>
            </div>

            <footer class="w-full flex items-center justify-center gap-2 bg-[#070F2B]/25 backdrop-blur-sm py-2 px-8 rounded-t-lg">
                Izradio: <b class="text-indigo-200">Marko Marković</b>
            </footer>
        </div>
    </div>
</template>