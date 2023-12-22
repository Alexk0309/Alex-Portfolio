import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import "../../../index.css";
import ProjectsCard, { IProjects } from "../../components/ProjectsCard";
import { useQuery } from "react-query";
import { getProjects } from "../../../api";
import SectionTitle from "../../components/SectionTitle";

const Projects = () => {
  const { data } = useQuery({
    queryKey: ["get_projects"],
    queryFn: () => getProjects(),
  });
  const projects = data?.results;
  return (
    <ProjectsContainer id="projects">
      <Slide triggerOnce>
        <SectionTitle>Projects</SectionTitle>
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

const ProjectsCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-content: center;
  padding-top: 20px;
`;

const Card = styled(ProjectsCard)``;
