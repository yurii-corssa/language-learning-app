import { SvgIcon } from "../ui";
import { FooterContainer, FooterLink, FooterSection } from "./Footer.styled";
import { FooterStyled, FooterText, FooterTitle, IconWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>About This Project</FooterTitle>
          <FooterText>
            LearnLingo was developed to demonstrate skills in building applications using React and
            Firebase.
          </FooterText>
          <FooterText>
            View Source Code on{" "}
            <FooterLink
              href="https://github.com/yurii-corssa/language-learning-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </FooterLink>
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Me</FooterTitle>
          <FooterLink
            href="mailto:yurii.corssa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            yurii.corssa@gmail.com
          </FooterLink>

          <FooterLink href="tel:+48517243808" target="_blank" rel="noopener noreferrer">
            +48 517 243 808
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Follow Me</FooterTitle>
          <IconWrapper>
            <FooterLink
              href="https://www.linkedin.com/in/yurii-tsyhanok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon name="icon-linkedin" width="22" height="22" />
            </FooterLink>
            <FooterLink
              href="https://github.com/yurii-corssa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon name="icon-github" width="22" height="22" />
            </FooterLink>
          </IconWrapper>
        </FooterSection>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
