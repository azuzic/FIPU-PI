<div>

## Samostalni zadatak za vježbu 3  

Imate zadatak izraditi sučelje za **košaricu web trgovine**. Sučelje aplikacije sastoji se od polja za unos naziva i cijene proizvoda te gumba za dodavanje proizvoda u košaricu. Također, prikazuje se lista proizvoda u košarici s informacijama o nazivu, količini, cijeni po komadu te ukupnoj cijeni za taj proizvod.

Kada korisnik unese naziv i cijenu proizvoda te klikne na gumb `Dodaj artikl`, proizvod se dodaje u košaricu. 
 - Ako proizvod nema ime, dugme se ne može kliknuti, mora biti zatamnjeno/onemogućeno
 - Ako se proizvod s istim imenom već nalazi u košarici, količina se povećava za `1`
 - Ako je proizvod novi, dodaje se na listu
 - Cijena proizvoda ne može ići ispod `0`

Korisnik može mijenjati količinu proizvoda u košarici koristeći gumbe `+` i `-` pored svakog proizvoda. Također, postoji opcija za uklanjanje proizvoda iz košarice klikom na gumb `Ukloni`.

- Ako nema nijednog proizvoda u košarici, treba pisati *"Košarica je prazna!"*.
- Nakon svake promjene u košarici, ukupna cijena se automatski ažurira kako bi korisnik imao uvid u trenutačni trošak.

> Potrebno je koristiti `vezivanje atributa`, `v-model`, `v-for`, `v-if`, `upravljanje događajima`  

*Primjer:*

<img src="../Slike/kosarica.png" alt="alt text" width="90%">

> *Rješenje ne mora vizualno izgledati identično kao na slici.*

</div>