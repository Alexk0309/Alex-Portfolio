import styled from "styled-components";
import profile from "../../../assets/images/profile.jpeg";
import {
  Paragraph,
  ParagraphLarge,
  Title,
  Title2,
} from "../../components/typography/fonts";
import { StyledButton } from "../../components/Button";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={profile} alt="profile" />
        </ProfileImageContainer>
      </ProfileContainer>

      <ProfileDescriptionContainer>
        <ProfileDescriptionWrapper>
          <ProfileDescriptionIntro>Hi There, I'm</ProfileDescriptionIntro>
          <ProfileDescriptionTitle>
            Alex Cheah Kar Sheng
          </ProfileDescriptionTitle>

          <ProfileDescription>
            A Junior{" "}
            <ProfileDescriptionHighlight>
              Software Engineer
            </ProfileDescriptionHighlight>
          </ProfileDescription>

          <ProfileDescriptionBioContainer>
            <ProfileDescriptionBio>
              I am a fresh graduate student from Sunway University, Malaysia.
              Armed with a keyboard, conjuring lines of code that dance to the
              rhythm of innovation while battling synxtax dragons or embarking
              on epic quests to find the perfect coffee blend.
            </ProfileDescriptionBio>
          </ProfileDescriptionBioContainer>

          <DownloadResumeButton>Download Resume</DownloadResumeButton>
        </ProfileDescriptionWrapper>
      </ProfileDescriptionContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

const ProfileImage = styled.img`
  width: 100%;
  margin-bottom: 50px;
  border-radius: 50px;
  box-shadow: 15px 15px 40px 1px #a782ff;
`;

const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  margin-bottom: 100px;
  width: 50%;
`;

const ProfileDescriptionWrapper = styled.div``;

const ProfileDescriptionIntro = styled(Title2)``;

const ProfileDescriptionTitle = styled(Title)``;

const ProfileDescription = styled(ParagraphLarge)``;

const ProfileDescriptionHighlight = styled.span`
  color: #a782ff;
`;

const ProfileDescriptionBioContainer = styled.div`
  margin-top: 50px;
  width: 600px;
`;

const ProfileDescriptionBio = styled(Paragraph)`
  text-align: justify;
`;

const DownloadResumeButton = styled(StyledButton)`
  margin-top: 50px;
`;
