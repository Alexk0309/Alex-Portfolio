import { FC, useState } from "react";
import styled from "styled-components";
import { Paragraph } from "./typography/fonts";

export interface IProjects {
  img: string;
  title: string;
  info: string;
  description: string;
  link?: string;
  tools: string;
}

const ProjectsCard: FC<IProjects> = (props) => {
  const { img, title, info, description, link, tools } = props;
  const toolsArr = tools.split(",");
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

        <CardToolsContainer>
          {toolsArr.map((tool) => {
            return (
              <CardToolWrapper>
                <CardTool>{tool}</CardTool>
              </CardToolWrapper>
            );
          })}
        </CardToolsContainer>

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

  background-color: rgb(49, 48, 77);

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

  background-color: rgb(49, 48, 77);

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

export const CardToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 25px;
  gap: 8px;
`;

export const CardToolWrapper = styled.div`
  width: fit-content;
  margin-top: 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 10%;
  background-color: rgba(40, 39, 64, 0.695);

  &:hover {
    cursor: pointer;
    background-color: rgba(60, 59, 98, 0.777);
  }
`;

export const CardTool = styled.p`
  margin: 0;
  color: #ffffff;
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
