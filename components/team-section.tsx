import Image from "next/image";
import PlanetImg from "@/public/images/planet.jpeg";
import Team1 from "@/public/images/team/ROD05920.jpg";
import Team2 from "@/public/images/team/ROD05961.jpg";
import Team3 from "@/public/images/team/ROD05975.jpg";
import Team4 from "@/public/images/team/ROD06004.jpg";
import Team5 from "@/public/images/team/ROD06114.jpg";
import Team6 from "@/public/images/team/ROD06142.jpg"; 
import Team7 from "@/public/images/team/ROD06154.jpg"; 

export default function TeamSection() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20">
      <div className="mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              Conoce al Equipo
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite]">
                <div className="flex flex-wrap gap-8 justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team1}
                      width={200}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team2}
                      width={200}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team3}
                      width={200}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team4}
                      width={200}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team5}
                      width={200}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team6}
                      width={200}
                      style={{ minHeight: '300px' }}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full bg-gray-900"
                      src={Team7}
                      width={200}
                      height={200}
                      alt="Planet"
                    />
                    <p className="mt-2 font-medium">Sample Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
