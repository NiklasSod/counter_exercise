import styled from 'styled-components'
import { useState } from 'react'
import { deviceWidths } from '../utils/constants'
import ProgressBar from './ProgressBar'
import CollectorCounter from './CollectorCounter'

const MainWrapper = styled.main`
  margin: 0 1rem;
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.background.main};
  @media (min-width: ${deviceWidths.mobile}) {
    margin: 0 10rem;
    padding: 2.5rem 0;
    background-color: white;
  }
  @media (min-width: ${deviceWidths.laptop}) {
    margin: 0 20rem;
    padding: 2.5rem 0;
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
  const [counterAmount, setCounterAmount] = useState<number>(6);

  return (
    <MainWrapper>

      <CollectorWrapper>
      
        <TextContainer>
          <H1>The Collaboration Calculator</H1>
          <Text>Help the calculators reach the goal of <span>10</span> together!</Text>
        </TextContainer>

        <ProgressBar counterAmount={counterAmount} />

        <CollectorCounter />

        {/* <ButtonWrapper>
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