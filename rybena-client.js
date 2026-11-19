/* Inicializador compartilhado da API Rybená. */
(function(){
'use strict';
const script=document.getElementById('rybena-script');
let api=null,registered=false,networkError=false,lastError=null;
function probe(){
 if(api||registered||networkError)return;
 try{
  if(typeof RybenaApi==='undefined')return;
  const candidate=RybenaApi.getInstance();
  if(!candidate||typeof candidate.handleLoaded!=='function')return;
  registered=true;lastError=null;
  candidate.handleLoaded(()=>{api=candidate});
 }catch(e){registered=false;lastError=e}
}
if(script){script.addEventListener('load',probe);script.addEventListener('error',()=>{networkError=true})}
document.addEventListener('DOMContentLoaded',probe,{once:true});
function status(){return api?'API pronta':networkError?'Falha no download do script':lastError?'Falha na inicialização: '+(lastError.message||lastError.name):registered?'Aguardando evento de prontidão':'Aguardando a API'}
function ready(timeout=45000){
 if(api)return Promise.resolve(api);
 return new Promise((resolve,reject)=>{
  let poll=0,timer=0,done=false;
  function finish(err){if(done)return;done=true;clearInterval(poll);clearTimeout(timer);err?reject(err):resolve(api)}
  function check(){probe();if(api)finish();else if(networkError)finish(Error('Script oficial não carregado. Confira conexão e bloqueadores; recarregue a página.'))}
  poll=setInterval(check,200);timer=setTimeout(()=>finish(Error(status()+'. Confirme a liberação do domínio com o suporte.')),timeout);check();
 });
}
window.FSRybena={ready,status,probe};probe();
})();