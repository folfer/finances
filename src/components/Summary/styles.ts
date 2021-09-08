import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const Wrapper = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
`;

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.p`

`;

export const Image = styled.img`

`;

export const Description = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
