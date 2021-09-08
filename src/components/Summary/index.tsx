import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../Hooks/useTransactions";

import {
  Container,
  Wrapper,
  HeaderBox,
  Description,
  Value,
  Image,
} from "./styles";

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Wrapper>
        <HeaderBox>
          <Value>Entradas</Value>
          <Image src={incomeImg} alt="Entradas" />
        </HeaderBox>
        <Description>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </Description>
      </Wrapper>
      <Wrapper>
        <HeaderBox>
          <Value>Saída</Value>
          <Image src={outcomeImg} alt="Saída" />
        </HeaderBox>
        <Description>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </Description>
      </Wrapper>
      <Wrapper>
        <HeaderBox>
          <Value>Total</Value>
          <Image src={totalImg} alt="Total" />
        </HeaderBox>
        <Description>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </Description>
      </Wrapper>
    </Container>
  );
};

export default Summary;
