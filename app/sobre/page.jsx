"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from "framer-motion";

// dados - sobre
const about = {
  titulo: "Sobre mim",
  descricao: "",
  info: [
    {
      NomeCampo: "Nome",
      ValorCampo: "Greco Peres"
    },
    {
      NomeCampo: "Telefone",
      ValorCampo: "+55 (17) 98139-8479"
    },
    {
      NomeCampo: "E-mail",
      ValorCampo: "grecofernnado.mp@gmail.com"
    },
    {
      NomeCampo: "Experiência",
      ValorCampo: "+3 anos"
    },
    {
      NomeCampo: "Idiomas",
      ValorCampo: "PT-BR, English (in learning)"
    },
    {
      NomeCampo: "Nacionalidade",
      ValorCampo: "Brazil 🇧🇷"
    },
  ]
};

// dados - experiencia
const experience = {
  icon: '/assets/resume/badge.svg',
  titulo: 'Minhas Experiências',
  descricao: '',
  items: [
    {
      company: "EcoPower",
      ocupacao: "Desenvolvedor de Sistemas - Jr",
      duracao: "01/2024 - Atualmente",
    },
    {
      company: "EcoPower",
      ocupacao: "Analista de BI - Jr",
      duracao: "06/2023 - 12/2023",
    },
    {
      company: "UNIFEB",
      ocupacao: "Manutenção de sites WEB",
      duracao: "2022 - 2023",
    },
    {
      company: "UNIFEB",
      ocupacao: "Estagiário",
      duracao: "2021 - 2022",
    },
  ]
};

// educação (nivel de estudo)
const education = {
  icon: '/assets/resume/cap.svg',
  titulo: 'Meus Estudos',
  descricao: '',
  items: [
    {
      instituicao: "UNIFEB",
      curso: "Sistemas de Informação",
      duracao: "2019 - 2023",
    },
    {
      instituicao: "Udemy",
      curso: "Desenvolvimento Web Completo",
      duracao: "116 horas",
    },
    {
      instituicao: "Udemy",
      curso: "Desenvolvimento Mobile Completo",
      duracao: "107 horas",
    },
    {
      instituicao: "Udemy",
      curso: "Dev. de Sistemas em Delphi e SQL SERVER",
      duracao: "24,5 horas",
    },
    {
      instituicao: "Udemy",
      curso: "PHP7 - POO e Estrutura MVC",
      duracao: "13,5 horas",
    },
    {
      instituicao: "Alura",
      curso: "C# - CRIANDO SUA PRIMEIRA APLICAÇÃO",
      duracao: "8 horas",
    },
    {
      instituicao: "Alura",
      curso: "Dart - Primeiros passos com a linguagem",
      duracao: "8 horas",
    },
    {
      instituicao: "Alura",
      curso: "Flutter: Widgets, Stateless, Stateful, Imgs e Animações",
      duracao: "16 horas",
    },
    {
      instituicao: "Alura",
      curso: "GIT E GITHUB",
      duracao: "8 horas",
    },
  ]
};

// minhas skills
const skills = {
  titulo: 'Minhas Habilidades',
  descricao: '',
  skillList: [
    {
      icon: <FaHtml5 />,
      nome: "HTML5",
    },
    {
      icon: <FaCss3 />,
      nome: "CSS3",
    },
    {
      icon: <FaJs />,
      nome: "JavaScript",
    },
    {
      icon: <FaReact />,
      nome: "React.JS",
    },
    {
      icon: <SiTailwindcss />,
      nome: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      nome: "Node.JS",
    },
    {
      icon: <SiNextdotjs />,
      nome: "Next.JS",
    },
    {
      icon: <FaPhp />,
      nome: "PHP",
    },
    {
      icon: <FaFigma />,
      nome: "Figma",
    },
  ]
};

const Sobre = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mt-4">
      <div className="container mx-auto">
        <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
          </TabsList>

          {/* conteudo */}
          <div className='min-h-[70vh] w-full'>
            {/* experiencias */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.titulo}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.descricao}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                      <li key={index} className='bg-[#232329] h-[134px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-teal-300'>{item.duracao}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.ocupacao}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-teal-300'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* educação */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.titulo}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.descricao}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                      <li key={index} className='bg-[#232329] h-[134px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-teal-300'>{item.duracao}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.curso}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-teal-300'></span>
                          <p className='text-white/60'>{item.instituicao}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.titulo}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.descricao}</p>
                </div>

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-teal-300 transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.nome}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Sobre */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.titulo}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.descricao}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) =>{
                    return (
                      <li key={index} className='flex item-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.NomeCampo}</span>
                        <span className='text-xl'>{item.ValorCampo}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Sobre