// Conta do orçamento da Limpeza Teste E2E.
// precos = { quartos_1_2, quartos_3, quartos_4_mais, banheiro_extra, pet } (vem do banco de dados)
function calcularOrcamento(precos, quartos, banheiros, temPet) {
  quartos = Math.max(1, Math.floor(Number(quartos) || 1));
  banheiros = Math.max(1, Math.floor(Number(banheiros) || 1));

  var base, rotuloBase;
  if (quartos <= 2) { base = precos.quartos_1_2; rotuloBase = 'Casa com 1 ou 2 quartos'; }
  else if (quartos === 3) { base = precos.quartos_3; rotuloBase = 'Casa com 3 quartos'; }
  else { base = precos.quartos_4_mais; rotuloBase = 'Casa com 4 quartos ou mais'; }

  var extras = banheiros - 1;
  var linhas = [{ rotulo: rotuloBase, valor: base }];
  if (extras > 0) {
    linhas.push({
      rotulo: extras + (extras === 1 ? ' banheiro a mais' : ' banheiros a mais'),
      valor: extras * precos.banheiro_extra
    });
  }
  if (temPet) linhas.push({ rotulo: 'Pet em casa', valor: precos.pet });

  var total = linhas.reduce(function (soma, l) { return soma + l.valor; }, 0);
  return { linhas: linhas, total: total };
}

if (typeof module !== 'undefined') module.exports = { calcularOrcamento: calcularOrcamento };
