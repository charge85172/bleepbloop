# Troubleshooting

| Probleem 😭 | Oplossing 😎 |
| -------- | -------- |
| `ex.` not found   |  `ex.` is nodig als je werkt met een `<script>` tag om excalibur te laden. In een `npm` project kan je dit weglaten, of je moet excalibur als volgt importeren: `import * as ex from "excalibur"`. |
| `Actor` not found | Plaats `import { Actor } from "excalibur"` bovenin je class |
| ImageSource is not yet loaded. Please call `.load()` | Je afbeelding moet zowel in `Resources` als in `ResourceLoader` staan in het bestand **Resources.js** | 
| Scene update called before initialize for scene level | Dit is een hele algemene foutmelding die getoond wordt als er iets mis gaat in je `initialize` functie, zoals het aanroepen van een variabele die niet bestaat. |
| Startscherm blijft hangen of wordt helemaal overgeslagen | Een van je ***resources*** wordt niet gevonden of is van een formaat dat niet geladen kan worden.   |
| `Vite` not found, `excalibur` not found | Je hebt nog geen `npm install` gedaan. |
| Game werkt wel in `dev` server maar niet in localhost/online | Je hebt geen `npm run build` gedaan. Check of er een `docs` folder is aangemaakt. In de `docs` folder staat je finished project. |
| Resources/CSS werken wel lokaal maar niet op github pages | Check of de `build` script in `package.json` er zo uit ziet: `"build": "vite build --outDir=docs --base=./"`. Als dit nog steeds niet werkt kan je bij `--base` ook het volledige pad naar je game invullen. |
|Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension|Dit betekent gewoon dat je ergens een typfout hebt gemaakt, zoals een `(, {` karakter teveel of te weinig. |
| Ik zie geen rode kringels als ik een import vergeet |  Pas hiervoor je settings aan. Zet daarin Onder Extensions - Typescript - JS/TS › Implicit Project Config aan. Let op, je krijgt dan ook heel veel andere (vaak onnodige) waarschuwingen. |
