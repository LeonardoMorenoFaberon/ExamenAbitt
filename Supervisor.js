class supervisor{
    preguntas;
    titulo;
    constructor(){
        this.preguntas= 
    [   
        {
            preg:'¿De quién recibirá el operador la señal de parada de emergencia?',
            a: 'a) Solo de rigger.',
            b: 'b) Solo de su supervisor.',
            c: 'c) De cualquier persona que vea algún peligro en el área de Izaje.',
            d: 'd) Solo del rigger y del supervisor.',
            correcta: 'c',
            buena:0
        },
        {
            preg:'¿Qué debe de tomar en cuenta el operador cuando deja una carga suspendida?',
            a: 'a) Que no haya personas cerca o debajo de la carga.',
            b: 'b) Que no esté muy arriba la carga.',
            c: 'c) Que la carga este estable.',
            d: 'd) No debe de dejar la carga suspendida por ningún motivo.',
            correcta: 'd',
            buena:0
        },

        {
            preg: 'Con respecto al terreno cual es la alternativa correcta.',
            a: 'a) No importa la compactación ya que la grúa se estabiliza sola.',
            b: 'b) Debe estar plano completamente para poder soportar la grúa.',
            c: 'c) Debe estar compactado y libre de obstáculos.',
            d: 'd) Los tablones nivelan la máquina y es suficiente.',
            correcta: 'c',
            buena:0
        },
            
        {
            preg: 'Con respecto a los estabilizadores cual es la alternativa correcta',
            a: 'a) No es necesario el sacarlos al 100%',
            b: 'b) Se puede extender solo uno al 100%',
            c: 'c) Dependiendo del espacio que haya disponible saco los estabilizadores.',
            d: 'd) Siempre deben de extenderse los estabilizadores al 100%.',
            correcta: 'd',
            buena:0
        },
        {
            preg: 'Con respecto a los riesgos eléctricos cual es la alternativa correcta.',
            a: 'a) Es suficiente ubicarse a una distancia prudente de los cables.',
            b: 'b) De acuerdo al voltaje que pasa por los cables es la distancia a ubicarse.',
            c: 'c) Los cables eléctricos no representan peligro para el Izaje.',
            d: 'd) Ninguna de las anteriores.',
            correcta: 'b',
            buena:0
        },     
        {
            preg:'El procedimiento de inspección de equipos según ASME en servicio contempla dos clasificaciones',
            a:'a) Inspección inicial y regular',
            b:'b) Inspección diaria y pre-uso',
            c:'c) Inspección mensual y anual',
            d:'d) Inspección Frecuente y Periódica',
            correcta: 'd',
            buena:0
        },
        {
            preg:'La denominación de carga bruta considera e indica',
            a:'a) Solo el peso de la carga',
            b:'b) El peso de la carga más el peso del Gancho',
            c:'c) El peso de la carga más todos los accesorios de Izaje de la grúa y aparejos',
            d:'d) El peso de la carga mas el peso de la grúa',
            correcta: 'c',
            buena:0
        },
        {
            preg:'Indique si la condición de equilibrio para cada diagrama es estable o inestable:',
            a:'a) Inestable',
            b:'b) Estable',
            c:'c) No afecta la estabilidad',
            d:'d) Ninguna de las anteriores',
            correcta: 'b',
            img:'./imgPregts/supervis_8.png',
            anchoImg:'100px',
            buena:0
        },
        {
            preg:'Con respecto a la Tabla De Carga ¿cuál es la alternativa correcta?',
            a:'a) No es necesaria en todos los equipos de Izaje.',
            b:'b) Es la misma para todos los equipos de Izaje.',
            c:'c) Nos informa del radio de giro y la altura para realizar un Izaje.',
            d:'d) Todas las anteriores son falsas.',
            correcta: 'c',
            buena:0
        },
        {
            preg:'Con respecto al concepto de carga Neta:',
            a:'a) Solo se considera el peso del componente a izar.',
            b:'b) No importa la forma de la carga, solo el peso.',
            c:'c) Se debe de considerar el peso del componente más el peso de todos los elementos de Izaje.',
            d:'d) A mayor longitud de boom, mayor será la capacidad de levante de la grúa.',
            correcta: 'a',
            buena:0
        },
        {
            preg: 'Cuando se inspecciona el gancho se debe de tener en cuenta lo siguiente:',
            a: 'a) La abertura de la garganta no debe de ser mayor al 10°.',
            b: 'b) La desviación de la punta con respecto al cuerpo no será mayor a 5%',
            c: 'c) El desgaste máximo permitido en cualquier parte del gancho será menor de 15%.',
            d: 'd) La abertura de la garganta del gancho no será mayor del 5%.',
            correcta: 'd',
            buena:0
        },
        {
            preg: 'Con respecto a la inspección de una faja Sintética elija la afirmación correcta:',
            a: 'a) Se puede determinar la capacidad con el color y el ancho.',
            b: 'b) Si esta solo un poco dañada se puede usar para levantar cargas menores a la señalada en la etiqueta.',
            c: 'c) Si no tiene etiqueta se puede conseguir una similar y usarla según la capacidad de la otra.',
            d: 'd) Si no tiene etiqueta o la información no es legible no se debe usar',
            correcta: 'd',
            buena:0
        },
        {
            preg: '¿Qué información se encuentra en las etiquetas de las eslingas?',
            a: 'a) Color, marca, y dimensiones.',
            b: 'b) Solo dimensiones y capacidades de carga. ',
            c: 'c) Marca, dimensiones y capacidades de carga.',
            d: 'd) Las eslingas no tienen etiquetas.',
            correcta: 'c',
          buena:0
        },
        {
            preg: '¿Cuál es el factor mínimo de seguridad de una eslinga Sintética?',
            a: 'a) 2',
            b: 'b) 3',
            c: 'c) 4',
            d: 'd) 5',
            correcta: 'd',
          buena:0
        },
        {
            preg: '¿Qué se debe hacer si algún elemento de Izaje no cuenta o no está en buen estado su etiqueta o placa de identificación?',
            a: 'a) Reportarlo al supervisor y usarlo hasta el cambio.',
            b: 'b) Identificarlo y desecharlo.',
            c: 'c) Preguntar al supervisor si es que se puede usar.',
            d: 'd) Buscar alguno similar y obtener de ahí la información.',
            correcta: 'a',
            buena:0
        },
        {
            preg: '¿Cuál es la información que debe tener un grillete para poder ser usado?',
            a: 'a) El diámetro para luego buscar en tablas su capacidad.',
            b: 'b) La capacidad de carga',
            c: 'c) La capacidad de carga, la marca y el diámetro.',
            d: 'd) No hay ninguna información en especial.',
            correcta: 'c',
            buena:0
        },
        {
            preg: 'La siguiente designación “6x35” que corresponde al cable de acero, quiere decir:',
            a: 'a) 6 hilos x 35 metros de cable',
            b: 'b) 6 torones x 35 hilos',
            c: 'c) 6 hilos x 35 torones',
            d: 'd) 6 cable rotos x 35 veces el paso',
            correcta: 'b',
            buena:0
        },
        {
            preg: 'Con respecto a las señales nuevas ¿que sugiere la norma?',
            a: 'a) No se permite señales nuevas',
            b: 'b) Se agregarán siempre y cuando no entren en conflicto con las ya existentes, todo el equipo de izaje este de acuerdo, se discuta previo a su uso siempre.',
            c: 'c) Se agregarán solo con el consentimiento del operador',
            d: 'd) Se agregarán salvo en casos de emergencia.',
            correcta: 'b',
            buena:0
        },
        {
            preg: '¿Qué estándar ASME es utilizado para la fabricación, inspección y operación de grúas telescópicas?',
            a: 'a) ASME B30.2',
            b: 'b) ASME B30.5',
            c: 'c) ASME B30.9',
            d: 'd) ASME B30.10',
            correcta: 'b',
            buena:0
        },
        {
            preg: 'Utilizando la tabla Adjunta ¿cuál es la capacidad para una cadena de 5/8” en amarre ahorcado?',
            a: 'a) 14480',
            b: 'b) 10860',
            c: 'c) 20520',
            d: 'd) No tiene',
            correcta: 'b',
            buena:0, 
            // anchoImg:'320px',
            img:'./imgPregts/supervis_21.png'
        },


        {
            preg: 'Usando la tabla adjunta ¿cuál es la capacidad para una cadena de ½” a 60°?',
            a: 'a) 13574',
            b: 'b) 16627',
            c: 'c) 20520',
            d: 'd) No tiene',
            correcta: 'b',
            buena:0,
            // anchoImg:'320px',
            img:'./imgPregts/supervis_21.png'
        },
        {
            preg:'Cuál de las siguientes figuras representa la forma correcta de medir un cable',
            a: 'a) bernier tocando dos puntos',
            b: 'b) bernier tocando cuatro puntos',
            correcta: 'a',
            buena:0,
            // anchoImg:'320px',
            img:'./imgPregts/supervis_22.png'
        },
        {
            preg:'Los puentes grúas pueden ser manipulados por cualquier miembro de la empresa con tal que cumpla las normas de seguridad.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'b',
            buena:0,
        },
        {
            preg:'Si al elevar una carga vemos que no está estabilizada la descenderemos y procederemos a un mejor eslingado.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'a',
            buena:0,
        },
        {
            preg:'Las cargas se han de manipular a la menor altura posible.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'b',
            buena:0,
        },
        {
            preg:'Si tenemos que desclavar o arrancar objetos que requieren gran fuerza de tracción podemos utilizar un puente grúa.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'b',
            buena:0,
        },
        {
            preg:'En la grúa puente, la elevación y descenso de la carga se realizará siempre con el carro completamente vertical a la misma.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'a',
            buena:0,
        },
        {
            preg:'Si no existen carteles de advertencia de riesgo de caída de carga, los trabajadores podrán permanecer debajo de las mismas.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'b',
            buena:0,
        },
        {
            preg:'Al acabar la jornada el gancho se dejará apoyado en el suelo para que el puente grúa quede totalmente liberado de cargas',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'a',
            buena:0,
        },
        {
            preg:'Si se dispone de un mando por control inalámbrico no es necesario que el operador de grúa acompañe la carga durante su desplazamiento.',
            a: 'a) Verdadero',
            b: 'b) Falso',
            correcta: 'b',
            buena:0,
        },
        {
            preg:'Indicar la alternativa incorrecta',
            a: 'a) Si una cadena de izaje es muy larga la podemos acortar usando los ganchos de trincaje',
            b: 'b) Si una cadena de trincaje se rompe, podremos unir los tramos con un conector de cadena.',
            c: 'c) El desgaste de una cadena se da se da principalmente en el punto de contacto de dos eslabones',
            d: 'd) Ninguna de las anteriores.',
            correcta: 'c',
            buena:0,
        }
    ]

    this.titulo= "SUPERVISOR DE IZAJES";
    }


    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     const montacargasPreguntas= 
//     [   
//         {
//         preg: 'Cuál es la distancia máxima que deberán tener las aberturas de protección de la cabina del operador.',
//         a: 'a)     6 pies',
//         b: 'b)     5 pulgadas',
//         c: 'c)     6 pulgadas',
//         d: 'd)     17cm',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: 'Sabiendo que el momento del montacargas es 170 t x cm, Determine la condición del montacargas',
//         a: 'a)       Estable',
//         b: 'b)       Inestable',
//         c: 'c)       No se pude determinar',
//         d: 'd)       Ninguna de las anteriores',
//         correcta: 'a',
//         img:'./imgPregts/montac_2.png',
//         buena: 0
//         },
//         {
//         preg: 'Los vehículos industriales motorizados industriales están clasificados en 07 clases, indique que clase de montacargas es el equipo mostrado en la anterior pregunta.',
//         a: 'a)     Clase 4',
//         b: 'b)     Clase 2',
//         c: 'c)     Clase 3',
//         d: 'd)     Ninguna de las anteriores.',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: '¿En qué casos se puede utilizar el montacargas para la elevación de personal? ',
//         a: 'a)     Cuando el uso de una canastilla sea aprobado por el fabricante',
//         b: 'b)     Nunca',
//         c: 'c)     Cuando el supervisor autorice su uso',
//         d: 'd)     Cuando el área de mantenimiento autorice su uso. ',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: 'La capacidad nominal del montacargas está basada en la resistencia del material con el que está construido y:',
//         a: 'a)     Agilidad',
//         b: 'b)     Composición',
//         c: 'c)     Estabilidad',
//         d: 'd)     Ninguna de las anteriores',
//         correcta: 'c',
//         buena: 0
//         },        
//         {
//         preg: '¿Bajo qué condiciones el centro de gravedad del montacargas cargado se desplaza hacia adelante?',
//         a: 'a)     Inclinar la carga hacia atrás',
//         b: 'b)     Acelerar en reversa',
//         c: 'c)     Girar el montacargas',
//         d: 'd)     Manejar hacia arriba en una superficie inclinada',
//         correcta: 'b',
//         buena: 0
//         },        
//         {
//         preg: 'Para el manejo seguro del montacargas, ¿cuál es la información que el operador necesita saber',
//         a: 'a)     Capacidad del equipo',
//         b: 'b)       Área libre sobre cabeza, que se necesita para operar el equipo',
//         c: 'c)     Área libre a los lados, que se necesita para operar el equipo',
//         d: 'd)     Todas las anteriores',
//         correcta: 'd',
//         buena: 0
//         },        
//         {
//         preg: 'La inspección previa al uso del equipo que tipo de inspección es según OSHA:',
//         a: 'a)     Inspección frecuente o diría',
//         b: 'b)     Inspección frecuente y periódica',
//         c: 'c)     Inspección inicial y de servicio regular',
//         d: 'd)     Inspección preliminar y rutinaria',
//         correcta: 'd',
//         buena: 0
//         },        
//         {
//         preg: 'Además de la capacidad del montacargas, ¿Qué más determina cuanto puede levantar el equipo?',
//         a: 'a)     Las dimensiones del equipo',
//         b: 'b)     La ubicación del centro de gravedad del equipo y la carga',
//         c: 'c)     La altura del equipo',
//         d: 'd)    Todas las anteriores',
//         correcta: 'b',
//         buena: 0
//         },        
//         {
//         preg: '¿Quién es el responsable de realizar la inspección diaria del montacargas?',
//         a: 'a)     El fabricante',
//         b: 'b)     El supervisor',
//         c: 'c)     El operador',
//         d: 'd)     El supervisor de inspección ',
//         correcta: 'c',
//         buena: 0
//         },        
//         {
//         preg: 'Cuál de las siguientes es responsabilidad del operador en la práctica de mantenimiento preventivo:',
//         a: 'a)     Evitar reparaciones innecesarias',
//         b: 'b)     Evitar tiempos muertos',
//         c: 'c)     No desperdiciar el combustible',
//         d: 'd)     Todas las anteriores',
//         correcta: 'c',
//         buena: 0
//         },        
//         {
//         preg: 'Personal de mantenimiento calificado debe ejecutar cualquier reparación en el equipo, pero esto depende del aviso de:',
//         a: 'a)     El operador',
//         b: 'b)     El supervisor de mantenimiento',
//         c: 'c)     El supervisor del montacargas',
//         d: 'd)     El personal de campo  ',
//         correcta: 'a',
//         img:'./imgPregts/montac_3.png',
//         buena: 0
//         },        
//         {
//         preg: 'Indique si la condición de equilibrio para cada diagrama es estable o inestable: ',
//         a: 'a)     Inestable',
//         b: 'b)     Estable',
//         c: 'c)     No afecta la estabilidad ',
//         d: 'd)     Ninguna de las anteriores',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: 'Lo único que usted necesita para dejar el montacargas desatendido es:',
//         a: 'a)     Bajar completamente el mástil y apagar el equipo.',
//         b: 'b)     Dejar la carga en las uñas, y apagar el equipo.',
//         c: 'c)     Inclinar el mástil hacia atrás y apagar el equipo.',
//         d: 'd)     Bajar las unas, inclinar mástil adelante ,apagar el equipo, retirar llave, usar tacos.',
//         correcta: 'd',
//         buena: 0
//         },        
//         {
//         preg: '¿Qué personal será permitido para operar el montacargas?',
//         a: 'a)     Operadores entrenados y autorizados',
//         b: 'b)     Operadores con experiencia y entrenados',
//         c: 'c)     Operadores con brevete y experiencia',
//         d: 'd)     Operadores en entrenamiento a punto de ser autorizados ',
//         correcta: 'a',
//         buena: 0
//         },
        
//         {
//         preg: '¿Cuál es el factor de seguridad para superficies para soportar el montacargas?',
//         a: 'a)     2:1',
//         b: 'b)     3:1',
//         c: 'c)     4:1',
//         d: 'd)     5:1',
//         correcta: 'c',
//         buena: 0
//         },
//         {
//         preg: '¿A qué distancia se considera que el montacargas esta descuidado por el operador?',
//         a: 'a)     10 metros',
//         b: 'b)     15 pies ',
//         c: 'c)     25 pies',
//         d: 'd)     30 metros',
//         correcta: 'c',
//         buena: 0
//         },
//         {
//         preg: '¿Qué significa las siglas “EX” según del tipo de energía usadas en montacargas?',
//         a: 'a)     Previene chispas y limita temperaturas en la superficie',
//         b: 'b)     Todos los motores eléctricos completamente encerrados',
//         c: 'c)     Puede ser usado en atmosferas de vapor inflamable o con polvos inflamables. ',
//         d: 'd)     Resguardos mínimos para gas propano',
//         correcta: 'c',
//         buena: 0
        
//         },
//         {
//         preg: 'La distancia a la cual un montacargas se mantendrá alejado de otro es de:',
//         a: 'a)     Al menos 2 montacargas',
//         b: 'b)     Al menos 3 montacargas',
//         c: 'c)     Al menos 4 metros ',
//         d: 'd)     Al menos 5 pies',
//         correcta: 'b',
//         buena: 0
//         },
//         {
//         preg: 'Siempre revise el mástil para ver si presenta rajaduras o puntos de soldadura rotos y las líneas hidráulicas.',
//         a: 'a) Verdadero.',
//         b: 'b) Falso.',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: 'Al recoger una carga, viajando hacia una rampa con una inclinación >10%, las horquillas no deberán mantenerse elevadas.',
//         a: 'a) Verdadero.',
//         b: 'b) Falso.',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: 'Los montacargas puede tener motores eléctricos, gas propano o combustible diesel.',
//         a: 'a) Verdadero.',
//         b: 'b) Falso. ',
//         correcta: 'a',
//         buena: 0
//         },
//         {
//         preg: 'Es permisible sobrecargar el montacargas un 25% si se usan contrapesos adicionales.',
//         a: 'a) Verdadero.',
//         b: 'b) Falso.',
//         correcta: 'b',
//         buena: 0
//         },
        
//         {
//         preg: 'Al manejar en lugares resbalosos, el montacargas pudiera incrementar la distancia de frenado o causar la pérdida de control de la maniobra',
//         a: 'a) Verdadero.',
//         b: 'b) Falso.',
//         correcta: 'a',
//         buena: 0
//         },
        
//         {
//         preg: 'Después de haber levantado una carga, incline el mástil hacia adelante para añadirle estabilidad al montacargas.',
//         a: 'a) Verdadero.',
//         b: 'b) Falso.',
//         correcta: 'b',
//         buena: 0
//         }
        
// ]