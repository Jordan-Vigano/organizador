# Ficha de direção — Organizador

Versão 2 (26/11/2026): **estilo inspirado no Kan**, escolhido pelo dono entre os protótipos "Plane" e "Kan"
(`prototipos/`). Feita com a skill `estudio-design`. Inspiração só visual: nada de código do Kan (licença AGPL).
Fonte única para qualquer mudança visual no app: mudou aqui, muda no `index.html`, e vice-versa.

- **Peça:** app kanban pessoal (`index.html`) · **Onde:** PC (Chrome, janela de app) e celular (tela inicial).
- **Público e objetivo:** só o dono. Ver de relance o que está em andamento e não pegar coisa demais ao mesmo tempo.
- **Estilo:** calmo, limpo, quase monocromático (cinza 100% neutro). Cor aparece só onde informa: pontinho da área,
  prazo atrasado/hoje, prioridade e o medidor de vagas da coluna Fazendo.
- **Estrutura:** PC com barra lateral (logo, áreas como filtro, atalhos) e o quadro numa área branca de cantos
  arredondados; topo com título, sincronização, busca, Foco, **botão claro/escuro** e configurações; barra de nova
  tarefa com botão preto "Adicionar". Abaixo de 900 px a barra lateral some e as áreas viram chips.
- **Colunas:** caixas cinza-claras com borda suave (raio 8), nome 13 px/600 + contagem pequena. Fazendo tem o
  medidor de 3 vagas (verde; vermelho se passar). Dicas das colunas ficam no `title` (passar o mouse).
- **Cartões:** fundo quase branco, anel 1 px sutil, raio 8, título 13,5 px; embaixo, etiqueta redonda da área à
  esquerda e prazo, checklist, notas e prioridade em ícones pequenos à direita.
- **Cores (tokens no `:root`):**

  | Token | Claro | Escuro |
  |---|---|---|
  | `--canvas` fundo geral | `#f8f8f8` | `#0e0e10` |
  | `--panel` área do quadro | `#ffffff` | `#121214` |
  | `--list` coluna | `#efefef` | `#17171a` |
  | `--card` cartão | `#fcfcfc` | `#1e1f22` |
  | `--txt` | `#171717` | `#f7f8f8` |
  | `--muted` | `#666666` | `#8f939b` |
  | `--btn` botão principal | `#171717` | `#f7f8f8` |
  | `--accent` (medidor, foco do teclado) | `#2f5d50` | `#7fbfa9` |
  | `--danger` | `#b42318` | `#f97066` |

- **Tema:** botão sol/lua no topo alterna claro e escuro (fica salvo no aparelho); "Automático" (segue o sistema)
  nas configurações.
- **Tipografia:** Plus Jakarta Sans 400–700, arquivo local em `fonts/`. Campos com 16 px no celular.
- **Ícones:** SVG traço 1,8 px (estilo Lucide) pela função `icon()`; nada de emoji como ícone.
- **Tom do texto:** direto, frases curtas, sem jargão.
- **Evitar:** fundo creme, CAIXA ALTA, emojis como ícone, cor decorativa, animações decorativas.
- **Pronto quando:** funciona em 390 px e 1440 px, claro e escuro, foco visível no teclado, toque ≥ 44 px no
  celular, contraste AA, `prefers-reduced-motion` respeitado.
