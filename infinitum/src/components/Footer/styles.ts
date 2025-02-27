import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: #1a1a1a;
  color: white;
  padding: 48px 24px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 48px;
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;
