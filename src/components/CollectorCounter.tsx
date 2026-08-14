import styled from 'styled-components'

/* STYLED COMPONENTS */

const CollectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 1.75rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.border.color_light};
`

const CollectorMainText = styled.p`
  font-family: 'Inter';
  font-weight: bold;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.green};
`

const CollectorNumber = styled.p`
  font-family: 'Inter';
  font-weight: 800;
  font-size: 3.25rem;
  text-align: center;
  color: ${(props) => props.theme.color.black};
`

const CollectorText = styled.p`
  font-family: 'Inter';
  font-weight: normal;
  font-size: 0.8125rem;
  text-align: center;
  color: ${(props) => props.theme.color.gray};
`

/* TYPES */

interface CollectorCounterProps {
  counterToTenAmount: number
}

/* COMPONENT */

const CollectorCounter = ({ counterToTenAmount }: CollectorCounterProps) => {
  return (
    <CollectorWrapper>
      <CollectorMainText>The Collector</CollectorMainText>
      <CollectorNumber
        aria-live="polite"
        aria-label={`You now have ${counterToTenAmount} out of 10 points collected`}
      >
        {counterToTenAmount}
      </CollectorNumber>
      <CollectorText>Total points collected (Goal: 10)</CollectorText>
    </CollectorWrapper>
  )
}

export default CollectorCounter
