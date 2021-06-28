import React, { useState } from "react";
import styled from "styled-components";
import { CarouselBig } from "../../elements";
import { IStyled } from "../../types";

interface IProps extends IStyled {
  images: string[];
}

const Body = ({ className, images }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveImg, setIsActiveImg] = useState(0);

  const handleClick = (show: boolean, activeImg: number | null) => {
    setIsVisible(show);
    if (activeImg === null) return;
    setIsActiveImg(activeImg);
  };
  const handleStop = (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
  };

  return (
    <div className={className}>
      <div className="thumbnails">
        {images.map((url, k) => {
          url = process.env.REACT_APP_IMAGE_SM_URL + url;

          return (
            <div
              onClick={() => handleClick(true, k)}
              key={k}
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          );
        })}
      </div>
      {isVisible && (
        <div className="fullscreen" onClick={() => handleClick(false, null)}>
          <div onClick={handleStop}>
            <CarouselBig imageList={images} activeImg={isActiveImg} />
            {/* <Carousel imageList={images} /> */}
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = styled(Body)`
  background-color: ${(props) => props.theme.colors.a + "20"};
  padding: 5rem;
  .thumbnails {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .thumbnails div {
    width: 13rem;
    height: 9rem;
    margin: 0.5rem;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 -100rem 100rem ${(props) => props.theme.colors.a + "53"};
    cursor: pointer;
    transition: all 500ms;
    :hover {
      box-shadow: inset 0 -0rem 0rem ${(props) => props.theme.colors.a + "53"};
      /* box-shadow: none; */
    }
  }

  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 20rem;
    /* border: 1px solid red; */
    background-color: ${(props) => props.theme.colors.b + "d0"};
  }
  .fullscreen div {
    height: 100vh;
    /* border: 1px solid blue; */
  }
`;

export default Gallery;
