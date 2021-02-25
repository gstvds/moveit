import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer, ProfileContent, ProfileImage, ProfileLevel, ProfileLevelImage, ProfileName } from './styles';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/gstvds.png" alt="Gustavo Silva" />
      <ProfileContent>
        <ProfileName>Gustavo Silva</ProfileName>
        <ProfileLevel>
          <ProfileLevelImage src="icons/level.svg" alt="Level"/>
          Level {level}
        </ProfileLevel>
      </ProfileContent>
    </ProfileContainer>
  );
}