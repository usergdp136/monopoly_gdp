import { useMemo, useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import LogoMark from './components/LogoMark'
import { boardPreview, deploySteps, roadmap, ruleHighlights } from './data/gameData'

function StatCard({ label, value, note }) {
  return (
    <article className="stat-card vintage-card">
      <span className="eyebrow">{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </article>
  )
}

function CornerCell({ title, subtitle, className = '' }) {
  return (
    <div className={`corner-cell ${className}`}>
      <span>{subtitle}</span>
      <strong>{title}</strong>
    </div>
  )
}

function BoardCell({ name, type, color }) {
  return (
    <div className={`board-space board-${type}`}>
      <span className="cell-bar" style={{ background: color }} />
      <strong>{name}</strong>
      <small>{type}</small>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')
  const [players, setPlayers] = useState(4)
  const [cash, setCash] = useState(7500)

  const setupSummary = useMemo(() => {
    return {
      turns: players * 12,
      seedFunds: new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
      }).format(cash),
      auctions: Math.max(2, Math.round(players / 2))
    }
  }, [players, cash])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const topRow = boardPreview.slice(0, 4)
  const rightCol = boardPreview.slice(4, 7)
  const bottomRow = boardPreview.slice(7, 11)
  const leftCol = boardPreview.slice(11, 14)

  return (
    <div className="app-shell board-theme" data-theme={theme}>
      <a href="#contenuto" className="skip-link">Vai al contenuto</a>

      <header className="topbar">
        <div className="brand">
          <LogoMark />
          <div>
            <p className="eyebrow">Railway-ready board game app</p>
            <h1>monopoly_gdp</h1>
          </div>
        </div>
        <div className="topbar-actions">
          <span className="status-pill">MVP pronta da estendere</span>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main id="contenuto" className="dashboard">
        <section className="board-hero">
          <div className="game-board" aria-label="Tabellone vintage Monopoli italiano">
            <CornerCell title="VIA!" subtitle="Incassa 500€" className="corner-top-left" />
            <div className="board-row top-row">
              {topRow.map((cell) => (
                <BoardCell key={cell.name} {...cell} />
              ))}
            </div>
            <CornerCell title="Prigione" subtitle="Transito" className="corner-top-right" />

            <div className="board-column left-column">
              {leftCol.map((cell) => (
                <BoardCell key={cell.name} {...cell} />
              ))}
            </div>

            <div className="board-center">
              <div className="board-center-inner">
                <span className="eyebrow accent">Monopoli italiano</span>
                <h2>Classico vintage, pronto per diventare un vero tabellone giocabile.</h2>
                <p>
                  La plancia riprende il linguaggio del gioco da tavolo: caselle sul perimetro,
                  angoli forti, gruppi colore, carte speciali e un centro dedicato allo stato della partita.
                </p>

                <div className="hero-actions">
                  <button className="btn btn-primary">Avvia progetto</button>
                  <button className="btn btn-secondary">Vedi roadmap</button>
                </div>

                <div className="center-badges">
                  <span>4 giocatori demo</span>
                  <span>{setupSummary.seedFunds}</span>
                  <span>{setupSummary.turns} turni test</span>
                </div>
              </div>
            </div>

            <div className="board-column right-column">
              {rightCol.map((cell) => (
                <BoardCell key={cell.name} {...cell} />
              ))}
            </div>

            <CornerCell title="Parcheggio" subtitle="Sosta libera" className="corner-bottom-left" />
            <div className="board-row bottom-row">
              {bottomRow.map((cell) => (
                <BoardCell key={cell.name} {...cell} />
              ))}
            </div>
            <CornerCell title="Vai in prigione" subtitle="Attenzione" className="corner-bottom-right" />
          </div>
        </section>

        <section className="stats-grid">
          <StatCard label="Giocatori" value={`${players}`} note="Configurazione rapida della partita locale" />
          <StatCard label="Capitale iniziale" value={setupSummary.seedFunds} note="Valore di esempio configurabile nell’engine" />
          <StatCard label="Aste attese" value={`${setupSummary.auctions}+`} note="Più rifiuti di acquisto, più tensione al tavolo" />
          <StatCard label="Turni simulati" value={`${setupSummary.turns}`} note="Stima utile per playtest e bilanciamento" />
        </section>

        <section className="content-grid">
          <article className="panel panel-large vintage-card">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Regole chiave</span>
                <h3>Cosa deve rispettare il motore</h3>
              </div>
              <span className="status-pill soft">Italian style ruleset</span>
            </div>
            <div className="rule-list">
              {ruleHighlights.map((rule) => (
                <div key={rule.title} className="rule-item">
                  <h4>{rule.title}</h4>
                  <p>{rule.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="panel vintage-card">
            <div className="panel-head compact">
              <div>
                <span className="eyebrow">Setup demo</span>
                <h3>Parametri veloci</h3>
              </div>
            </div>
            <label>
              Numero giocatori
              <input type="range" min="2" max="6" value={players} onChange={(e) => setPlayers(Number(e.target.value))} />
            </label>
            <label>
              Capitale base
              <input type="range" min="3000" max="9000" step="250" value={cash} onChange={(e) => setCash(Number(e.target.value))} />
            </label>
            <div className="setup-summary">
              <div><span>Giocatori</span><strong>{players}</strong></div>
              <div><span>Liquidità</span><strong>{setupSummary.seedFunds}</strong></div>
              <div><span>Turni test</span><strong>{setupSummary.turns}</strong></div>
            </div>
          </aside>

          <article className="panel vintage-card">
            <div className="panel-head compact">
              <div>
                <span className="eyebrow">Roadmap</span>
                <h3>Prossimi moduli</h3>
              </div>
            </div>
            <ol className="roadmap-list">
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          <article className="panel vintage-card">
            <div className="panel-head compact">
              <div>
                <span className="eyebrow">Deploy</span>
                <h3>GitHub → Railway</h3>
              </div>
            </div>
            <ol className="deploy-list">
              {deploySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </section>
      </main>
    </div>
  )
}
