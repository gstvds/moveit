import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Experience, Bar, CurrentExperience, ProgressBar } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <Container>
      <Experience>0 xp</Experience>
        <Bar>
          <ProgressBar style={{ width: `${percentToNextLevel}%` }} />

          <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </CurrentExperience>
        </Bar>
      <Experience>{experienceToNextLevel} xp</Experience>
    </Container>
  );
}