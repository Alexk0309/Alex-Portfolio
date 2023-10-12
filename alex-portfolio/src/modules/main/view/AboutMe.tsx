import styled from "styled-components";
import {
  Paragraph,
  ParagraphLarge,
  Title,
} from "../../components/typography/fonts";
import profileImg from "../../../assets/images/profile.jpeg";
import { StyledButton } from "../../components/Button";
import resume from "../../../assets/CheahKarSheng.pdf";
import { Slide } from "react-awesome-reveal";
import { init } from "ityped";
import { useRef, useEffect } from "react";

const AboutMe = () => {
  const downloadFile = async () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "AlexResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Fresh Graduate",
        "Software Engineer",
        "Fullstack Engineer",
        "Frontend Engineer",
        "Backend Engineer",
      ],
    });
  }, []);

  return (
    <Slide direction="right" triggerOnce>
      <AboutMeContainer id="about-me">
        <ProfilePictureContainer id="profile-picture">
          <ProfilePictureWrapper>
            <ProfilePicture src={profileImg} />
          </ProfilePictureWrapper>
        </ProfilePictureContainer>

        <ProfileDescriptionContainer>
          <ProfileDescriptionWrapper id="profile-desc">
            <AboutMeTitleContainer>
              <ProfileDescriptionTitle id="about-me-title">
                Alex Cheah{" "}
              </ProfileDescriptionTitle>
              <ProfileDescription id="about-me-role">
                A <ProfileDescriptionTitleSpan ref={textRef} />
              </ProfileDescription>
            </AboutMeTitleContainer>

            <ProfileDescriptionBioContainer id="profile-desc-bio">
              <ProfileDescriptionBio>
                A computer science fresh graduate based in Kuala Lumpur,
                Malaysia. Armed with a keyboard, conjuring lines of code that
                dance to the rhythm of innovation while battling synxtax dragons
                or embarking on epic quests to find the perfect coffee blend.
              </ProfileDescriptionBio>
            </ProfileDescriptionBioContainer>

            <DownloadResumeButton onClick={downloadFile}>
              Download to know more
            </DownloadResumeButton>
          </ProfileDescriptionWrapper>
        </ProfileDescriptionContainer>
      </AboutMeContainer>
    </Slide>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 700px;

  align-items: center;
  padding-top: 5px;
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
  margin-bottom: 50px;
  border-radius: 50px;
  box-shadow: 15px 15px 40px 1px #a782ff;
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

const DownloadResumeButton = styled(StyledButton)`
  margin-top: 50px;
`;

const ProfileDescriptionTitle = styled(Title)`
  font-size: 100px;
  padding-bottom: 10px;
`;

const ProfileDescriptionTitleSpan = styled.span`
  color: #a782ff;
`;

const ProfileDescription = styled(ParagraphLarge)``;
