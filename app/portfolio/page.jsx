"use client";

import {delay, motion} from 'framer-motion';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import WorkSliderBtns from '../../components/WorkSliderBtns';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    categoria: 'Front-End',
    titulo: 'Projeto 1',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eius quaerat nesciunt pariatur fugiat asperiores fuga optio, libero sequi quas labore itaque, quam similique reprehenderit nostrum, dicta veniam aspernatur!',
    tecnologias: [{nome: 'HTML5'}, {nome: 'CSS3'}, {nome: 'JavaScript'}],
    imagem: '/assets/work/thumb1.png',
    link: '',
    github: '',
  },
  {
    num: '02',
    categoria: 'Front-End',
    titulo: 'Projeto 2',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eius quaerat nesciunt pariatur fugiat asperiores fuga optio, libero sequi quas labore itaque, quam similique reprehenderit nostrum, dicta veniam aspernatur!',
    tecnologias: [{nome: 'HTML5'}, {nome: 'CSS3'}, {nome: 'JavaScript'}],
    imagem: '/assets/work/thumb2.png',
    link: '',
    github: '',
  },
  {
    num: '03',
    categoria: 'Front-End',
    titulo: 'Projeto 3',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eius quaerat nesciunt pariatur fugiat asperiores fuga optio, libero sequi quas labore itaque, quam similique reprehenderit nostrum, dicta veniam aspernatur!',
    tecnologias: [{nome: 'Next.Js'}, {nome: 'Tailwind.CSS'}],
    imagem: '/assets/work/thumb3.png',
    link: '',
    github: '',
  },
];

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // atualizar índice do slide atual
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* numero do projeto ficando em outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* projeto - categoria */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-teal-300 transition-all duration-500 capitalize">
                {project.categoria} projeto
              </h2>
              {/* descricao do projeto */}
              <p className="text-white/60">{project.descricao}</p>
              {/* tecnologias do projeto */}
              <ul className="flex gap-4">
                {project.tecnologias.map((item, index) =>{
                  return (
                    <li key={index} className="text-xl text-teal-300">
                      {item.nome}
                      {/* removendo sempre o ultimo ',' do array */}
                      {index !== project.tecnologias.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* borda */}
              <div className="border border-white/20"></div>
              {/* botao */}
              <div className="flex items-center gap-4">
                {/* botao projeto rodando */}
                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-teal-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projeto Rodando</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* botão github  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-teal-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* imagem do projeto */}
                      <div className="relative w-full h-full">
                        <Image src={project.imagem} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* botoes do swiper */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-teal-300 hover:bg-teal-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio;