import {
  MainStyled,
  SectionStyled,
  TextStyled,
  TitleStyled,
} from "./Main.styled";

export const Main = () => {
  return (
    <MainStyled>
      <SectionStyled>
        <TitleStyled>
          <TextStyled className="leftside slide-in-left">HELLO</TextStyled>
          <TextStyled className="rightside slide-in-right">WORLD!</TextStyled>
        </TitleStyled>
      </SectionStyled>
    </MainStyled>
  );
};
