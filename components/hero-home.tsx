import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/m4logo.png";
import DigitalDoctor from "@/public/images/digital-healthcare-professional-stockcake.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl">
        {/* Hero content */}
        <div className="pb-12 pt-12 md:pb-10 md:pt-10">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={152}
                  height={152}
                  alt="Avatar 01"
                />
              </div>
            </div>
            <h1
              className="mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Impulsa tu clínica con M4<br className="max-lg:hidden" />
              Tu Socio en Éxito Digital
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-900"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                La transformación digital está revolucionando el sector médico, y en este entorno altamente competitivo, tu clínica necesita destacar. 
              </p>
              <div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="pb-16 md:pb-20">
            <div className="text-center">
              <div className="relative inline-flex">
                <Image
                  className=""
                  src={DigitalDoctor}
                  alt="Planet"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-8 text-lg text-gray-900"
              data-aos="zoom-y-out"
              data-aos-delay={300}>
              En MCUATRO, somos especialistas en marketing digital para el sector salud, y estamos aquí para asegurarnos de que tu práctica médica ocupe el lugar número uno. No dejes que la competencia te opaque, ¡actúa ahora y asegura tu posición entre los mejores!
            </p>                                
          </div>          
        </div>
      </div>
    </section>
  );
}
