import styled from "styled-components";
import { Text } from "../../elements";
import { DeveloperType, IStyled } from "../../types";

interface IProps extends IStyled {
  developer: DeveloperType;
}

const Body = ({ className, developer }: IProps) => {
  const { about, contact, name, office, logo } = developer;
  return (
    <div className={className}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="name">{name}</div>
      <p className="office">{office}</p>
      <Text>{about}</Text>
      <p className="contact">
        <i className="fab fa-whatsapp"></i> {contact}
      </p>
    </div>
  );
};

const Developer = styled(Body)`
  padding: 3rem;
  margin-top: 3rem;
  width: 70%;
  text-align: center;
  .name,
  .contact {
    font-size: ${(props) => props.theme.size.h2};
  }
  .office {
    font-weight: 600;
  }
  .logo {
    margin: 0 auto;
    width: 14rem;
  }
  .fab {
    color: ${(props) => props.theme.colors.a};
  }
`;

export default Developer;