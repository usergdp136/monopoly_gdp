export const ruleHighlights = [
  {
    title: 'Acquisto o asta immediata',
    detail: 'Se una proprietà libera non viene comprata, va subito all’asta a partire da €5.'
  },
  {
    title: 'Passaggio dal VIA',
    detail: 'Quando un giocatore transita o si ferma sul VIA, incassa €500 dalla Banca.'
  },
  {
    title: 'Costruzione uniforme',
    detail: 'Le case si distribuiscono in modo proporzionato nello stesso gruppo colore; differenza massima di una casa.'
  },
  {
    title: 'Alberghi e ipoteche',
    detail: 'Un albergo richiede 4 case sul terreno; i beni ipotecati non producono affitto e si riscattano col 10% in più.'
  }
]

export const boardPreview = [
  // lato alto da VIA! a Prigione / Transito
  { name: 'VIA!', type: 'special', color: '#e6e6e6' },
  { name: 'Largo Colombo', type: 'property', color: '#955436' },      // marrone
  { name: 'Probabilità', type: 'card', color: '#0072bb' },            // blu carta
  { name: 'Viale Vespucci', type: 'property', color: '#955436' },     // marrone
  { name: 'Transito Prigione', type: 'special', color: '#e6e6e6' },

  // lato destro dall'alto verso il basso
  { name: 'Tassa patrimoniale', type: 'tax', color: '#d8d2c1' },
  { name: 'Stazione Sud', type: 'station', color: '#000000' },
  { name: 'Bastioni Gran Sasso', type: 'property', color: '#f28e1c' }, // arancione

  // lato basso da destra verso sinistra
  { name: 'Vai in prigione', type: 'special', color: '#e6e6e6' },
  { name: 'Prigione / Transito', type: 'special', color: '#e6e6e6' },
  { name: 'Viale Monterosa', type: 'property', color: '#f28e1c' },    // arancione
  { name: 'Imprevisti', type: 'card', color: '#d62828' },             // rosso carta
  { name: 'Sosta libera', type: 'special', color: '#e6e6e6' },

  // lato sinistro dal basso verso l'alto
  { name: 'Parcheggio', type: 'special', color: '#e6e6e6' },
  { name: 'Prigione', type: 'special', color: '#e6e6e6' },
  { name: 'Stazione Nord', type: 'station', color: '#000000' }
]

export const roadmap = [
  'Setup partita con 2-6 giocatori e segnalini',
  'Motore turni con dadi, doppi, prigione e bancarotta',
  'Acquisti, aste, affitti, ipoteche e costruzioni',
  'Carte Probabilità e Imprevisti',
  'Deploy automatico GitHub → Railway'
]

export const deploySteps = [
  'Crea un repository GitHub chiamato monopoly_gdp e carica il contenuto del progetto.',
  'Su Railway scegli Deploy from GitHub repo e collega il repository.',
  'Railway rileverà Vite, eseguirà il build e pubblicherà la cartella dist.',
  'A ogni push sul branch principale otterrai un nuovo deploy automatico.'
]
