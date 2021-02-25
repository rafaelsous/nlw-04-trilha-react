import styles from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenge() {
  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>3</span>
    </div>
  );
}