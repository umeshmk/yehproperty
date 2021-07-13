import React, { useState } from "react";
import styled from "styled-components";
import { IStyled } from "../types";
import useClickOutside from "../utility/useClickOutside";

interface IProps extends IStyled {
  name?: string;
  id?: string;
  options: string[];
  handleChange: (option: string) => void;
}

interface IPropsList extends IStyled {
  options: string[];
  isVisible: boolean;
  handleClick: (e: React.SyntheticEvent<EventTarget>) => void;
}

const ListBody = ({
  className,
  options,
  isVisible,
  handleClick,
}: IPropsList) => {
  return (
    <ul className={className}>
      {options.map((key: string) => {
        return (
          <li key={key} onClick={handleClick} data-value={key}>
            {key}
          </li>
        );
      })}
    </ul>
  );
};

const List = styled(ListBody)`
  background-color: ${(props) => props.theme.colors.c};
  margin: 0;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  max-height: ${(props) => {
    if (props.isVisible) return "50rem";
    return 0;
  }};
  list-style: none;
  padding: 0;
  transition: all 300ms ease-in;
  overflow: hidden;

  & li {
    padding: 0.5rem;
    &:hover {
      color: ${(props) => props.theme.colors.c};
      background-color: ${(props) => props.theme.colors.a};
    }
  }
`;

const Body = ({ className, options, handleChange }: IProps) => {
  const [selected, setSelected] = useState(options[0]);
  const { ref, isVisible, setIsVisible } = useClickOutside(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    let { value } = (e.target as HTMLElement).dataset;
    if (value) {
      setSelected(value);
      setIsVisible(false);
      handleChange(value);
    }
  };

  return (
    <div className={className} ref={ref}>
      <div className="title" onClick={handleVisible}>
        {selected}
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </div>
      <div>
        <List
          handleClick={handleClick}
          options={options}
          isVisible={isVisible}
        />
      </div>
    </div>
  );
};

const Dropdown = styled(Body)`
  background-color: aliceblue;
  display: inline-block;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;

  & .title {
    padding: 1rem;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    background-color: ${(props) => props.theme.colors.c};
    filter: brightness(90%);

    & .fa {
      margin-top: 0.3rem;
      padding-left: 1rem;
    }

    /* color: ${(props) => props.theme.colors.a}; */
    &:hover {
      filter: brightness(95%);
    }
    &:active {
      filter: brightness(90%);
    }
  }
`;

export default Dropdown;
