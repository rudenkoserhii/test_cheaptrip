import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;

  background: #ff5722;
  color: #fff;

  height: 56px;

  @media screen and (min-width: 360px) {
  }

  @media screen and (min-width: 600px) {
    height: 64px;
  }

  @media screen and (min-width: 960px) {
  }
`;

export const LinkStyled = styled.a`
  display: block;

  margin-left: 15px;

  font-size: 26px;
  line-height: 0.8;
  font-weight: 700;
  font-style: italic;
  @media screen and (min-width: 360px) {
    font-size: 36px;
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 960px) {
    font-size: 56px;
  }
`;

export const TextStyled = styled.p`
  display: block;

  margin-left: 15%;

  font-size: 12px;
  line-height: 0.8;
  font-weight: 700;
  font-style: italic;
  @media screen and (min-width: 360px) {
    font-size: 16px;
  }

  @media screen and (min-width: 600px) {
    font-size: 24px;
  }

  @media screen and (min-width: 960px) {
    font-size: 32px;
  }
`;
