import styled from "styled-components";
import { AddOnsType, IStyled } from "../../types";

interface IProps extends IStyled {
  list: {
    [key in AddOnsType]: boolean;
  };
}

type Icons = {
  [key in AddOnsType]: string;
};

const icons: Icons = {
  "open park": "fas fa-sun",
  security: "fas fa-shield-alt",
  cctv: "fas fa-video",
  "fire safety": "fas fa-fire-extinguisher",
  "swimming pool": "fas fa-swimming-pool",
  "club house": "fas fa-glass-cheers",
  gymnasium: "fas fa-running",
  elevator: "fas fa-angle-double-up",
  "power backup": "fas fa-plug",
  parking: "fas fa-parking",
};

const Body = ({ className, list }: IProps) => {
  return (
    <div className={className}>
      {Object.entries(list).map((v) => {
        return (
          <div className={`list blur-${!v[1]}`} key={v[0]}>
            <i className={icons[v[0] as AddOnsType]} title={v[0]}></i>
            {/* <div>{v[0]}</div> */}
          </div>
        );
      })}
    </div>
  );
};

const AddOns = styled(Body)`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  padding: 3rem;
  flex-wrap: wrap;
  /* width: 100%; */

  .list {
    padding: 0 2rem;
  }
  i {
    font-size: 3rem;
    border-radius: 3rem;
    color: ${(props) => props.theme.colors.b};
  }
  .blur-true i {
    color: ${(props) => props.theme.colors.b + "30"};
  }
  @media all and (${(props) => props.theme.breakpoint.sm}) {
    /* justify-content: space-around; */
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    padding: 3rem 0;
    text-align: center;
    .list {
      padding: 0;
    }
  }
`;

export default AddOns;
