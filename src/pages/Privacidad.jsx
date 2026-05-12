import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SECTIONS = [
  {
    title: '1. Datos identificativos',
    content: (
      <p>
        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002,
        de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico,
        les comunicamos que la entidad titular del dominio web es{' '}
        <strong>El Reto de Claudia</strong>, Asociación para la Investigación y Tratamiento de
        Enfermedades Peroxisomales, con N.I.F. G88669163, inscrita en el Registro de Asociaciones
        de la Comunidad de Madrid.
      </p>
    ),
    extra: [
      { label: 'Correo electrónico', value: 'info@elretodeclaudia.org', href: 'mailto:info@elretodeclaudia.org' },
      { label: 'Domicilio', value: 'C/ Pablo Mayoral 12, Bajo A, 28280 El Escorial (Madrid)' },
    ],
  },
  {
    title: '2. Usuarios',
    content: (
      <p>
        El acceso y/o uso de este portal atribuye la condición de <strong>USUARIO</strong>, que
        acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las
        citadas condiciones serán de aplicación independientemente de las Condiciones Generales de
        contratación que en su caso resulten de obligado cumplimiento.
      </p>
    ),
  },
  {
    title: '3. Uso del portal',
    content: (
      <>
        <p className="mb-4">
          <strong>El Reto de Claudia</strong> proporciona el acceso a informaciones, servicios,
          programas o datos (en adelante <em>"los contenidos"</em>) en Internet. El USUARIO asume
          la responsabilidad del uso del portal y se compromete a hacer un uso adecuado de los
          contenidos y servicios ofrecidos, con carácter enunciativo pero no limitativo, a no
          emplearlos para:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            'Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.',
            'Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o que atenten contra los derechos humanos.',
            'Provocar daños en los sistemas físicos y lógicos de El Reto de Claudia, o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas que sean susceptibles de provocar los daños anteriormente mencionados.',
            'Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600">
              <span className="text-brand-500 font-bold mt-0.5">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-600">
          En cualquier caso, <strong>El Reto de Claudia</strong> no será responsable de las
          opiniones vertidas por los usuarios a través de foros, chats u otras herramientas de
          participación.
        </p>
      </>
    ),
  },
  {
    title: '4. Exclusión de garantías y responsabilidad',
    content: (
      <p>
        <strong>El Reto de Claudia</strong> no se hace responsable, en ningún caso, de los daños y
        perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u
        omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o
        programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas
        tecnológicas necesarias para evitarlo.
      </p>
    ),
  },
  {
    title: '5. Modificaciones',
    content: (
      <p>
        <strong>El Reto de Claudia</strong> se reserva el derecho de efectuar sin previo aviso las
        modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir
        tanto los contenidos y servicios que se presten a través del mismo, como la forma en la que
        éstos aparezcan presentados o localizados.
      </p>
    ),
  },
  {
    title: '6. Enlaces',
    content: (
      <p>
        En el caso de que en <strong>El Reto de Claudia</strong> se dispusiesen enlaces o
        hipervínculos hacia otros sitios de Internet, <strong>El Reto de Claudia</strong> no
        ejercerá ningún tipo de control sobre dichos sitios y contenidos, ni asumirá
        responsabilidad alguna por ellos. La inclusión de conexiones externas no implicará ningún
        tipo de asociación, fusión o participación con las entidades conectadas.
      </p>
    ),
  },
  {
    title: '7. Derecho de exclusión',
    content: (
      <p>
        <strong>El Reto de Claudia</strong> se reserva el derecho a denegar o retirar el acceso al
        portal y/o los servicios ofrecidos, sin necesidad de preaviso, a instancia propia o de un
        tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.
      </p>
    ),
  },
  {
    title: '8. Generalidades',
    content: (
      <p>
        <strong>El Reto de Claudia</strong> perseguirá el cumplimiento de las presentes condiciones,
        así como cualquier utilización indebida de su portal, ejerciendo todas las acciones civiles y
        penales que le puedan corresponder en derecho.
      </p>
    ),
  },
  {
    title: '9. Modificación de las presentes condiciones y duración',
    content: (
      <p>
        <strong>El Reto de Claudia</strong> podrá modificar en cualquier momento las condiciones
        aquí determinadas, siendo debidamente publicadas como aquí aparecen. La vigencia de las
        citadas condiciones irá en función de su exposición y estarán vigentes hasta que sean
        modificadas por otras debidamente publicadas.
      </p>
    ),
  },
  {
    title: '10. Legislación aplicable y jurisdicción',
    content: (
      <p>
        La relación entre <strong>El Reto de Claudia</strong> y el USUARIO se regirá por la
        normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales
        de Madrid capital.
      </p>
    ),
  },
]

export default function Privacidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">
            Información legal
          </p>
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Aviso legal y política de privacidad
          </h1>
          <p className="text-gray-500 text-sm">
            Última actualización: mayo de 2025
          </p>
        </header>

        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-gray-100 pt-8">
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-600 leading-relaxed text-sm">
                {section.content}
              </div>
              {section.extra && (
                <dl className="mt-4 space-y-1">
                  {section.extra.map((item) => (
                    <div key={item.label} className="flex flex-wrap gap-x-2 text-sm">
                      <dt className="font-semibold text-gray-700">{item.label}:</dt>
                      <dd className="text-gray-600">
                        {item.href ? (
                          <a href={item.href} className="text-brand-600 hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
