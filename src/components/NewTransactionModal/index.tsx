import React, { useState, FormEvent } from "react";
import ReactModal from "react-modal";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

import {
  Container,
  Title,
  Input,
  Button,
  Image,
  ClosedButton,
  TransactionTypeContainer,
  RadioBox,
  TypeButton,
  ImageButton,
} from "./styles";
import { useTransactions } from "../../Hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ClosedButton className="react-modal-close">
        <Image src={closeImg} alt="Close Image" onClick={onRequestClose} />
      </ClosedButton>
      <Container onSubmit={handleCreateNewTransaction}>
        <Title>Cadastrar transação</Title>

        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
        />
        <Input
          value={amount}
          type="number"
          onChange={(event) => setAmount(+event.target.value)}
          placeholder="Valor"
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <ImageButton src={incomeImg} alt="Entrada" />
            <TypeButton>Entrada</TypeButton>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <ImageButton src={outcomeImg} alt="Saída" />
            <TypeButton>Saída</TypeButton>
          </RadioBox>
        </TransactionTypeContainer>
        <Input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </ReactModal>
  );
};

export default NewTransactionModal;
