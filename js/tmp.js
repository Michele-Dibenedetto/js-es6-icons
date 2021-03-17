$(document).ready(function() {
	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

	var icon = $(".icons");

	// creo un arrey di colori per associarli alle tipologie
	colors = [
		"blue",
		"orange",
		"purple"
	];

	// richiamo la funzione che mi permette di creare il mio arrey con le relative tipologie presenti nel mio oggetto
	const types = getType(icons);

	// avvio un ciclo map per poter associare l'indice di una tipologia (arrey types) ad un colore (arrey colors)
	const iconsColored = icons.map((element) => {
		// creo una variabile a cui vado ad assegnare l'indice della tipologia che si trova dentro l'arrey types
		var indexType = types.indexOf(element.type);
		// verifico che l'indice sia stato trovato e che quindi indexType non sia -1 (perche indexof se non trova l'elemento nell'arrey ritorna -1)
		if (indexType != -1) {
			// creo una nuova chiave che si chiamera color e il suo valore sarà il colore che avrà l'indice uguale all'indice della tipologia
			element.color = colors[indexType];
		}
		return element;
	})
	console.log(iconsColored);

	// richiamo la funzione che mi permette di visualizzare sull'html le mie icone
	show(iconsColored, icon);

	// uso il foreach per scorrere l'arrey contenete le tipologie e ad ogni ciclo faccio un append aggiungendo un option per ogni tipologia presente nell'arrey
	types.forEach((element) => {
		$(".type").append(`
		<option value="${element}">${element}</option>
		`)
	})

	
	$(".type").change({icon}, function(event) {
		const icon = event.data.icon; /*questa parte non riesco a capirla*/

		const iconfiltered = iconsColored.filter((element) => {
			return element.type == $(this).val();
		})
		if ($(this).val() == "all") {
			show(iconsColored, icon);
		} else {
			show(iconfiltered, icon);
		}
		
	})
	
})



// FUNZIONI
// creo una funzione che mi permetta di individuare e inserire in un'apposito arrey tutte le tipologie degli oggetti
// cosi da poter successivamente fare il confronto con gli indici dell'arrey colors e in base a quale indice corrisponde
// le tipologie avrenno un determinato colore
function getType(arrey) {
	let types =  [];
	arrey.forEach((element) => {
		// per ogni ciclo verifico se una tipologie è gia presente nell'arrey e se non è così l'aggiungo alla lista
		if (!types.includes(element.type)) {
			types.push(element.type);
		}
	});
	return types;
}


function show(arrey, icon) {
	icon.html("");
	// avvio un forEach per scorrere tutto l'arrey
	arrey.forEach((element) => {
		// destrutturo le chiavi dell'arrey per semplificarmi il lavoro
		const {name, prefix, type, family, color} = element;
		// nel div con classe .icons faccio un append (inserisco del contenuto nell'html) 
		// dove inseriro il tag i per inserire il font awesome relativi e il nome dei miei oggetti
		icon.append(`
		<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
		<div>${name.toUpperCase()}</div>
		`);
	});
}