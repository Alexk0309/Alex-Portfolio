import styled from "styled-components";
import {
  ParagraphLarge,
  Title,
  Title2,
} from "../../components/typography/fonts";
import { StyledButton } from "../../components/Button";
import VideoBG from "../../components/VideoBg";

const Home = () => {
  return (
    <>
      <VideoBG />
      <HomeContainer>
        <ProfileDescriptionContainer>
          <ProfileDescriptionWrapper>
            <ProfileDescriptionIntro>Hi There, I'm</ProfileDescriptionIntro>
            <ProfileDescriptionTitle>Alex Cheah</ProfileDescriptionTitle>
            <ProfileDescription>Software Engineer</ProfileDescription>
            <FindOutMoreButton>Find Out More</FindOutMoreButton>
          </ProfileDescriptionWrapper>
        </ProfileDescriptionContainer>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 800px;
`;

const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  margin-bottom: 100px;
  width: 50%;
`;

const ProfileDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileDescriptionIntro = styled(Title2)``;

const ProfileDescriptionTitle = styled(Title)``;

const ProfileDescription = styled(ParagraphLarge)``;

const FindOutMoreButton = styled(StyledButton)`
  margin-top: 50px;
`;
