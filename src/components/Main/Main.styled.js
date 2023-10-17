import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 56px);
  @media screen and (min-width: 360px) {
  }

  @media screen and (min-width: 600px) {
    height: calc(100vh - 64px);
  }

  @media screen and (min-width: 960px) {
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 360px) {
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 960px) {
  }
`;

export const TitleStyled = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 360px) {
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 960px) {
  }
`;

export const TextStyled = styled.span`
  font-family: "Oswald";
  font-size: 56px;
  font-weight: 700;
  font-style: italic;
  line-height: 0.8;
  letter-spacing: 0.8rem;

  @media screen and (min-width: 360px) {
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 960px) {
  }

  &.leftside {
    margin-right: 200px;
    color: #498c9d;
  }

  &.rightside {
    color: #e6700d;
  }
`;
