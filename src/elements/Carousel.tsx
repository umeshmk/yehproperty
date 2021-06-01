import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonSlide } from ".";
import { IStyled } from "../types";

interface IProps extends IStyled {
  imageList: string[];
}

const Image = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;

const Body = ({ className, imageList }: IProps) => {
  const [current, setCurrent] = useState(0);
  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    let div = ref.current;

    setCurrent(0);

    if (div) {
      div.style.transition = "none";
      div.style.marginLeft = "0";
      setTimeout(() => {
        if (div) div.style.transition = "all 500ms ease-in";
      }, 100);
    }
  }, [imageList]);

  const handleSlide = (e: React.SyntheticEvent<HTMLElement>) => {
    const div = ref.current;
    const { slide } = e.currentTarget.dataset;

    if (div) {
      if (slide === "next" && current < imageList.length - 1) {
        div.style.marginLeft = `-${current + 1}00%`;
        // console.log(slide, div.style.marginLeft);
        setCurrent(current + 1);
        // console.log(current, "-->", current + 1);
      }
      if (slide === "prev" && current > 0) {
        div.style.marginLeft = `-${current - 1}00%`;
        // console.log(slide, div.style.marginLeft);
        setCurrent(current - 1);
        // console.log(current - 1, "<--", current);
      }
    }
  };

  return (
    <div className={className}>
      <div className="imageList" ref={ref} data-current={current}>
        {imageList.map((i, k) => {
          return <Image src={i} data-id={k} key={k} />;
        })}
      </div>
      <ButtonSlide className="left" data-slide="prev" onClick={handleSlide}>
        <span className="fa fa-chevron-circle-left" aria-hidden="true"></span>
      </ButtonSlide>
      <ButtonSlide className="right" data-slide="next" onClick={handleSlide}>
        <span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
      </ButtonSlide>
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
