;(function instalarDesafios(){
  "use strict";
  const JUSTIFICATIVAS={
    q01:{prompt:"Qual detalhe mostra que o acerto pode ter ocorrido por sorte?",opts:["O relógio estava parado, mas coincidia com a hora real.","A pessoa tinha consultado dois relógios confiáveis.","A pessoa sabia que o relógio funcionava corretamente.","Qualquer crença sobre horas é sempre falsa."],correct:0,why:"A coincidência não garante que a crença foi formada de maneira confiável."},
    q02:{prompt:"O que diferencia a atitude da pesquisadora de uma busca por confirmação?",opts:["Ela impede novas críticas.","Ela aceita testes capazes de contradizer sua hipótese.","Ela transforma os resultados em opiniões.","Ela conclui que todas as hipóteses são iguais."],correct:1,why:"O risco de refutação é central na proposta de Popper."},
    q03:{prompt:"Por que Descartes emprega a dúvida?",opts:["Para defender que os sentidos nunca existem.","Para aceitar toda tradição sem exame.","Para procurar um fundamento resistente à dúvida.","Para provar que discutir é inútil."],correct:2,why:"A dúvida é instrumento metódico para encontrar uma certeza."},
    q04:{prompt:"Qual pergunta torna explícita a objeção kantiana?",opts:["O benefício financeiro foi suficiente?","O grupo aprovou a decisão?","A informação trouxe alguma vantagem?","As pessoas foram respeitadas como fins, e não apenas como meios?"],correct:3,why:"O respeito à humanidade não se reduz a medir vantagens coletivas."},
    q05:{prompt:"Que distinção é necessária para avaliar a motivação?",opts:["Fazer algo correto externamente pode ser diferente de agir por dever.","A publicidade torna todas as ações imorais.","Não existe dever quando há testemunhas.","O dever é apenas uma forma de elogio."],correct:0,why:"Kant distingue conformidade ao dever e motivação pelo dever."},
    q06:{prompt:"Por que não conhecer a própria renda pode ajudar na escolha das regras?",opts:["Porque elimina toda desigualdade real.","Porque reduz a vantagem de decidir apenas pelo próprio interesse.","Porque prova que não existem diferenças sociais.","Porque substitui a necessidade de justificativas."],correct:1,why:"O véu da ignorância procura tornar a escolha de princípios mais imparcial."},
    q07:{prompt:"Por que materiais acessíveis podem ser necessários à justiça?",opts:["Porque todas as pessoas precisam receber recursos idênticos.","Porque a inclusão depende de uma única ferramenta.","Porque condições diferentes podem exigir apoios diferentes para participar.","Porque a acessibilidade elimina a necessidade de docentes."],correct:2,why:"A igualdade efetiva de participação não é sempre alcançada com tratamento idêntico."},
    q08:{prompt:"O que a análise de Beauvoir combate?",opts:["Toda reflexão sobre história.","A ideia de que a cultura influencia escolhas.","A investigação dos papéis sociais.","A ideia de que papéis sociais são destinos naturais imutáveis."],correct:3,why:"Beauvoir questiona a naturalização de expectativas sociais."},
    q17:{prompt:"Qual dado adicional seria mais decisivo entre duas teorias rivais?",opts:["A idade da pessoa que criou a teoria.","Um teste que produza previsões diferentes para as duas teorias.","A popularidade de cada teoria nas redes sociais.","Uma decisão tomada por votação sem evidências."],correct:1,why:"Um teste discriminante ajuda a diferenciar explicações compatíveis com dados anteriores."},
    q19:{prompt:"Qual afirmação evita simplificar demais o contraste entre teorias morais?",opts:["O utilitarismo nunca considera confiança.","Kant decide apenas pela quantidade de pessoas.","Ambas as teorias ignoram compromissos.","Consequências e deveres oferecem critérios distintos, mas podem exigir deliberação cuidadosa."],correct:3,why:"As teorias não produzem respostas automáticas para todos os casos."},
    e01:{prompt:"Qual limite deve ser lembrado ao avaliar a proposta do hospital?",opts:["Direitos e equidade também precisam ser considerados.","A escolha correta depende só da popularidade do gestor.","Uma soma de benefícios resolve toda questão de justiça.","Não existe dilema porque toda escolha é equivalente."],correct:0,why:"A análise de consequências não elimina considerações de direitos e justiça."},
    e02:{prompt:"Qual teste torna a análise mais próxima do imperativo categórico?",opts:["Perguntar se a mentira terá muitos compartilhamentos.","Perguntar se a regra da ação poderia valer para todas as pessoas.","Perguntar se a maioria está satisfeita.","Perguntar se a mentira parece gentil."],correct:1,why:"A universalização examina a máxima da ação, não apenas sua popularidade."},
    e03:{prompt:"O que falta na defesa da escola que oferece o mesmo material a todos?",opts:["Uma quantidade maior de provas orais.","Um único conteúdo para todas as necessidades.","Considerar as barreiras concretas de acesso e participação.","Eliminar o debate sobre justiça."],correct:2,why:"A igualdade formal não garante as condições efetivas de participação."},
    e04:{prompt:"Que atitude melhor expressa prudência nessa situação?",opts:["Revelar o segredo imediatamente.","Não ouvir as pessoas envolvidas.","Escolher a saída mais popular.","Examinar riscos, vínculos e alternativas proporcionais antes de agir."],correct:3,why:"A prudência exige deliberação concreta sobre circunstâncias e consequências."},
    c01:{prompt:"Qual procedimento aproxima o personagem de uma investigação crítica?",opts:["Comparar aparências com possíveis causas e evidências.","Aceitar sombras como explicações definitivas.","Evitar mudanças de opinião.","Considerar cada sombra uma prova completa."],correct:0,why:"A alegoria convida a examinar o que existe além das aparências."},
    c02:{prompt:"Por que a saída da caverna não representa aprendizagem instantânea?",opts:["Porque a visão nunca muda.","Porque compreender exige adaptação e reorientação gradual.","Porque conhecer depende apenas da memória.","Porque não há distinção entre ver e compreender."],correct:1,why:"O percurso é uma transformação do olhar e do pensamento."},
    c03:{prompt:"Qual problema aparece quando quem saiu retorna à caverna?",opts:["A impossibilidade de qualquer diálogo.","A obrigação de sempre concordar com a maioria.","A tensão entre compartilhar conhecimento e a resistência a novas ideias.","A prova de que toda discordância é irracional."],correct:2,why:"O retorno abre um problema educativo e político, não uma condenação de todo desacordo."},
    c04:{prompt:"Qual é a interpretação mais cuidadosa de uma alegoria filosófica?",opts:["Tratá-la como dado experimental sobre a internet.","Usá-la para descartar qualquer informação.","Transformá-la em prova literal de um caso atual.","Usá-la para levantar perguntas e comparar argumentos e evidências."],correct:3,why:"Uma analogia pode orientar a reflexão sem provar sozinha uma conclusão empírica."},
    l01:{prompt:"Qual contraexemplo derruba a conclusão sobre os quatro lados?",opts:["Um retângulo que não é quadrado tem quatro lados.","Todo quadrado tem quatro lados.","Um triângulo tem três lados.","Alguns quadrados possuem ângulos retos."],correct:0,why:"Ter quatro lados não é condição suficiente para ser quadrado."},
    l02:{prompt:"Qual estrutura expressa a dedução da porta?",opts:["Se P então Q; Q; logo P.","Se P então Q; não Q; logo não P.","Se P então Q; não P; logo não Q.","P ou Q; logo P e Q."],correct:1,why:"A segunda forma é a inferência válida chamada modus tollens."},
    l03:{prompt:"Qual cuidado lógico é decisivo com a palavra algumas?",opts:["Ela significa nenhuma.","Ela permite concluir todas.","Ela garante pelo menos um caso, sem autorizar generalização para todos.","Ela não tem importância para deduções."],correct:2,why:"Premissas existenciais não fundamentam uma conclusão universal."},
    l04:{prompt:"O que seria necessário para afastar a acusação de falso dilema?",opts:["Repetir as duas opções com mais força.","Desqualificar quem pergunta.","Pedir apoio de um grupo famoso.","Demonstrar que as duas alternativas esgotam as possibilidades relevantes."],correct:3,why:"Um falso dilema omite alternativas plausíveis sem justificativa."}
  };
  const JOGOS={
    duel:"Campanha progressiva e justificativas filosóficas em duas etapas.",
    cave:"Oito etapas, decisões fundamentadas e pistas estratégicas.",
    ethics:"Dilemas morais com uma segunda decisão para justificar sua análise.",
    memory:"Associe pensadores, ideias e obras; até doze pares.",
    timeline:"Ordene seis acontecimentos por rodada e escolha quando usar pistas.",
    escape:"Resolva portas lógicas e defenda a validade de seu raciocínio."
  };
  GAMES.forEach(g=>{if(JOGOS[g.id])g.desc=JOGOS[g.id]});

  // A ordem histórica é mantida, sem exibir datas como resposta.
  const a=TIMELINES.find(r=>r.id==='t01');
  const b=TIMELINES.find(r=>r.id==='t02');
  const c=TIMELINES.find(r=>r.id==='t03');
  if(a&&a.items.length===4){
    a.items.splice(3,0,["Agostinho — reflexões sobre memória e tempo","agostinho"],["Tomás de Aquino — filosofia e teologia medieval","aquino"]);
    a.hint="A filosofia grega veio antes das reflexões de Agostinho e Tomás de Aquino; o método cartesiano é moderno.";
  }
  if(b&&b.items.length===4){
    b.items.unshift(["Descartes publica Discurso do método","discurso1637"]);
    b.items.push(["Rawls publica Uma teoria da justiça","rawls1971"]);
    b.hint="Descartes escreveu antes de Hume; a obra de Rawls aparece depois da de Beauvoir.";
  }
  if(c&&c.items.length===4){
    c.items.unshift(["Hannah Arendt publica A condição humana","arendt1958"]);
    c.items.splice(4,0,["Judith Butler publica Problemas de gênero","butler1990"]);
    c.hint="Arendt escreveu antes de Rawls. Butler publicou depois do ensaio de Lélia Gonzalez.";
  }

  function iniciarEstado(s){
    if(!s)return;
    s.phase='question';
    s.hintsLeft=3;
    s.hintsUsed=0;
    s.hintSteps={};
    s.insight=0;
    s.reasonChoices={};
  }
  const inicioAnterior=startGame;
  startGame=function(id){
    if(id==='memory'){
      window.fsSetup='memory';
      session=null;
      page='setup';
      render();
      return;
    }
    window.fsSetup='duel';
    inicioAnterior(id);
    if(page==='play'&&session&&['cave','ethics','escape'].includes(id)){iniciarEstado(session);render(false);}
  };
  questionsSetup=function(){
    if(window.fsSetup==='memory'){
      return `<h1>Memória Filosófica</h1><p class="muted">Escolha a dificuldade. Todas as cartas ficam visíveis; você pode consultar Libras e jogar sem tempo limite.</p>`+
      viewWithSign(`<form id="memory-setup" class="panel stack">
      <label>Quantidade de pares <select id="pairs"><option value="8">Investigação · 8 pares</option><option value="12">Especialista · 12 pares</option></select></label>
      <label>Tipo de associação <select id="memory-mode"><option value="ideia">Pensador ↔ ideia</option><option value="obra">Pensador ↔ obra ou leitura de referência</option></select></label>
      <p class="notice">Em cada tentativa, selecione um pensador e a carta correspondente. Erros não encerram a partida.</p>
      <button class="primary" type="submit">Iniciar memória</button></form>`,'memory-instrucoes','Instruções da Memória Filosófica');
    }
    return `<h1>Duelo Filosófico</h1><p class="muted">Raciocínio e argumentação com justificativas em duas etapas. Não há cronômetro.</p>`+
      viewWithSign(`<form class="panel stack" id="quiz-setup">
      <label>Modalidade <select id="quiz-mode"><option value="campaign">Campanha · médio → avançado → especialista</option><option value="focus">Investigação por tema e nível</option></select></label>
      <label>Tema <select id="topic"><option value="all">Todos os temas</option>${[...new Set(QUESTIONS.map(q=>q.topic))].map(t=>`<option>${esc(t)}</option>`).join('')}</select></label>
      <label>Dificuldade <select id="level"><option>Especialista</option><option>Avançado</option><option>Médio</option><option value="all">Todos os níveis</option></select></label>
      <p id="mode-info" class="notice"></p><button class="primary" type="submit">Iniciar desafio</button><p id="setup-msg" role="status"></p></form>`,'duel-instrucoes','Instruções do Duelo Filosófico');
  };
  bindSetup=function(){
    const memoryForm=$('#memory-setup');
    if(memoryForm){
      memoryForm.onsubmit=e=>{
        e.preventDefault();
        const count=Number($('#pairs').value);
        const modo=$('#memory-mode').value;
        const pensadores=shuffle(PEOPLE).slice(0,Math.min(count,PEOPLE.length));
        const cards=shuffle(pensadores.flatMap(p=>[
          {key:p[0],text:p[1],type:'Pensador'},
          {key:p[0],text:modo==='obra'?p[5]:p[4],type:modo==='obra'?'Obra / leitura':'Ideia'}
        ]));
        session={kind:'memory',name:'Memória Filosófica',cards,pairs:pensadores.length,memoryMode:modo,missed:[],selected:[],matched:[],attempts:0,complete:false};
        page='play';render();
      };
      return;
    }
    const form=$('#quiz-setup');
    if(!form)return;
    const modo=$('#quiz-mode');
    const atualizar=()=>{
      const campanha=modo.value==='campaign';
      $('#topic').disabled=campanha;
      $('#level').disabled=campanha;
      $('#mode-info').textContent=campanha?'A campanha seleciona quatro perguntas por nível, passando de médio a especialista.':'Escolha um tema e nível para investigar com até doze perguntas.';
    };
    modo.onchange=atualizar;
    atualizar();
    form.onsubmit=e=>{
      e.preventDefault();
      const campanha=modo.value==='campaign';
      let items;
      if(campanha){
        items=['Médio','Avançado','Especialista'].flatMap(n=>shuffle(QUESTIONS.filter(q=>q.level===n)).slice(0,4));
      }else{
        const t=$('#topic').value,l=$('#level').value;
        items=shuffle(QUESTIONS.filter(q=>(t==='all'||q.topic===t)&&(l==='all'||q.level===l))).slice(0,12);
      }
      if(!items.length){$('#setup-msg').textContent='Não há perguntas nesta combinação. Selecione outra opção.';return}
      session={kind:'duel',name:'Duelo Filosófico',items,i:0,chosen:null,score:0,answers:[],complete:false,campaign:campanha};
      iniciarEstado(session);
      page='play';render();
    };
  };
  const memoryAnterior=memory;
  memory=function(){
    let html=memoryAnterior();
    const obra=session.memoryMode==='obra';
    html=html.replace('<h2>Associe pensador e ideia</h2>',`<h2>Associe pensador e ${obra?'obra':'ideia'}</h2>`);
    html=html.replace('Associe cada pensador à descrição de sua posição filosófica.',obra?'Associe cada pensador à sua obra ou leitura de referência.':'Associe cada pensador à descrição de sua posição filosófica.');
    return html;
  };
  quiz=function(){
    const s=session,q=s.items[s.i],r=JUSTIFICATIVAS[q.id];
    const fase=s.phase||(s.chosen!==null?'feedback':'question');
    const etapa=s.kind==='cave'?['Sombras','A saída','O retorno','Metáforas e investigação','Hipóteses rivais','Aprender e compreender','Poder e representação','Autocrítica'][s.i]:s.kind==='escape'?'Porta '+(s.i+1)+' de '+s.items.length:'';
    const titulo=fase==='reason'?'Justifique sua decisão':q.prompt;
    const opts=fase==='reason'?r.opts:q.opts;
    const usado=!!s.hintSteps?.[s.i];
    let conteudo=`<div class="panel"><div class="taglist">
      <span class="pill">${esc(q.topic)}</span><span class="pill">${esc(q.level)}</span>
      <span class="pill">Acertos de primeira: ${s.score}</span>
      <span class="pill">Justificativas corretas: ${s.insight||0}</span>
      <span class="pill">Pistas: ${s.hintsLeft??3}</span></div>`;
    if(s.campaign)conteudo+=`<p class="eyebrow" style="margin-top:12px">Campanha · etapa ${esc(q.level)}</p>`;
    if(etapa)conteudo+=`<p class="eyebrow" style="margin-top:12px">${esc(etapa)}</p>`;
    if(['cave','escape'].includes(s.kind))conteudo+=`<div class="art" style="background:#26233d;border-radius:12px;margin:10px 0;display:grid;place-items:center">${art(s.kind==='cave'?'cave':'temple')}</div>`;
    if(fase!=='feedback'){
      if(fase==='reason')conteudo+='<p class="notice">Sua primeira resposta foi registrada. Agora escolha a justificativa mais consistente, antes de conferir as explicações.</p>';
      conteudo+=`<h2 id="question" tabindex="-1" style="margin-top:15px">${esc(titulo)}</h2>`;
      if(fase==='question'){
        conteudo+=`<div class="row"><button id="show-hint" ${usado||s.hintsLeft===0?'disabled':''}>${usado?'Pista consultada':s.hintsLeft===0?'Pistas esgotadas':'Consultar pista (−1)'}</button><small>${s.hintsLeft} pista(s) restante(s) nesta partida</small></div>`;
        if(usado)conteudo+=`<div class="notice" id="hint-panel" tabindex="-1"><strong>Pista:</strong> ${esc(q.help)}</div>`;
      }
      conteudo+=`<div class="answers" role="group" aria-labelledby="question">${opts.map((op,i)=>`<button class="answer" data-${fase==='reason'?'reason':'answer'}="${i}" ${fase==='question'&&s.kind==='escape'&&s.retrying&&s.failedChoice===i?'disabled':''}><span class="letter">${'ABCD'[i]}.</span><span>${esc(op)}</span></button>`).join('')}</div>`;
      if(fase==='question'&&s.kind==='escape'&&s.retrying)conteudo+='<div class="notice" id="logic-retry" tabindex="-1">A primeira tentativa não abriu a porta. Reexamine as premissas. A alternativa anterior está indisponível.</div>';
      if(fase==='reason')conteudo+='<p class="muted">Escolha uma justificativa. Ela vale pontos de domínio adicionais.</p>';
    }else{
      const originalCorreta=s.chosen===q.correct;
      conteudo+=`<div class="feedback ${originalCorreta?'good':'bad'}" id="feedback" tabindex="-1"><h3>${originalCorreta?'✓ Resposta correta':'✗ Resposta para revisar'}</h3>
        <p><strong>Alternativa ${'ABCD'[q.correct]}:</strong> ${esc(q.opts[q.correct])}</p><p>${esc(q.why)}</p>`;
      if(r){
        const escolha=s.reasonChoices?.[s.i];
        const acertou=escolha===r.correct;
        conteudo+=`<h3>${acertou?'✓ Justificativa consistente':'Justificativa para revisar'}</h3>
        <p><strong>Alternativa ${'ABCD'[r.correct]}:</strong> ${esc(r.opts[r.correct])}</p><p>${esc(r.why)}</p>`;
      }
      if(usado)conteudo+='<small>Você consultou a pista nesta etapa.</small>';
      conteudo+='</div>';
      conteudo+=`<button class="primary" id="next">${s.i===s.items.length-1?'Ver resultado':'Continuar →'}</button>`;
    }
    conteudo+='</div>';
    return gameTop(s.i+1,s.items.length)+viewWithSign(conteudo,`${q.id}-${fase==='feedback'?'explicacao':fase==='reason'?'justificativa':'pergunta'}`,fase==='reason'?'Escolha a justificativa':fase==='feedback'?'Explicação da resposta':'Pergunta e alternativas');
  };
  bindQuiz=function(){
    const s=session;
    const pista=$('#show-hint');
    if(pista)pista.onclick=()=>{
      if(s.hintSteps[s.i]||s.hintsLeft<=0)return;
      s.hintSteps[s.i]=true;s.hintsLeft--;s.hintsUsed++;
      render(false);
      $('#hint-panel')?.focus();
      announce('Pista consultada. Restam '+s.hintsLeft+'.');
    };
    document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{
      if(s.phase!=='question'||s.chosen!==null)return;
      const q=s.items[s.i];
      s.chosen=Number(b.dataset.answer);
      const ok=s.chosen===q.correct;
      if(s.kind==='escape'&&!ok&&!s.retrying){
        s.failedChoice=s.chosen;s.chosen=null;s.retrying=true;
        render(false);$('#logic-retry')?.focus();
        announce('Primeira tentativa não abriu a porta. Tente outra alternativa.');
        return;
      }
      if(ok&&!s.retrying)s.score++;
      s.answers[s.i]={id:q.id,topic:q.topic,correct:ok&&!s.retrying};
      s.phase=JUSTIFICATIVAS[q.id]?'reason':'feedback';
      render(false);
      if(s.phase==='reason')$('#question')?.focus();
      else $('#feedback')?.focus();
    });
    document.querySelectorAll('[data-reason]').forEach(b=>b.onclick=()=>{
      if(s.phase!=='reason')return;
      const q=s.items[s.i],r=JUSTIFICATIVAS[q.id];
      const choice=Number(b.dataset.reason),correct=choice===r.correct;
      s.reasonChoices[s.i]=choice;
      if(correct)s.insight++;
      if(s.answers[s.i])s.answers[s.i].reasoningCorrect=correct;
      s.phase='feedback';
      render(false);$('#feedback')?.focus();
      announce(correct?'Justificativa correta.':'Justificativa para revisar.');
    });
    const proximo=$('#next');
    if(proximo)proximo.onclick=()=>{
      if(s.i+1===s.items.length){finish(s.score,s.items.length);return}
      s.i++;s.chosen=null;s.phase='question';s.retrying=false;s.failedChoice=null;
      render();
    };
  };
  const timelineAnterior=timeline;
  timeline=function(){
    const s=session,r=s.rounds[s.i];
    let html=timelineAnterior();
    if(!s.checked&&r.hint){
      const visto=!!s.timelineHints?.[s.i];
      const botao=`<div class="row"><button id="timeline-hint" ${visto?'disabled':''}>${visto?'Pista consultada':'Consultar pista histórica'}</button><small>É opcional; desafios corretos sem pista ganham bônus ao final.</small></div>${visto?`<div id="timeline-hint-text" class="notice" tabindex="-1">${esc(r.hint)}</div>`:''}`;
      html=html.replace('<div class="order">',botao+'<div class="order">');
    }
    return html;
  };
  const bindTimelineAnterior=bindTimeline;
  bindTimeline=function(){
    bindTimelineAnterior();
    const botao=$('#timeline-hint');
    if(botao)botao.onclick=()=>{
      session.timelineHints ||= {};
      if(session.timelineHints[session.i])return;
      session.timelineHints[session.i]=true;
      session.timelineHintsUsed=(session.timelineHintsUsed||0)+1;
      render(false);$('#timeline-hint-text')?.focus();
    };
  };
  const textoRybenaAnterior=currentRybenaText;
  currentRybenaText=function(){
    if(page==='setup'&&window.fsSetup==='memory')return 'Escolha a quantidade de pares e o tipo de associação. Não há cronômetro.';
    if(page==='play'&&session){
      if(session.kind==='memory')return session.preview?session.preview.type+'. '+session.preview.text:'Associe pensadores a '+(session.memoryMode==='obra'?'obras ou leituras de referência':'ideias')+'. Encontre '+session.pairs+' pares. As cartas ficam visíveis.';
      if(session.kind==='timeline'&&!session.checked&&session.timelineHints?.[session.i])return textoRybenaAnterior()+' Pista: '+session.rounds[session.i].hint;
      if(session.items&&session.phase==='reason'){
        const r=JUSTIFICATIVAS[session.items[session.i].id];
        if(r)return r.prompt+' '+r.opts.map((v,i)=>'Alternativa '+'ABCD'[i]+'. '+v).join('. ');
      }
    }
    return textoRybenaAnterior();
  };
  finish=function(score,total){
    if(session.complete)return;
    const s=session;
    s.complete=true;
    const bonus=(s.insight||0)*35+(s.kind==='memory'&&s.pairs>=12?120:0)
      +(s.kind==='timeline'&&score===total&&!(s.timelineHintsUsed||0)?100:0)
      +(s.kind==='duel'&&s.campaign&&score===total?150:0);
    s.result={score,total,xp:50+score*100+bonus,bonus};
    stats.xp+=s.result.xp;
    stats.history.unshift({name:s.name,kind:s.kind,date:new Date().toISOString(),score,total,xp:s.result.xp,
      answers:s.answers?.filter(Boolean)||[],insight:s.insight||0,hintsUsed:(s.hintsUsed||0)+(s.timelineHintsUsed||0),
      mode:s.kind==='memory'?s.memoryMode:s.campaign?'campanha':'livre'});
    save('fs2-stats',stats);render();
    announce('Partida concluída. '+score+' de '+total);
  };
  const resultadoAnterior=result;
  result=function(){
    let html=resultadoAnterior();
    const s=session,r=s.result;
    const explicacao=`<div class="notice"><p><strong>Desempenho estratégico</strong></p>
      <p>Justificativas corretas: <strong>${s.insight||0}</strong> · Pistas utilizadas: <strong>${(s.hintsUsed||0)+(s.timelineHintsUsed||0)}</strong></p>
      <p>Bônus por desafios avançados: <strong>+${r.bonus||0} XP</strong>. A pontuação principal considera os acertos da primeira tentativa.</p></div>`;
    return html.replace('<div class="row"><button data-go="games"',explicacao+'<div class="row"><button data-go="games"');
  };
  BADGES.push(
    ['Argumentação profunda','Acertar 10 justificativas filosóficas','❖',s=>s.history.reduce((n,h)=>n+(h.insight||0),0)>=10],
    ['Grande memória','Concluir uma partida de memória com 12 pares','▣',s=>s.history.some(h=>h.kind==='memory'&&h.total>=12)],
    ['Jornada completa','Concluir uma campanha de Duelo Filosófico','✧',s=>s.history.some(h=>h.kind==='duel'&&h.mode==='campanha')]
  );
})();
