import React from 'react'

const Services = () => {
  return (
    
    <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que posso oferecer!</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"></h3>
                </div>
                <span className="services__button">Ver mais <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-titulo"></h3>
                        <p className="services__modal-descricao">Trabalho com mais de 3 anos de experiência. Fornecendo trabalho de qualidade para clientes e empresas</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Transformando Ideias em Interfaces Impactantes: Desenvolvimento de Experiências do Usuário</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvo Páginas Web</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Construindo Experiências Cativantes: Desenvolvimento de Elementos Interativos</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Fortalecendo a Identidade da Sua Marca: Estratégias de Posicionamento Empresarial</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services