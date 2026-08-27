# Atualização YOS FÊNIX

O bot foi reorganizado visualmente e teve sua identidade pública atualizada para **YOS FÊNIX**.

## Alterações principais

- Nome público do bot atualizado em `database/config.json`.
- Nome, cabeçalhos, rodapé e saudação do menu atualizados.
- Nova arte de perfil/menu em `arquivos/imagem/menu.jpg`.
- Novo áudio em `arquivos/audio/menu.mp3`, com a fala: “Ô, chefia! YOS FÊNIX, aqui está seu menu.”
- Mensagens de ligar, desligar e reiniciar atualizadas.
- Metadados do `package.json` e `package-lock.json` sincronizados.
- Comentários antigos de identidade removidos dos arquivos de código.
- Sintaxe JavaScript e JSON validadas.

## Como iniciar

```bash
npm install --legacy-peer-deps
sh start.sh
```

Para usar código de emparelhamento:

```bash
sh start.sh cod
```

Os dados do dono permanecem os mesmos da base original. Altere `database/config.json` caso precise trocar número, nome do dono ou prefixo.
