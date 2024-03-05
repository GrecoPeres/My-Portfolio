import React from 'react'
import "./skills.css"
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'

const Skills = () => {
  return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Meu Nível Técnico</span>

            <div className="skills__container container grid">
                <FrontEnd />
                <BackEnd />
            </div>
        </section>
    )
}

export default Skills