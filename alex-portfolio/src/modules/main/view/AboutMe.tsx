import styled from "styled-components";
import { Paragraph, Title } from "../../components/typography/fonts";
import profileImg from "../../../assets/images/Profile.jpeg";
import { StyledButton } from "../../components/Button";
import resume from "../../../assets/CheahKarSheng.pdf";

const AboutMe = () => {
  const downloadFile = async () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "AlexResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AboutMeContainer id="about-me">
      <ProfilePictureContainer>
        <ProfilePictureWrapper>
          <ProfilePicture src={profileImg} />
        </ProfilePictureWrapper>
      </ProfilePictureContainer>

      <ProfileDescriptionContainer>
        <ProfileDescriptionWrapper>
          <AboutMeTitleContainer>
            <AboutMeTitle>About me</AboutMeTitle>
          </AboutMeTitleContainer>

          <ProfileDescriptionBioContainer>
            <ProfileDescriptionBio>
              A computer science fresh graduate based in Kuala Lumpur, Malaysia.
              Armed with a keyboard, conjuring lines of code that dance to the
              rhythm of innovation while battling synxtax dragons or embarking
              on epic quests to find the perfect coffee blend.
            </ProfileDescriptionBio>
          </ProfileDescriptionBioContainer>

          <DownloadResumeButton onClick={downloadFile}>
            Download Resume
          </DownloadResumeButton>
        </ProfileDescriptionWrapper>
      </ProfileDescriptionContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 700px;

  align-items: center;
  padding-top: 10%;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100%;
  margin-bottom: 90px;
`;

const ProfilePictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;

  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 40px;
`;

const ProfileDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
  height: 100%;

  margin-bottom: 90px;
  align-items: center;
  padding: 0 10px 0 20px;
`;
const ProfileDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
`;

const ProfileDescriptionBioContainer = styled.div`
  display: flex;
  width: auto;

  align-items: center;
`;

const ProfileDescriptionBio = styled(Paragraph)`
  text-align: justify;
`;

const AboutMeTitleContainer = styled.div``;

const AboutMeTitle = styled(Title)`
  font-size: 100px;
`;

const DownloadResumeButton = styled(StyledButton)`
  margin-top: 50px;
`;
