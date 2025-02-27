import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBed, FaBath, FaCar, FaRuler } from 'react-icons/fa';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Container,
  Content,
  ImageGallery,
  Thumbnails,
  Thumbnail,
  PropertyInfo,
  MainInfo,
  Title,
  Price,
  Features,
  Feature,
  Description,
  ContactCard,
  ContactForm,
  Input,
  TextArea,
  Button,
  MapContainer
} from '@/pages/property/styles';

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Simular dados do imóvel (depois virá da API)
  const property = {
    id: id,
    title: 'Apartamento Luxuoso com Vista para o Mar',
    price: 'R$ 850.000',
    images: [
      '/property1.jpg',
      '/property2.jpg',
      '/property3.jpg',
    ],
    bedrooms: 3,
    bathrooms: 2,
    parkingSpots: 2,
    area: 120,
    description: 'Luxuoso apartamento com acabamento de alto padrão...'
  };

  // ...existing handleSubmit code...

  if (!id) return null; // Evita renderização antes de ter o ID

  return (
    <Container>
      <Navbar />
      <Content>
        <ImageGallery>
          <Image
            src={property.images[selectedImage]}
            alt="Imagem principal"
            fill
            className="main-image"
          />
          <Thumbnails>
            {property.images.map((image, index) => (
              <Thumbnail
                key={index}
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
              >
                <Image src={image} alt={`Thumbnail ${index + 1}`} fill />
              </Thumbnail>
            ))}
          </Thumbnails>
        </ImageGallery>

        <PropertyInfo>
          <MainInfo>
            <Title>{property.title}</Title>
            <Price>{property.price}</Price>
            
            <Features>
              <Feature>
                <FaBed /> {property.bedrooms} Quartos
              </Feature>
              <Feature>
                <FaBath /> {property.bathrooms} Banheiros
              </Feature>
              <Feature>
                <FaCar /> {property.parkingSpots} Vagas
              </Feature>
              <Feature>
                <FaRuler /> {property.area}m²
              </Feature>
            </Features>

            <Description>
              <h2>Descrição</h2>
              <p>{property.description}</p>
            </Description>

            {/* ...existing MapContainer code... */}
          </MainInfo>

          {/* ...existing ContactCard code... */}
        </PropertyInfo>
      </Content>
      <Footer />
    </Container>
  );
}
