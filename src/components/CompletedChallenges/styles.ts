import styled from 'styled-components';

export const CompletedChallengeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;
`;

export const CompletedChallengeTitle = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
  `;

export const CompletedChallengeNumber = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;
