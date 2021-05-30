import { formatDistance } from "date-fns";
import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  timestamp: string;
}

const Body = ({ className, timestamp }: IProps) => {
  const myDate = (date: string) => {
    if (date) {
      return formatDistance(Date.parse(date), new Date(), {
        addSuffix: true,
      });
    }
  };

  return <div className={className}>created {myDate(timestamp)}</div>;
};

const MyDate = styled(Body)`
  color: ${(props) => props.theme.colors.b + "c0"};
  font-size: ${(props) => props.theme.size.h5};
`;

export default MyDate;
