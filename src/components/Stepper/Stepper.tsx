import { useId } from 'react';
import { Flex, Text, Box } from '@radix-ui/themes';
import styles from './Stepper.module.css';

/**
 * Stepper — sequential progress ("step 2 of 4"), the other component Radix
 * Themes doesn't ship. Styled with Radix's accent variables so the active
 * step uses whatever accentColor the Theme is set to. onStepClick only fires
 * for already-completed steps (you can go back, not skip ahead) — the
 * constraint is structural, not a doc note.
 */
export type StepperProps = {
  steps: string[];
  currentStep: number; // 0-indexed
  onStepClick?: (index: number) => void;
  size?: '1' | '2';
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function Stepper({ steps, currentStep, onStepClick, size = '2' }: StepperProps) {
  const id = useId();

  return (
    <Flex asChild align="center" gap="1">
      <ol className={styles.list} data-size={size} aria-label="Progress">
        {steps.map((label, i) => {
          const status = i < currentStep ? 'complete' : i === currentStep ? 'current' : 'upcoming';
          const clickable = Boolean(onStepClick) && i < currentStep;
          const labelId = `${id}-step-${i}`;
          return (
            <li key={i} className={styles.step}>
              <button
                type="button"
                className={cx(styles.circle, styles[status])}
                disabled={!clickable}
                onClick={() => clickable && onStepClick!(i)}
                aria-current={status === 'current' ? 'step' : undefined}
                aria-labelledby={labelId}
              >
                {status === 'complete' ? (
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden>
                    <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : i + 1}
              </button>
              <Text
                id={labelId}
                size={size}
                weight={status === 'current' ? 'bold' : 'regular'}
                color={status === 'upcoming' ? 'gray' : undefined}
              >
                {label}
              </Text>
              {i < steps.length - 1 && (
                <Box className={cx(styles.connector, i < currentStep && styles.connectorDone)} />
              )}
            </li>
          );
        })}
      </ol>
    </Flex>
  );
}
