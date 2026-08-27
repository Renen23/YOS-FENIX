# Auditoria técnica — YOS FÊNIX

## Resultado geral

A base foi revisada e recebeu melhorias de inicialização, proteção de arquivos privados, organização dos comandos de execução e documentação. A sintaxe dos arquivos JavaScript, o `start.sh`, o JSON de configuração e a consistência entre `package.json` e `package-lock.json` foram validados.

## Melhorias aplicadas

| Área | Situação encontrada | Ação realizada |
| --- | --- | --- |
| Inicialização | O script dependia do diretório atual do terminal. | `start.sh` agora descobre a própria pasta e executa o bot a partir dela. |
| Dependências | Não havia mensagem clara quando `node_modules` não existia. | O script agora informa o comando de instalação necessário e encerra de forma controlada. |
| Comandos npm | O comando principal iniciava diretamente em modo de pareamento. | Foram criados `npm run start:qr`, `npm run start:code` e `npm start`. |
| Segurança | Sessão do WhatsApp e dados gerados poderiam ser publicados acidentalmente. | `.gitignore` passou a proteger sessão, temporários, usuários e arquivos `.env`. |
| Documentação | Não estava claro que GitHub não é ambiente de execução contínua. | README atualizado com instalação, QR Code, pareamento e requisitos de hospedagem. |
| Identidade | Havia mensagens e metadados antigos. | Referências públicas substituídas por YOS FÊNIX; identidade pública padronizada para YOS FÊNIX. |
| Mídia | Menu usava arte e áudio antigos. | Nova imagem e nova saudação: “Ô, chefia! YOS FÊNIX, aqui está seu menu.” |
| Parser | O bot só reconhecia o prefixo `¥`; `/menu` era ignorado. | O parser agora aceita `/`, `¥`, `!` e `.`; o prefixo padrão foi definido como `/`. |
| Carregamento | A categoria `menu` não era carregada pelo gerenciador. | A categoria foi adicionada ao carregamento automático; os 10 destinos dos botões foram testados. |
| Botões | Dois IDs apontavam para comandos inexistentes. | `menucmd` foi corrigido para `menucmds` e `menubrincadeira` para `menuresenha`. |
| Termux | Não havia instruções para FFmpeg e prevenção de suspensão do Android. | README atualizado com `nodejs`, `ffmpeg`, `termux-wake-lock` e operação no celular. |

## Pontos importantes para hospedagem

O GitHub deve ser usado como repositório. Para manter o bot online, use um VPS, servidor próprio, computador ligado ou Termux. Plataformas de hospedagem que dormem o processo, encerram processos persistentes ou não permitem conexão contínua com o WhatsApp podem interromper o bot.

O diretório da sessão, `database/YOS-FENIX-QR`, não deve ser enviado ao GitHub. Se ele já tiver sido publicado, remova-o também do histórico privado do repositório e faça uma nova autenticação.

## Instalação e execução

Após clonar ou baixar o projeto:

```bash
cd YOS-FENIX
npm install --legacy-peer-deps
npm run start:qr
```

Para usar código de pareamento:

```bash
npm run start:code
```

Na primeira execução, faça a autenticação no WhatsApp. Nas próximas execuções, a sessão salva será reutilizada, desde que a pasta privada da sessão permaneça no servidor.

## Auditoria por grupo de arquivos

| Grupo revisado | Resultado |
| --- | --- |
| `index.js` | Parser de comandos corrigido para `/`, aliases preservados, tratamento de erro mantido e mensagem de comando inexistente atualizada. |
| `conexao.js` | Caminho de sessão padronizado como `database/YOS-FENIX-QR`, reconexão e criação de diretórios revisadas. |
| `comandos.js` | Categoria `menu` incluída no carregamento automático; carregamento recursivo e aliases testados. |
| `plugins/cmds-aleatorios` | Menu principal, áudio, imagem e comandos públicos revisados. |
| `plugins/menu` | Todos os dez submenus carregados e destinos dos botões confirmados. |
| `plugins/admin`, `plugins/dono`, `plugins/premium` | Plugins carregados em runtime e permissões estruturais preservadas. |
| `arquivos/js` | Imports locais verificados; metadados de stickers padronizados. |
| `start.sh`, `package.json`, `README.md` | Inicialização, comandos npm e instruções para Termux revisados. |
| `database` e `temp` | Sessão privada protegida, diretórios recriáveis e placeholders desnecessários removidos. |

## Validações concluídas

A configuração JSON foi lida com sucesso, o lockfile está sincronizado com o pacote, todos os arquivos JavaScript passaram em `node --check` e o shell passou em `bash -n`. O gerenciador foi executado com as dependências instaladas e carregou todos os plugins; os comandos `menuadm`, `menucmds`, `menudono`, `menudownloads`, `menuefeitos`, `menuia`, `menumidias`, `menupremium`, `menuresenha` e `menurpg` foram confirmados. O ZIP entregue não contém `node_modules`; isso é intencional, pois as dependências são recriadas com `npm install --legacy-peer-deps` no ambiente de hospedagem.

## Configurações que o usuário deve conferir

Antes de ligar, confira `database/config.json`. O número do dono deve estar no formato internacional somente com números, por exemplo `5511999999999`. O prefixo atual é `/` — a base também aceita `¥`, `!` e `.` — e o nome público está configurado como **YOS FÊNIX**.
