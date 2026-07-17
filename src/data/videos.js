export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/elretodeclaudia'

// Adding Instagram videos is intentionally simple:
// 1. Copy the public Reel/Post URL.
// 2. Add one object with type: 'instagram' and the permalink.
// The page renders it through Instagram's official embed script.
export const VIDEOS = [
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
    caption: '❤️ Esta es Claudia.\n\nTiene 2 años y medio y padece una enfermedad genética neurodegenerativa para la que, a día de hoy, no existe una cura conocida.\n\nLa única esperanza real para Claudia es desarrollar una terapia génica: una investigación muy compleja que busca corregir el fallo genético que provoca su enfermedad. Hace poco se ha aprobado una línea de investigación para Claudia, pero para hacerla realidad hace falta un equipo científico especializado... y mucha financiación privada.\n\nPor eso necesitamos tu ayuda de 3 maneras:\n\n1️⃣ Síguenos en redes: @elretodeclaudia\n\nComparte nuestras publicaciones por WhatsApp y otros canales, comenta e interactúa. Cuanta más gente conozca el caso de Claudia, más posibilidades tendremos de encontrar apoyo, colaboradores y financiación.\n\n2️⃣ Dona 💛\n\nAunque sea el equivalente a un café. De verdad. Cada pequeña aportación suma y nos acerca un paso más a la investigación.\n\n🌐 elretodeclaudia.org\/dona\n\n3️⃣ Si eres una empresa, colegio, asociación u organización y quieres ayudar, escríbenos.\n\nToda colaboración cuenta y puede marcar una diferencia real en el futuro de Claudia.\n\nGracias de corazón ❤️ por ayudarnos a darle una oportunidad.\n\nPorque Claudia merece una oportunidad. Y juntos podemos dársela.\n\n#elretodeclaudia #dbpdeficiency #raredesease #dona #investigación',
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
    caption: 'A veces, la vida nos pone pruebas que parecen imposibles de superar. Claudia tiene una enfermedad ultrarrara llamada Deficiencia de enzima D-bifuncional, una condición neurodegenerativa que le ha robado gran parte de sus avances físicos, pero que jamás podrá quitarle su sonrisa. 🌸\n\nHemos visto cómo cada pequeño logro: reptar, gatear, dar sus primeros pasos, ha sido una batalla ganada con un esfuerzo sobrehumano. Hoy, aunque el camino se ha vuelto más difícil, nuestra lucha sigue intacta.\n\nQueremos que el mundo conozca a Claudia. No solo por su diagnóstico, sino por su fuerza. Porque detrás de cada enfermedad rara, hay una niña que merece todas las oportunidades del mundo. 🫂✨\n\nAyúdanos a que su historia llegue lejos. Un “Me gusta”, un comentario o compartir este vídeo significa que Claudia no está sola en esta batalla. 🤍\n\n#elretodeclaudia #EnfermedadesRaras #D-Bifuncional #LuchaDiaria #Resiliencia ClaudiaNuestraGuerrera AmorIncondicional Visibilidad',
  },
  {
    id: 'pinned-pending-caption',
    type: 'instagram',
    title: {
      es: 'Reel fijado (pendiente de texto)',
      en: 'Pinned reel (caption pending)',
    },
    description: {
      es: 'Pendiente: pegar título, descripción y caption reales de este reel fijado.',
      en: 'Pending: paste the real title, description and caption for this pinned reel.',
    },
    date: { es: 'Pendiente', en: 'Pending' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DX1Xt74sluB/',
    caption: 'Reel fijado de @elretodeclaudia — pendiente de añadir el texto real.',
  },
  {
    id: 'los-dias-de-claudia',
    type: 'instagram',
    title: {
      es: 'Los días de Claudia son diferentes',
      en: "Claudia's days are different",
    },
    description: {
      es: 'No puede correr por el parque como otros niños, pero su alegría y sus ganas de reír son más fuertes que cualquier enfermedad.',
      en: 'She cannot run through the park like other kids, but her joy and will to laugh are stronger than any disease.',
    },
    date: { es: 'Julio 2026', en: 'July 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/Da0Kpwls-Aj/',
    caption: 'Los días de Claudia son un poco diferentes.\n\nNo puede correr por el parque ni hacer muchas de las cosas que hacen otros niños de su edad. Pero si algo le sobran son ganas de reír, de disfrutar de cada momento y de contagiar su alegría a todos los que la queremos.\n\nPorque la enfermedad forma parte de su vida, pero nunca definirá quién es. 💜\n\nGracias por seguir acompañándonos.',
  },
  {
    id: 'las-viandas-apoya-claudia',
    type: 'instagram',
    title: {
      es: 'Un restaurante que se suma al reto',
      en: 'A restaurant joins the challenge',
    },
    description: {
      es: 'El Restaurante Las Viandas se suma a la lucha de Claudia dando visibilidad a su historia.',
      en: 'Restaurante Las Viandas joins Claudia\'s fight by giving visibility to her story.',
    },
    date: { es: 'Julio 2026', en: 'July 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/Dau2dLYMMZN/',
    caption: 'Desde nuestro restaurante hoy @sergioviandas quiere que nos sumemos a @elretodeclaudia 💙\n\nClaudia padece deficiencia de la proteína D-bifuncional (DBP), una enfermedad neurodegenerativa rara. Hoy necesitamos algo muy sencillo: que su historia llegue a más personas para dar visibilidad a su lucha y apoyar la investigación.\n\nDale a "Me gusta", compártelo y ayúdanos a difundir este mensaje. Juntos podemos dar esperanza a Claudia.\n\n#ElRetoDeClaudia #SanLorenzodeElEscorial #Investigación #JuntosSumamos',
  },
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
