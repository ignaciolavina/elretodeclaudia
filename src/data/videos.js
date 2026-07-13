export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/elretodeclaudia'

// Adding Instagram videos is intentionally simple:
// 1. Copy the public Reel/Post URL.
// 2. Add one object with type: 'instagram' and the permalink.
// The page renders it through Instagram's official embed script.
export const VIDEOS = [
  {
    id: 'barcelona-reto-claudia',
    type: 'instagram',
    title: {
      es: 'Cada ciudad que se suma abre una puerta',
      en: 'Every city that joins opens a door',
    },
    description: {
      es: 'Barcelona fue una de esas paradas que demuestran que difundir también es ayudar: más voces, más alcance, más esperanza.',
      en: 'Barcelona showed that sharing the story is also a way to help: more voices, more reach, more hope.',
    },
    date: { es: 'Junio 2026', en: 'June 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DZ7Hf6aME5F/',
    caption: '\ud83d\udc9c Barcelona ha sido una de esas paradas que te dejan el coraz\u00f3n encogido.\n\nLa semada pasada estuvimos en el Hospital Sant Joan de D\u00e9u para realizar nuevas pruebas y reunirnos con el equipo que sigue acompa\u00f1ando a Claudia en este camino.\n\nOjal\u00e1 pudi\u00e9ramos compartir mejores noticias.\n\nLa resonancia no ha mostrado los resultados que esperabamos.\n\nAdem\u00e1s, hemos recibido los primeros resultados de las pruebas que se est\u00e1n realizando con un tratamiento experimental en las c\u00e9lulas de Claudia. De momento, no est\u00e1 dando su fruto.\n\nEsto no significa que se descarte por completo, pero s\u00ed que todav\u00eda quedan muchas preguntas por responder y m\u00e1s pruebas por realizar antes de saber si realmente podr\u00eda ayudarla.\n\nEs duro escribir estas palabras.\n\nSin embargo, mientras nosotros intentamos procesar noticias dif\u00edciles, Claudia sigue ense\u00f1\u00e1ndonos cada d\u00eda lo que significa luchar.\n\nSigue sonriendo.\nSigue esforz\u00e1ndose.\nSigue trabajando.\nSigue enfrent\u00e1ndose a desaf\u00edos que la mayor\u00eda ni siquiera imaginamos.\nSigue levant\u00e1ndose una y otra vez.\n\nAdem\u00e1s, por otro lado, la terapia g\u00e9nica sigue avanzando y eso tambien nos da fuerzas, porque mientras haya una m\u00ednima esperanza para Claudia seguiremos luchando.\n\nGracias por seguir caminando a nuestro lado. \ud83d\udc9c\n\n#ElRetoDeClaudia #Investigaci\u00f3n #TerapiaG\u00e9nica #EnfermedadesRaras #DBDP',
  },  {
    id: 'diagnostico-claudia',
    type: 'instagram',
    title: {
      es: 'El día que el diagnóstico lo cambió todo',
      en: 'The day the diagnosis changed everything',
    },
    description: {
      es: 'Ponerle nombre a la enfermedad fue solo el principio. Después llegó la pregunta más importante: qué podemos hacer ahora.',
      en: 'Naming the disease was only the beginning. Then came the question that matters most: what can we do now?',
    },
    date: { es: 'Junio 2026', en: 'June 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DZpIqLSsNuA/',
    caption: 'Cuando diagnosticaron a Claudia con deficiencia de enzima D-bifuncional, buscamos apoyo y respuestas. Solo encontramos la soledad de una enfermedad ultrarara.\n\nHoy seguimos luchando para abrir un camino que ayude a las familias que vengan despu\u00e9s.\n\nAy\u00fadanos a romper el silencio. Comparte, comenta y dale voz a Claudia. \ud83e\uddf8',
  },
  {
    id: 'risa-de-claudia',
    type: 'instagram',
    title: {
      es: 'Una risa que nos recuerda por qué peleamos',
      en: 'A laugh that reminds us why we fight',
    },
    description: {
      es: 'Hay momentos diminutos que sostienen días enteros. La risa de Claudia es uno de ellos.',
      en: 'Some tiny moments carry entire days. Claudia’s laugh is one of them.',
    },
    date: { es: 'Junio 2026', en: 'June 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DZfCVXyMsre/',
    caption: 'La risa de Claudia tiene ese poder m\u00e1gico de contagiar felicidad. \u2728 Los ni\u00f1os no pueden evitar sonre\u00edr cuando est\u00e1n con ella, y la verdad es que los mayores tampoco. Gracias por transmitir tanta alegr\u00eda, ternura y luz en cada momento compartido.',
  },
  {
    id: 'cada-dia-es-un-reto',
    type: 'instagram',
    title: {
      es: 'Vivir con una enfermedad que casi nadie conoce',
      en: 'Living with a disease almost nobody knows',
    },
    description: {
      es: 'La DBP es ultrarrara, pero para Claudia no es una estadística: es su día a día. Por eso necesitamos que se conozca.',
      en: 'DBP is ultra-rare, but for Claudia it is not a statistic: it is everyday life. That is why awareness matters.',
    },
    date: { es: 'Junio 2026', en: 'June 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DZM33VaNW45/',
    caption: 'Claudia tiene 2 a\u00f1os y medio y convive con una enfermedad ultrarrara: deficiencia de enzima bifuncional.\n\nCada d\u00eda es un reto que afronta con valent\u00eda, siempre acompa\u00f1ada por sus padres, que luchan a su lado sin soltarle la mano.\n\nSu sonrisa inspira y su lucha nos une \u2728\n\n#LaTardeTM',
  },
  {
    id: 'esta-es-claudia',
    type: 'instagram',
    title: {
      es: 'Esta es Claudia, y este es su reto',
      en: 'This is Claudia, and this is her challenge',
    },
    description: {
      es: 'Una niña de dos años y medio, una enfermedad ultrarrara y una familia buscando investigación donde hoy casi no la hay.',
      en: 'A two-and-a-half-year-old girl, an ultra-rare disease and a family searching for research where almost none exists today.',
    },
    date: { es: 'Junio 2026', en: 'June 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DZF5312MKw9/',
    caption: '\u2764\ufe0f Esta es Claudia.\n\nTiene 2 a\u00f1os y medio y padece una enfermedad gen\u00e9tica neurodegenerativa para la que, a d\u00eda de hoy, no existe una cura conocida.\n\nLa \u00fanica esperanza real para Claudia es desarrollar una terapia g\u00e9nica: una investigaci\u00f3n muy compleja que busca corregir el fallo gen\u00e9tico que provoca su enfermedad. Hace poco se ha aprobado una l\u00ednea de investigaci\u00f3n para Claudia, pero para hacerla realidad hace falta un equipo cient\u00edfico especializado... y mucha financiaci\u00f3n privada.\n\nPor eso necesitamos tu ayuda de 3 maneras:\n\n1\ufe0f\u20e3 S\u00edguenos en redes: \u0040elretodeclaudia\n\nComparte nuestras publicaciones por WhatsApp y otros canales, comenta e interact\u00faa. Cuanta m\u00e1s gente conozca el caso de Claudia, m\u00e1s posibilidades tendremos de encontrar apoyo, colaboradores y financiaci\u00f3n.\n\n2\ufe0f\u20e3 Dona \ud83d\udc9b\n\nAunque sea el equivalente a un caf\u00e9. De verdad. Cada peque\u00f1a aportaci\u00f3n suma y nos acerca un paso m\u00e1s a la investigaci\u00f3n.\n\n\ud83c\udf10 elretodeclaudia.org\/dona\n\n3\ufe0f\u20e3 Si eres una empresa, colegio, asociaci\u00f3n u organizaci\u00f3n y quieres ayudar, escr\u00edbenos.\n\nToda colaboraci\u00f3n cuenta y puede marcar una diferencia real en el futuro de Claudia.\n\nGracias de coraz\u00f3n \u2764\ufe0f por ayudarnos a darle una oportunidad.\n\nPorque Claudia merece una oportunidad. Y juntos podemos d\u00e1rsela.\n\n#elretodeclaudia #dbpdeficiency #raredesease #dona #investigaci\u00f3n',
  },
  {
    id: 'pruebas-imposibles',
    type: 'instagram',
    title: {
      es: 'Cuando lo imposible llama a la puerta',
      en: 'When the impossible knocks',
    },
    description: {
      es: 'El inicio de una historia que nadie elige, pero que estamos decididos a pelear con amor, ciencia y esperanza.',
      en: 'The beginning of a story nobody chooses, but one we are determined to fight with love, science and hope.',
    },
    date: { es: 'Mayo 2026', en: 'May 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DYSJGcPsz7t/',
    caption: 'A veces, la vida nos pone pruebas que parecen imposibles de superar. Claudia tiene una enfermedad ultrarrara llamada Deficiencia de enzima D-bifuncional, una condici\u00f3n neurodegenerativa que le ha robado gran parte de sus avances f\u00edsicos, pero que jam\u00e1s podr\u00e1 quitarle su sonrisa. \ud83c\udf38\n\nHemos visto c\u00f3mo cada peque\u00f1o logro: reptar, gatear, dar sus primeros pasos, ha sido una batalla ganada con un esfuerzo sobrehumano. Hoy, aunque el camino se ha vuelto m\u00e1s dif\u00edcil, nuestra lucha sigue intacta.\n\nQueremos que el mundo conozca a Claudia. No solo por su diagn\u00f3stico, sino por su fuerza. Porque detr\u00e1s de cada enfermedad rara, hay una ni\u00f1a que merece todas las oportunidades del mundo. \ud83e\udec2\u2728\n\nAy\u00fadanos a que su historia llegue lejos. Un \u201cMe gusta\u201d, un comentario o compartir este v\u00eddeo significa que Claudia no est\u00e1 sola en esta batalla. \ud83e\udd0d\n\n#elretodeclaudia #EnfermedadesRaras #D-Bifuncional #LuchaDiaria #Resiliencia ClaudiaNuestraGuerrera AmorIncondicional Visibilidad',
  },
  {
    id: 'gracias-carino-ayuda',
    type: 'instagram',
    title: {
      es: 'Gracias por estar al lado de Claudia',
      en: 'Thank you for standing with Claudia',
    },
    description: {
      es: 'Cada mensaje, cada gesto y cada vez que compartís su historia nos ayuda a seguir buscando respuestas.',
      en: 'Every message, every gesture and every share helps us keep looking for answers.',
    },
    date: { es: 'Mayo 2026', en: 'May 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DX2XqwEMPvD/',
    caption: 'Gracias a todos por vuestro cari\u00f1o y vuestra ayuda! \u2764\ufe0f\nSeguro que con toda vuestra ayuda, encontraremos cura para Claudia\n\nhttps:\/\/elretodeclaudia.org\/',
  },

]
