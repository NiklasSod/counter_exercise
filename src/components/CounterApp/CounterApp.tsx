import styled from 'styled-components'
import { deviceWidths } from '../utils/constants';

const MainWrapper = styled.main`
  padding: 1.5rem 1rem;
  background-color: ${(props) => props.theme.background.main};
  @media (min-width: ${deviceWidths.mobile}) {
      padding: 2.5rem 10rem;
  }
  @media (min-width: ${deviceWidths.laptop}) {
      padding: 2.5rem 20rem;
  }
`;

const CollectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  padding: 1.65625rem;
`;

const H1 = styled.h1`
  font-family: 'Inter';
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.color.green};
  @media (min-width: ${deviceWidths.mobile}) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-family: 'Inter';
  font-weight: normal;
  font-size: 0.9375rem;
  text-align: center;
  color: ${(props) => props.theme.color.gray};
  span {
    color: ${(props) => props.theme.color.black};
    font-weight: bold;
  }
`;

const CounterApp = () => {
  const counterAmount = 4;

  return (
    <MainWrapper>

      <CollectorWrapper>
        <TextContainer>
          <H1>The Collaboration Calculator</H1>
          <Text>Help the calculators reach the goal of <span>10</span> together!</Text>
        </TextContainer>
        {/* <ProgressBar />
        <CollectorCounter />
        <ButtonWrapper>
          <button></button>
          <button></button>
        </ButtonWrapper> */}
      </CollectorWrapper>

      {/* <Collector />
      {Array.from({ length: counterAmount }, (_, index) => (
        <Counter key={index} />
      ))} */}

    </MainWrapper>
  )
}

export default CounterApp