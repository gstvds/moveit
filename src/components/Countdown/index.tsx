import { useContext, useEffect, useState } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { useTheme } from '../../contexts/ThemeContext';

import { CountdownButton, CountdownContainer, CountdownContent, CountdownDot, CountdownNumber, CountdownButtonActive } from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);
  const { changeTheme, theme, themes } = useTheme();

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    // setIsActive(true);
    const newTheme = themes.find(t => t.title !== theme.title)
    changeTheme(newTheme.title);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>

      <CountdownContainer>
        <CountdownContent>
          <CountdownNumber first>{minuteLeft}</CountdownNumber>
          <CountdownNumber>{minuteRight}</CountdownNumber>
        </CountdownContent>
        <CountdownDot>:</CountdownDot>
        <CountdownContent>
          <CountdownNumber first>{secondLeft}</CountdownNumber>
          <CountdownNumber>{secondRight}</CountdownNumber>
        </CountdownContent>
      </CountdownContainer>

      {
        hasFinished ? (
          <CountdownButton disabled>
            Ciclo encerrado
          </CountdownButton>
        ) : (
          <>
            {
              isActive ? (
                <CountdownButtonActive type="button" onClick={resetCountdown}>
                  Abandonar ciclo
                </CountdownButtonActive>
              ) : (
                <CountdownButton type="button" onClick={startCountdown}>
                  Iniciar um ciclo
                </CountdownButton>
              )
            }
          </>
        )
      }

    </div>
  );
}