import {
  ListStyled,
  LinkStyled,
  NavMenu,
  SectionContainer,
  LogoStyled,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <header>
      <SectionContainer>
        <NavMenu>
          <div>
            <LogoStyled to="/">
              <span role="img" aria-label="computer icon">
                The movieZz 🎬
              </span>
            </LogoStyled>
          </div>
          <ListStyled>
            <li>
              <LinkStyled to="/" end>
                Home
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="/movies">Movies</LinkStyled>
            </li>
          </ListStyled>
        </NavMenu>
      </SectionContainer>
    </header>
  );
};

export default Navigation;
