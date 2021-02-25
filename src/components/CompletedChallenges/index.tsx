import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { CompletedChallengeContainer, CompletedChallengeNumber, CompletedChallengeTitle } from './styles';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengeContainer>
      <CompletedChallengeTitle>Desafios completos</CompletedChallengeTitle>
      <CompletedChallengeNumber>{challengesCompleted}</CompletedChallengeNumber>
    </CompletedChallengeContainer>
  );
}