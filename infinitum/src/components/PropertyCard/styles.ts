import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 16px;
`;

export const PropertyTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

export const PropertyPrice = styled.p`
  font-size: 1.5rem;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const PropertyLocation = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;
