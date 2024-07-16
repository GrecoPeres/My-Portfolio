"use client";

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from '../../components/ui/select';
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsappSquare} from 'react-icons/fa';

const info = [
  {
    icon: <FaWhatsappSquare />,
    titulo: 'WhatsApp',
    descricao: '+55 (17) 98139-8479',
  },
  {
    icon: <FaEnvelope />,
    titulo: 'E-mail',
    descricao: 'grecofernando.mp@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    titulo: 'Endereço',
    descricao: 'Barretos, São Paulo - Brasil',
  },
];

import { motion } from "framer-motion";

const Contato = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-white"> I turn coffee into <span className="text-teal-300"> &lt;/code&gt; </span> </h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="nome" placeholder="Nome completo" />
                <Input type="telefone" placeholder="Telefone" />
                <Input type="email" placeholder="E-mail" className="md:col-span-2" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione o serviço</SelectLabel>
                    <SelectItem value="dev-web">Desenvolvimento Web</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="dev-mob">Desenvolvimento Mobile</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* msg */}
              <Textarea className="h-[200px]" placeholder="Digite sua mensagem aqui." />
              <Button size="md" className="max-w-40">Enviar</Button>
            </form>
          </div>
          {/* informações */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-teal-300 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.titulo}</p>
                      <h3 className="text-xl">{item.descricao}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contato