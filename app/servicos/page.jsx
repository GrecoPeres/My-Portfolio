"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
  {
    num: '01',
    titulo: 'Desenvolvedor Web',
    descricao: 'Desenvolvimento de sites responsivos e de alta performance utilizando tecnologias modernas como React e Vue.js.',
    href: "web-development"
  },
  {
    num: '02',
    titulo: 'UI/UX Design',
    descricao: 'Criação de interfaces intuitivas e experiências de usuário, focando na usabilidade e na estética.',
    href: "ui-ux-design"
  },
  {
    num: '03',
    titulo: 'Mobile App Development',
    descricao: 'Desenvolvimento de aplicativos móveis nativos e híbridos para Android e iOS, utilizando Flutter e React Native.',
    href: "mobile-app-development"
  },
  // {
  //   num: '04',
  //   titulo: 'E-commerce Solutions',
  //   descricao: 'Implementação de soluções completas de e-commerce, incluindo integração de sistemas de pagamento, gerenciamento de produtos e otimização de SEO.',
  //   href: "e-commerce-solutions"
  // },
  {
    num: '04',
    titulo: 'API Development',
    descricao: 'Desenvolvimento de APIs robustas e escaláveis para integrar sistemas e aplicações, utilizando Node.js e Express.',
    href: "api-development"
  },
]

import { motion } from "framer-motion";

const Servicos = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index)=> {
            return (
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              {/* TOP */}
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              {/* cabeçalho */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.titulo}</h2>
              {/* descricao */}
              <p className='text-white/60'>{service.descricao}</p>
              {/* border */}
              <div className='border-b border-white/20 w-full'></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Servicos