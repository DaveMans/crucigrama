// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Una declaración moral que elabora afirmaciones y define lo que es bueno, malo, obligatorio, permitido, etc.",
					answer: "etica",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1,
					correct: false
				},
			 	{
					clue: "Veneración o el acatamiento que se hace a alguien.",
					answer: "respeto",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1,
					correct: false
				},
				{
					clue: "Un sistema formado por elementos naturales y artificiales que están interrelacionados y que son modificados por la acción humana.",
					answer: "medioambiente",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3,
					correct: false
				},
				{
					clue: "Refiere a lo que no puede ser dividido. Se trata, por lo tanto, de una unidad independiente (frente a otras unidades) o de una unidad elemental.",
					answer: "individuo",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 5,
					correct: false
				},
				{
					clue: "Un grupo de individuos marcados por una cultura en común, un cierto folclore y criterios compartidos que condicionan sus costumbres y estilo de vida y que se relacionan entre sí en el marco de una comunidad.",
					answer: "Sociedad",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7,
					correct: false
				},
				/*{
					clue: "Ajustar una estrategia a otra. A nivel de marketing se fijan los objetivos de una empresa en base a unas determinadas circunstancias de producto, mercado, comunicación y gestión comercial",
					answer: "adaptar",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "Conjunto de creencias, costumbres, valores y normas de una persona o de un grupo social, que funciona como una guía para obrar.",
					answer: "moral",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "Acción y efecto de unir o unirse (juntar, combinar, atar o acercar dos o más cosas para hacer un todo, ya sea físico o simbólico)",
					answer: "union",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},*/
				{
					clue: "Acción y efecto de unir o unirse (juntar, combinar, atar o acercar dos o más cosas para hacer un todo, ya sea físico o simbólico)",
					answer: "union",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1,
					correct: false
				},
				{
					clue: "Son las siglas que definen MarKeTing",
					answer: "mkt",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1,
					correct: false
				},
				{
					clue: "Ajustar una estrategia a otra. A nivel de marketing se fijan los objetivos de una empresa en base a unas determinadas circunstancias de producto, mercado, comunicación y gestión comercial",
					answer: "adaptar",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 1,
					correct: false
				},
				{
					clue: "Greek variable that usually describes rotor positon",
					answer: "theta",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 3,
					correct: false
				},
				{
					clue: "Conjunto de creencias, costumbres, valores y normas de una persona o de un grupo social, que funciona como una guía para obrar.",
					answer: "moral",
					position: 7,
					orientation: "down",
					startx: 12,
					starty: 4,
					correct: false
				},
				/*{
					clue: "No. 13 across does this to a voltage",
					answer: "steps",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "Emits a lout wailing sound",
					answer: "siren",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "Information technology (abbr.)",
					answer: "it",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "Es la traducion de prueba al ingles",
					answer: "test",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "Offset current control (abbr.)",
					answer: "occ",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				}*/
			];

		function getRandomArrayElements(arr, count) {
			var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
			while (i-- > min) {
				index = Math.floor((i + 1) * Math.random());
				temp = shuffled[index];
				shuffled[index] = shuffled[i];
				shuffled[i] = temp;
			}
			return shuffled.slice(min);
		};
			
			
			
		var newWordsArray = getRandomArrayElements(puzzleData, 2);
	
		$.each(newWordsArray, function(key,value){
			var min = 1, max = 10;
			var newPosition = Math.floor(Math.random()*(max-min+1)+min);
			
			value.position = newPosition;
				
		});
	
		$('#puzzle-wrapper').crossword(newWordsArray);
		
	})
	
})(jQuery)
