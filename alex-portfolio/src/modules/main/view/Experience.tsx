import styled from "styled-components";
import ExperienceCard, { IExperience } from "../../components/ExperienceCard";
import { useQuery } from "react-query";
import { getExperiences } from "../../../api";
import { Slide } from "react-awesome-reveal";
import "../../../index.css";
import SectionTitle from "../../components/SectionTitle";

const Experience = () => {
  const { data } = useQuery({
    queryKey: ["get_experiences"],
    queryFn: () => getExperiences(),
  });

  const experiences = data?.results;

  return (
    <Slide direction="right" triggerOnce>
      <ExperienceContainer id="experience">
        <SectionTitle>Experience</SectionTitle>
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
              tools,
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
  padding-top: 7%;
  padding-bottom: 20%;
  height: fit-content;
`;

const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-content: center;
  padding-top: 20px;
`;

const Card = styled(ExperienceCard)``;
