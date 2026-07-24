interface PlaceholderImageProps {
  text: string
  className?: string
  rounded?: boolean
}

export default function PlaceholderImage({ text, className = '', rounded = false }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 border border-[var(--color-border)] ${rounded ? 'rounded-full' : 'rounded-lg'} ${className}`}
      style={{ minHeight: '48px' }}
    >
      <span className="text-xs md:text-sm" style={{ color: 'var(--color-text-muted)' }}>
        {text}
      </span>
    </div>
  )
}
