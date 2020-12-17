class montacarga{
    preguntas;
    titulo;
    constructor() {
        this.preguntas =  [   
            {
            preg: 'Cuál es la distancia máxima que deberán tener las aberturas de protección de la cabina del operador.',
            a: 'a)     6 pies',
            b: 'b)     5 pulgadas',
            c: 'c)     6 pulgadas',
            d: 'd)     17cm',
            correcta: 'a',
            buena: 0
            },
            {
            preg: 'Sabiendo que el momento del montacargas es 170 t x cm, Determine la condición del montacargas',
            a: 'a)       Estable',
            b: 'b)       Inestable',
            c: 'c)       No se pude determinar',
            d: 'd)       Ninguna de las anteriores',
            correcta: 'a',
            img:'./imgPregts/montac_2.png',
            anchoImg:'200px',
            buena: 0
            },
            {
            preg: 'Los vehículos industriales motorizados industriales están clasificados en 07 clases, indique que clase de montacargas es el equipo mostrado en la anterior pregunta.',
            a: 'a)     Clase 4',
            b: 'b)     Clase 2',
            c: 'c)     Clase 3',
            d: 'd)     Ninguna de las anteriores.',
            correcta: 'a',
            buena: 0
            },
            {
            preg: '¿En qué casos se puede utilizar el montacargas para la elevación de personal? ',
            a: 'a)     Cuando el uso de una canastilla sea aprobado por el fabricante',
            b: 'b)     Nunca',
            c: 'c)     Cuando el supervisor autorice su uso',
            d: 'd)     Cuando el área de mantenimiento autorice su uso. ',
            correcta: 'a',
            buena: 0
            },
            {
            preg: 'La capacidad nominal del montacargas está basada en la resistencia del material con el que está construido y:',
            a: 'a)     Agilidad',
            b: 'b)     Composición',
            c: 'c)     Estabilidad',
            d: 'd)     Ninguna de las anteriores',
            correcta: 'c',
            buena: 0
            },        
            {
            preg: '¿Bajo qué condiciones el centro de gravedad del montacargas cargado se desplaza hacia adelante?',
            a: 'a)     Inclinar la carga hacia atrás',
            b: 'b)     Acelerar en reversa',
            c: 'c)     Girar el montacargas',
            d: 'd)     Manejar hacia arriba en una superficie inclinada',
            correcta: 'b',
            buena: 0
            },        
            {
            preg: 'Para el manejo seguro del montacargas, ¿cuál es la información que el operador necesita saber',
            a: 'a)     Capacidad del equipo',
            b: 'b)       Área libre sobre cabeza, que se necesita para operar el equipo',
            c: 'c)     Área libre a los lados, que se necesita para operar el equipo',
            d: 'd)     Todas las anteriores',
            correcta: 'd',
            buena: 0
            },        
            {
            preg: 'La inspección previa al uso del equipo que tipo de inspección es según OSHA:',
            a: 'a)     Inspección frecuente o diría',
            b: 'b)     Inspección frecuente y periódica',
            c: 'c)     Inspección inicial y de servicio regular',
            d: 'd)     Inspección preliminar y rutinaria',
            correcta: 'd',
            buena: 0
            },        
            {
            preg: 'Además de la capacidad del montacargas, ¿Qué más determina cuanto puede levantar el equipo?',
            a: 'a)     Las dimensiones del equipo',
            b: 'b)     La ubicación del centro de gravedad del equipo y la carga',
            c: 'c)     La altura del equipo',
            d: 'd)    Todas las anteriores',
            correcta: 'b',
            buena: 0
            },        
            {
            preg: '¿Quién es el responsable de realizar la inspección diaria del montacargas?',
            a: 'a)     El fabricante',
            b: 'b)     El supervisor',
            c: 'c)     El operador',
            d: 'd)     El supervisor de inspección ',
            correcta: 'c',
            buena: 0
            },        
            {
            preg: 'Cuál de las siguientes es responsabilidad del operador en la práctica de mantenimiento preventivo:',
            a: 'a)     Evitar reparaciones innecesarias',
            b: 'b)     Evitar tiempos muertos',
            c: 'c)     No desperdiciar el combustible',
            d: 'd)     Todas las anteriores',
            correcta: 'c',
            buena: 0
            },        
            {
            preg: 'Personal de mantenimiento calificado debe ejecutar cualquier reparación en el equipo, pero esto depende del aviso de:',
            a: 'a)     El operador',
            b: 'b)     El supervisor de mantenimiento',
            c: 'c)     El supervisor del montacargas',
            d: 'd)     El personal de campo  ',
            correcta: 'a',
            buena: 0
            },        
            {
            preg: 'Indique si la condición de equilibrio para cada diagrama es estable o inestable: ',
            a: 'a)     Inestable',
            b: 'b)     Estable',
            c: 'c)     No afecta la estabilidad ',
            d: 'd)     Ninguna de las anteriores',
            correcta: 'a',
            img:'./imgPregts/montac_3.png',
            anchoImg:'100px',
            buena: 0
            },
            {
            preg: 'Lo único que usted necesita para dejar el montacargas desatendido es:',
            a: 'a)     Bajar completamente el mástil y apagar el equipo.',
            b: 'b)     Dejar la carga en las uñas, y apagar el equipo.',
            c: 'c)     Inclinar el mástil hacia atrás y apagar el equipo.',
            d: 'd)     Bajar las unas, inclinar mástil adelante ,apagar el equipo, retirar llave, usar tacos.',
            correcta: 'd',
            buena: 0
            },        
            {
            preg: '¿Qué personal será permitido para operar el montacargas?',
            a: 'a)     Operadores entrenados y autorizados',
            b: 'b)     Operadores con experiencia y entrenados',
            c: 'c)     Operadores con brevete y experiencia',
            d: 'd)     Operadores en entrenamiento a punto de ser autorizados ',
            correcta: 'a',
            buena: 0
            },
            
            {
            preg: '¿Cuál es el factor de seguridad para superficies para soportar el montacargas?',
            a: 'a)     2:1',
            b: 'b)     3:1',
            c: 'c)     4:1',
            d: 'd)     5:1',
            correcta: 'c',
            buena: 0
            },
            {
            preg: '¿A qué distancia se considera que el montacargas esta descuidado por el operador?',
            a: 'a)     10 metros',
            b: 'b)     15 pies ',
            c: 'c)     25 pies',
            d: 'd)     30 metros',
            correcta: 'c',
            buena: 0
            },
            {
            preg: '¿Qué significa las siglas “EX” según del tipo de energía usadas en montacargas?',
            a: 'a)     Previene chispas y limita temperaturas en la superficie',
            b: 'b)     Todos los motores eléctricos completamente encerrados',
            c: 'c)     Puede ser usado en atmosferas de vapor inflamable o con polvos inflamables. ',
            d: 'd)     Resguardos mínimos para gas propano',
            correcta: 'c',
            buena: 0
            
            },
            {
            preg: 'La distancia a la cual un montacargas se mantendrá alejado de otro es de:',
            a: 'a)     Al menos 2 montacargas',
            b: 'b)     Al menos 3 montacargas',
            c: 'c)     Al menos 4 metros ',
            d: 'd)     Al menos 5 pies',
            correcta: 'b',
            buena: 0
            },
            {
            preg: 'Siempre revise el mástil para ver si presenta rajaduras o puntos de soldadura rotos y las líneas hidráulicas.',
            a: 'a) Verdadero.',
            b: 'b) Falso.',
            correcta: 'a',
            buena: 0
            },
            {
            preg: 'Al recoger una carga, viajando hacia una rampa con una inclinación >10%, las horquillas no deberán mantenerse elevadas.',
            a: 'a) Verdadero.',
            b: 'b) Falso.',
            correcta: 'a',
            buena: 0
            },
            {
            preg: 'Los montacargas puede tener motores eléctricos, gas propano o combustible diesel.',
            a: 'a) Verdadero.',
            b: 'b) Falso. ',
            correcta: 'a',
            buena: 0
            },
            {
            preg: 'Es permisible sobrecargar el montacargas un 25% si se usan contrapesos adicionales.',
            a: 'a) Verdadero.',
            b: 'b) Falso.',
            correcta: 'b',
            buena: 0
            },
            
            {
            preg: 'Al manejar en lugares resbalosos, el montacargas pudiera incrementar la distancia de frenado o causar la pérdida de control de la maniobra',
            a: 'a) Verdadero.',
            b: 'b) Falso.',
            correcta: 'a',
            buena: 0
            },
            
            {
            preg: 'Después de haber levantado una carga, incline el mástil hacia adelante para añadirle estabilidad al montacargas.',
            a: 'a) Verdadero.',
            b: 'b) Falso.',
            correcta: 'b',
            buena: 0
            }
            
        ];

        this.titulo= "OPERADOR DE MONTACARGAS";

        }

      get preguntas () {
        return this.preguntas;
      }        

      get titulo () {
          return this.titulo;
      }
}
