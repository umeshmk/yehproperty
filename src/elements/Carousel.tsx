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
        setCurrent(current + 1);
        // console.log(current, "-->", current + 1);
      }
      if (slide === "prev" && current > 0) {
        div.style.marginLeft = `-${current - 1}00%`;
        setCurrent(current - 1);
        // console.log(current - 1, "<--", current);
      }
    }
  };

  return (
    <div className={className}>
      <div className="imageList" ref={ref} data-current={current}>
        {imageList.map((i, k) => {
          return <Image src={i} key={k} />;
        })}
      </div>

      {current > 0 && (
        <ButtonSlide className="left" data-slide="prev" onClick={handleSlide}>
          <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
          {/* <i className="fa  fa-long-arrow-alt-left" aria-hidden="true"></i> */}
        </ButtonSlide>
      )}
      {current < imageList.length - 1 && (
        <ButtonSlide className="right" data-slide="next" onClick={handleSlide}>
          <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </ButtonSlide>
      )}
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
