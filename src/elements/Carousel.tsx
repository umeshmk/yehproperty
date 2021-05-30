import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IStyled } from "../types";

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  color: ${(props) => props.theme.colors.a};
  background-color: ${(props) => props.theme.colors.c};
  font-size: ${(props) => props.theme.size.h4};
  z-index: 10;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    /* filter: brightness(110%); */
  }
  &:active {
    opacity: 1;
    filter: brightness(90%);
  }
`;

const Image = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;

const imageList = [
  "https://picsum.photos/500/300?random=1",
  "https://picsum.photos/500/300?random=2",
  "https://picsum.photos/500/300?random=3",
  "https://picsum.photos/500/300?random=4",
];

const Body = ({ className }: IStyled) => {
  const [current, setCurrent] = useState(0);
  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {}, []);

  const handleSlide = (e: React.SyntheticEvent<HTMLElement>) => {
    const imageListDiv = ref.current;
    const { slide } = e.currentTarget.dataset;

    if (imageListDiv) {
      if (slide === "next" && current < imageList.length - 1) {
        imageListDiv.style.marginLeft = `-${current + 1}00%`;
        console.log(slide, imageListDiv.style.marginLeft);
        setCurrent(current + 1);
        console.log(current, "-->", current + 1);
      }
      if (slide === "prev" && current > 0) {
        imageListDiv.style.marginLeft = `-${current - 1}00%`;
        console.log(slide, imageListDiv.style.marginLeft);
        setCurrent(current - 1);
        console.log(current - 1, "<--", current);
      }
    }
  };

  return (
    <div className={className}>
      {/* <h1>carousel</h1> */}
      <div className="imageList" ref={ref} data-current={current}>
        {imageList.map((i, k) => {
          return <Image src={i} data-id={k} key={k} />;
        })}
      </div>
      <Button className="left" data-slide="prev" onClick={handleSlide}>
        <span className="fa fa-chevron-circle-left" aria-hidden="true"></span>
      </Button>
      <Button className="right" data-slide="next" onClick={handleSlide}>
        <span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
      </Button>
    </div>
  );
};

const Carousel = styled(Body)`
  position: relative;
  top: 0;
  border: 1px solid;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  & .right {
    right: 0;
  }

  & .imageList {
    /* position: absolute; */
    display: flex;
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in;
    /* justify-content: center; */
  }
`;

export default Carousel;
