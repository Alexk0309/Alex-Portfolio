import styled from "styled-components";
import { Title } from "../../components/typography/fonts";
import Card, { Experience } from "../../components/Card";
import { useQuery } from "react-query";
import { getExperiences } from "../../../api";

const Experience = () => {
  const { data } = useQuery({
    queryKey: ["get_experiences"],
    queryFn: () => getExperiences(),
  });

  const experiences = data?.results;

  return (
    <ExperienceContainer id="experience">
      <ExperienceTitleContainer>
        <ExperienceTitle>Work Experience</ExperienceTitle>
      </ExperienceTitleContainer>
      <ExperienceCardContainer>
        {experiences?.map((item: Experience, index: number) => {
          const { title, company, description, startDate, endDate, img, link } =
            item;
          return (
            <ExperienceCard
              key={index}
              img={img}
              title={title}
              company={company}
              description={description}
              startDate={startDate}
              endDate={endDate}
              link={link}
            />
          );
        })}
      </ExperienceCardContainer>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
`;

const ExperienceTitleContainer = styled.div`
  padding-top: 50px;
`;

const ExperienceTitle = styled(Title)`
  font-size: 100px;
`;

const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-content: center;
  padding-top: 20px;
`;

const ExperienceCard = styled(Card)``;
