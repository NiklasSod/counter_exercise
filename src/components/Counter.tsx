import styled from 'styled-components'
import type { MouseEvent } from 'react'

/* STYLED COMPONENTS */

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.border.color_light};
  gap: 1rem;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface CounterCountProps {
  $buttonClicks: number;
}

const CounterCount = styled.h3<CounterCountProps>`
  font-family: 'Inter';
  font-weight: bold;
  font-size: 0.75rem;
  color: ${props => props.$buttonClicks === 3 ? props.theme.color.gray : props.theme.color.darkGray};
`;

const ButtonRemove = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  color: ${props => props.theme.color.red};
  background-color: ${props => props.theme.color.lightGray};
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

interface ClickCountProps {
  $buttonClicks: number;
}

const ClickCount = styled.p<ClickCountProps>`
  font-family: 'Inter';
  font-weight: 800;
  font-size: 2.25rem;
  color: ${props => props.$buttonClicks >= 3 ? props.theme.color.green : props.theme.color.black};
  text-align: center;
  span {
    font-weight: normal;
    font-size: 1.125rem;
    color: ${props => props.theme.color.gray};
  }
`;

interface ButtonProps {
  $buttonClicks: number;
}

const Button = styled.button<ButtonProps>`
  margin: auto;
  padding: 0.625rem;
  width: 10rem;
  border: 2px solid ${props => props.theme.color.green};
  border-radius: 0.625rem;
  background-color: ${props => props.theme.color.lightGreen};
  cursor: ${props => props.$buttonClicks >= 3 ? 'default' : 'pointer'};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

/* TYPES */

interface CollectorCounterProps {
  onIncrement: () => void;
  removeCounter: () => void;
  counters: number;
  index: number;
  clicks: number;
}

/* COMPONENT */

const Counter = ({ onIncrement, removeCounter, counters, index, clicks }: CollectorCounterProps) => {
  const maxButtonClicks = 3;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (clicks < maxButtonClicks) {
      onIncrement();
    }
  }

  return (
    <CounterWrapper>

      <TopDiv aria-label={`Remove counter number ${index + 1}`}>
          
        <CounterCount $buttonClicks={clicks}>Counter number {index + 1}</CounterCount>
        <ButtonRemove 
          onClick={removeCounter}
          disabled={counters <= 1}
        >
          Remove counter
        </ButtonRemove>
      </TopDiv>
      <ClickCount 
        aria-label={`This button now has ${clicks} of the max ${maxButtonClicks} points`} 
        $buttonClicks={clicks}
      >
        {clicks}
        <span>/ 3</span>
      </ClickCount>

      <Button 
        onClick={(e) => handleClick(e)}
        disabled={clicks === maxButtonClicks}
        $buttonClicks={clicks}
        aria-label={clicks >= maxButtonClicks
          ? `Counter number ${index + 1} reached the maximum value`
          : `Increase counter number ${index + 1} value`}
      >
        {clicks >= 3 ? <span>Max value (3) added</span> : <span>Increase value</span>}
      </Button>

    </CounterWrapper>
  )
}

export default Counter