import { useState } from 'react'
import type { MouseEvent } from 'react'
import styled from 'styled-components'
import { deviceWidths } from '../utils/constants'
import HeaderIcon from '../assets/svg/header-icon.svg'

/* STYLED COMPONENTS */

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 4.5rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid ${(props) => props.theme.border.color_light};
  background-color: white;
  @media (min-width: ${deviceWidths.mobile}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
`

const HeaderText = styled.p`
  font-family: 'Inter';
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme.color.black};
`

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
`

interface HeaderLinkProps {
  $active?: boolean
}

const HeaderLink = styled.a<HeaderLinkProps>`
  font-family: 'Inter';
  font-weight: 600;
  text-size: 0.875rem;
  text-decoration: none;
  color: ${(props) => (props.$active ? `${props.theme.color.green}` : `${props.theme.color.gray}`)};
  &:hover {
    color: ${(props) => (props.$active ? `${props.theme.hover.green}` : `${props.theme.hover.gray}`)};
  }
`

/* TYPES */

type NavItem = 'Home' | 'Statistics' | 'Profile'
const navItems: readonly NavItem[] = ['Home', 'Statistics', 'Profile']

/* COMPONENT */

const Header = () => {
  const [activeLink, setActiveLink] = useState<NavItem>('Home')

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveLink(item)
  }

  return (
    <HeaderWrapper>
      <IconWrapper>
        <img src={HeaderIcon} alt="" width={28} height={28} />
        <HeaderText>The Collaboration Calculator</HeaderText>
      </IconWrapper>
      <nav aria-label="Main navigation">
        <ListWrapper>
          {navItems.map((item) => (
            <li key={item}>
              <HeaderLink
                href="#"
                $active={activeLink === item}
                aria-current={activeLink === item ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </HeaderLink>
            </li>
          ))}
        </ListWrapper>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
