"use client";

import {motion} from 'framer-motion';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
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
    imagem: '/assets/work/thumb1.png',
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
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* outline numero */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* projeto - categoria */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.categoria} projeto
              </h2>
              {/* descricao do projeto */}
              <p className="text-white/60">{project.descricao}</p>
              {/* tecnologias do projeto */}
              <ul className="flex gap-4">
                {project.tecnologias.map((item, index) =>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.nome}
                      {/* removendo sempre o ultimo , do array */}
                      {index !== project.tecnologias.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* borda */}
              <div className="border border-white/20"></div>
              {/* botao */}
              <div>
                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projeto rodando</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio