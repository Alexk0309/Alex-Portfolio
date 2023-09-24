import styled from "styled-components";
import "../../../index.css";
import { Paragraph } from "../../components/typography/fonts";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterLinkContainer>
        <FooterLinkWrapper>
          <FooterLink
            href="https://www.linkedin.com/in/cheah-kar-sheng-33299a1b9/"
            target="_blank"
          >
            <FooterLinkImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOMuPFlMZuHj0sjNPVOdo-V0TCwnAmjWuIQ&usqp=CAU" />
          </FooterLink>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLink href="https://github.com/Alexk0309" target="_blank">
            <FooterLinkImg src="https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg" />
          </FooterLink>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLink href="mailto: karshengcheah@gmail.com?subject=Contact%20From%20Portfolio%20Website">
            <FooterLinkImg src="data:image/png;base64,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" />
          </FooterLink>
        </FooterLinkWrapper>
      </FooterLinkContainer>
      <FooterText>Copyright @Alex Cheah 2023</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const FooterLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const FooterLinkImg = styled.img`
  width: 80px;
  border-radius: 50px;
`;

const FooterLink = styled.a``;

const FooterText = styled(Paragraph)``;
