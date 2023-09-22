import styled from "styled-components";
import {
  ParagraphLarge,
  Title,
  Title2,
} from "../../components/typography/fonts";
import { StyledButton } from "../../components/Button";
import VideoBG from "../../components/VideoBg";
import "../../../index.css";

const Home = () => {
  const findOutMore = () => {
    const link = document.createElement("a");
    link.href = "#about-me";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <VideoBG />
      <HomeContainer>
        <ProfileDescriptionContainer>
          <ProfileDescriptionWrapper>
            <ProfileDescriptionIntro>Hi There, I'm</ProfileDescriptionIntro>
            <ProfileDescriptionTitle id="home-name">Alex Cheah</ProfileDescriptionTitle>
            <ProfileDescription id="home-role">Software Engineer</ProfileDescription>
            <FindOutMoreButton onClick={findOutMore}>
              Find Out More
            </FindOutMoreButton>
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
