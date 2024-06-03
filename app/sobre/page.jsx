"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// dados - sobre
const about = {
  titulo: "Sobre mim",
  descricao: "Lorem ipsum dolor sit consectetur adiposincing elit. ",
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
  descricao: 'Lorem Ipsum dolor sit amet consectetuter',
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
      ocupacao: "Estagiotário",
      duracao: "2021 - 2022",
    },
  ]
};

// educação (nivel de estudo)
const education = {
  icon: '/assets/resume/cap.svg',
  titulo: 'Meus Estudos',
  descricao: 'Lorem Ipsum dolor sit amet consectetuter',
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
      curso: "Desenvolvimento de Sistemas em Delphi e SQL SERVER",
      duracao: "24,5 horas",
    },
    {
      instituicao: "Udemy",
      curso: "PHP7 - POO (Programação Orientada a Objetos) e Estrutura MVC (Model, View e Controller)",
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
      curso: "FLUTTER: WIDGETS, STATELESS, STATEFUL, IMAGENS E ANIMAÇÕES",
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
  // icon: '/assets/resume/cap.svg',
  titulo: 'Minhas Habilidades',
  descricao: 'Lorem Ipsum dolor sit amet consectetuter',
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
      icon: <FaFigma />,
      nome: "Figma",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue='experiencie' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* conteudo */}
          <div>conteudo</div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Sobre