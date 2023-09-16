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
        />
      </ExperienceCardContainer>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
`;

const ExperienceTitleContainer = styled.div`
  padding-top: 50px;
`;

const ExperienceTitle = styled(Title)`
  margin-left: 50px;
`;

const ExperienceCardContainer = styled.div`
  padding: 20px 20px 20px 60px;
`;

const ExperienceCard = styled(Card)``;
