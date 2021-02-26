import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Level, Overlay, Congratulations, Button, Description } from './styles';


export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <Level>{level}</Level>

        <Congratulations>Parabéns</Congratulations>
        <Description>Você alcançou um novo level.</Description>

        <Button type='button' onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </Button>
      </Container>
    </Overlay>
  )
}