import styled from 'styled-components'
import { deviceWidths } from '../utils/constants';

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
`;

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
`;

const DesktopOnlyText = styled.span`
  display: none;
  @media (min-width: ${deviceWidths.mobile}) {
    display: inline;
  }
`;

const ProgressBarLineWrapper = styled.div`
  width: 100%;
  height: 0.75rem;
  border: 1px solid ${(props) => props.theme.border.color_light};
  background-color: ${(props) => props.theme.border.color_light};
  border-radius: 1rem;
`;

interface ProgressBarLineProps {
  percent: number;
}

const ProgressBarLine = styled.div<ProgressBarLineProps>`
  width: ${props => props.percent * 10}%;
  height: 0.75rem;
  border: 1px solid ${(props) => props.theme.color.green};
  background-color: ${(props) => props.theme.color.green};
  border-radius: 1rem;
`;

interface ProgressBarProps {
  counterAmount: number;
}

const ProgressBar = ({ counterAmount }: ProgressBarProps) => {

  return (
    <ProgressWrapper>

      <BarTextWrapper>
        <p>Goal progress <DesktopOnlyText>(Current total)</DesktopOnlyText></p>
        <p>{counterAmount} / 10</p>
      </BarTextWrapper>
      <ProgressBarLineWrapper>
        <ProgressBarLine percent={counterAmount}/>
      </ProgressBarLineWrapper>
      
    </ProgressWrapper>
  )
}

export default ProgressBar