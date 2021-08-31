import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Navbar from "../../components/Navbar";
import CardContainer from "../../components/CardContainer";
import SkillsCard from "../../components/SkillsCard";
import { clientSide, serverSide, testing } from "../../utils/skillsData";

function SkillsPage(props) {
  return (
    <div>
      <Navbar />
      <Header padding={70} title='Technical Skills' />
      <CardContainer>
        <div
          className='uk-child-width-1-3@m uk-grid-match'
          uk-grid='true'
          uk-scrollspy='cls: uk-animation-fade target: .uk-card; delay: 250; repeat: true'
          id='skills-section'
        >
          <SkillsCard
            skills={clientSide}
            title='Client Side'
            icon='desktop'
            name='client'
          />
          <SkillsCard
            skills={serverSide}
            title='Server Side'
            icon='server'
            name='server'
          />
          <SkillsCard
            skills={testing}
            title='Testing'
            icon='nut'
            name='Testing'
          />
        </div>
      </CardContainer>
    </div>
  );
}
export default SkillsPage;