import styled from 'styled-components'
import { useState } from 'react';

const CounterWrapper = styled.div`
  display: flex;
`;

interface CollectorCounterProps {
  setCounterAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ setCounterAmount }: CollectorCounterProps) => {
  const [buttonClicks, setButtonClicks] = useState<number>(0)
  const maxButtonClicks = 3;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCounterAmount(prev => prev + 1)
    if (buttonClicks < 3) {
      setButtonClicks(prev => prev + 1)
    }
  }

  return (
    <CounterWrapper>
      <button 
        onClick={(e) => handleClick(e)}
        disabled={buttonClicks === maxButtonClicks}
      >
        <p>Hellu</p>
      </button>
    </CounterWrapper>
  )
}

export default Counter