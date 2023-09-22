import styled from "styled-components";
import { Title } from "../../components/typography/fonts";
import { Slide } from "react-awesome-reveal";
import "../../../index.css";
import ProjectsCard, { Projects } from "../../components/ProjectsCard";
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
          <ProjectsTitle id="projects-title">Projects</ProjectsTitle>
        </ProjectsTitleContainer>
        <ProjectsCardContainer id="card-container">
          {projects?.map((item: Projects, index: number) => {
            const { img, title, info, description, link } = item;
            return (
              <Card
                key={index}
                img={img}
                title={title}
                info={info}
                description={description}
                link={link}
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
  background-color: #111010;
`;

const ProjectsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectsTitle = styled(Title)`
  font-size: 100px;
`;

const ProjectsCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-content: center;
  padding-top: 20px;
`;

const Card = styled(ProjectsCard)``;
