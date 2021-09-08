import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;
export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  color: var(--text-body);
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
`;
export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 1rem 2rem;
  border: 0;
  background: var(--shape);
  color: var(--text-body);
  border-radius: 0.25rem;

  &:first-child {
    color: var(--text-title);
  }

  &.withdraw {
    color: var(--red);
  }

  &.deposit {
    color: var(--green);
  }
`;
