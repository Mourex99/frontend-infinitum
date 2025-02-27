import { useState } from 'react';
import {
  Container,
  HeroSection,
  Title,
  HighlightsSection,
  HighlightsGrid,
  SectionTitle,
} from './styles';
import { Navbar } from '@/components/Navbar';
import { SearchBar } from '../../components/SearchBar';
import { PropertyCard } from '../../components/PropertyCard';
import { Footer } from '../../components/Footer';

export default function Home() {
  const [properties] = useState([
    {
      id: 1,
      title: 'Apartamento Luxuoso',
      price: 'R$ 850.000',
      location: 'Jardins, São Paulo',
      image: '/property1.jpg',
    },
    {
      id: 2,
      title: 'Casa com Piscina',
      price: 'R$ 1.200.000',
      location: 'Alphaville, São Paulo',
      image: '/property2.jpg',
    },
    {
      id: 3,
      title: 'Cobertura Duplex',
      price: 'R$ 1.500.000',
      location: 'Vila Nova Conceição, São Paulo',
      image: '/property3.jpg',
    },
  ]);

  return (
    <Container>
      <Navbar />
      <HeroSection>
        <Title>Encontre o imóvel dos seus sonhos</Title>
        <SearchBar />
      </HeroSection>

      <HighlightsSection>
        <SectionTitle>Destaques</SectionTitle>
        <HighlightsGrid>
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </HighlightsGrid>
      </HighlightsSection>

      <Footer />
    </Container>
  );
}
