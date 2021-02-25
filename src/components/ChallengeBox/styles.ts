import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChallengeNotActiveTitle = styled.strong`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const ChallengeNotActiveDescription = styled.p`
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;
`;

export const ChallengeNotActiveImage = styled.img`
  margin-bottom: 1rem;
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChallengeActiveTitle = styled.header`
  color: ${props => props.theme.colors.blue_title};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray_line};
`;

export const ChallengeActiveContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChallengeActiveNew = styled.strong`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.title};
  margin: 1.5rem 0 1rem;
`;

export const ChallengeActiveDescription = styled.p`
  line-height: 1.5;
`;

export const ChallengeActiveFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

interface ButtonProps {
  failed?: boolean;
  success?: boolean;
}

export const ChallengeActiveButton = styled.button<ButtonProps>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;

  background: ${props => props.failed ? props.theme.colors.red : props.theme.colors.green};

  &:hover {
    filter: brightness(0.9);
  }
`;
