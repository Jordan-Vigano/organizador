# Ficha de direção — Organizador

Criada em 26/11/2026 com a skill `estudio-design` (pesquisa: ui-ux-pro-max; ideia visual: frontend-design).
Fonte única para qualquer mudança visual no app: mudou aqui, muda no `index.html`, e vice-versa.

- **Peça:** app kanban pessoal (`index.html`) · **Onde:** PC (Chrome, janela de app) e celular (tela inicial).
- **Público e objetivo:** só o dono. Ver de relance o que está em andamento e não pegar coisa demais ao mesmo tempo.
- **Marca:** ícone de 3 barras decrescentes em verde (`icon.svg`); o mesmo desenho no logo do topo.
- **Estilo:** minimalismo suíço calmo: funcional, pouco enfeite, contraste bom, cinza-esverdeado frio.
- **Personalidade (o único ponto ousado):** a coluna **Fazendo** é o centro: fundo verde suave, título em verde e um
  medidor de 3 vagas (fica vermelho se passar do limite). Todo o resto fica quieto.
- **Cores (tokens no `:root`):**

  | Token | Claro | Escuro |
  |---|---|---|
  | `--bg` fundo | `#eef1ef` | `#0f1312` |
  | `--surface` cartão | `#ffffff` | `#1a201e` |
  | `--col` coluna | `#e2e7e4` | `#151a18` |
  | `--col-focus` coluna Fazendo | `#d9e7e0` | `#16251f` |
  | `--text` | `#16201c` | `#e6ece9` |
  | `--muted` | `#56635d` | `#97a59f` |
  | `--accent` destaque | `#2f5d50` | `#7fbfa9` |
  | `--accent-soft` | `#c9ddd4` | `#2a4a3f` |
  | `--danger` | `#b3261e` | `#ee7a71` |

  Cores das áreas (Trabalho, Projetos…) são do usuário e ficam só na barrinha e no nome da área.
- **Tipografia:** Plus Jakarta Sans 400–700, arquivo local em `fonts/` (funciona offline). Base 14,5 px; títulos
  de coluna 15 px/700 em caixa normal; campos com 16 px no celular (evita zoom no iPhone).
- **Forma:** raio 12 px colunas, 8 px cartões e botões, 999 px chips; sombra mínima; espaçamento 4/6/8/12/16.
- **Ícones:** SVG traço 2 px (estilo Lucide) pela função `icon()`; nada de emoji como ícone.
- **Tom do texto:** direto, frases curtas, sem jargão.
- **Evitar:** fundo creme, títulos em CAIXA ALTA, emojis como ícone, travessão "—" nas mensagens da interface,
  animações decorativas.
- **Pronto quando:** funciona em 390 px e 1440 px, claro e escuro, foco visível no teclado, toque ≥ 44 px no
  celular, contraste AA, `prefers-reduced-motion` respeitado.
