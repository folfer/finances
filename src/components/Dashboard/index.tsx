import React from "react";
import Summary from "../Summary";
import TransationsTable from "../TransationsTable";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransationsTable />
    </Container>
  );
};

export default Dashboard;
