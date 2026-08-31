const fs = require('fs');

// Double decode
let html = fs.readFileSync('C:/mycelium/maderart/index.html', 'latin1');
let utf8Html = Buffer.from(html, 'latin1').toString('utf8');
let fixedHtml = Buffer.from(utf8Html, 'latin1').toString('utf8');

// Fix broken em-dash and artifacts
fixedHtml = fixedHtml.replace(/Maderart \ufffd  Marcenaria/g, 'Maderart — Marcenaria');
fixedHtml = fixedHtml.replace(/Maderart \?  Marcenaria/g, 'Maderart — Marcenaria');
fixedHtml = fixedHtml.replace(/Maderart . Marcenaria/g, 'Maderart — Marcenaria');
fixedHtml = fixedHtml.replace(//g, '—');

// Apply branding changes
fixedHtml = fixedHtml.replace(/Marcenaria artesanal/g, 'Marcenaria Rústica e Planejada');
fixedHtml = fixedHtml.replace(/Marcenaria Artesanal/g, 'Rústico e Planejado');
fixedHtml = fixedHtml.replace(/Maderart — Marcenaria Rústica e Planejada com as madeiras/g, 'Maderart — Rústico e Planejado com as madeiras');

// Apply Mobile CSS fixes
fixedHtml = fixedHtml.replace(
    'h1.hero-h1{font-size:clamp(3rem,6vw,5.8rem);color:#fff;line-height:1.0;margin-bottom:10px;}', 
    'h1.hero-h1{font-size:clamp(2.5rem,6vw,5.8rem);color:#fff;line-height:1.1;margin-bottom:10px;word-break:break-word;}'
);
fixedHtml = fixedHtml.replace(
    '.hero-content { padding: 0 20px; text-align: left; max-width: 100%; top: 55%; }', 
    '.hero-content { padding: 0 20px; text-align: left; max-width: 100%; top: 50%; transform: translateY(-50%); }'
);
fixedHtml = fixedHtml.replace(
    'h1.hero-h1 { font-size: 2.2rem; line-height: 1.2; word-wrap: break-word; }', 
    'h1.hero-h1 { font-size: 2rem; line-height: 1.1; word-wrap: break-word; overflow-wrap: break-word; }'
);

fs.writeFileSync('C:/mycelium/maderart/index.html', fixedHtml, 'utf8');
console.log('Fixed and saved');