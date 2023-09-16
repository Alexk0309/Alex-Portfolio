import { FC } from "react";
import styled from "styled-components";
import { Paragraph } from "./typography/fonts";

interface CardProps {
  img: string;
  title: string;
  company: string;
  desc: string;
}

const Card: FC<CardProps> = (props) => {
  const { img, title, company, desc } = props;
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={img} alt={title} />
      </CardImageWrapper>
      <CardExperience>
        <CardTitle>
          <CardTitleText>{title}</CardTitleText>
        </CardTitle>
        <CardCompany>
          <CardCompanyText>@{company}</CardCompanyText>
        </CardCompany>
        <CardCompanyDurationWrapper>
          <CardCompanyDurationText>2022-2023</CardCompanyDurationText>
        </CardCompanyDurationWrapper>
        <CardDescriptionWrapper>
          <CardDescriptionText>{desc}</CardDescriptionText>
        </CardDescriptionWrapper>
      </CardExperience>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  width: 20%;
  background-color: #1c1c1c;
  &:hover {
    background-color: #3a3a3a;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const CardImageWrapper = styled.div``;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px 10px 0 0;
`;

const CardExperience = styled.div`
  padding: 10px;
`;

const CardTitle = styled.div``;

const CardTitleText = styled(Paragraph)`
  margin: 0;
`;

const CardCompany = styled.div``;

const CardCompanyText = styled(Paragraph)`
  margin: 0;
`;

const CardCompanyDurationWrapper = styled.div`
`;

const CardCompanyDurationText = styled.p`
  margin: 0;
`;

const CardDescriptionWrapper = styled.div``;

const CardDescriptionText = styled(Paragraph)`
  font-size: 17px;
  word-wrap: break-word;
`;
