import styled from "styled-components";
import { Title } from "../../components/typography/fonts";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsTitleContainer>
        <SkillsTitle>My Skills</SkillsTitle>
      </SkillsTitleContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  height: 900px;
  padding-top: 3%;
`;

const SkillsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillsTitle = styled(Title)`
  font-size: 80px;
`;
