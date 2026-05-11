<script setup>
	import { ref } from "vue";

	const novi_naziv = ref("");
	const nova_cijena = ref(1);

	const kosarica = ref([
		{
			naziv: "Jabuka",
			cijena: 0.25,
			kolicina: 4
		},
		{
			naziv: "Banana",
			cijena: 0.12,
			kolicina: 12
		},
		{
			naziv: "Lubenica",
			cijena: 0.12,
			kolicina: 1
		},
		{
			naziv: "Kruh",
			cijena: 2.00,
			kolicina: 3
		}
	]);

	function dodajArtikl() {

		const postojeci_artikl = kosarica.value.find(artikl => 
			artikl.naziv.toLowerCase() === novi_naziv.value.toLowerCase());

		if (postojeci_artikl) {
			postojeci_artikl.kolicina++;
			return;
		}

		kosarica.value.push({
			naziv: novi_naziv.value,
			cijena: nova_cijena.value,
			kolicina: 1
		});

		novi_naziv.value = "";
		nova_cijena.value = 1;
	};

	function ukloniArtikl(index) {
		kosarica.value.splice(index, 1);
	};

	function ukupno() {
		return kosarica.value.reduce((acc, artikl) => 
			acc + (artikl.cijena * artikl.kolicina), 0);
	};

</script>

<template>
	<div class="fixed flex items-center justify-center size-full overflow-auto">
		<div class="size-fit flex flex-col gap-4 p-8 bg-slate-100 rounded border border-slate-200">
		
			<h1 class="text-4xl font-bold">
				Košarica
			</h1>

			<hr class="border-slate-200">

			<div class="w-fit items-center flex gap-4 text-sm">

				<label for="naziv" class="font-bold">Naziv proizvoda</label>
				<input type="text" v-model="novi_naziv" class="border py-2 px-4 rounded border-slate-200 bg-slate-50 placeholder:text-slate-400 w-52" placeholder="Upiši naziv proizvoda...">

				<label for="cijena" class="font-bold">Cijena proizvoda</label>
				<input type="number" v-model="nova_cijena" class="border py-2 px-4 rounded border-slate-200 bg-slate-50 placeholder:text-slate-400 w-52" placeholder="Upiši cijenu proizvoda..." step="0.01">

				<button @click="dodajArtikl" :disabled="!novi_naziv || nova_cijena <= 0"
					class="bg-emerald-500 hover:bg-emerald-600 disabled:hover:bg-emerald-500 
					px-4 py-2 rounded font-bold text-emerald-50 cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed transition-colors ">
					Dodaj artikl
				</button>

			</div>

			<hr class="border-slate-200">

			<div class="grid grid-cols-4 font-bold text-slate-500">
				<div>Naziv</div>
				<div>Količina</div>
				<div>Cijena</div>
				<div>Ukupno</div>
			</div>

			<div v-if="kosarica.length > 0" class="relative grid grid-cols-4 items-center rounded bg-slate-200 py-2 px-4"
				v-for="(artikl, index) in kosarica" :key="artikl.naziv">
				<div class="font-bold">{{ artikl.naziv }}</div>
				<div class="flex gap-2">
					<button class="font-bold cursor-pointer" @click="artikl.kolicina--">-</button>
					<input readonly type="text" class="border py-2 px-4 rounded border-slate-200 bg-slate-50 placeholder:text-slate-400 w-16" pattern="[0-9]+" inputmode="numeric" :value="artikl.kolicina">
					<button class="font-bold cursor-pointer" @click="artikl.kolicina++">+</button>
				</div>
				<div>{{ artikl.cijena }} €</div>
				<div>{{ (artikl.cijena * artikl.kolicina).toFixed(2) }} €</div>
				<button @click="ukloniArtikl(index)" 
					class="hover:underline cursor-pointer text-red-700 absolute right-8 top-1/2 -translate-y-1/2">
					Ukloni
				</button>
			</div>

			<div v-else class="text-center text-slate-500 py-16">
				Košarica je prazna.
			</div>

			<hr class="border-slate-200">

			<div>
				<b>Ukupno: </b> {{ ukupno().toFixed(2) }} €
			</div>

		</div>
	</div>
</template>