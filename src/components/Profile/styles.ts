import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const ProfileContent = styled.div`
  margin-left: 1.5rem;
`;

export const ProfileName = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.title};
`;

export const ProfileLevel = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const ProfileLevelImage = styled.img`
  margin-right: 0.5rem;
`;
