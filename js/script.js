(function ($) {
    $(function() {
        var puzzleData = [
            {
                clue: "Una declaración moral que elabora afirmaciones y define lo que es bueno, malo, obligatorio, permitido, etc.",
                answer: "etica",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 1,
                correct: false,
				group: 1
            },
            {
                clue: "Veneración o el acatamiento que se hace a alguien.",
                answer: "respeto",
                position: 2,
                orientation: "across",
                startx: 2,
                starty: 2,
                correct: false,
				group: 1
            },
            {
                clue: "Un sistema formado por elementos naturales y artificiales que están interrelacionados y que son modificados por la acción humana.",
                answer: "medioambiente",
                position: 3,
                orientation: "across",
                startx: 3,
                starty: 3,
                correct: false,
				group: 1
            },
            {
                clue: "Refiere a lo que no puede ser dividido. Se trata, por lo tanto, de una unidad independiente (frente a otras unidades) o de una unidad elemental.",
                answer: "individuo",
                position: 4,
                orientation: "down",
                startx: 4,
                starty: 4,
                correct: false,
				group: 1
            },
            {
                clue: "Un grupo de individuos marcados por una cultura en común, un cierto folclore y criterios compartidos que condicionan sus costumbres y estilo de vida y que se relacionan entre sí en el marco de una comunidad.",
                answer: "Sociedad",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 5,
                correct: false,
				group: 1
            },
            {
                clue: "Es la creencia en que una persona o grupo será capaz y deseará actuar de manera adecuada en una determinada situación y pensamientos. La confianza se verá más o menos reforzada en función de las acciones.",
                answer: "confianza",
                position: 6,
                orientation: "down",
                startx: 6,
                starty: 6,
				group: 1
            },
            {
                clue: "Sentimiento de respeto y fidelidad a los propios principios morales, a los compromisos establecidos o hacia alguien.",
                answer: "lealtad",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 1,
				group: 2
            },
            {
                clue: "Disputa entre personas, animales o cosas que aspiran a un mismo objetivo o a la superioridad en algo.",
                answer: "competencia",
                position: 2,
                orientation: "across",
                startx: 2,
                starty: 2,
				group: 2
            },
            {
                clue: "Acción y efecto de unir o unirse (juntar, combinar, atar o acercar dos o más cosas para hacer un todo, ya sea físico o simbólico)",
                answer: "union",
                position: 3,
                orientation: "across",
                startx: 3,
                starty: 3,
                correct: false,
				group: 2
            },
            {
                clue: "Son las siglas que definen MarKeTing",
                answer: "mkt",
                position: 4,
                orientation: "down",
                startx: 4,
                starty: 4,
                correct: false,
				group: 2
            },
            {
                clue: "Ajustar una estrategia a otra. A nivel de marketing se fijan los objetivos de una empresa en base a unas determinadas circunstancias de producto, mercado, comunicación y gestión comercial",
                answer: "adaptar",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 5,
                correct: false,
				group: 2
            },
            {
                clue: "Conjunto de creencias, costumbres, valores y normas de una persona o de un grupo social, que funciona como una guía para obrar.",
                answer: "moral",
                position: 6,
                orientation: "down",
                startx: 6,
                starty: 6,
                correct: false,
				group: 2
            },
            {
                clue: "Acción o conjunto de palabras o acciones con que se engaña a alguien o se le hace creer algo que no es verdad.",
                answer: "engaño",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 1,
				group: 3
            },
            {
                clue: "Cualidad de ser rentable",
                answer: "rentabilidad",
                position: 2,
                orientation: "across",
                startx: 2,
                starty: 2,
				group: 3
            },
            {
                clue: "Que consume bienes y productos en una sociedad de mercado.",
                answer: "consumidor",
                position: 3,
                orientation: "across",
                startx: 3,
                starty: 3,
				group: 3
            },
            {
                clue: "Persona que utiliza los servicios de un profesional o de una empresa, especialmente la que lo hace regularmente",
                answer: "cliente",
                position: 4,
                orientation: "down",
                startx: 4,
                starty: 4,
				group: 3
            },
            {
                clue: "Manera de comportarse una persona en una situación determinada o en general.",
                answer: "comportamiento",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 5,
				group: 3
            },
            {
                clue: "Proviene del latín cultus, hace referencia al cultivo del espíritu humano y de las facultades intelectuales del hombre.",
                answer: "cultura",
                position: 6,
                orientation: "down",
                startx: 6,
                starty: 6,
				group: 3
            },
            {
                clue: "Cosa producida natural o artificialmente, o resultado de un trabajo u operación.",
                answer: "producto",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 1,
				group: 4
            },
            {
                clue: "Trabajo, especialmente cuando se hace para otra persona.",
                answer: "servicio",
                position: 2,
                orientation: "across",
                startx: 2,
                starty: 2,
				group: 4
            },
            {
                clue: "Es la seguridad o esperanza firme que alguien tiene de otro individuo o de algo",
                answer: "confianza",
                position: 3,
                orientation: "across",
                startx: 3,
                starty: 3,
				group: 4
            },
            {
                clue: "Es una forma de comunicación que intenta incrementar el consumo de un producto o servicio,",
                answer: "publicidad",
                position: 4,
                orientation: "down",
                startx: 4,
                starty: 4,
				group: 4
            },
            {
                clue: "La práctica y al conjunto de técnicas asociadas a la obtención encubierta de datos o información confidencial",
                answer: "espionaje",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 5,
				group: 4
            },
            {
                clue: "Parte más interior o profunda de la vida de una persona, que comprende sus sentimientos, vida familiar o relaciones de amistad.",
                answer: "privacidad",
                position: 6,
                orientation: "down",
                startx: 6,
                starty: 6,
				group: 4
            }
        ];

        /*function getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        };*/

        //var maxNumberOfItems = 6;
        //var newWordsArray = getRandomArrayElements(puzzleData, maxNumberOfItems);

        /*$.each(newWordsArray, function(key, value) {
            var min = 1, max = maxNumberOfItems;
            var newPosition = Math.floor(Math.random() * (max - min + 1) + min);
            value.position = newPosition;
        });*/
		
		var groupValue = parseInt(window.location.href.substring(window.location.href.indexOf('=') + 1,window.location.href.indexOf('=').length));
		
		var filteredArray = puzzleData.filter(function(value) {
							  return value.group == groupValue;
							});/*$.filter(puzzleData, function(index, value ) {
							  return value.group = groupValue;
							});*/
							
        $('#puzzle-wrapper').crossword(filteredArray);
    });
})(jQuery)
