import styled from "styled-components";
import { IStyled } from "../../types";
import bg from "./img/bg3.jpg";
import Search from "./Search";

const Direction = styled.div`
  font-size: ${(props) => props.theme.size.h1};
  font-family: ${(props) => props.theme.family.c};
  font-weight: 100;
  color: ${(props) => props.theme.colors.c};
  z-index: 10;
  padding: 0 5rem;

  & span {
    font-family: ${(props) => props.theme.family.c};
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    padding: 0.5rem;
  }
`;

const body = ({ className }: IStyled) => {
  return (
    <header className={className}>
      <Direction>
        Get directions to your new
        <span> Home</span>
      </Direction>
      <Search />
    </header>
  );
};

const Header = styled(body)`
  min-height: 100vh;
  background-image: url(${bg});
  background-position: 0 30%;
  box-shadow: inset 0 -50em 100em ${(props) => props.theme.colors.a + "99"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
`;

export default Header;
