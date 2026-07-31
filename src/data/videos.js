export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/elretodeclaudia'

// Adding Instagram videos is intentionally simple:
// 1. Copy the public Reel/Post URL.
// 2. Add one object with type: 'instagram' and the permalink.
// The page renders it through Instagram's official embed script.
//
// Los primeros 3 items son los reels fijados (pinned) en el perfil de Instagram
// y deben ir siempre primero, en ese orden, aunque no sean los más recientes.
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
    id: 'dia-que-todo-cambio',
    type: 'instagram',
    title: {
      es: 'El día que todo cambió',
      en: 'The day everything changed',
    },
    description: {
      es: '20 de febrero de 2025: la noticia que ningún padre debería recibir jamás, y la decisión de luchar con todo.',
      en: 'February 20, 2025: the news no parent should ever receive, and the decision to fight with everything they have.',
    },
    date: { es: 'Mayo 2026', en: 'May 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DX1Xt74sluB/',
    caption: '20 de febrero de 2025. El día que todo cambió\n\nSi conocieras a Claudia, lo primero que te robaría sería la risa. Esa risa que contagia y que te obliga a sonreír al verla disfrutar.\n\nTiene 2 años y 7 meses, está rodeada de gente que la quiere con locura, y cuando tiene que esforzarse apenas se queja. Como si supiera, a su manera, que hay que seguir adelante.\n\nEn febrero de 2025 recibimos la noticia que ningún padre debería recibir jamás: Claudia tiene Deficiencia de enzima D-Bifuncional. Una enfermedad degenerativa, progresiva y, a día de hoy, sin cura.\n\nEse día el mundo se paró, pero Claudia no. Y nosotros tampoco.\n\nSomos su familia y hemos decidido luchar con todo lo que tenemos. Hemos contactado con investigadores de todo el mundo, estudiado cada línea terapéutica y llamado a cada puerta.\n\nLa única posibilidad real para Claudia es la terapia génica.\n\nNecesitamos encontrar a quien pueda desarrollarla, a alguien que quiera investigar y darnos la esperanza de frenar este avance.\n\nPor eso necesitamos tu acción hoy: ayúdanos a dar visibilidad a esta enfermedad.\n\nLa persona que puede cambiarle la vida a Claudia quizás está al otro lado de la pantalla. Ayúdanos a llegar a ella.\n\n#enfermedadesperoxisomales #enfermedadrara #terapiagenica #investigacion #deficienciadeenzimabifuncional',
  },
  {
    id: 'urgente-claudia-merece-oportunidad',
    type: 'instagram',
    title: {
      es: 'Claudia merece una oportunidad',
      en: 'Claudia deserves a chance',
    },
    description: {
      es: 'Un llamado urgente a la familia, amigos y seguidores para seguir sumando apoyo a la investigación de Claudia.',
      en: 'An urgent call to family, friends and followers to keep building support for Claudia\'s research.',
    },
    date: { es: 'Julio 2026', en: 'July 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DbLS6BwN_op/',
    caption: 'Es URGENTE‼️‼️🚨, Claudia merece una oportunidad. La familia y amigos no perdemos la esperanza de, junto a los profesionales médicos, poder encontrar los medios para que estos últimos desarrollen sus conocimientos en aras de hallar una cura que salve a Claudia.\n Visita y sigue @elretodeclaudia, reenvía a tus contactos su Instagram, y el que pueda que colabore con lo que sea por pequeña que sea la cantidad, todo suma. Gracias 🙏🏼',
  },
  {
    id: 'elena-cope-la-linterna',
    type: 'instagram',
    title: {
      es: 'Elena cuenta la historia de Claudia en COPE',
      en: 'Elena tells Claudia\'s story on COPE radio',
    },
    description: {
      es: 'La mamá de Claudia puso voz en La Linterna de COPE a la realidad de las familias que luchan contra enfermedades raras.',
      en: 'Claudia\'s mother spoke on COPE\'s La Linterna about the reality families face fighting rare diseases.',
    },
    date: { es: 'Julio 2026', en: 'July 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DbD-ygSMchr/',
    caption: 'Hoy queremos compartir con vosotros un momento muy especial.\n\nElena, la mamá de Claudia, tuvo la oportunidad de contar la historia de nuestra pequeña en @lalinternacope junto a @exposito_cope\n\nCon valentía y emoción, puso voz a la realidad que viven tantas familias que luchan contra enfermedades raras, explicando el camino que estamos recorriendo para dar visibilidad a las enfermedades peroxisomales y seguir impulsando la investigación.\n\nGracias a COPE y a Ángel Expósito por abrirnos las puertas y ayudarnos a que la historia de Claudia llegue cada vez a más personas.\n\n💚 Cada persona que escucha, comparte o se suma a esta causa nos acerca un poco más a un futuro con esperanza.\n\n#elretodeclaudia #COPE #LaLinterna #EnfermedadesRaras #investigación',
  },
  {
    id: 'espana-fuerza-equipo',
    type: 'instagram',
    title: {
      es: 'La misma fuerza de equipo, para Claudia',
      en: 'That same team spirit, for Claudia',
    },
    description: {
      es: 'El espíritu de equipo que emociona a un país es el mismo que necesitamos para que Claudia acceda a su tratamiento.',
      en: 'The team spirit that moves a whole country is the same spirit we need for Claudia to access her treatment.',
    },
    date: { es: 'Julio 2026', en: 'July 2026' },
    duration: 'Reel',
    permalink: 'https://www.instagram.com/reel/DbA9WussCCp/',
    caption: 'Ayer España nos hizo vibrar y demostró que, cuando un país se une por un mismo objetivo, todo es posible. 🇪🇸❤️\n\nOjalá esa misma fuerza, esa misma ilusión y ese mismo sentimiento de equipo nos ayuden también a conseguir lo más importante: que Claudia tenga acceso a su tratamiento.\n\nPorque el mayor triunfo aún está por llegar. 💚 #elretodeclaudia',
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
    caption: '💜 Barcelona ha sido una de esas paradas que te dejan el corazón encogido.\n\nLa semada pasada estuvimos en el Hospital Sant Joan de Déu para realizar nuevas pruebas y reunirnos con el equipo que sigue acompañando a Claudia en este camino.\n\nOjalá pudiéramos compartir mejores noticias.\n\nLa resonancia no ha mostrado los resultados que esperabamos.\n\nAdemás, hemos recibido los primeros resultados de las pruebas que se están realizando con un tratamiento experimental en las células de Claudia. De momento, no está dando su fruto.\n\nEsto no significa que se descarte por completo, pero sí que todavía quedan muchas preguntas por responder y más pruebas por realizar antes de saber si realmente podría ayudarla.\n\nEs duro escribir estas palabras.\n\nSin embargo, mientras nosotros intentamos procesar noticias difíciles, Claudia sigue enseñándonos cada día lo que significa luchar.\n\nSigue sonriendo.\nSigue esforzándose.\nSigue trabajando.\nSigue enfrentándose a desafíos que la mayoría ni siquiera imaginamos.\nSigue levantándose una y otra vez.\n\nAdemás, por otro lado, la terapia génica sigue avanzando y eso tambien nos da fuerzas, porque mientras haya una mínima esperanza para Claudia seguiremos luchando.\n\nGracias por seguir caminando a nuestro lado. 💜\n\n#ElRetoDeClaudia #Investigación #TerapiaGénica #EnfermedadesRaras #DBDP',
  },
  {
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
    caption: 'Cuando diagnosticaron a Claudia con deficiencia de enzima D-bifuncional, buscamos apoyo y respuestas. Solo encontramos la soledad de una enfermedad ultrarara.\n\nHoy seguimos luchando para abrir un camino que ayude a las familias que vengan después.\n\nAyúdanos a romper el silencio. Comparte, comenta y dale voz a Claudia. 🧸',
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
    caption: 'La risa de Claudia tiene ese poder mágico de contagiar felicidad. ✨ Los niños no pueden evitar sonreír cuando están con ella, y la verdad es que los mayores tampoco. Gracias por transmitir tanta alegría, ternura y luz en cada momento compartido.',
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
    caption: 'Claudia tiene 2 años y medio y convive con una enfermedad ultrarrara: deficiencia de enzima bifuncional.\n\nCada día es un reto que afronta con valentía, siempre acompañada por sus padres, que luchan a su lado sin soltarle la mano.\n\nSu sonrisa inspira y su lucha nos une ✨\n\n#LaTardeTM',
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
    caption: 'Gracias a todos por vuestro cariño y vuestra ayuda! ❤️\nSeguro que con toda vuestra ayuda, encontraremos cura para Claudia\n\nhttps:\/\/elretodeclaudia.org\/',
  },

]
