import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi'; // Importando ícone de logout
import { Nav, NavContainer, Logo, NavLinks, NavLink, LogoutButton } from './styles';

export function Navbar() {
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    router.push(path);
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/auth');
  };

  return (
    <Nav>
      <NavContainer>
        <Logo style={{ cursor: 'pointer' }} onClick={(e) => handleNavigation(e as any, '/home')}>
          Infinitum
        </Logo>
        <NavLinks>
          <NavLink href="/home" onClick={(e) => handleNavigation(e, '/home')}>
            Início
          </NavLink>
          <NavLink href="/search" onClick={(e) => handleNavigation(e, '/search')}>
            Buscar
          </NavLink>
          <NavLink href="/favorites" onClick={(e) => handleNavigation(e, '/favorites')}>
            Favoritos
          </NavLink>
          <LogoutButton onClick={handleLogout}>
            <FiLogOut size={20} />
          </LogoutButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
