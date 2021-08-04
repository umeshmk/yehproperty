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
          <i
            className="fas fa-times"
            onClick={() => handleClick(false, null)}
          ></i>
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
    text-align: right;
    div {
      height: 100vh;
      /* border: 1px solid blue; */
    }
    .fas {
      display: none;
    }
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    padding: 0;
    .thumbnails {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5px;
      div {
        width: 45vw;
      }
    }
    .fullscreen {
      padding: 0;
      height: 100vh;

      .fas {
        display: block;
        position: absolute;
        z-index: 10;
        right: 0;
        color: ${(props) => props.theme.colors.a};
        font-size: ${(props) => props.theme.size.h2};
      }
    }
  }
`;

export default Gallery;
