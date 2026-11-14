-- Tabela de preços da Limpeza Teste E2E (lida pela página de orçamento)
create table if not exists limpezateste_hy_precos (
  item text primary key,
  descricao text not null,
  valor numeric(10,2) not null check (valor >= 0),
  ordem int not null default 0
);
insert into limpezateste_hy_precos (item, descricao, valor, ordem) values
  ('quartos_1_2',   'Casa com 1 ou 2 quartos',        120, 1),
  ('quartos_3',     'Casa com 3 quartos',             160, 2),
  ('quartos_4_mais','Casa com 4 quartos ou mais',     200, 3),
  ('banheiro_extra','Cada banheiro além do primeiro',  20, 4),
  ('pet',           'Casa com pet',                    15, 5)
on conflict (item) do update set descricao = excluded.descricao, valor = excluded.valor, ordem = excluded.ordem;
alter table limpezateste_hy_precos enable row level security;
create policy limpezateste_hy_precos_ler on limpezateste_hy_precos for select to anon using (true);
grant select on limpezateste_hy_precos to anon;
