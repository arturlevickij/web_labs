import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
img {
  width: 50px;
  height: auto;
}
`;

export const Nav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  .Nav {
    display: flex;
  }

  .nav-element {
    margin: 0 30px;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .selected {
    font-weight: bold;
  }
`;


