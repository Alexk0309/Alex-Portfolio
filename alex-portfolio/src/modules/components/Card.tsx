import { FC, useState } from "react";
import styled from "styled-components";
import { Paragraph } from "./typography/fonts";

interface CardProps {
  img: string;
  title: string;
  company: string;
  desc: string;
  startDate: string;
  endDate: string;
}

const Card: FC<CardProps> = (props) => {
  const { img, title, company, desc, startDate, endDate } = props;

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
              {startDate}-{endDate}
            </CardCompanyDurationText>
          </CardCompanyDurationWrapper>
        </CardInfo>
      </CardHeader>
      <CardBody $showContent={showContent}>
        <CardDescriptionWrapper>
          <CardDescriptionText>{desc}</CardDescriptionText>
        </CardDescriptionWrapper>
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
  padding: 10px 10px 20px 10px;
  border-radius: 10px;

  background-color: #1c1c1c;

  transition: all 0.2s;

  &:hover {
    background-color: #3a3a3a;
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
  margin: 0;
`;

const CardBody = styled.div<{ $showContent?: boolean }>`
  display: block;
  position: relative;
  bottom: 7px;
  display: ${({ $showContent }) => ($showContent ? "flex" : "none")};
  justify-content: center;
  padding: 10px;
  border-radius: 0 0 10px 10px;

  background-color: #1c1c1c;
`;

const CardDescriptionWrapper = styled.div`
  width: 90%;
`;

const CardDescriptionText = styled(Paragraph)`
  font-size: 17px;
  word-wrap: break-word;
  margin: 0;
`;
