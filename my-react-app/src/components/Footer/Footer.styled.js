import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const Branding = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
  text-align: center; /* Додано для центрування тексту */
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  display: block;
  margin: 0 auto;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-self: center; /* Додано для центрування */
  justify-content: center; /* Додано для центрування */
  margin-top: 10px; /* Додайте відступ, якщо потрібно */
`;

export const SocialLinkImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px; /* Додано для відступу між елементами */
`;

export const Copyright = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
  text-align: center; /* Додано для центрування тексту */
`;
