import styled from "styled-components";
import { Title } from "../../components/typography/fonts";
import { Slide } from "react-awesome-reveal";
import "../../../index.css";
import ProjectsCard, { IProjects } from "../../components/ProjectsCard";
import { useQuery } from "react-query";
import { getProjects } from "../../../api";

const Projects = () => {
  const { data } = useQuery({
    queryKey: ["get_projects"],
    queryFn: () => getProjects(),
  });
  const projects = data?.results;
  return (
    <ProjectsContainer id="projects">
      <Slide triggerOnce>
        <ProjectsTitleContainer>
          <ProjectsTitle id="projects-title">
            <ProjectTitleSpan>{"<"}</ProjectTitleSpan>Projects 
            <ProjectTitleSpan>{" />"}</ProjectTitleSpan>
          </ProjectsTitle>
        </ProjectsTitleContainer>
        <ProjectsCardContainer id="card-container">
          {projects?.map((item: IProjects, index: number) => {
            const { img, title, info, description, link, tools } = item;
            return (
              <Card
                key={index}
                img={img}
                title={title}
                info={info}
                description={description}
                link={link}
                tools={tools}
              />
            );
          })}
        </ProjectsCardContainer>
      </Slide>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 7%;
  padding-bottom: 20%;
`;

const ProjectsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectsTitle = styled(Title)`
  font-size: 100px;
`;

const ProjectTitleSpan = styled.span`
  color: #8b8b8b;
`;

const ProjectsCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-content: center;
  padding-top: 20px;
`;

const Card = styled(ProjectsCard)``;
