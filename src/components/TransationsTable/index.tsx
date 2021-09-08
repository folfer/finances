import { useTransactions } from "../../Hooks/useTransactions";

import { Container, Table, Thead, Tbody, Tr, Th, Td } from "./styles";

const TransationsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Valor</Th>
            <Th>Categoria</Th>
            <Th>Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transactions: any) => (
            <Tr key={transactions.id}>
              <Td>{transactions.title}</Td>
              <Td className={transactions.type}>
                {transactions.type === "withdraw"
                  ? new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(-transactions.amount)
                  : new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transactions.amount)}
              </Td>
              <Td>{transactions.category}</Td>
              <Td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transactions.createdAt)
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default TransationsTable;
