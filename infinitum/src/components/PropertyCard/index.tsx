import Image from 'next/image';
import { useRouter } from 'next/router';
import { 
  Card, 
  ImageContainer, 
  Content, 
  PropertyTitle, 
  PropertyPrice, 
  PropertyLocation 
} from './styles';

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
}

export function PropertyCard({ id, title, price, location, image }: PropertyCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/property/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <ImageContainer>
        <Image src={image} alt={title} fill sizes="100%" />
      </ImageContainer>
      <Content>
        <PropertyTitle>{title}</PropertyTitle>
        <PropertyPrice>{price}</PropertyPrice>
        <PropertyLocation>{location}</PropertyLocation>
      </Content>
    </Card>
  );
}
