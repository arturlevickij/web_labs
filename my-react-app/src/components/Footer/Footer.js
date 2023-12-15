import React from 'react';
import { FooterContainer, Branding, Logo, SocialLinks, SocialLinkImage, Copyright } from './Footer.styled';
import LogoImage from '../Photos/logo.svg';
import FacebookIcon from '../Photos/facebook-icon.svg';
import TwitterIcon from '../Photos/twitter-icon.svg';
import InstagramIcon from '../Photos/instagram-icon.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Branding>Take stone for your soul</Branding>
      <Logo src={LogoImage} alt="logo" />
      <SocialLinks>
        <SocialLinkImage src={FacebookIcon} alt="facebook" />
        <SocialLinkImage src={TwitterIcon} alt="twitter" />
        <SocialLinkImage src={InstagramIcon} alt="instagram" />
      </SocialLinks>
      <Copyright>IOT 2023 © All rights reserved</Copyright>
    </FooterContainer>
  );
};

export default Footer;
