<script setup>
  import { ref } from "vue";

  const slike = ref({
      "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
      "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
      "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
      "Kruh": "https://www.svgrepo.com/show/530223/bread.svg",
  });

  const proizvodi = ref([
      { naziv: "Jabuka", cijena: 0.25 }, { naziv: "Mrkva", cijena: 0.12 }, 
      { naziv: "Kruh", cijena: 2.00 }, { naziv: "Sir", cijena: 4.48 }
  ]);

  const korisnik = ref({
      jeAdmin: true,
      osobni_podaci: {
          ime: "Marko",
          prezime: "Krivić",
          adresa: { grad: "Pula", ulica: "Veruda", broj: 32 },
          broj_telefona: "+091-123-456"
      },
      kosarica: [
          { naziv: "Jabuka", količina: 4 }, { naziv: "Mrkva", količina: 12 },
          { naziv: "Kruh", količina: 3 }, { naziv: "Sir", količina: 1 },
      ]
  });

  const dohvatiCijenu = (naziv) => {
      const proizvod = proizvodi.value.find(p => p.naziv === naziv);
      return proizvod ? proizvod.cijena : 0;
  };

  const sveukupnaCijena = () => {
      return korisnik.value.kosarica.reduce((ukupno, stavka) => {
          const cijena = dohvatiCijenu(stavka.naziv);
          return ukupno + (cijena * stavka.količina);
      }, 0).toFixed(2);
  };

  const najskupljaStavka = () => {
      let najskuplja = null;
      let maxCijena = 0;

      korisnik.value.kosarica.forEach(stavka => {
          const cijena = dohvatiCijenu(stavka.naziv);
          if (cijena * stavka.količina > maxCijena) {
              maxCijena = cijena * stavka.količina;
              najskuplja = stavka.naziv;
          }
      });

      return najskuplja;
  };

</script>

<template>

  <div class="w-full flex justify-center py-32">

    <div class="flex flex-col gap-4 items-center justify-center w-lg">
      
      <section class="w-full flex flex-col gap-2 border border-slate-300 bg-slate-100 p-4 rounded-lg"
        :class="korisnik.jeAdmin ? 'text-sky-700' : ''">
        <h1 class="text-xl font-bold">
          Korisnički podaci
        </h1>
        <hr class="opacity-25">
        <div>
          <b>Ime:</b> {{ korisnik.osobni_podaci.ime }} {{ korisnik.osobni_podaci.prezime }} <br>
          <b>Adresa:</b> {{ korisnik.osobni_podaci.adresa.ulica }} {{ korisnik.osobni_podaci.adresa.broj }}, {{ korisnik.osobni_podaci.adresa.grad }} <br>
          <b>Telefon:</b> {{ korisnik.osobni_podaci.broj_telefona }}
        </div>
      </section>

      <section class="w-full flex flex-col gap-4 border border-slate-300 bg-slate-100 p-4 rounded-lg">
        
        <h1 class="text-2xl font-bold">
          🛒 Košarica
        </h1>
        <ul class="flex flex-col gap-2">

          <li class="flex gap-4 border p-3 rounded-lg"
            :class="najskupljaStavka() == korisnik.kosarica[0].naziv ? 
              'border-red-400 bg-red-50 text-red-950' : 
              'border-slate-400 bg-slate-50'">

            <div class="h-full flex items-center">
              <img :src="slike[korisnik.kosarica[0].naziv]" alt="Slika proizvoda" class="size-16">
            </div>

            <div class="flex flex-col">
              <b>{{ korisnik.kosarica[0].naziv }}</b>
              <p>Cijena: €{{ dohvatiCijenu(korisnik.kosarica[0].naziv) }} | Količina: {{ korisnik.kosarica[0].količina }}</p>
              <p>Ukupno: €{{ (dohvatiCijenu(korisnik.kosarica[0].naziv) * korisnik.kosarica[0].količina).toFixed(2) }}</p>
            </div>

          </li>

          <li class="flex gap-4 border p-3 rounded-lg"
            :class="najskupljaStavka() == korisnik.kosarica[1].naziv ? 
              'border-red-400 bg-red-50 text-red-950' : 
              'border-slate-400 bg-slate-50'">

            <div class="h-full flex items-center">
              <img :src="slike[korisnik.kosarica[1].naziv]" alt="Slika proizvoda" class="size-16">
            </div>

            <div class="flex flex-col">
              <b>{{ korisnik.kosarica[1].naziv }}</b>
              <p>Cijena: €{{ dohvatiCijenu(korisnik.kosarica[1].naziv) }} | Količina: {{ korisnik.kosarica[1].količina }}</p>
              <p>Ukupno: €{{ (dohvatiCijenu(korisnik.kosarica[1].naziv) * korisnik.kosarica[1].količina).toFixed(2) }}</p>
            </div>

          </li>

          <li class="flex gap-4 border p-3 rounded-lg"
            :class="najskupljaStavka() == korisnik.kosarica[2].naziv ? 
              'border-red-400 bg-red-50 text-red-950' : 
              'border-slate-400 bg-slate-50'">

            <div class="h-full flex items-center">
              <img :src="slike[korisnik.kosarica[2].naziv]" alt="Slika proizvoda" class="size-16">
            </div>

            <div class="flex flex-col">
              <b>{{ korisnik.kosarica[2].naziv }}</b>
              <p>Cijena: €{{ dohvatiCijenu(korisnik.kosarica[2].naziv) }} | Količina: {{ korisnik.kosarica[2].količina }}</p>
              <p>Ukupno: €{{ (dohvatiCijenu(korisnik.kosarica[2].naziv) * korisnik.kosarica[2].količina).toFixed(2) }}</p>
            </div>

          </li>

          <li class="flex gap-4 border p-3 rounded-lg"
            :class="najskupljaStavka() == korisnik.kosarica[3].naziv ? 
              'border-red-400 bg-red-50 text-red-950' : 
              'border-slate-400 bg-slate-50'">
            
            <div class="h-full flex items-center">
              <img :src="slike[korisnik.kosarica[3].naziv]" alt="Slika proizvoda" class="size-16">
            </div>

            <div class="flex flex-col">
              <b>{{ korisnik.kosarica[3].naziv }}</b>
              <p>Cijena: €{{ dohvatiCijenu(korisnik.kosarica[3].naziv) }} | Količina: {{ korisnik.kosarica[3].količina }}</p>
              <p>Ukupno: €{{ (dohvatiCijenu(korisnik.kosarica[3].naziv) * korisnik.kosarica[3].količina).toFixed(2) }}</p>
            </div>

          </li>

        </ul>

        <div class="text-lg">
          <b>Ukupna cijena: </b>€{{ sveukupnaCijena() }}
        </div>

      </section>

    </div>
    
  </div>

</template>