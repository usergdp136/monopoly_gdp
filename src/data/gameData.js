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
  { name: 'VIA!', type: 'special', color: '#01696f' },
  { name: 'Largo Colombo', type: 'property', color: '#7a4f2b' },
  { name: 'Probabilità', type: 'card', color: '#006494' },
  { name: 'Viale Vespucci', type: 'property', color: '#7a4f2b' },
  { name: 'Tassa patrimoniale', type: 'tax', color: '#964219' },
  { name: 'Stazione Sud', type: 'station', color: '#28251d' },
  { name: 'Bastioni Gran Sasso', type: 'property', color: '#9bc53d' },
  { name: 'Imprevisti', type: 'card', color: '#a13544' },
  { name: 'Viale Monterosa', type: 'property', color: '#9bc53d' },
  { name: 'Prigione / Transito', type: 'special', color: '#d19900' }
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
