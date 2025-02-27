import Image from 'next/image'
import { 
  Card, 
  ImageContainer, 
  Content, 
  PropertyTitle, 
  PropertyPrice, 
  PropertyLocation 
} from './styles'

interface PropertyCardProps {
  title: string
  price: string
  location: string
  image: string
}

export function PropertyCard({ title, price, location, image }: PropertyCardProps) {
  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={title} fill sizes="100%" />
      </ImageContainer>
      <Content>
        <PropertyTitle>{title}</PropertyTitle>
        <PropertyPrice>{price}</PropertyPrice>
        <PropertyLocation>{location}</PropertyLocation>
      </Content>
    </Card>
  )
}
