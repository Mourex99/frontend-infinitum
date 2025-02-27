import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 32px auto;
  padding: 0 24px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;
