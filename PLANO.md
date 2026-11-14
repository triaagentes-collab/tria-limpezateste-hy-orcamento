# Plano de ação — Limpeza Teste E2E — Página de orçamento
STATUS: CONCLUÍDO

## O que vamos construir
Uma página no celular onde o cliente marca o tamanho da casa, quantos quartos e quantos banheiros e vê o preço da limpeza na hora, sem esperar a Carla responder.
De onde veio: Ficha de Passe, área ENTRADA. "Primeiro passo que uma máquina poderia fazer: perguntar quartos, banheiros e tamanho da casa e mostrar o preço na hora."

## Itens
### I-01 — Sua tabela de preços, escrita
- O que é: os preços que hoje estão na cabeça da Carla viram uma tabela guardada no banco de dados. A página lê dessa tabela.
- Preços da Carla: 1 ou 2 quartos = US$ 120 · 3 quartos = US$ 160 · 4 ou mais = US$ 200 · cada banheiro além do primeiro = +US$ 20 · pet = +US$ 15. (O tamanho da casa não muda o preço; vale o número de quartos.)
- Como saber que ficou pronto: a Carla vê a tabela com os valores dela, do jeito que ela cobra.
- Como eu vou testar: consultar a tabela no banco e conferir valor por valor com o que a Carla disse.
- [x] Feito  - [x] Revisado  - [x] Testado
- Evidência: tabela limpezateste_hy_precos criada com 5 linhas (120 / 160 / 200 / +20 / +15), iguais ao que a Carla disse. Leitura pública pelo site funcionou; gravação por visitante foi recusada (permission denied), como esperado.

### I-02 — A página de orçamento
- O que é: uma página bonita, com o nome da empresa, onde o cliente escolhe tamanho da casa, quartos e banheiros e o preço aparece na hora.
- Como saber que ficou pronto: abrir no celular, mudar quartos/banheiros e ver o preço mudar.
- Como eu vou testar: fazer 3 orçamentos de exemplo e conferir a conta na mão com a tabela da Carla.
- [x] Feito  - [x] Revisado  - [x] Testado
- Evidência: conta testada em 6 casos (120, 120, 180, 255, 200, 155: todos certos). No navegador, em tela de celular, com os preços vindos do banco: 2 quartos = US$ 120; 3 quartos + 2 banheiros + pet = US$ 195; 4+ quartos + 2 banheiros + pet = US$ 235. O botão "+" trava em 4+. Nenhum erro no console.
- Observação: o tamanho da casa não entrou, porque a Carla cobra pelo número de quartos.

### I-03 — Site no ar e projeto guardado
- O que é: colocar a página na internet com um link para mandar aos clientes e guardar tudo no GitHub.
- Como saber que ficou pronto: o link abre no celular e mostra o preço.
- Como eu vou testar: abrir o link publicado e conferir que a página carrega os preços do banco.
- [x] Feito  - [x] Revisado  - [x] Testado
- Evidência: site no ar em https://tria-limpezateste-hy-orcamento.pages.dev (resposta 200, arquivos iguais aos do computador). Aberto no navegador em tela de celular: carregou os preços do banco; 3 quartos + 2 banheiros = US$ 180. Nenhum erro no console. Banco conferido (5 preços). Projeto guardado no GitHub junto com este plano.

## O que fica de fora hoje
- Guardar cada orçamento numa lista (opção 2 da Ficha de Passe)
- Botão para escolher o dia e mandar o pedido no WhatsApp (opção 3)
- Pagamento pelo site

## Onde vai ficar
- Site: https://tria-limpezateste-hy-orcamento.pages.dev
- Banco de dados: tabela limpezateste_hy_precos
- GitHub: https://github.com/triaagentes-collab/tria-limpezateste-hy-orcamento
