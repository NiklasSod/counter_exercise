import styled from 'styled-components'
import { useState } from 'react'
import { deviceWidths } from '../utils/constants'
import ProgressBar from './ProgressBar'
import CollectorCounter from './CollectorCounter'
import Counter from './Counter'

/* STYLED COMPONENTS */

const MainWrapper = styled.main`
  display: flex; 
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 1rem;
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.background.main};
  @media (min-width: ${deviceWidths.mobile}) {
    margin: 0 5rem;
    padding: 0;
    background-color: white;
  }
  @media (min-width: ${deviceWidths.laptop}) {
    margin: 0 20rem;
    padding: 0;
  }
`;

const CollectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  @media (min-width: ${deviceWidths.mobile}) {
    gap: 1.75rem;
  }
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
  @media (min-width: ${deviceWidths.mobile}) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

interface ButtonProps {
  $buttonHasBgColor?: string;
}

const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.border.color_light};
  background-color: ${(props) => props.$buttonHasBgColor === 'green' ? props.theme.color.green : 'white'};
  span {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.$buttonHasBgColor === 'green' ? 'white' : props.theme.color.black};
  }
  cursor: pointer;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: ${deviceWidths.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 1.75rem 0 2.5rem 0;
  }
`;

/* COMPONENT */

const CounterApp = () => {
  const [counterToTenAmount, setCounterToTenAmount] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);
  const [counters, setCounters] = useState<{ id: number; clicks: number }[]>([
    { id: 1, clicks: 0 },
    { id: 2, clicks: 0 },
    { id: 3, clicks: 0 },
    { id: 4, clicks: 0 },
  ]);

  const handleIncrement = (id: number) => {
    if (counterToTenAmount + 1 >= 10) {
      setCounterToTenAmount(0);
      setCompleted((prev) => prev + 1);
      setCounters((prev) =>
        prev.map((counter) => ({ ...counter, clicks: 0 }))
      );
    } else {
      setCounterToTenAmount((prev) => prev + 1);
      setCounters((prev) =>
        prev.map((counter) =>
          counter.id === id ? { ...counter, clicks: counter.clicks + 1 } : counter
        )
      );
    }
  };

  const addCounter = () => {
    setCounters((prev) => [
      ...prev,
      { id: Date.now(), clicks: 0 }
    ]);
  };

  const clearAllSettings = () => {
    setCounterToTenAmount(0)
    setCompleted(0)
    setCounters([
      { id: 1, clicks: 0 },
      { id: 2, clicks: 0 },
      { id: 3, clicks: 0 },
      { id: 4, clicks: 0 },
    ]);
  }

  const removeCounter = (idToRemove: number, buttonClicks: number) => {
    if (counters.length <= 1) {
      return;
    }
    setCounterToTenAmount((prev) => Math.max(0, prev - buttonClicks));
    setCounters((prev) => prev.filter((counter) => counter.id !== idToRemove));
  }

  return (
    <MainWrapper id="main-content" tabIndex={-1}>

      <CollectorWrapper>
      
        <TextContainer>
          <H1>The Collaboration Calculator</H1>
          <Text>Help the calculators reach the goal of <span>10</span> together!</Text>
        </TextContainer>

        <ProgressBar counterToTenAmount={counterToTenAmount} completed={completed} />

        <CollectorCounter counterToTenAmount={counterToTenAmount} />

        <ButtonWrapper>
          <Button 
            $buttonHasBgColor="green"
            onClick={addCounter}
            aria-label={`Add a new counter. Counter number ${counters.length + 1} will be added`}
          >
            <span>+ Add counter</span>
          </Button>
          <Button 
            $buttonHasBgColor="white"
            onClick={clearAllSettings}
            aria-label="Reset all counters and progress"
          >
            <span>Reset everything</span>
          </Button>
        </ButtonWrapper>

      </CollectorWrapper>

      <CounterWrapper>
        {counters.map((counter, index) => (
          <Counter 
            key={counter.id}
            index={index}
            clicks={counter.clicks}
            onIncrement={() => handleIncrement(counter.id)} 
            removeCounter={() => removeCounter(counter.id, counter.clicks)}
            counters={counters.length}
          />
        ))}
      </CounterWrapper>

    </MainWrapper>
  )
}

export default CounterApp