/* FiloSinal Translator — resolução de traduções humanas já aprovadas, sem tradução generativa. */
function normalize(s){return String(s??"").normalize("NFC").toLocaleLowerCase("pt-BR").trim().replace(/\s+/g," ")}
function exactMatch(entries,text){const t=normalize(text);return t?entries.filter(e=>normalize(e.text)===t||normalize(e.id)===t):[]}
function approvedAsset(entry,manifest){const m=manifest[entry.id];if(!m||m.status!=="approved"||typeof m.credit!=="string"||!m.credit.trim()||typeof m.permission!=="string"||!m.permission.trim()||typeof m.reviewer!=="string"||!m.reviewer.trim()||m.text!==entry.text)return null;if(m.video!=="videos/"+entry.id+".mp4")return null;return m}
function keywords(text,entries){const terms=entries.filter(e=>e.id.startsWith("term-")).map(e=>({id:e.id,label:e.text.split(/[.:]/)[0].trim()}));const n=normalize(text);return terms.filter(t=>t.label.length>2&&n.includes(normalize(t.label)))}
window.FST={normalize,exactMatch,approvedAsset,keywords};
