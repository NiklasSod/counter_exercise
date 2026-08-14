import styled from 'styled-components'
import { deviceWidths } from '../utils/constants';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.border.color_light};
  @media (min-width: ${deviceWidths.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.25rem 3rem;
  }
`;

const Text = styled.p`
  font-family: 'Inter';
  font-weight: normal;
  font-size: 0.8125rem;
  color: ${props => props.theme.color.gray};
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;

const Footer = () => {

  return (
    <FooterWrapper>
      <Text>
        © 2026 The Collaboration Calculator Inc.
      </Text>
      <TextDiv>
        <Text>
          Privacy Policy
        </Text>
        <Text>
          Terms
        </Text>
      </TextDiv>
    </FooterWrapper>
  )
}

export default Footer