import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonSlide } from ".";
import { IStyled } from "../types";

interface IProps extends IStyled {
  imageList: string[];
  activeImg: number;
}

const Body = ({ className, imageList, activeImg }: IProps) => {
  const [current, setCurrent] = useState(activeImg);
  const ref = React.createRef<HTMLDivElement>();

  console.log(current);

  useEffect(() => {
    let div = ref.current;
    let margin = current === 0 ? "0" : `-${current}00%`;

    if (div) {
      div.style.transition = "none";
      div.style.marginLeft = margin;
      setTimeout(() => {
        if (div) {
          div.style.transition = "all 500ms ease-in";
          console.log("timeout");
        }
      }, 100);
    }
  }, []);

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
          return (
            <div
              style={{ backgroundImage: `url(${i})` }}
              data-id={k}
              key={k}
            ></div>
          );
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

const CarouselBig = styled(Body)`
  position: relative;
  top: 0;
  /* border: 1px solid; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  /* overflow: scroll; */
  i {
    font-size: ${(props) => props.theme.size.h3};
    /* padding: 0.21rem; */
  }

  & .right {
    right: 0;
  }

  & .imageList {
    /* border: 2px solid red; */
    height: 80%;
    width: 100%;
    transition: all 500ms ease-in;
    white-space: nowrap;

    div {
      /* border: 1px solid blue; */
      display: inline-block;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      /* background-size: cover; */
      /* background-size: contain; */
      background-size: max(90%) auto;
      background-position: center center;
    }
  }
`;

export default CarouselBig;
