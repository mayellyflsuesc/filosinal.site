'use strict';
(function(){
const $=id=>document.getElementById(id),entries=window.FST_CATALOG||[],manifest=window.FST_MEDIA||{},core=window.FST;
try{const p=JSON.parse(localStorage.getItem('fs2-prefs')||'{}');if(['light','contrast'].includes(p.theme))document.body.classList.add(p.theme);if(p.large)document.body.classList.add('large');if(p.relaxed)document.body.classList.add('relaxed')}catch{}
if(!core||!entries.length){$('loading').textContent='Não foi possível carregar o catálogo. Reabra a página com conexão à internet.';return}
let scoped=null;
try{scoped=decodeURIComponent(location.hash.slice(1))||null}catch{}
const relevant=scoped?entries.filter(e=>e.id===scoped):entries;
const byId=new Map(relevant.map(e=>[e.id,e]));let video=null;
function opt(value,text){const o=document.createElement('option');o.value=value;o.textContent=text;return o}
function options(){const selected=$('cat').value;$('entry').replaceChildren(opt('','Selecione um conteúdo…'),...relevant.filter(e=>!selected||e.category===selected).map(e=>opt(e.id,e.id+' — '+e.text.split('\n')[0].slice(0,100))))}
function clearPlayer(message){if(video){video.pause();video.removeAttribute('src');video.load();video=null}const box=document.createElement('div'),symbol=document.createElement('div'),title=document.createElement('strong'),p=document.createElement('p');symbol.className='stage-symbol';symbol.setAttribute('aria-hidden','true');symbol.textContent='✦';title.textContent='Sem vídeo disponível';p.className='muted';p.textContent=message;box.append(symbol,title,p);$('stage').replaceChildren(box);$('play').disabled=$('repeat').disabled=true;$('credit').textContent=''}
function showTerms(text){const holder=$('keywords');holder.replaceChildren();const matches=core.keywords(text,entries);if(!matches.length){holder.textContent='Nenhum termo do glossário identificado no texto.';return}for(const term of matches){const a=document.createElement('a');a.href='https://signbank.levantelab.com.br/pt';a.target='_blank';a.rel='noopener noreferrer';a.textContent=term.label+' ↗';a.title='Pesquise '+term.label+' no SignBank';holder.append(a)}}
function show(entry){$('input').value=entry.text;$('entry').value=entry.id;showTerms(entry.text);const m=core.approvedAsset(entry,manifest);$('searchmsg').textContent='Conteúdo localizado: '+entry.id;if(!m){clearPlayer('A tradução deste conteúdo ainda não foi aprovada no acervo.');$('player-status').textContent='Pendente de gravação e validação. Nenhum movimento é gerado por aproximação.';return}
clearPlayer('Carregando gravação…');const v=document.createElement('video');v.controls=true;v.playsInline=true;v.preload='metadata';v.setAttribute('aria-label','Tradução em Libras: '+entry.id);v.src='./'+m.video;v.playbackRate=Number($('speed').value);video=v;$('stage').replaceChildren(v);$('player-status').textContent='Carregando vídeo autorizado…';$('credit').textContent='Crédito: '+m.credit+' · Revisão: '+m.reviewer+' · Permissão: '+m.permission;
v.addEventListener('loadedmetadata',()=>{if(video!==v)return;$('player-status').textContent='Tradução cadastrada disponível.';$('play').disabled=$('repeat').disabled=false});v.addEventListener('error',()=>{if(video!==v)return;clearPlayer('O arquivo não carregou. Verifique a conexão.');$('player-status').textContent='Falha ao carregar a gravação cadastrada.'});}
$('cat').append(opt('','Todas as categorias'),...[...new Set(relevant.map(e=>e.category))].map(x=>opt(x,x)));options();
$('cat').onchange=options;$('entry').onchange=()=>{const e=byId.get($('entry').value);if(e)show(e)};
$('find').onclick=()=>{const typed=$('input').value,results=core.exactMatch(relevant,typed);if(results.length===1){show(results[0]);return}clearPlayer('Não existe tradução aprovada para este texto.');showTerms(typed);$('searchmsg').textContent=results.length?'Há mais de um conteúdo igual; selecione um código no catálogo.':'Texto sem correspondência exata no catálogo.';$('player-status').textContent='Sem tradução cadastrada. Não é uma tradução automática.'};
$('input').addEventListener('input',()=>{clearPlayer('Consulte o novo texto antes de reproduzir.');$('player-status').textContent='Texto alterado. Consulte novamente.';$('searchmsg').textContent='';$('keywords').replaceChildren()});
$('reset').onclick=()=>{$('input').value='';$('entry').value='';$('searchmsg').textContent='';$('keywords').replaceChildren();clearPlayer('Selecione um conteúdo.');$('player-status').textContent='Aguardando consulta.'};
$('speed').onchange=()=>{if(video)video.playbackRate=Number($('speed').value)};
$('play').onclick=()=>{if(!video)return;if(video.paused)video.play().catch(()=>{$('player-status').textContent='Não foi possível iniciar o vídeo.'});else video.pause()};
$('repeat').onclick=()=>{if(video){video.currentTime=0;video.play().catch(()=>{})}};
$('count').textContent=entries.filter(e=>core.approvedAsset(e,manifest)).length+' / '+entries.length+' cadastrados';
$('loading').hidden=true;$('content').hidden=false;
if(scoped){$('filters').hidden=true;$('reset').hidden=true;$('input').readOnly=true;const item=byId.get(scoped);if(item)show(item);else{$('find').disabled=true;$('player-status').textContent='Conteúdo não localizado no acervo. Retorne ao jogo.'}}
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();