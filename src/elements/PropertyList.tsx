import React from "react";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { ButtonSlide, PropertyListItem } from ".";
import { IStyled, ProjectListType } from "../types";

interface IProps extends IStyled {
  data: ProjectListType[] | null;
  active: number;
  handleClick: (pid: number) => void;
  // handleClick: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Body = ({ className, data, active, handleClick }: IProps) => {
  const [current, setCurrent] = useState(0); // for carousel
  const ref = React.createRef<HTMLDivElement>();
  const theme = useTheme();

  const handleSlide = (e: React.SyntheticEvent<HTMLElement>) => {
    const PropertyListDiv = ref.current;
    const { slide } = e.currentTarget.dataset;

    // for mobile:desktop
    const width = window.screen.width < theme.breakpoint.value.sm ? 50 : 20; // in percent
    const itemsPerScreen =
      window.screen.width < theme.breakpoint.value.sm ? 2 : 5; // max items visible before scroll next

    if (PropertyListDiv && data) {
      if (slide === "next" && current < data.length - itemsPerScreen) {
        PropertyListDiv.style.marginLeft = `-${(current + 1) * width}%`;
        setCurrent(current + 1);
        // console.log(current, "-->", current + 1);
      }
      if (slide === "prev" && current > 0) {
        PropertyListDiv.style.marginLeft = `-${(current - 1) * width}%`;
        setCurrent(current - 1);
        // console.log(current - 1, "<--", current);
      }
    }
  };

  return (
    <div className={className}>
      <div className="propertyList" ref={ref} data-current={current}>
        {data?.map((property) => {
          return (
            <div
              className="property-box"
              onClick={() => handleClick(property.id)}
              key={property.id}
            >
              <PropertyListItem
                item={property}
                active={active === property.id}
                key={property.id}
              />
            </div>
          );
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

const PropertyList = styled(Body)`
  position: relative;
  top: 0;
  border: 1px solid;
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  & .right {
    right: 0;
  }

  & .propertyList {
    /* position: absolute; */
    /* display: flex; */
    height: 100%;
    width: 100%;
    transition: all 300ms ease-in;
    white-space: nowrap;

    /* justify-content: center; */
  }

  .property-box {
    display: inline-block;
    width: 20%;
    height: 100%;
    /* border: 1px solid red; */

    /* min-height: 3rem; */
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    .property-box {
      width: 50%;
    }
  }
`;

export default PropertyList;
