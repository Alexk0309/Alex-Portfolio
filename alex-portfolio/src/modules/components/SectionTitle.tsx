import styled from "styled-components";
import { Title } from "./typography/fonts";
import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <SectionTitleContainer>
      <SectionTitleText id="experience-title">
        <SectionTitleSpan>{"<"}</SectionTitleSpan>
        {children}
        <SectionTitleSpan>{" />"}</SectionTitleSpan>
      </SectionTitleText>
    </SectionTitleContainer>
  );
};

export default SectionTitle;

const SectionTitleContainer = styled.div`
  padding-top: 50px;
`;

const SectionTitleText = styled(Title)`
  font-size: 100px;
`;

const SectionTitleSpan = styled.span`
  color: #8b8b8b;
`;
