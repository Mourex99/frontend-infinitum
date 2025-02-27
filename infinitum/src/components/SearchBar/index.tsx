import { SearchContainer, SearchForm, SearchInput, SearchButton } from './styles'

export function SearchBar() {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput 
          type="text" 
          placeholder="Digite o endereço ou tipo de imóvel..."
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm>
    </SearchContainer>
  )
}
