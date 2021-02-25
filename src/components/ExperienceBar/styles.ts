import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Experience = styled.span`
  font-size: 1rem;
`;

export const Bar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.gray_line};
  margin: 0 1.5rem;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.green};
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;