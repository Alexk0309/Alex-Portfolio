import { FC, useState } from "react";
import styled from "styled-components";
import { Paragraph } from "./typography/fonts";

export interface Projects {
  img: string;
  title: string;
  info: string;
  description: string;
  link?: string;
}

const ProjectsCard: FC<Projects> = (props) => {
  const { img, title, info, description, link } = props;

  const [showContent, setShowContent] = useState(false);

  const handleShow = () => {
    setShowContent(!showContent);
  };

  return (
    <CardContainer>
      <CardHeader onClick={handleShow}>
        <CardImageWrapper>
          <CardImage src={img} alt={title} />
        </CardImageWrapper>

        <CardInfo>
          <CardTitle>
            <CardTitleText>{title}</CardTitleText>
          </CardTitle>
          <CardInfoTextWrapper>
            <CardInfoText>{info}</CardInfoText>
          </CardInfoTextWrapper>
        </CardInfo>
      </CardHeader>
      <CardBody $showContent={showContent}>
        <CardDescriptionWrapper>
          <CardDescriptionText>{description}</CardDescriptionText>
        </CardDescriptionWrapper>
        <LearnMoreLinkWrapper>
          <LearnMoreLink href={link} target="_blank">
            Learn more
          </LearnMoreLink>
        </LearnMoreLinkWrapper>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectsCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;

  background-color: #2d2727;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
`;

const CardImage = styled.img`
  width: 100px;
  border-radius: 50px;
`;

const CardTitle = styled.div``;

const CardTitleText = styled(Paragraph)`
  margin: 0;
`;

const CardInfoTextWrapper = styled.div``;

const CardInfoText = styled.p`
  margin: 0;
  color: #bc9fff;
`;

const CardBody = styled.div<{ $showContent?: boolean }>`
  display: block;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 10px;

  background-color: #2d2727;

  max-height: ${({ $showContent }) => ($showContent ? "500px" : 0)};
  bottom: 7px;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const CardDescriptionWrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: 30px;
`;

const CardDescriptionText = styled(Paragraph)`
  font-size: 17px;
  word-wrap: break-word;
  margin: 0;
  margin-right: 10px;
`;

const LearnMoreLinkWrapper = styled.div`
  display: flex;
  width: 95%;
  margin-top: 10px;
  justify-content: end;
`;

const LearnMoreLink = styled.a`
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: #a782ff;
  }
`;
