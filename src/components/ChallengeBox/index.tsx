import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { ChallengeActive, ChallengeActiveButton, ChallengeActiveContent, ChallengeActiveDescription, ChallengeActiveFooter, ChallengeActiveNew, ChallengeActiveTitle, ChallengeBoxContainer, ChallengeNotActive, ChallengeNotActiveDescription, ChallengeNotActiveImage, ChallengeNotActiveTitle } from './styles';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

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
            <ChallengeActiveButton failed type="button" onClick={resetChallenge}>Falhei</ChallengeActiveButton>
            <ChallengeActiveButton success type="button" onClick={completeChallenge}>Completei</ChallengeActiveButton>
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