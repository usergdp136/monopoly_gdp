export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
    >
      <span>{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  )
}
