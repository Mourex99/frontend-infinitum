import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/hero-bg.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 24px;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 24px;
`;

export const HighlightsSection = styled.section`
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 24px;
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 16px;
`;
