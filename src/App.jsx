// src/App.jsx
import { useMemo, useState } from 'react'
import { boardSpaces, deploySteps, roadmap, ruleHighlights } from './data/gameData'

function StatCard({ label, value, note }) {
  return (
    <article className="stat-card vintage-card">
      <span className="eyebrow">{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </article>
  )
}

function BoardCell({ space }) {
  const isCorner = space.type === 'corner'

  if (isCorner) {
    let main = ''
    let sub = ''

    if (space.group === 'start') {
      sub = 'Incassa 500€'
      main = 'VIA!'
    } else if (space.group === 'parking') {
      sub = 'Sosta libera'
      main = 'Parcheggio'
    } else if (space.group === 'jail') {
      sub = 'Transito'
      main = 'Prigione'
    } else if (space.group === 'goto-jail') {
      sub = 'Attenzione'
      main = 'Vai in prigione'
    } else {
      sub = ''
      main = space.name
    }

    return (
      <div className={`corner-cell corner-${space.group}`}>
        {sub && <span>{sub}</span>}
        <strong>{main}</strong>
      </div>
    )
  }

  return (
    <div className={`board-space board-${space.type}`}>
      <div className="cell-bar" style={{ background: space.color }} />
      <div className="cell-text">
        <strong className="cell-name">{space.name}</strong>
        <small className="cell-type">{space.type.toUpperCase()}</small>
      </div>
      {space.type === 'chance' && <div className="cell-symbol">?</div>}
      {space.type === 'community' && <div className="cell-symbol">!</div>}
      {space.type === 'tax' && <div className="cell-symbol">€</div>}
      {space.type === 'station' && <div className="cell-symbol">🚉</div>}
      {space.type === 'utility' && <div className="cell-symbol">⚙︎</div>}
    </div>
  )
}

// suddivide i 40 spazi sui 4 lati del rettangolo
function useBoardSides() {
  const top = []
  const right = []
  const bottom = []
  const left = []

  boardSpaces.forEach((space) => {
    const i = space.id
    if (i >= 0 && i <= 10) {
      top.push(space)
    } else if (i >= 10 && i <= 20) {
      right.push(space)
    } else if (i >= 20 && i <= 30) {
      bottom.push(space)
    } else {
      left.push(space)
    }
  })

  return { top, right, bottom, left }
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

  const { top, right, bottom, left } = useBoardSides()

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
          <div className="game-board" aria-label="Tabellone Monopoli italiano vintage">
            {/* lato alto */}
            <div className="board-row top-row">
              {top.map((space) => (
                <BoardCell key={space.id} space={space} />
              ))}
            </div>

            {/* lato destro */}
            <div className="board-column right-column">
              {right.map((space) => (
                <BoardCell key={space.id} space={space} />
              ))}
            </div>

            {/* lato sinistro */}
            <div className="board-column left-column">
              {left.map((space) => (
                <BoardCell key={space.id} space={space} />
              ))}
            </div>

            {/* lato basso */}
            <div className="board-row bottom-row">
              {bottom.map((space) => (
                <BoardCell key={space.id} space={space} />
              ))}
            </div>

            {/* centro tabellone */}
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
                  <span>{players} giocatori demo</span>
                  <span>{setupSummary.seedFunds}</span>
                  <span>{setupSummary.turns} turni test</span>
                </div>
              </div>
            </div>
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
