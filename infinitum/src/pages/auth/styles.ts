import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 16px;
`;

export const AuthCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  
  @media (max-width: 480px) {
    padding: 24px;
  }

  /* Estilização da scrollbar caso necessário */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
`;

export const Logo = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #1a1a1a;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  text-align: center;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px;
  border: none;
  background: ${({ active }) => (active ? '#3b82f6' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#64748b')};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ active }) => (!active && '#f1f5f9')};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 16px);
`;

export const Input = styled.input`
  width: 100%;
  padding: clamp(10px, 2vw, 12px);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: clamp(0.875rem, 2vw, 1rem);
  transition: all 0.2s;

  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: clamp(10px, 2vw, 12px);
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: clamp(0.875rem, 2vw, 1rem);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: clamp(20px, 4vw, 24px) 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e2e8f0;
  }

  span {
    padding: 0 clamp(8px, 2vw, 10px);
    color: #64748b;
    font-size: clamp(0.75rem, 2vw, 0.875rem);
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  gap: clamp(8px, 2vw, 12px);
  margin-top: clamp(8px, 2vw, 12px);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SocialButton = styled.button`
  flex: 1;
  padding: clamp(10px, 2vw, 12px);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: clamp(0.875rem, 2vw, 1rem);

  &:hover {
    background: #f8fafc;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 4px;
`;