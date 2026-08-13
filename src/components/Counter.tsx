import styled from 'styled-components'

const CounterWrapper = styled.div`
  display: flex;
`;

interface CollectorCounterProps {
  setCounterAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ setCounterAmount }: CollectorCounterProps) => {
  return (
    <CounterWrapper>
      <button onClick={() => setCounterAmount(prev => prev + 1)}>
        <p>Hellu</p>
      </button>
    </CounterWrapper>
  )
}

export default Counter