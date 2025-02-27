import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { PropertyCard } from '@/components/PropertyCard';
import { Footer } from '@/components/Footer';
import {
  Container,
  SearchContainer,
  FiltersContainer,
  FilterSection,
  ResultsContainer,
  FilterInput,
  FilterSelect,
  PriceRange,
  FilterButton
} from './styles';

export default function Search() {
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
    // Add more properties as needed
  ]);

  return (
    <Container>
      <Navbar />
      <SearchContainer>
        <FiltersContainer>
          <FilterSection>
            <h3>Localização</h3>
            <FilterInput type="text" placeholder="Digite a cidade ou bairro" />
          </FilterSection>

          <FilterSection>
            <h3>Preço</h3>
            <PriceRange>
              <FilterInput type="number" placeholder="Mín" />
              <FilterInput type="number" placeholder="Máx" />
            </PriceRange>
          </FilterSection>

          <FilterSection>
            <h3>Tipo de Imóvel</h3>
            <FilterSelect>
              <option value="">Todos</option>
              <option value="apartment">Apartamento</option>
              <option value="house">Casa</option>
              <option value="commercial">Comercial</option>
            </FilterSelect>
          </FilterSection>

          <FilterSection>
            <h3>Quartos</h3>
            <FilterSelect>
              <option value="">Qualquer</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </FilterSelect>
          </FilterSection>

          <FilterSection>
            <h3>Banheiros</h3>
            <FilterSelect>
              <option value="">Qualquer</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </FilterSelect>
          </FilterSection>

          <FilterButton>Aplicar Filtros</FilterButton>
        </FiltersContainer>

        <ResultsContainer>
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </ResultsContainer>
      </SearchContainer>
      <Footer />
    </Container>
  );
}
