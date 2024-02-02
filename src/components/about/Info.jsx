import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">3 anos de experiência</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Projetos</h3>
            <span className="about__subtitle">+ de 15 projetos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-certification about__icon'></i>
        
            <h3 className="about__title">Certificações</h3>
            <span className="about__subtitle">+ de 20 certificados</span>
        </div>
    </div>
  )
}

export default Info