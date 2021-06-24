import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  img: string;
}

const Body = ({ className, img }: IProps) => {
  return (
    <div className={className}>
      <img src={img} alt="" />
    </div>
  );
};

const ImageModal = styled(Body)`
  position: fixed;
  top: 10vh;
  left: 20vw;
  width: 60vw;
  background-color: ${(props) => props.theme.colors.a};
  padding: 1rem;
`;

export default ImageModal;
