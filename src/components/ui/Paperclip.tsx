/** Wire paper clip that holds attachments (portrait, screenshots) to a sheet. */
export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg className={`clip ${className}`.trim()} viewBox="0 0 20 64" aria-hidden="true">
      <path d="M8 46V10a4 4 0 0 1 8 0v42a6 6 0 0 1-12 0V18" />
    </svg>
  );
}
