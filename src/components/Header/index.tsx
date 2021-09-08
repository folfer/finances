import React from "react";

import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface Headerprops {
  onOpenNewTransactionModal: () => void;
}

const Header: React.FC<Headerprops> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="finances" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transaçã0
        </button>
      </Content>
    </Container>
  );
};

export default Header;
