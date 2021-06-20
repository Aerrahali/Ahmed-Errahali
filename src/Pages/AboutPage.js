import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"100%"} width={"100%"} />
        <SkillsSection
          skill={"Adobe Package"}
          progress={"100%"}
          width={"100%"}
        />
        <SkillsSection skill={"React"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Vue"} progress={"80%"} width={"80%"} />
        <SkillsSection
          skill={"APP development"}
          progress={"100%"}
          width={"100%"}
        />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"CSS"} progress={"100%"} width={"100%"} />
        <SkillsSection skill={"HTML"} progress={"100%"} width={"100%"} />
        <SkillsSection
          skill={"Graphic design"}
          progress={"100%"}
          width={"100%"}
        />
        <SkillsSection skill={"CMS"} progress={"100%"} width={"100%"} />
        <SkillsSection skill={"Web Design"} progress={"100%"} width={"100%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"80%"} width={"80%"} />
      </div>

      <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={
            "Design and programming of web pages from scratch, database management, git versions and servers. I also use CMS like Wordpres, Prestasshop, Drupal among others."
          }
        />
        <ServicesSection
          image={intelligence}
          title={"App development"}
          text={
            "Development of native applications for Android and iOS platforms, hybrid applications, PWA. Use of Express, Firebase, MongoDB, and other data warehousing service platforms."
          }
        />
        <ServicesSection
          image={gamedev}
          title={"Graphic design"}
          text={
            "Creation of all kinds of graphic elements such as logos, illustrations, photomontages, posters, newsletters, banners, brands, and much more."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
