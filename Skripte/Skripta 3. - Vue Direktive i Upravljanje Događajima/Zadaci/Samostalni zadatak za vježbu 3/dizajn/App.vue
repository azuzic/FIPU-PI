<script setup>
	import { ref } from "vue";
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
				<input type="text" class="border py-2 px-4 rounded border-slate-200 bg-slate-50 placeholder:text-slate-400 w-52" placeholder="Upiši naziv proizvoda...">

				<label for="cijena" class="font-bold">Cijena proizvoda</label>
				<input type="text" class="border py-2 px-4 rounded border-slate-200 bg-slate-50 placeholder:text-slate-400 w-52" placeholder="Upiši cijenu proizvoda...">

				<button class="bg-emerald-500 px-4 py-2 rounded font-bold text-emerald-50">
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

			<div class="relative grid grid-cols-4 items-center rounded bg-slate-200 py-2 px-4">
				<div class="font-bold">Jabuka</div>
				<div class="flex gap-2">
					<button class="font-bold">-</button>
					<input type="text" class="border py-2 px-4 rounded border-slate-200 bg-slate-50 placeholder:text-slate-400 w-16" pattern="[0-9]+" inputmode="numeric" value="4">
					<button class="font-bold">+</button>
				</div>
				<div>0.25 €</div>
				<div>1.00 €</div>
				<button class="text-red-700 absolute right-8 top-1/2 -translate-y-1/2">
					Ukloni
				</button>
			</div>

			<hr class="border-slate-200">

			<div>
				<b>Ukupno: </b> 1.00 € 
			</div>

		</div>
	</div>
</template>