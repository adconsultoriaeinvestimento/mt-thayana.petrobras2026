
 // COLE AQUI A URL DO SEU GOOGLE APPS SCRIPT WEB APP
const GOOGLE_SHEET_LINK = 'https://docs.google.com/spreadsheets/d/1GbX2BC9KPjI2hVt-3ZxPMOB7aSADXX8gJ7NA5rniD-U/edit?usp=sharing';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBcyHBbMdGxHi3gPrf14heZLbDZmZ4uVl9QXQsar8/dev';


const subjects = [
  {name:'Português Cesgranrio',topics:['Interpretação de texto','Concordância verbal e nominal','Crase','Pontuação','Regência verbal e nominal','Verbos','Coesão e coerência','Reescrita de frases'],links:[['Português Cesgranrio Petrobras','https://www.youtube.com/results?search_query=portugues+cesgranrio+petrobras'],['Questões Cesgranrio','https://www.qconcursos.com/questoes-de-concursos/bancas/cesgranrio']]},
  {name:'Redes de Computadores',topics:['Modelo OSI','TCP/IP','IPv4 e IPv6','VLAN','DNS','DHCP','NAT','VPN','Cabeamento','Switches e roteadores','Firewall','Troubleshooting'],links:[['Curso Redes Completo','https://www.youtube.com/results?search_query=curso+redes+de+computadores+completo'],['Subnetting IPv4','https://www.youtube.com/results?search_query=subnetting+ipv4']]},
  {name:'Suporte Técnico e ITIL',topics:['Service Desk','SLA','Incidentes','Requisições','Atendimento ao usuário','Troubleshooting','Hardware','Impressoras','Office 365','Active Directory'],links:[['ITIL Foundation','https://www.youtube.com/results?search_query=itil+foundation+curso'],['Active Directory','https://www.youtube.com/results?search_query=active+directory+curso']]},
  {name:'Linux',topics:['Comandos básicos','Permissões','Usuários e grupos','SSH','Serviços','Processos','Shell script','Gerenciamento de pacotes','Firewall'],links:[['Linux para Iniciantes','https://www.youtube.com/results?search_query=linux+para+iniciantes'],['Linux Server','https://www.youtube.com/results?search_query=linux+server+curso']]},
  {name:'Segurança da Informação',topics:['LGPD','Backup','Antivírus','Firewall','Phishing','Malware','VPN','Controle de acesso','Segurança de rede'],links:[['Segurança da Informação','https://www.youtube.com/results?search_query=seguranca+da+informacao+curso']]},
  {name:'Banco de Dados SQL',topics:['SELECT','WHERE','JOIN','GROUP BY','UPDATE','DELETE','Backup','Modelagem','Chaves primárias e estrangeiras'],links:[['SQL Completo','https://www.youtube.com/results?search_query=curso+sql+completo'],['MySQL Workbench','https://www.youtube.com/results?search_query=mysql+workbench+curso']]},
  {name:'Informática',topics:['Windows','Pacote Office','Navegadores','Cloud','Compartilhamento','Microsoft 365','Google Workspace','Arquivos e permissões'],links:[['Informática para Concursos','https://www.youtube.com/results?search_query=informatica+para+concursos']]},
  {name:'Raciocínio Lógico',topics:['Proposições','Tabela verdade','Porcentagem','Sequências','Probabilidade','Diagramas lógicos','Conjuntos'],links:[['Raciocínio Lógico','https://www.youtube.com/results?search_query=raciocinio+logico+concursos']]}
];

const templates = {
'Português Cesgranrio':[
['Assinale a alternativa com concordância correta.',['Houveram falhas no sistema.','Existia problemas na rede.','Devem existir soluções para o chamado.','Fazem dois anos que estudo.'],2],
['O uso da crase está correto em:',['Vou à unidade da Petrobras.','Vou á unidade da Petrobras.','Vou a à unidade.','Vou para à prova.'],0],
['Em “Os técnicos resolveram o chamado rapidamente”, o advérbio é:',['técnicos','chamado','rapidamente','resolveram'],2],
['A palavra “informática” é classificada quanto à tonicidade como:',['oxítona','paroxítona','proparoxítona','monossílaba'],2],
['A frase “Embora estivesse cansada, continuou estudando” expressa ideia de:',['causa','concessão','conclusão','tempo'],1],
['A forma correta é:',['excessão','exceção','exessão','execeção'],1],
['Em “Os sistemas foram atualizados”, a voz verbal é:',['ativa','passiva','reflexiva','nominal'],1],
['A alternativa correta quanto à regência é:',['Assisti o treinamento.','Assisti ao treinamento.','Assisti no treinamento.','Assisti para o treinamento.'],1],
['O sinônimo de “aprimorar” é:',['piorar','desenvolver','apagar','reduzir'],1],
['Em “Todos os candidatos estudaram”, o sujeito é:',['oculto','composto','simples','inexistente'],2]
],
'Redes de Computadores':[
['Qual camada do modelo OSI trata do endereçamento IP?',['Física','Enlace','Rede','Aplicação'],2],
['O protocolo usado para resolução de nomes de domínio é:',['DHCP','DNS','FTP','SSH'],1],
['O DHCP é responsável por:',['atribuir IP automaticamente','criptografar e-mails','criar páginas HTML','formatar discos'],0],
['O NAT permite:',['traduzir endereços privados para públicos','apagar logs','substituir antivírus','criar usuários Linux'],0],
['A VLAN é usada principalmente para:',['segmentar redes logicamente','aumentar memória RAM','instalar banco de dados','editar documentos'],0],
['O protocolo seguro para acesso remoto em terminal é:',['Telnet','SSH','FTP','HTTP'],1],
['IPv6 possui endereços de:',['32 bits','64 bits','128 bits','256 bits'],2],
['O equipamento usado para encaminhar pacotes entre redes diferentes é:',['hub','roteador','teclado','monitor'],1],
['O comando ping testa:',['conectividade de rede','velocidade de impressão','memória do servidor','licença de software'],0],
['O firewall atua principalmente em:',['filtragem de tráfego','compressão de arquivo','edição de planilha','backup físico'],0]
],
'Suporte Técnico e ITIL':[
['No ITIL, incidente é:',['interrupção ou redução de qualidade de serviço','compra de equipamento','contrato de internet','documento fiscal'],0],
['SLA significa:',['Service Level Agreement','System Login Access','Secure Local Area','Software Link Admin'],0],
['A primeira etapa no atendimento de suporte deve ser:',['entender e registrar o problema','formatar o computador imediatamente','ignorar o usuário','trocar todo o hardware'],0],
['Active Directory é usado para:',['gerenciar usuários e recursos de rede','editar imagens','criar vídeos','calcular imposto'],0],
['Um chamado deve conter:',['descrição, prioridade e histórico','apenas nome do usuário','somente telefone','apenas data'],0],
['Troubleshooting significa:',['diagnóstico e solução de problemas','venda de produto','criação de layout','instalação elétrica'],0],
['A prioridade de um chamado considera geralmente:',['impacto e urgência','cor do monitor','marca do teclado','tamanho do e-mail'],0],
['Office 365 é exemplo de:',['suíte de produtividade em nuvem','sistema operacional Linux','protocolo de rede','linguagem SQL'],0],
['Backup antes de manutenção é importante para:',['reduzir risco de perda de dados','aumentar brilho da tela','limpar gabinete','trocar senha do Wi-Fi'],0],
['Impressora em rede pode ser instalada via:',['IP ou servidor de impressão','somente Bluetooth','apenas cabo HDMI','somente BIOS'],0]
],
'Linux':[
['O comando que lista arquivos no Linux é:',['ls','cd','mkdir','pwd'],0],
['O comando para mudar de diretório é:',['cd','ls','rm','cat'],0],
['Permissão 755 geralmente significa:',['dono executa/escreve/lê e demais leem/executam','todos sem acesso','somente escrita','apenas root lê'],0],
['O comando para ver o caminho atual é:',['pwd','whoami','grep','nano'],0],
['SSH é usado para:',['acesso remoto seguro','editar imagem','abrir planilha','compactar vídeo'],0],
['O usuário administrador no Linux é:',['root','admin.exe','system32','guest'],0],
['O comando chmod altera:',['permissões','nome do host','senha do Wi-Fi','IP público'],0],
['O comando ps mostra:',['processos','arquivos ocultos','endereços DNS','logs de e-mail'],0],
['APT é usado em distribuições Debian/Ubuntu para:',['gerenciar pacotes','editar vídeo','formatar rede','criar usuário Windows'],0],
['O arquivo /etc/passwd contém:',['informações de usuários','senhas em texto puro modernas','logs de firewall apenas','arquivos temporários'],0]
],
'Segurança da Informação':[
['O princípio da confidencialidade busca garantir:',['acesso apenas por pessoas autorizadas','apagamento automático','aumento de velocidade','troca de monitor'],0],
['Phishing é:',['tentativa fraudulenta de obter dados','protocolo de backup','tipo de cabo','modelo de impressora'],0],
['Backup serve para:',['recuperar dados em caso de perda','substituir firewall','aumentar CPU','remover internet'],0],
['VPN cria:',['túnel seguro de comunicação','planilha online','usuário local','impressora física'],0],
['Malware é:',['software malicioso','software de escritório','hardware de rede','tipo de monitor'],0],
['Autenticação em dois fatores aumenta:',['segurança de acesso','velocidade do teclado','tamanho do arquivo','qualidade da imagem'],0],
['Firewall é usado para:',['controlar tráfego permitido e bloqueado','criar documentos','calcular porcentagem','limpar memória'],0],
['LGPD trata principalmente de:',['proteção de dados pessoais','velocidade de rede','instalação de Linux','cabeamento elétrico'],0],
['Antivírus ajuda a:',['detectar e bloquear ameaças','trocar senha do roteador automaticamente','gerar relatórios fiscais','criar VLAN'],0],
['Controle de acesso define:',['quem pode acessar recursos','cor do sistema','modelo de cabo','tipo de fonte'],0]
],
'Banco de Dados SQL':[
['O comando usado para consultar dados é:',['SELECT','INSERT','DELETE','DROP'],0],
['WHERE é usado para:',['filtrar registros','criar tabela','apagar banco','renomear servidor'],0],
['JOIN serve para:',['relacionar tabelas','formatar texto','instalar sistema','criar senha'],0],
['GROUP BY é usado para:',['agrupar resultados','remover usuário','abrir navegador','compactar arquivo'],0],
['INSERT serve para:',['inserir registros','consultar apenas','criar backup físico','abrir terminal'],0],
['UPDATE serve para:',['alterar registros','listar diretórios','testar conexão','criar VLAN'],0],
['DELETE serve para:',['excluir registros','criar gráfico','abrir firewall','gerar DNS'],0],
['Chave primária identifica:',['registro de forma única','todos os backups','endereços MAC','impressoras'],0],
['Chave estrangeira é usada para:',['relacionar tabelas','apagar log','trocar IP','criar usuário Linux'],0],
['Backup de banco é importante para:',['recuperação em falhas','melhorar teclado','reduzir monitor','criar navegador'],0]
],
'Informática':[
['Sistema operacional é responsável por:',['gerenciar hardware e software','apenas imprimir','somente navegar','apagar energia'],0],
['Navegador é usado para:',['acessar páginas web','criar memória RAM','trocar placa mãe','ligar fonte'],0],
['Microsoft 365 é:',['conjunto de serviços e aplicativos de produtividade','tipo de cabo','protocolo de roteador','sistema de refrigeração'],0],
['Google Drive é serviço de:',['armazenamento em nuvem','antivírus físico','teclado virtual somente','memória cache'],0],
['Atalho Ctrl+C serve para:',['copiar','colar','recortar','salvar'],0],
['Atalho Ctrl+V serve para:',['colar','copiar','recortar','imprimir'],0],
['Compartilhamento de pasta exige atenção a:',['permissões','brilho da tela','papel de parede','tamanho do mouse'],0],
['PDF é formato usado para:',['documentos portáveis','executar servidor','criar IP','configurar BIOS'],0],
['Planilha é indicada para:',['organizar dados e cálculos','formatar HD','testar cabo','trocar senha Linux'],0],
['Cloud computing significa:',['computação em nuvem','computador desligado','cabo de rede','memória local apenas'],0]
],
'Raciocínio Lógico':[
['20% de 200 é:',['20','30','40','50'],2],
['A negação de “todos estudam” é:',['ninguém estuda','pelo menos um não estuda','todos não estudam','alguns sempre estudam'],1],
['Se p é verdadeiro e q é falso, p E q é:',['verdadeiro','falso','indeterminado','nulo'],1],
['Se p é verdadeiro e q é falso, p OU q é:',['verdadeiro','falso','nulo','impossível'],0],
['Sequência 2, 4, 6, 8 continua com:',['9','10','12','16'],1],
['Metade de 80 é:',['20','30','40','50'],2],
['3/4 em porcentagem é:',['25%','50%','75%','100%'],2],
['Se A implica B e A ocorreu, conclui-se:',['B','não B','A falso','nada'],0],
['Probabilidade varia entre:',['0 e 1','1 e 2','-1 e 0','10 e 100'],0],
['Em uma tabela verdade, V e F na conjunção resulta em:',['V','F','ambos','nenhum'],1]
]
};

function buildQuestionBank(){
  const bank=[];
  Object.keys(templates).forEach(subject=>{
    for(let i=0;i<50;i++){
      const t=templates[subject][i%templates[subject].length];
      bank.push({s:subject,q:`${t[0]} ${i>=10?'(variação '+(i+1)+')':''}`.trim(),o:t[1],a:t[2]});
    }
  });
  return bank;
}
const questionBank = buildQuestionBank();

const schedule = [
  ['Segunda','Português','Teoria: interpretação, crase e concordância','Questões Cesgranrio'],
  ['Terça','Redes','TCP/IP, DNS, DHCP e VLAN','Exercícios de troubleshooting'],
  ['Quarta','Linux + Segurança','Comandos, permissões e SSH','Firewall, VPN e backup'],
  ['Quinta','Suporte + Informática','ITIL, SLA, chamados e AD','Windows, Office 365 e Cloud'],
  ['Sexta','SQL + Revisão','SELECT, WHERE, JOIN','Correção de erros da semana'],
  ['Sábado','Simulado','50 questões por disciplina','Correção com gabarito'],
  ['Domingo','Revisão leve','Flashcards e resumo','Planejamento da próxima semana']
];
let currentQuiz=[], currentIndex=0, answers={}, lastResult=null, chart;

function init(){
  document.getElementById('subjectsGrid').innerHTML = subjects.map(s=>{
    const count = questionBank.filter(q=>q.s===s.name).length;
    return `<article class="card"><div class="card-top"><h3>${s.name}</h3><span class="badge">${count} questões</span></div><ul>${s.topics.map(t=>`<li>${t}</li>`).join('')}</ul>${s.links.map(l=>`<a class="resource" target="_blank" href="${l[1]}">${l[0]}</a>`).join('')}</article>`;
  }).join('');
  document.getElementById('scheduleBody').innerHTML = Array.from({length:60},(_,i)=>{const s=schedule[i%7];return `<tr><td>Dia ${i+1} — ${s[0]}</td><td>${s[1]}</td><td>${s[2]}</td><td>${s[3]}</td></tr>`}).join('');
  document.getElementById('quizSubject').innerHTML = ['Todas',...subjects.map(s=>s.name)].map(s=>`<option value="${s}">${s}</option>`).join('');
  const name=localStorage.getItem('studentName');
  if(name){document.getElementById('studentName').value=name;document.getElementById('loginStatus').textContent=`Logada como ${name}`;}
  updateChart();
}
function saveStudent(){const n=document.getElementById('studentName').value.trim();if(!n)return alert('Digite seu nome.');localStorage.setItem('studentName',n);document.getElementById('loginStatus').textContent=`Logada como ${n}`;}
function startQuiz(){
  const subj=document.getElementById('quizSubject').value;
  const amount=Number(document.getElementById('quizAmount').value);
  let pool=subj==='Todas'?[...questionBank]:[...questionBank.filter(q=>q.s===subj)];
  currentQuiz=pool.sort(()=>Math.random()-.5).slice(0,amount);
  currentIndex=0;answers={};lastResult=null;
  document.getElementById('answerKey').innerHTML='';
  renderQuestion();
}
function renderQuestion(){
  if(!currentQuiz.length){document.getElementById('quizArea').innerHTML='<p>Escolha a disciplina e clique em Gerar Simulado.</p>';document.getElementById('questionCounter').textContent='Questão 0 de 0';return;}
  const q=currentQuiz[currentIndex];
  document.getElementById('questionCounter').textContent=`Questão ${currentIndex+1} de ${currentQuiz.length}`;
  document.getElementById('quizArea').innerHTML=`<div class="question"><strong>${currentIndex+1}. ${q.s}</strong><p>${q.q}</p>${q.o.map((op,j)=>`<label class="option"><input type="radio" name="currentQuestion" value="${j}" ${answers[currentIndex]===j?'checked':''}> ${String.fromCharCode(65+j)}) ${op}</label>`).join('')}</div>`;
  document.querySelectorAll('input[name="currentQuestion"]').forEach(input=>input.addEventListener('change',e=>{answers[currentIndex]=Number(e.target.value);}));
}
function nextQuestion(){if(!currentQuiz.length)return;if(currentIndex<currentQuiz.length-1){currentIndex++;renderQuestion();}else{alert('Você chegou na última questão. Clique em Finalizar e Ver Gabarito.');}}
function prevQuestion(){if(!currentQuiz.length)return;if(currentIndex>0){currentIndex--;renderQuestion();}}
function finishQuiz(){
  if(!currentQuiz.length)return alert('Gere um simulado primeiro.');
  let correct=0,key='<h3>Gabarito final</h3><div class="key-grid">';
  currentQuiz.forEach((q,i)=>{const val=answers[i]??-1;if(val===q.a)correct++;key+=`<p class="${val===q.a?'correct':'wrong'}"><b>${i+1}</b> ${q.s}<br>Correta: ${String.fromCharCode(65+q.a)} | Sua: ${val>=0?String.fromCharCode(65+val):'em branco'}</p>`;});
  key+='</div>';
  const total=currentQuiz.length, percent=Math.round((correct/total)*100), subj=document.getElementById('quizSubject').value;
  lastResult={date:new Date().toLocaleString('pt-BR'),name:localStorage.getItem('studentName')||'Thayana',subject:subj,correct,total,percent};
  document.getElementById('scorePercent').textContent=percent+'%';document.getElementById('scoreText').textContent=`${correct}/${total}`;document.getElementById('lastSubject').textContent=subj;document.getElementById('answerKey').innerHTML=key;location.href='#dashboard';
}
function saveResultLocal(){if(!lastResult)return alert('Finalize um simulado primeiro.');const results=JSON.parse(localStorage.getItem('results')||'[]');results.push(lastResult);localStorage.setItem('results',JSON.stringify(results));updateChart();alert('Resultado salvo no navegador.');}
async function sendToGoogleSheets(){if(!lastResult)return alert('Finalize um simulado primeiro.');if(!GOOGLE_SCRIPT_URL)return alert('Configure a URL do Apps Script no arquivo script.js.');try{await fetch(GOOGLE_SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(lastResult)});saveResultLocal();alert('Resultado enviado para a planilha.');}catch(e){alert('Não foi possível enviar. Verifique a URL do Apps Script.');}}
function exportCSV(){const results=JSON.parse(localStorage.getItem('results')||'[]');if(!results.length)return alert('Nenhum resultado salvo.');const rows=[['Data','Nome','Disciplina','Acertos','Total','Percentual'],...results.map(r=>[r.date,r.name,r.subject,r.correct,r.total,r.percent])];const csv=rows.map(r=>r.join(';')).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='resultados-metodo-thayana.csv';a.click();}
function updateChart(){const results=JSON.parse(localStorage.getItem('results')||'[]');const labels=results.map(r=>r.date);const data=results.map(r=>r.percent);const ctx=document.getElementById('performanceChart');if(chart)chart.destroy();chart=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Acertividade %',data,tension:.35}]},options:{plugins:{legend:{labels:{color:'#f4fff4'}}},scales:{x:{ticks:{color:'#b6c9b6'}},y:{ticks:{color:'#b6c9b6'},beginAtZero:true,max:100}}}});}
init();
