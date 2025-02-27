import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #3b82f6;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #3b82f6;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 50%;

  &:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
  }
`;
