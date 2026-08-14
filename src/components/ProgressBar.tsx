import styled from 'styled-components'
import { deviceWidths } from '../utils/constants'
import { useEffect } from 'react'
import '../assets/confetti.css'
import { triggerMultipleBursts } from '../utils/confetti'

/* STYLED COMPONENTS */

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.border.color_light};
`

const BarTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  p {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.gray};
    &:last-of-type {
      font-weight: 700;
      color: ${(props) => props.theme.color.green};
    }
  }
`

const DesktopOnlyText = styled.span`
  display: none;
  @media (min-width: ${deviceWidths.mobile}) {
    display: inline;
  }
`

const ProgressBarLineWrapper = styled.div`
  width: 100%;
  height: 0.75rem;
  border: 1px solid ${(props) => props.theme.border.color_light};
  background-color: ${(props) => props.theme.border.color_light};
  border-radius: 1rem;
`

interface ProgressBarLineProps {
  $percent: number
}

const ProgressBarLine = styled.div<ProgressBarLineProps>`
  width: ${(props) => props.$percent * 10}%;
  height: 0.75rem;
  border: 1px solid ${(props) => props.theme.color.green};
  background-color: ${(props) => props.theme.color.green};
  border-radius: 1rem;
`

/* TYPES */

interface ProgressBarProps {
  counterToTenAmount: number
  completed: number
}

/* COMPONENT */

const ProgressBar = ({ counterToTenAmount, completed }: ProgressBarProps) => {
  useEffect(() => {
    if (completed > 0) {
      const timerIds = triggerMultipleBursts({
        elementId: 'confettiSpin',
        totalBursts: 3,
        interval: 200,
      })
      return () => timerIds.forEach((id) => clearTimeout(id))
    }
  }, [completed])

  return (
    <ProgressWrapper id="confettiSpin">
      <BarTextWrapper>
        <p>
          Goal progress <DesktopOnlyText>(Current total)</DesktopOnlyText>
        </p>
        {completed === 0 ? (
          <p aria-live="polite">Value is now at {counterToTenAmount} / 10</p>
        ) : (
          <p aria-live="polite">
            Value is now at {counterToTenAmount} / 10. Times completed:{' '}
            {completed}
          </p>
        )}
      </BarTextWrapper>
      <ProgressBarLineWrapper
        role="progressbar"
        aria-label="Goal progress"
        aria-valuemin={0}
        aria-valuemax={10}
        aria-valuenow={counterToTenAmount}
      >
        <ProgressBarLine $percent={counterToTenAmount} />
      </ProgressBarLineWrapper>
    </ProgressWrapper>
  )
}

export default ProgressBar
