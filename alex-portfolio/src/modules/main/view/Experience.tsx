import styled from "styled-components";
import { Title } from "../../components/typography/fonts";
import Card from "../../components/Card";

const Experience = () => {

  return (
    <ExperienceContainer>
      <ExperienceTitleContainer>
        <ExperienceTitle>Work Experience</ExperienceTitle>
      </ExperienceTitleContainer>
      <ExperienceCardContainer>
        <ExperienceCard
          img="https://yt3.googleusercontent.com/yjmt_YIUEIyBdjmtxxybh1qHi7hWQRWBVcoAYjXBId0Tu2T2WclKtHhdrLA01xVArJDbBapC=s900-c-k-c0x00ffffff-no-rj"
          title="Mobile Engineer Intern"
          company="MoneyLion"
          desc="I worked here before lol dfiwndiw nownwofnofnwofnwo fwiofwoifnofno o fwoif oiwnfoiwnfow"
          startDate="2022"
          endDate="2023"
        />
        <ExperienceCard
          img="https://yt3.googleusercontent.com/yjmt_YIUEIyBdjmtxxybh1qHi7hWQRWBVcoAYjXBId0Tu2T2WclKtHhdrLA01xVArJDbBapC=s900-c-k-c0x00ffffff-no-rj"
          title="Mobile Engineer Intern"
          company="MoneyLion"
          desc="I worked here before lol dfiwndiw nownwofnofnwofnwo fwiofwoifnofno o fwoif oiwnfoiwnfow"
          startDate="2022"
          endDate="2023"
        />
        <ExperienceCard
          img="https://yt3.googleusercontent.com/yjmt_YIUEIyBdjmtxxybh1qHi7hWQRWBVcoAYjXBId0Tu2T2WclKtHhdrLA01xVArJDbBapC=s900-c-k-c0x00ffffff-no-rj"
          title="Mobile Engineer Intern"
          company="MoneyLion"
          desc="I worked here before lol dfiwndiw nownwofnofnwofnwo fwiofwoifnofno o fwoif oiwnfoiwnfow"
          startDate="2022"
          endDate="2023"
        />
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
