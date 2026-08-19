import { useRef, useState, type DragEvent, type ChangeEvent } from 'react';
import { Flex, Text } from '@radix-ui/themes';
import styles from './FileDropper.module.css';

/**
 * FileDropper — the file-upload control Radix Themes doesn't ship. Styled
 * entirely with Radix's own CSS variables (--gray-*, --accent-*, --radius-*),
 * so it inherits the active Theme's accent color and light/dark automatically.
 * Same "hidden native input + styled zone" approach as a real design system.
 */
export type FileDropperProps = {
  accept?: string;
  multiple?: boolean;
  size?: '1' | '2' | '3';
  disabled?: boolean;
  onFilesSelected?: (files: FileList) => void;
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function FileDropper({ accept, multiple, size = '2', disabled, onFilesSelected }: FileDropperProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function take(files: FileList | null) {
    if (!files || files.length === 0) return;
    setFileName(files.length === 1 ? files[0].name : `${files.length} files`);
    onFilesSelected?.(files);
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    if (!disabled) take(e.dataTransfer.files);
  }

  function clear() {
    setFileName(null);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <Flex direction="column" gap="2">
      <div
        className={cx(styles.zone, dragging && styles.dragging, disabled && styles.disabled)}
        data-size={size}
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        role="button"
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !disabled) { e.preventDefault(); inputRef.current?.click(); } }}
      >
        <input
          ref={inputRef} type="file" accept={accept} multiple={multiple} disabled={disabled}
          className={styles.input} tabIndex={-1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => take(e.target.files)}
        />
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 16V4m0 0L7 9m5-5l5 5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Text size={size === '1' ? '1' : '2'} color="gray">
          {fileName ? `Selected: ${fileName}` : 'Drag a file here, or click to browse'}
        </Text>
      </div>
      {fileName && (
        <Flex align="center" gap="2" className={styles.chip}>
          <Text size="1">{fileName}</Text>
          <button type="button" className={styles.chipRemove} onClick={clear} aria-label="Remove file">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden>
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </Flex>
      )}
    </Flex>
  );
}
