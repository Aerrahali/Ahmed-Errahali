import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Adobe Package'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'React'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Vue'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'APP development'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'HTML'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'CMS'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Web Design'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'80%'} width={'80%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'App development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Graphic design'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />


            </div>

        </div>
    )
}

export default AboutPage;
