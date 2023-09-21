import { FC, useState } from "react";
import styled from "styled-components";
import { Paragraph } from "./typography/fonts";

export interface Experience {
  img: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
}

const Card: FC<Experience> = (props) => {
  const { img, title, company, description, startDate, endDate, link } = props;

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
          <CardCompany>
            <CardCompanyText>@{company}</CardCompanyText>
          </CardCompany>
          <CardCompanyDurationWrapper>
            <CardCompanyDurationText>
              {startDate} - {endDate}
            </CardCompanyDurationText>
          </CardCompanyDurationWrapper>
        </CardInfo>
      </CardHeader>
      <CardBody $showContent={showContent}>
        <CardDescriptionWrapper>
          <CardDescriptionText>{description}</CardDescriptionText>
        </CardDescriptionWrapper>
        <LearnMoreLinkWrapper>
          <LearnMoreLink href={link}>Learn more</LearnMoreLink>
        </LearnMoreLinkWrapper>
      </CardBody>
    </CardContainer>
  );
};

export default Card;

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

  background-color: #1c1c1c;

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

const CardCompany = styled.div``;

const CardCompanyText = styled(Paragraph)`
  margin: 0;
`;

const CardCompanyDurationWrapper = styled.div``;

const CardCompanyDurationText = styled.p`
  font-style: italic;
  margin: 0;
`;

const CardBody = styled.div<{ $showContent?: boolean }>`
  display: block;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 10px;

  background-color: #1c1c1c;

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
    color: #c9c9c9;
  }
`;
