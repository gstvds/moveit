import { useContext } from 'react';

import { CountdownContext } from '../../contexts/CountdownContext';

import { CountdownButton, CountdownContainer, CountdownContent, CountdownDot, CountdownNumber, CountdownButtonActive } from './styles';

export function Countdown() {
  const { hasFinished, minutes, seconds, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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