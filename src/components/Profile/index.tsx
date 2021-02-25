import { ProfileContainer, ProfileContent, ProfileImage, ProfileLevel, ProfileLevelImage, ProfileName } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/gstvds.png" alt="Gustavo Silva" />
      <ProfileContent>
        <ProfileName>Gustavo Silva</ProfileName>
        <ProfileLevel>
          <ProfileLevelImage src="icons/level.svg" alt="Level"/>
          Level 1
        </ProfileLevel>
      </ProfileContent>
    </ProfileContainer>
  );
}