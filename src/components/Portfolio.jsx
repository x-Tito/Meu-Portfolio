import React, { useState } from 'react';
import '../components/Portfolio.css';
import Minhaft from '../components/Imagens/Minhaft.png';
import Barb from '../components/Imagens/BarbStrike.png';
import Clima from '../components/Imagens/Clima.png';
import breakforlove from '../components/Imagens/breakforlove.png';
import desafiodev from '../components/Imagens/desafiodev.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('front');
  const [modalData, setModalData] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Barbearia Strike",
      type: "front",
      image:Barb, 
      description: "Projeto pessoal de uma landing page responsiva com foco em agendamentos e conversão de clientes. Desenvolvida com foco em UI/UX.",
      techs: ["React", "CSS", "JavaScript"],
      link: "https://github.com/x-Tito/Agendamento-online.git"
    },
    {
      id: 2,
      title: "Desafio Dev",
      type: "backend",
      image: desafiodev,
      description: "A resolução do desafio demonstra a aplicação prática de lógica de programação, manipulação de datas, regras de negócio e organização de dados, simulando situações comuns em sistemas comerciais e administrativos.",
      techs: ["JavaScript"],
      link: "https://github.com/x-Tito/Desafio_Dev.git"
    },
    {
      id: 3,
      title: "ClimaNassau",
      type: "front",
      image: Clima,
      description: "Interface intuitiva para acompanhar o clima da sua cidade. Desenvolvido em um projeto da faculdade.",
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/x-Tito/Clima-Nassau.git"
    },
    {
      id: 4,
      title: "Break For Love",
      type: "front",
      image: breakforlove,
      description: "Projeto acadêmico feito em equipe, com o intuito de fazer casais passarem mais tempo de qualidade juntos.",
      techs: ["Software Architecture", "Dart/Flutter", "Documentação"],
      link: "https://github.com/SamuelRamos338/breakforlove-conexao.git"
    }
  ];

  const techSkills = ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Git", "SQL", "UX/UI", "Figma", "Dart/Flutter","BootStrap","Git/Github","Python"];

  const filteredProjects = projects.filter(p => p.type === filter);

  return (
    <div className="portfolio-container">
      <section className="hero">
        <div className="hero-content">
          <div className="photo-container">
            <img src={Minhaft} alt="Jailson" className="profile-photo" /> 
          </div>
          <div className="intro-text">
            <h1>Olá, eu sou o <span className="highlight">Jailson</span></h1>
            <p>
              Sou estudante do último período de Análise e Desenvolvimento de Sistemas, com foco em Front-end e atualmente em formação em React pelo IFS.
              Desenvolvo interfaces modernas, responsivas e centradas na experiência do usuário, unindo desenvolvimento Front-end e
              UI/UX Design.
              Trabalho com HTML, CSS, JavaScript, React e Bootstrap, aplicando boas práticas, componentização e organização de código.
              Tenho experiência com prototipagem no Figma, usabilidade e acessibilidade, além de desenvolver projetos pessoais para
              consolidar meu aprendizado e manter meu GitHub e LinkedIn atualizados.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h2 className="section-title">Tecnologias Estudadas</h2>
        <div className="tech-grid">
          {techSkills.map(skill => (
            <span key={skill} className="tech-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="filter-buttons">
          <button 
            className={filter === 'front' ? 'active' : ''} 
            onClick={() => setFilter('front')}
          >
            Front-end
          </button>
          <button 
            className={filter === 'backend' ? 'active' : ''} 
            onClick={() => setFilter('backend')}
          >
            Back-end
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <button className="details-btn" onClick={() => setModalData(project)}>
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="contact-footer">
        <h2 className="section-title">Contato</h2>
        <div className="social-links">
          <a href="https://github.com/x-Tito" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jailson-sena" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jailsonstssena@gmail.com">E-mail</a>
          <a href="https://wa.me/qr/5DQUNYMWYHGAO1">WhatsApp</a>
        </div>
        <p className="footer-credits">© 2026 • Desenvolvido por Jailson em Aracaju/SE.</p>
      </footer>

      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalData(null)}>&times;</button>
            <div className="modal-image-header">
               <img src={modalData.image} alt={modalData.title} />
            </div>
            <div className="modal-body">
                <h2 className="highlight">{modalData.title}</h2>
                <p>{modalData.description}</p>
                <div className="modal-techs">
                {modalData.techs.map(t => <span key={t}>{t}</span>)}
                </div>
                <a href={modalData.link} className="main-btn" target="_blank" rel="noreferrer">Ver Repositório</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;