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
                correct: false
            },
            {
                clue: "Veneración o el acatamiento que se hace a alguien.",
                answer: "respeto",
                position: 2,
                orientation: "across",
                startx: 7,
                starty: 1,
                correct: false
            },
            {
                clue: "Un sistema formado por elementos naturales y artificiales que están interrelacionados y que son modificados por la acción humana.",
                answer: "medioambiente",
                position: 3,
                orientation: "across",
                startx: 1,
                starty: 3,
                correct: false
            },
            {
                clue: "Refiere a lo que no puede ser dividido. Se trata, por lo tanto, de una unidad independiente (frente a otras unidades) o de una unidad elemental.",
                answer: "individuo",
                position: 4,
                orientation: "across",
                startx: 1,
                starty: 5,
                correct: false
            },
            {
                clue: "Un grupo de individuos marcados por una cultura en común, un cierto folclore y criterios compartidos que condicionan sus costumbres y estilo de vida y que se relacionan entre sí en el marco de una comunidad.",
                answer: "Sociedad",
                position: 5,
                orientation: "across",
                startx: 2,
                starty: 7,
                correct: false
            },
            {
                clue: "Es la creencia en que una persona o grupo será capaz y deseará actuar de manera adecuada en una determinada situación y pensamientos. La confianza se verá más o menos reforzada en función de las acciones.",
                answer: "confianza",
                position: 6,
                orientation: "across",
                startx: 1,
                starty: 9
            },
            {
                clue: "Sentimiento de respeto y fidelidad a los propios principios morales, a los compromisos establecidos o hacia alguien.",
                answer: "lealtad",
                position: 7,
                orientation: "across",
                startx: 1,
                starty: 11
            },
            {
                clue: "Disputa entre personas, animales o cosas que aspiran a un mismo objetivo o a la superioridad en algo.",
                answer: "competencia",
                position: 8,
                orientation: "across",
                startx: 7,
                starty: 11
            },
            {
                clue: "Acción y efecto de unir o unirse (juntar, combinar, atar o acercar dos o más cosas para hacer un todo, ya sea físico o simbólico)",
                answer: "union",
                position: 9,
                orientation: "down",
                startx: 1,
                starty: 1,
                correct: false
            },
            {
                clue: "Son las siglas que definen MarKeTing",
                answer: "mkt",
                position: 10,
                orientation: "down",
                startx: 5,
                starty: 1,
                correct: false
            },
            {
                clue: "Ajustar una estrategia a otra. A nivel de marketing se fijan los objetivos de una empresa en base a unas determinadas circunstancias de producto, mercado, comunicación y gestión comercial",
                answer: "adaptar",
                position: 11,
                orientation: "down",
                startx: 9,
                starty: 1,
                correct: false
            },
            {
                clue: "Conjunto de creencias, costumbres, valores y normas de una persona o de un grupo social, que funciona como una guía para obrar.",
                answer: "moral",
                position: 12,
                orientation: "down",
                startx: 12,
                starty: 4,
                correct: false
            },
            {
                clue: "Acción o conjunto de palabras o acciones con que se engaña a alguien o se le hace creer algo que no es verdad.",
                answer: "engaño",
                position: 13,
                orientation: "down",
                startx: 5,
                starty: 5
            },
            {
                clue: "Cualidad de ser rentable",
                answer: "rentabilidad",
                position: 14,
                orientation: "down",
                startx: 1,
                starty: 8
            },
            {
                clue: "Que consume bienes y productos en una sociedad de mercado.",
                answer: "consumidor",
                position: 15,
                orientation: "down",
                startx: 3,
                starty: 9
            },
            {
                clue: "Persona que utiliza los servicios de un profesional o de una empresa, especialmente la que lo hace regularmente",
                answer: "cliente",
                position: 16,
                orientation: "down",
                startx: 7,
                starty: 9
            },
            {
                clue: "Manera de comportarse una persona en una situación determinada o en general.",
                answer: "comportamiento",
                position: 17,
                orientation: "across",
                startx: 6,
                starty: 4
            },
            {
                clue: "Proviene del latín cultus, hace referencia al cultivo del espíritu humano y de las facultades intelectuales del hombre.",
                answer: "cultura",
                position: 18,
                orientation: "across",
                startx: 12,
                starty: 4
            },
            {
                clue: "Cosa producida natural o artificialmente, o resultado de un trabajo u operación.",
                answer: "producto",
                position: 19,
                orientation: "across",
                startx: 11,
                starty: 5
            },
            {
                clue: "Trabajo, especialmente cuando se hace para otra persona.",
                answer: "servicio",
                position: 20,
                orientation: "across",
                startx: 10,
                starty: 6
            }
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

        var maxNumberOfItems = 10;
        var newWordsArray = getRandomArrayElements(puzzleData, maxNumberOfItems);

        $.each(newWordsArray, function(key, value) {
            var min = 1, max = maxNumberOfItems;
            var newPosition = Math.floor(Math.random() * (max - min + 1) + min);
            value.position = newPosition;
        });

        $('#puzzle-wrapper').crossword(newWordsArray);
    });
})(jQuery)
