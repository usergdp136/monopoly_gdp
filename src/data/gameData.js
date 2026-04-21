// src/data/gameData.js

export const boardSpaces = [
  // 0 - VIA!
  { id: 0, name: 'VIA!', type: 'corner', group: 'start', color: '#e6e6e6' },

  // 1–4 prima fascia (marrone)
  { id: 1, name: 'Vicolo Corto', type: 'property', group: 'brown', color: '#955436' },
  { id: 2, name: 'Probabilità', type: 'chance', group: 'card', color: '#0072bb' },
  { id: 3, name: 'Vicolo Stretto', type: 'property', group: 'brown', color: '#955436' },
  { id: 4, name: 'Tassa Patrimoniale', type: 'tax', group: 'tax', color: '#d8d2c1' },

  // 5 stazione
  { id: 5, name: 'Stazione Sud', type: 'station', group: 'station', color: '#000000' },

  // 6–9 azzurri chiaro
  { id: 6, name: 'Bastioni Gran Sasso', type: 'property', group: 'light-blue', color: '#6ec4e8' },
  { id: 7, name: 'Imprevisti', type: 'community', group: 'card', color: '#d62828' },
  { id: 8, name: 'Viale Monterosa', type: 'property', group: 'light-blue', color: '#6ec4e8' },
  { id: 9, name: 'Viale Vespucci', type: 'property', group: 'light-blue', color: '#6ec4e8' },

  // 10 angolo prigione
  { id: 10, name: 'In Prigione / Transito', type: 'corner', group: 'jail', color: '#e6e6e6' },

  // 11–14 rosa
  { id: 11, name: 'Via Accademia', type: 'property', group: 'pink', color: '#f08aa8' },
  { id: 12, name: 'Società Elettrica', type: 'utility', group: 'utility', color: '#d8d2c1' },
  { id: 13, name: 'Corso Ateneo', type: 'property', group: 'pink', color: '#f08aa8' },
  { id: 14, name: 'Piazza Università', type: 'property', group: 'pink', color: '#f08aa8' },

  // 15 stazione
  { id: 15, name: 'Stazione Nord', type: 'station', group: 'station', color: '#000000' },

  // 16–19 arancioni
  { id: 16, name: 'Via Verdi', type: 'property', group: 'orange', color: '#f28e1c' },
  { id: 17, name: 'Probabilità', type: 'chance', group: 'card', color: '#0072bb' },
  { id: 18, name: 'Corso Raffaello', type: 'property', group: 'orange', color: '#f28e1c' },
  { id: 19, name: 'Piazza Dante', type: 'property', group: 'orange', color: '#f28e1c' },

  // 20 angolo parcheggio
  { id: 20, name: 'Sosta Libera / Parcheggio', type: 'corner', group: 'parking', color: '#e6e6e6' },

  // 21–24 rossi
  { id: 21, name: 'Via Roma', type: 'property', group: 'red', color: '#d62828' },
  { id: 22, name: 'Imprevisti', type: 'community', group: 'card', color: '#d62828' },
  { id: 23, name: 'Corso Impero', type: 'property', group: 'red', color: '#d62828' },
  { id: 24, name: 'Piazza Venezia', type: 'property', group: 'red', color: '#d62828' },

  // 25 stazione
  { id: 25, name: 'Stazione Est', type: 'station', group: 'station', color: '#000000' },

  // 26–29 gialli
  { id: 26, name: 'Via Firenze', type: 'property', group: 'yellow', color: '#f6d743' },
  { id: 27, name: 'Via Roma Nord', type: 'property', group: 'yellow', color: '#f6d743' },
  { id: 28, name: 'Società Acqua Potabile', type: 'utility', group: 'utility', color: '#d8d2c1' },
  { id: 29, name: 'Piazza Duomo', type: 'property', group: 'yellow', color: '#f6d743' },

  // 30 angolo vai in prigione
  { id: 30, name: 'Vai in Prigione', type: 'corner', group: 'goto-jail', color: '#e6e6e6' },

  // 31–34 verdi
  { id: 31, name: 'Via Torino', type: 'property', group: 'green', color: '#2e8540' },
  { id: 32, name: 'Corso Milano', type: 'property', group: 'green', color: '#2e8540' },
  { id: 33, name: 'Probabilità', type: 'chance', group: 'card', color: '#0072bb' },
  { id: 34, name: 'Viale dei Giardini', type: 'property', group: 'green', color: '#2e8540' },

  // 35 stazione
  { id: 35, name: 'Stazione Ovest', type: 'station', group: 'station', color: '#000000' },

  // 36–39 blu scuro
  { id: 36, name: 'Imprevisti', type: 'community', group: 'card', color: '#d62828' },
  { id: 37, name: 'Viale Europa', type: 'property', group: 'dark-blue', color: '#003f91' },
  { id: 38, name: 'Tassa di Lusso', type: 'tax', group: 'tax', color: '#d8d2c1' },
  { id: 39, name: 'Parco della Vittoria', type: 'property', group: 'dark-blue', color: '#003f91' }
]

export const ruleHighlights = [
  {
    title: 'Acquisto o asta immediata',
    detail:
      'Se una proprietà libera non viene comprata, va subito all’asta a partire da 5€.'
  },
  {
    title: 'Passaggio dal VIA',
    detail:
      'Quando un giocatore transita o si ferma sul VIA, incassa 500€ dalla Banca.'
  },
  {
    title: 'Costruzione uniforme',
    detail:
      'Le case si distribuiscono in modo proporzionato nello stesso gruppo colore; differenza massima di una casa.'
  },
  {
    title: 'Alberghi e ipoteche',
    detail:
      'Un albergo richiede 4 case sul terreno; i beni ipotecati non producono affitto e si riscattano con il 10% in più.'
  }
]

export const roadmap = [
  'Setup partita con 2–6 giocatori e segnalini',
  'Motore turni con dadi, doppi, prigione e bancarotta',
  'Acquisti, aste, affitti, ipoteche e costruzioni',
  'Carte Probabilità e Imprevisti',
  'Salvataggio stato partita e cronologia mosse'
]

export const deploySteps = [
  'Crea un repository GitHub chiamato monopoly_gdp e carica il contenuto del progetto.',
  'Su Railway scegli Deploy from GitHub repo e collega il repository.',
  'Railway rileverà Vite, eseguirà il build e pubblicherà la cartella dist.',
  'A ogni push sul branch principale otterrai un nuovo deploy automatico.'
]
