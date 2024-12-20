import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
// componentes
import Social from "../components/Socials";
import Photo from "../components/Photo";
// import Stats from "../components/Stats";
// import CV from '../public/assets/files/CV - Greco Fernando de Macedo Peres.pdf'

const Home = () => {
  const cvPath = "/assets/files/CV GRECO FERNANDO DE MACEDO PERES.pdf";
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              <strong>Hello World! 🌍</strong> <br />
              I am <span className="text-teal-300">Greco Peres</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              Eu sou um desenvolvedor de sistemas, apaixonado pela área da programação e com muita sede de aprendizagem.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a download="CV - Greco Fernando de Macedo Peres.pdf" href={cvPath} >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-teal-300 rounded-full flex justify-center items-center text-teal-300 text-base hover:bg-teal-300 hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
}

export default Home;
