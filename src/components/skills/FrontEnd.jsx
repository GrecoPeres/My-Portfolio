import React from 'react'

const FrontEnd = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desenvolvimento Front-End</h3>

        <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data"><i class='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">HTML5</h3>
                    <span className="skills__level">Avançado</span>
                  
                </div>
              </div>
              
              <div className="skills__data"><i class='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">CSS3</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
              </div>

              <div className="skills__data"><i class='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data"><i class='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
              </div>
              
              <div className="skills__data"><i class='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">React</h3>
                    <span className="skills__level">Básico</span>
                </div>
              </div>

              <div className="skills__data"><i class='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Flutter</h3>
                    <span className="skills__level">Básico</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FrontEnd