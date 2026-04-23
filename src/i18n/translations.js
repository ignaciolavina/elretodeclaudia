const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      dbp: 'Qué es la DBP',
      historia: 'Historia de Claudia',
      ayudar: 'Cómo ayudar',
      contacto: 'Contacto',
      donar: 'Donar',
    },

    hero: {
      badge: 'Caso clínico · Convocatoria abierta',
      title1: 'Buscamos investigadores para empezar la',
      titleEmphasis: 'terapia génica',
      title2: 'de Claudia.',
      p1: 'Claudia tiene 2 años y medio. Padece la deficiencia de la proteína D-bifuncional (DBP), una enfermedad neurodegenerativa ultrarrara sin tratamiento curativo. La terapia génica es hoy la vía con más potencial — y necesitamos conectar con quienes puedan explorarla.',
      p2: 'Si trabajas en terapia génica, enfermedades metabólicas o peroxisomales, o conoces a alguien que lo haga, hay un lugar en este reto para ti.',
      cta1: 'Cómo puedes ayudar',
      cta2: 'Conoce la enfermedad',
    },

    dbp: {
      sectionLabel: 'La enfermedad',
      title: '¿Qué es la deficiencia de la proteína D-bifuncional?',
      intro: 'La deficiencia de la proteína D-bifuncional (DBP) es un trastorno metabólico hereditario de origen genético causado por mutaciones en el gen HSD17B4. Esta proteína es esencial para el funcionamiento correcto de los peroxisomas, y cuando falla, las consecuencias son devastadoras para el sistema nervioso.',
      peroxTitle: '¿Qué son los peroxisomas y por qué importan?',
      peroxText: 'Los peroxisomas son pequeños orgánulos celulares presentes en prácticamente todas las células del organismo. Se encargan de descomponer las grasas de cadena muy larga y de eliminar sustancias tóxicas que se generan en el metabolismo. Cuando la proteína D-bifuncional no funciona correctamente, estas grasas no pueden procesarse y se acumulan de forma progresiva, causando un daño irreversible en el sistema nervioso, especialmente en el cerebro y la médula espinal.',
      statText: 'documentados en todo el mundo. La DBP es una de las enfermedades más raras que existen, lo que hace que cada investigación y cada diagnóstico cuente más que nunca.',
      symptoms: [
        {
          title: 'Hipotonía muscular severa',
          text: 'Los bebés nacen con una marcada debilidad muscular que dificulta la alimentación, la respiración y el desarrollo motor desde los primeros días de vida.',
        },
        {
          title: 'Afectación auditiva',
          text: 'La pérdida de audición es frecuente y puede presentarse desde el nacimiento o desarrollarse progresivamente, requiriendo seguimiento continuado.',
        },
        {
          title: 'Neurodegeneración progresiva',
          text: 'La acumulación de sustancias tóxicas daña de forma progresiva el sistema nervioso central, afectando al cerebro y generando una deterioración continua.',
        },
        {
          title: 'Retraso en el desarrollo',
          text: 'El desarrollo psicomotor y cognitivo se ve significativamente afectado, requiriendo apoyo multidisciplinar continuo —logopedia, fisioterapia, neurología— desde el diagnóstico.',
        },
        {
          title: 'Sin tratamiento curativo',
          text: 'Actualmente no existe ningún tratamiento que detenga o cure la progresión de la enfermedad. Las terapias disponibles son de soporte y mejoran la calidad de vida, pero no la enfermedad en sí.',
        },
        {
          title: 'Alta mortalidad infantil',
          text: 'Con menos de 100 casos documentados en todo el mundo, la mayoría de los niños afectados por la DBP no superan los primeros años de vida. Su extrema rareza dificulta la investigación y hace urgente encontrar un tratamiento.',
        },
      ],
    },

    historia: {
      sectionLabel: 'Quiénes somos',
      title: 'La historia de Claudia',
      subtitle: 'Una historia de amor, de incertidumbre, de lucha y de esperanza. Una historia que todavía se está escribiendo.',
      p1: 'Claudia llegó a nuestras vidas en 2023 llena de luz. Como cualquier familia, teníamos los sueños y los miedos propios de los primeros meses, pero también teníamos la certeza de que estaríamos ahí para lo que viniera.',
      p2: 'Pronto comenzamos a notar señales que no encajaban. Una hipotonía que no mejoraba, dificultad para escuchar, un desarrollo que se alejaba poco a poco de los hitos esperados. Los médicos miraban, investigaban, descartaban. Y nosotros esperábamos, sin saber bien qué.',
      p3: 'El diagnóstico llegó como un mapa en un terreno desconocido: por un lado puso nombre a lo que veíamos; por otro, nos abrió ante una realidad para la que nadie estaba preparado. La deficiencia de la proteína D-bifuncional. Casi nadie había oído hablar de ella. Casi nadie sabía qué hacer con ella.',
      p4: 'Pero Claudia sigue aquí, luchando cada día. Y nosotros también.',
      timelineTitle: 'El camino hasta aquí',
      timeline: [
        { year: '2023', label: 'Llegada de Claudia', text: 'Claudia nace llena de vida. Sus primeros meses transcurren con la normalidad que cualquier familia espera.' },
        { year: '2023', label: 'Primeras señales', text: 'Comenzamos a notar un desarrollo más lento de lo esperado: dificultad para sostener la cabeza, hipotonía generalizada, una debilidad que no correspondía con su edad.' },
        { year: '2024', label: 'El diagnóstico', text: 'Tras meses de incertidumbre y múltiples pruebas, llegó el diagnóstico: deficiencia de la proteína D-bifuncional. Un nombre desconocido para nosotros, una realidad que cambió todo.' },
        { year: '2025', label: 'Seguimiento multidisciplinar', text: 'Claudia empieza a recibir atención de varios especialistas: neurología, endocrino, otorrino, rehabilitador, traumatología, fisioterapia, estimulación... Un equipo que trabaja cada día para darle la mejor calidad de vida posible.' },
        { year: '2026', label: 'Nace la asociación', text: 'Decidimos que el silencio no era una opción. Creamos El Reto de Claudia para dar visibilidad a esta enfermedad ultrarrara, encontrar investigación y entrar en contacto con familias.' },
      ],
    },

    ayudar: {
      sectionLabel: 'Únete',
      title: '¿Cómo puedes ayudar?',
      subtitle: 'Cada persona que se suma a este reto lo hace desde un lugar diferente. Encontramos un hueco para todos.',
      cards: [
        {
          badge: 'Ciencia',
          title: '¿Eres investigador o científico?',
          text: 'Tu conocimiento puede marcar la diferencia. Si trabajas en el campo de las enfermedades metabólicas, la neurogenética, los peroxisomas o áreas relacionadas, queremos conocerte. Juntos podemos acelerar el camino hacia una solución para Claudia y para todas las personas afectadas por la DBP.',
          cta: 'Contacta con nosotros',
        },
        {
          badge: 'Comunidad',
          title: '¿Eres una familia afectada?',
          text: 'No estáis solos. Si tu hijo, familiar o tú mismo habéis recibido un diagnóstico de DBP u otra enfermedad peroxisomal, queremos estar a vuestro lado. Compartir experiencias, apoyarnos mutuamente y construir comunidad también es parte fundamental del reto.',
          cta: 'Únete a la comunidad',
        },
        {
          badge: 'Difusión',
          title: '¿Quieres difundir nuestra causa?',
          text: 'La visibilidad es poder. Cuantas más personas conozcan la DBP, más posibilidades tenemos de llegar a quienes pueden ayudar. Comparte nuestra historia en redes sociales, entre tus contactos, en tu consulta o en tu comunidad. Cada voz importa.',
          cta: 'Comparte nuestra historia',
        },
      ],
    },

    contacto: {
      sectionLabel: 'Hablemos',
      title: 'Escríbenos',
      subtitle: '¿Tienes alguna pregunta, quieres colaborar o simplemente quieres hacernos saber que estás ahí? Escríbenos. Cada mensaje que recibimos nos recuerda que no estamos solos en este camino.',
      emailLabel: 'Email de contacto',
      phoneLabel: 'Teléfono de contacto',
      researcherNote: 'Si eres investigador o médico, cuéntanos en qué área trabajas y cómo crees que podrías colaborar. Respondemos a todos los mensajes con la mayor brevedad posible.',
      form: {
        nombre: 'Nombre',
        nombrePlaceholder: 'Tu nombre completo',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        motivo: 'Motivo del contacto',
        mensaje: 'Mensaje',
        mensajePlaceholder: 'Cuéntanos cómo quieres colaborar o qué necesitas...',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        successTitle: '¡Mensaje enviado!',
        successText: 'Gracias por escribirnos. En breve recibirás un email de confirmación. Intentaremos responderte lo antes posible.',
        sendAnother: 'Enviar otro mensaje',
        errorText: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo o escríbenos directamente a',
        motivos: [
          { value: '', label: 'Selecciona el motivo de contacto' },
          { value: 'investigador', label: 'Soy investigador o científico' },
          { value: 'familia', label: 'Soy familia o cuidador afectado' },
          { value: 'medico', label: 'Soy profesional médico o sanitario' },
          { value: 'prensa', label: 'Prensa o medios de comunicación' },
          { value: 'otro', label: 'Otro motivo' },
        ],
        errors: {
          nombre: 'Por favor, escribe tu nombre.',
          email: 'Por favor, escribe tu email.',
          emailInvalid: 'El formato del email no es válido.',
          motivo: 'Por favor, selecciona un motivo.',
          mensaje: 'Por favor, escribe tu mensaje.',
        },
      },
    },

    footer: {
      description: 'Asociación sin ánimo de lucro dedicada a dar visibilidad a la deficiencia de la proteína D-bifuncional (DBP) y a conectar familias, investigadores y médicos.',
      chip: 'Enfermedades raras · España',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      socialTitle: 'Redes sociales',
      domain: 'Dominio:',
      copyright: 'Asociación sin ánimo de lucro · España',
    },
  },

  en: {
    nav: {
      inicio: 'Home',
      dbp: 'What is DBP',
      historia: "Claudia's Story",
      ayudar: 'How to help',
      contacto: 'Contact',
      donar: 'Donate',
    },

    hero: {
      badge: 'Clinical case · Open call',
      title1: 'We are looking for researchers to start',
      titleEmphasis: 'gene therapy',
      title2: 'for Claudia.',
      p1: 'Claudia is 2.5 years old. She has D-bifunctional protein deficiency (DBP), an ultra-rare neurodegenerative disease with no curative treatment. Gene therapy is today the most promising avenue — and we need to connect with those who can explore it.',
      p2: 'If you work in gene therapy, metabolic or peroxisomal diseases, or know someone who does, there is a place for you in this challenge.',
      cta1: 'How you can help',
      cta2: 'Learn about the disease',
    },

    dbp: {
      sectionLabel: 'The disease',
      title: 'What is D-bifunctional protein deficiency?',
      intro: 'D-bifunctional protein (DBP) deficiency is a hereditary metabolic disorder caused by mutations in the HSD17B4 gene. This protein is essential for the correct functioning of peroxisomes, and when it fails, the consequences are devastating for the nervous system.',
      peroxTitle: 'What are peroxisomes and why do they matter?',
      peroxText: 'Peroxisomes are small cellular organelles present in virtually all cells of the body. They break down very long-chain fatty acids and eliminate toxic substances produced in metabolism. When the D-bifunctional protein does not work correctly, these fats cannot be processed and accumulate progressively, causing irreversible damage to the nervous system, especially the brain and spinal cord.',
      statText: 'documented worldwide. DBP is one of the rarest diseases in existence, making every research effort and every diagnosis more important than ever.',
      symptoms: [
        {
          title: 'Severe muscular hypotonia',
          text: 'Babies are born with marked muscle weakness that makes feeding, breathing, and motor development difficult from the first days of life.',
        },
        {
          title: 'Hearing impairment',
          text: 'Hearing loss is common and can be present from birth or develop progressively, requiring ongoing monitoring.',
        },
        {
          title: 'Progressive neurodegeneration',
          text: 'The accumulation of toxic substances progressively damages the central nervous system, affecting the brain and causing continuous deterioration.',
        },
        {
          title: 'Developmental delay',
          text: 'Psychomotor and cognitive development is significantly affected, requiring continuous multidisciplinary support — speech therapy, physiotherapy, neurology — from diagnosis.',
        },
        {
          title: 'No curative treatment',
          text: 'There is currently no treatment that stops or cures the progression of the disease. Available therapies are supportive and improve quality of life, but do not address the disease itself.',
        },
        {
          title: 'High infant mortality',
          text: 'With fewer than 100 documented cases worldwide, most children affected by DBP do not survive the first years of life. Its extreme rarity makes research difficult and finding a treatment urgent.',
        },
      ],
    },

    historia: {
      sectionLabel: 'Who we are',
      title: "Claudia's story",
      subtitle: 'A story of love, uncertainty, struggle and hope. A story still being written.',
      p1: 'Claudia came into our lives in 2023 full of light. Like any family, we had the dreams and fears of those first months, but also the certainty that we would be there for whatever came.',
      p2: 'We soon began to notice signs that did not fit. Hypotonia that was not improving, difficulty hearing, development that was slowly falling behind expected milestones. Doctors looked, investigated, ruled things out. And we waited, not quite knowing what for.',
      p3: 'The diagnosis arrived like a map in unknown territory: on one hand it named what we were seeing; on the other, it opened us up to a reality no one was prepared for. D-bifunctional protein deficiency. Almost no one had heard of it. Almost no one knew what to do with it.',
      p4: 'But Claudia is still here, fighting every day. And so are we.',
      timelineTitle: 'The road so far',
      timeline: [
        { year: '2023', label: "Claudia's arrival", text: 'Claudia is born full of life. Her first months pass with the normality any family expects.' },
        { year: '2023', label: 'First signs', text: 'We began to notice slower than expected development: difficulty holding her head, generalised hypotonia, a weakness that did not match her age.' },
        { year: '2024', label: 'The diagnosis', text: 'After months of uncertainty and multiple tests, the diagnosis arrived: D-bifunctional protein deficiency. A name unknown to us, a reality that changed everything.' },
        { year: '2025', label: 'Multidisciplinary follow-up', text: 'Claudia begins receiving care from several specialists: neurology, endocrinology, ENT, rehabilitation, traumatology, physiotherapy, stimulation... A team working every day to give her the best possible quality of life.' },
        { year: '2026', label: 'The association is born', text: 'We decided that silence was not an option. We created El Reto de Claudia to raise awareness of this ultra-rare disease, find research, and connect with affected families.' },
      ],
    },

    ayudar: {
      sectionLabel: 'Join us',
      title: 'How can you help?',
      subtitle: 'Everyone who joins this challenge does so from a different place. We find a role for everyone.',
      cards: [
        {
          badge: 'Science',
          title: 'Are you a researcher or scientist?',
          text: 'Your knowledge can make a difference. If you work in metabolic diseases, neurogenetics, peroxisomes or related fields, we want to meet you. Together we can accelerate the path to a solution for Claudia and all people affected by DBP.',
          cta: 'Get in touch',
        },
        {
          badge: 'Community',
          title: 'Are you an affected family?',
          text: 'You are not alone. If your child, a family member, or you yourself have received a diagnosis of DBP or another peroxisomal disease, we want to be by your side. Sharing experiences, supporting each other, and building community is also a fundamental part of this challenge.',
          cta: 'Join the community',
        },
        {
          badge: 'Outreach',
          title: 'Do you want to spread our cause?',
          text: 'Visibility is power. The more people know about DBP, the greater our chances of reaching those who can help. Share our story on social media, with your contacts, in your practice or in your community. Every voice matters.',
          cta: 'Share our story',
        },
      ],
    },

    contacto: {
      sectionLabel: 'Let\'s talk',
      title: 'Write to us',
      subtitle: 'Do you have a question, want to collaborate, or simply want to let us know you\'re there? Write to us. Every message we receive reminds us that we are not alone on this journey.',
      emailLabel: 'Contact email',
      phoneLabel: 'Contact phone',
      researcherNote: 'If you are a researcher or doctor, tell us what area you work in and how you think you could collaborate. We respond to all messages as quickly as possible.',
      form: {
        nombre: 'Name',
        nombrePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        motivo: 'Reason for contact',
        mensaje: 'Message',
        mensajePlaceholder: 'Tell us how you want to collaborate or what you need...',
        submit: 'Send message',
        sending: 'Sending...',
        successTitle: 'Message sent!',
        successText: 'Thank you for writing to us. You will receive a confirmation email shortly. We will try to reply as soon as possible.',
        sendAnother: 'Send another message',
        errorText: 'There was a problem sending the message. Please try again or write to us directly at',
        motivos: [
          { value: '', label: 'Select the reason for contact' },
          { value: 'investigador', label: 'I am a researcher or scientist' },
          { value: 'familia', label: 'I am an affected family member or carer' },
          { value: 'medico', label: 'I am a medical or healthcare professional' },
          { value: 'prensa', label: 'Press or media' },
          { value: 'otro', label: 'Other reason' },
        ],
        errors: {
          nombre: 'Please enter your name.',
          email: 'Please enter your email.',
          emailInvalid: 'The email format is not valid.',
          motivo: 'Please select a reason.',
          mensaje: 'Please write your message.',
        },
      },
    },

    footer: {
      description: 'Non-profit association dedicated to raising awareness of D-bifunctional protein (DBP) deficiency and connecting families, researchers and doctors.',
      chip: 'Rare diseases · Spain',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      socialTitle: 'Social media',
      domain: 'Domain:',
      copyright: 'Non-profit association · Spain',
    },
  },
}

export default translations
