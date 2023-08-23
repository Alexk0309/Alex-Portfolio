import styled from "styled-components";
import {
  Paragraph,
  ParagraphLarge,
  Title,
  Title2,
} from "../../components/typography/fonts";
import { StyledButton } from "../../components/Button";
import VideoBG from "../../components/VideoBg";

const AboutMe = () => {
  return (
    <>
      <VideoBG />
      <AboutMeContainer>
        <ProfileDescriptionContainer>
          <ProfileDescriptionWrapper>
            <ProfileDescriptionIntro>Hi There, I'm</ProfileDescriptionIntro>
            <ProfileDescriptionTitle>Alex Cheah</ProfileDescriptionTitle>

            <ProfileDescription>A Junior Software Engineer</ProfileDescription>

            <ProfileDescriptionBioContainer>
              <ProfileDescriptionBio>
                A computer science fresh graduate based in Kuala Lumpur,
                Malaysia. Armed with a keyboard, conjuring lines of code that
                dance to the rhythm of innovation while battling synxtax dragons
                or embarking on epic quests to find the perfect coffee blend.
              </ProfileDescriptionBio>
            </ProfileDescriptionBioContainer>

            <DownloadResumeButton>Find Out More</DownloadResumeButton>
          </ProfileDescriptionWrapper>
        </ProfileDescriptionContainer>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
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

const ProfileDescriptionBioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: auto;
`;

const ProfileDescriptionBio = styled(Paragraph)`
  text-align: justify;
`;

const DownloadResumeButton = styled(StyledButton)`
  margin-top: 50px;
`;
