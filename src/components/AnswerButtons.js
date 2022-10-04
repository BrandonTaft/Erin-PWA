import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export function AnswerButtons({answers}) {
  return (
    <ButtonGroup
      className="button-group"
      orientation="vertical"
      aria-label="button group"
      variant="text"
    >
      <Button onClick={() => checkAnswer(0)} className="q-btn">{answers[0]}</Button>
      <Button onClick={() => checkAnswer(1)} className="q-btn">{answers[1]}</Button>
      <Button onClick={() => checkAnswer(2)} className="q-btn">{answers[2]}</Button>
      <Button onClick={() => checkAnswer(3)} className="q-btn">{answers[3]}</Button>
    </ButtonGroup>
  )
}