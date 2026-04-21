# monopoly_gdp

Webapp React + Vite pensata per GitHub e Railway, con direzione grafica elegante e struttura pronta per implementare il Monopoli italiano.

## Stack

- React 18
- Vite 5
- CSS custom, senza dipendenze UI pesanti
- Deploy su Railway da repository GitHub

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy su Railway

1. Crea un repository GitHub chiamato `monopoly_gdp`
2. Carica questi file nel repository
3. Su Railway scegli **Deploy from GitHub repo**
4. Seleziona il repository
5. Railway rileverà il progetto Vite ed eseguirà il build

## Regole considerate nella progettazione

Questa base è stata impostata per supportare le regole tipiche del Monopoli italiano/Euro:

- acquisto o asta immediata delle proprietà libere non comprate
- incasso passando dal VIA
- affitti, gruppi completi e raddoppio affitto senza costruzioni
- costruzione uniforme delle case
- alberghi dopo 4 case
- ipoteche e riscatto con maggiorazione
- prigione, doppi e bancarotta

## Prossimi step suggeriti

- aggiungere `src/engine/gameLogic.js`
- modellare tutte le 40 caselle
- creare modali per asta, scambio e carte
- introdurre salvataggio partita solo se in futuro servirà un backend
