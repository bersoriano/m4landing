import Image from "next/image";
import PlanetImg from "@/public/images/planet.jpeg";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import DeskWithAnalytics from "@/public/images/deskwanalytics.jpeg";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20">
      <div className="py-5">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-5 text-center md:pb-5">
          <h2 className="text-3xl font-bold md:text-4xl">
            Asesoría Especializada en Marketing Médico
          </h2>
        </div>
        <div className="mx-auto max-w-3xl pb-16 md:pb-20">
          <p className="pb-4">En MCUATRO, diseñamos estrategias de marketing digital completamente adaptadas a las necesidades únicas de tu clínica.</p>
          <ul>
            <li>Análisis exhaustivo: Estudiamos a fondo tu clínica y el mercado para desarrollar un plan preciso y efectivo.
            </li>
            <li>Estrategia a medida: Creamos un plan de marketing digital alineado a tus objetivos específicos.
            </li>
            <li>Gestión continua: Un gestor dedicado te acompaña en cada etapa, brindando asesoría y soporte personalizado.</li>
            <li>Resultados claros: Te ofrecemos informes detallados y ajustamos las estrategias según tu retroalimentación.
            </li>
          </ul>
        </div>
        {/* Full-width Image */}
        <div className="pb-16 md:pb-20 relative overflow-hidden">
          <Image
          className="w-full object-cover object-center h-[60vh]"
          src={DeskWithAnalytics}
          alt="Desk with Analytics"
          />
        </div>
        <div className="mx-auto max-w-3xl pb-10 text-center md:pb-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Nuestros Servicios
          </h2>            
        </div>
        {/* Grid */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
          <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
              >
                <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
              </svg>
              <span className="text-gray-900 text-lg">Asesoría en Marketing Médico</span>
            </h3>
            <p className="text-[15px]">
            Nuestra experiencia en marketing digital para clínicas médicas te proporcionará las mejores herramientas para destacar en el entorno digital.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="font-semibold">Diagnóstico inicial: </span>
                Identificamos oportunidades y áreas de mejora en tu clínica.
              </li>
              <li>
                <span className="font-semibold">Estrategia personalizada: </span>
                Elaboramos un plan digital adaptado a tus necesidades y objetivos.
              </li>
              <li>
                <span className="font-semibold">Soporte continuo: </span>
                Ajustamos y optimizamos las campañas según la evolución de tus metas.
              </li>
              <li>
                <span className="font-semibold">Resultados tangibles: </span>
                Medimos el progreso y optimizamos continuamente nuestras estrategias para maximizar tu retorno de inversión.
              </li>
            </ul>
          </article>
          <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
              >
                <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
              </svg>
              <span className="text-gray-900 text-lg">Optimización Continua del Sitio Web</span>
            </h3>
            <p className="text-[15px]">
              Realizamos un monitoreo constante para mejorar el rendimiento de tu sitio web, asegurando que captes y mantengas la atención de tus visitantes.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="font-semibold">Monitoreo en tiempo real: </span>
                Analizamos el comportamiento de los usuarios en tu página web.
              </li>
              <li>
                <span className="font-semibold">Insights detallados: </span>
                Te brindamos datos clave sobre el tráfico y la interacción de tus visitantes.
              </li>
              <li>
                <span className="font-semibold">Mejora constante: </span>
                Adaptamos las estrategias en función de los análisis para maximizar la conversión.
              </li>
            </ul>
          </article>
          <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
              >
                <path
                  d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                  opacity=".3"
                />
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
              </svg>
              <span className="text-gray-900 text-lg">Gestión de Redes Sociales</span>
            </h3>
            <p className="text-[15px]">
              Fortalecemos la presencia online de tu clínica a través de estrategias efectivas en redes sociales.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
              <span className="font-semibold">Creación de contenido relevante: </span>
              Desarrollamos publicaciones atractivas para conectar con tu audiencia.
              </li>
              <li>
              <span className="font-semibold">Gestión activa: </span>
              Administramos y optimizamos tus perfiles para mejorar tu visibilidad.
              </li>
              <li>
              <span className="font-semibold">Interacción y comunidad: </span>
              Nos encargamos de interactuar con tus seguidores, generando un vínculo más fuerte con tu marca.
              </li>
            </ul>
          </article>
          <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
              >
                <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
              </svg>
              <span className="text-gray-900 text-lg">Campañas en Google Ads</span>
            </h3>
            <p className="text-[15px]">
            Maximizamos tu visibilidad con campañas publicitarias estratégicas en Google.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
              <span className="font-semibold">Campañas dirigidas: </span>
              Diseñamos anuncios efectivos enfocados en captar a tu público objetivo.
              </li>
              <li>
              <span className="font-semibold">Optimización constante: </span>
              Ajustamos las campañas para asegurar un rendimiento óptimo.
              </li>
              <li>
              <span className="font-semibold">Resultados medibles: </span>
              Te proporcionamos informes detallados sobre el impacto de las campañas.
              </li>
            </ul>              
          </article>
          <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
              >
                <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
              </svg>
              <span className="text-gray-900 text-lg">Desarrollo de Marca para Clínicas</span>
            </h3>
            <p className="text-[15px]">
            Creamos una identidad de marca sólida que refleje los valores y la visión de tu clínica.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
              <span className="font-semibold">Identidad diferenciada: </span>
              Diseñamos una imagen de marca que te distinga en el mercado médico.
              </li>
              <li>
              <span className="font-semibold">Estrategia coherente: </span>
              Implementamos un plan integral para fortalecer tu reputación.
              </li>
              <li>
              <span className="font-semibold">Mayor visibilidad: </span>
              Aplicamos tácticas que refuerzan el reconocimiento y la percepción de tu clínica.
              </li>
            </ul>              
          </article>
          <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
              >
                <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
              </svg>
              <span className="text-gray-900 text-lg">Producción Audiovisual</span>
            </h3>
            <p className="text-[15px]">
            Desarrollamos contenido audiovisual que resalta la experiencia de tu clínica, impactando a tus pacientes potenciales.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
              <span className="font-semibold">Contenido atractivo: </span>
              Creamos videos y materiales visuales que captan la atención.
              </li>
              <li>
              <span className="font-semibold">Producción profesional: </span>
              Nos aseguramos de que cada proyecto cumpla con los más altos estándares de calidad.
              </li>
              <li>
              <span className="font-semibold">Distribución estratégica: </span>
              Optimizamos el contenido para alcanzar el mayor impacto y engagement.
              </li>
            </ul>              
          </article>
        </div>
      </div>
    </section>
  );
}
