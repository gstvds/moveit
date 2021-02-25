import styled, { css } from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};
`;

export const CountdownContent = styled.div`
  flex: 1;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
`;

interface NumberProps {
  first?: boolean;
}

export const CountdownNumber = styled.span<NumberProps>`
  flex: 1;

  ${props => props.first ? css`
    border-right: 1px solid #f0f1f3;  
  ` : css`
    border-left: 1px solid #f0f1f3;
  `}
`;

export const CountdownDot = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2;

  &:not(:disabled):hover {
    background: ${props => props.theme.colors.blue_dark};
  }

  &:disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
  }
`;

export const CountdownButtonActive = styled(CountdownButton)`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.title};

  &:not(:disabled):hover {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
  }
`;