import React from 'react';
import { Linkedin } from 'react-feather';

import Yann from 'src/assets/images/Yann.jpg';
import Cocost from 'src/assets/images/Cocost.jpg';
import Jhoanny from 'src/assets/images/Jhoanny.jpg';
import CedricJ from 'src/assets/images/CedricJ.jpg';
import Pierre from 'src/assets/images/Pierre.jpeg';
import './about.scss';

const About = () => (
  <main>
    <div className="about">
  
      <div className="container">
        <div className="about-intro">
          <h1>La génèse</h1>
          <p>L'été dernier, Yann, Product Owner, sillonait les plages de l'Atlantique, distribuant sourires et rafraichissements aux vacanciers profitant du généreux soleil sur leur serviette de plage.</p>
          <p>Pour accomplir cette mission et transporter glaces et boissons fraiches, il était contraint de tirer sur le sable une lourde charrette réfrigérée.</p>
          <p>C'est pendant la formation qu'a germé dans son esprit l'idée d'une application qui faciliterait son travail. L'utilisateur, depuis sa serviette, n'aurait qu'à faire sa commande sur son téléphone, pour qu'un livreur vienne ensuite la livrer à un point de rendez-vous proche de l'utilisateur.</p>
          <p>Pour mener à bien ce projet, l'équipe suivante à été mise en place.</p>
        </div>
  
        <div className="about-team">
          <h1>Les créateurs</h1>
          <div className="team-cards">
            <div className="team-card">
              <img className="team-picture" src={Yann} alt="Yann Demor" />
              <div className="team-person">
                <h2>Yann Demor</h2>
                <h3>Product Owner & dev front</h3>
                <p>Depuis ses 12 ans il chevauche des vagues, depuis 0'clock il surfe le web et dompte ses languages.</p>
                <p>Retrouvez-le ici : <a target="_blank" href="https://www.linkedin.com/in/yann-demor/"><Linkedin color="blue" size="1.5em"/></a></p>
              </div>
            </div>
    
            <div className="team-card">
              <img className="team-picture" src={Cocost} alt="Cédric Costard" />
              <div className="team-person">
                <h2>Cédric Costard</h2>
                <h3>Lead dev frontend</h3>
                <p>Armé de son plaid et de sa bonne humeur, il murmure à l'oreille de React et fait des merveilles en front.</p>
                <p>Retrouvez-le ici : <a target="_blank" href="https://www.linkedin.com/in/c%C3%A9dric-costard-473a38b2/"><Linkedin color="blue" size="1.5em"/></a></p>	 
              </div> 
            </div>
    
            <div className="team-card">
              <img className="team-picture" src={Jhoanny} alt="Jhoanny Apatout" />
              <div className="team-person">
                <h2>Jhoanny Apatout</h2>
                <h3>Git master & dev front</h3>
                <p>GitHub, git rebase, git merge, git stash, nommez-les, Jhoanny connaît cet univers sur le bout des doigts.</p>
                <p>Retrouvez-le ici : <a target="_blank" href="https://www.linkedin.com/in/jhoanny-apatout-517847200/"><Linkedin color="blue" size="1.5em"/></a></p>
              </div>
            </div>
    
            <div className="team-card">
              <img className="team-picture" src={CedricJ} alt="Cédric Costard" />
              <div className="team-person">
                <h2>Cédric Josso</h2>
                <h3>Lead dev backend</h3>
                <p>Il n'a pas son pareil pour l'apprentissage des languages, à un point tel que la légende raconte qu'il n'est pas de ce monde...</p>
                <p>Retrouvez-le ici : <a target="_blank" href="https://www.linkedin.com/in/cedric-josso/"><Linkedin color="blue" size="1.5em"/></a></p>
              </div>
            </div>
    
            <div className="team-card">
              <img className="team-picture" src={Pierre} alt="Pierre Ferré" />
              <div className="team-person">
                <h2>Pierre Ferré</h2>
                <h3>Scrum master & dev back</h3>
                <p>Il aime la programmation et la galette saucisse, c'est un fier breton, un breton dev.  </p>
                <p>Retrouvez-le ici : <a target="_blank" href="https://www.linkedin.com/in/pierre-ferre/"><Linkedin color="blue" size="1.5em"/></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </main>
);

export default About;
