# P&C Mãos com Alma — Como editar

Este projeto está separado em **HTML**, **CSS** e **JavaScript**:
- `index.html` — estrutura do site
- `styles.css` — cores e layout (tons de rosa)
- `script.js` — interações (menu, copiar WhatsApp, etc.)

## 1) Coloca os teus links
No `index.html`, procura por `Instagram`, `Facebook`, `TikTok` e troca o `href="#"` pelos teus links reais.

## 2) Número do WhatsApp
- Em `index.html` e `script.js` substitui **351XXXXXXXXX** pelo número real (com indicativo de Portugal 351 se quiseres manter).

## 3) Catálogo
- Se o ZIP que enviaste tinha imagens, copiei até 9 para a pasta `assets/`. Elas já aparecem no catálogo.
- Para adicionar mais, coloca as tuas fotos em `assets/` e duplica um `<article class="card">` dentro da grelha no `index.html`.

## 4) Cores
- Queres mudar o tom de rosa? Abre `styles.css` e ajusta as variáveis `--pink-*` e `--surface`.

## 5) Publicar
- Sobe estes 3 ficheiros + a pasta `assets/` para o teu alojamento (Netlify, GitHub Pages, Vercel ou outro).
- O ficheiro `index.html` deve ficar na raiz do site.

## 6) Estrutura
```
pc-maos-com-alma-site/
├─ index.html
├─ styles.css
├─ script.js
└─ assets/ (imagens)
```

Dúvidas? Diz-me o link/ficheiros e ajusto contigo.
