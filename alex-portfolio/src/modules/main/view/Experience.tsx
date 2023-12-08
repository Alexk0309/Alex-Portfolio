import styled from "styled-components";
import { Title } from "../../components/typography/fonts";
import ExperienceCard, { IExperience } from "../../components/ExperienceCard";
import { useQuery } from "react-query";
import { getExperiences } from "../../../api";
import { Slide } from "react-awesome-reveal";
import "../../../index.css";

const Experience = () => {
  const { data } = useQuery({
    queryKey: ["get_experiences"],
    queryFn: () => getExperiences(),
  });

  const experiences = data?.results;

  return (
    <Slide direction="right" triggerOnce>
      <ExperienceContainer id="experience">
        <ExperienceTitleContainer>
          <ExperienceTitle id="experience-title">
            <ExperienceTitleSpan>{"<"}</ExperienceTitleSpan>Experience
            <ExperienceTitleSpan>{" />"}</ExperienceTitleSpan>
          </ExperienceTitle>
        </ExperienceTitleContainer>
        <ExperienceCardContainer id="card-container">
          {experiences?.map((item: IExperience, index: number) => {
            const {
              title,
              company,
              description,
              startDate,
              endDate,
              img,
              link,
              tools
            } = item;
            return (
              <Card
                key={index}
                img={img}
                title={title}
                company={company}
                description={description}
                startDate={startDate}
                endDate={endDate}
                link={link}
                tools={tools}
              />
            );
          })}
        </ExperienceCardContainer>
      </ExperienceContainer>
    </Slide>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  height: 800px;
`;

const ExperienceTitleContainer = styled.div`
  padding-top: 50px;
`;

const ExperienceTitle = styled(Title)`
  font-size: 100px;
`;

const ExperienceTitleSpan = styled.span`
  color: #8b8b8b;
`;

const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-content: center;
  padding-top: 20px;
`;

const Card = styled(ExperienceCard)``;
