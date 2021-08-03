import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  img: string;
}

const Body = ({ className, img }: IProps) => {
  return (
    <div className={className} style={{ backgroundImage: `url(${img})` }}>
      {/* <img src={img} alt="" /> */}
    </div>
  );
};

const ImageModal = styled(Body)`
  position: fixed;
  top: 10vh;
  left: 20vw;
  width: 60vw;
  min-height: 60vh;
  max-height: 80vh;
  background-color: ${(props) => props.theme.colors.a};
  background-color: ${(props) => props.theme.colors.a + "95"};
  border: 5px solid ${(props) => props.theme.colors.a};
  background-repeat: no-repeat;
  background-position: center center;
  /* background-size: contain; */
  padding: 1rem;
  display: flex;
  /* text-align: center; */
  justify-content: center;
  align-items: center;

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    width: 100vw;
    max-height: 80vh;
    top: 0;
    left: 0;
    background-size: contain;
  }
`;

export default ImageModal;
