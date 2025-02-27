import { FooterContainer, FooterContent, FooterSection } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Infinitum</h3>
          <ul>
            <li><a href="/about">Sobre nós</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><a href="/careers">Carreiras</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Imóveis</h3>
          <ul>
            <li><a href="/search?type=apartment">Apartamentos</a></li>
            <li><a href="/search?type=house">Casas</a></li>
            <li><a href="/search?type=commercial">Comercial</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy">Privacidade</a></li>
            <li><a href="/terms">Termos</a></li>
            <li><a href="/cookies">Cookies</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  )
}
