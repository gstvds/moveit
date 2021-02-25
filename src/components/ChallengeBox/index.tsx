import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { ChallengeActive, ChallengeActiveButton, ChallengeActiveContent, ChallengeActiveDescription, ChallengeActiveFooter, ChallengeActiveNew, ChallengeActiveTitle, ChallengeBoxContainer, ChallengeNotActive, ChallengeNotActiveDescription, ChallengeNotActiveImage, ChallengeNotActiveTitle } from './styles';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeActive>
          <ChallengeActiveTitle>Ganhe {activeChallenge.amount} xp</ChallengeActiveTitle>

          <ChallengeActiveContent>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <ChallengeActiveNew>Novo desafio</ChallengeActiveNew>
            <ChallengeActiveDescription>{activeChallenge.description}</ChallengeActiveDescription>
          </ChallengeActiveContent>

          <ChallengeActiveFooter>
            <ChallengeActiveButton failed type="button" onClick={handleChallengeFailed}>Falhei</ChallengeActiveButton>
            <ChallengeActiveButton success type="button" onClick={handleChallengeSucceeded}>Completei</ChallengeActiveButton>
          </ChallengeActiveFooter>
        </ChallengeActive>
      ) : (
      <ChallengeNotActive>
        <ChallengeNotActiveTitle>Finalize um ciclo para receber um desafio</ChallengeNotActiveTitle>
        <ChallengeNotActiveDescription>
          <ChallengeNotActiveImage src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </ChallengeNotActiveDescription>
      </ChallengeNotActive>
      ) }
    </ChallengeBoxContainer>
  );
}