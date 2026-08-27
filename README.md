# 🌸 YOS FÊNIX 🌸

Uma base de bot para WhatsApp criada do zero, focada em ser leve, organizada e extremamente fácil de mexer. Se você é um dev iniciante, essa base foi feita pra você evoluir sem dor de cabeça.

---

## 🚀 Como Ligar o YOS FÊNIX

> O GitHub serve para guardar o código. Ele não mantém um bot do WhatsApp rodando continuamente. Depois de enviar o projeto ao GitHub, você precisa executar o bot em um VPS, servidor, computador ou Termux com Node.js instalado.

### Instalação após baixar ou clonar

Dentro da pasta do projeto, execute:

```bash
npm install --legacy-peer-deps
```

O ZIP não inclui `node_modules`, porque essa pasta é específica do sistema operacional e pode ser recriada. As dependências estão declaradas no `package.json` e travadas no `package-lock.json`, portanto o comando acima instala tudo automaticamente.

A base oferece dois métodos de conexão principais. Escolha o que for melhor pra você:

1. **Via QR Code (Padrão):**
   ```bash
   npm run start:qr
   ```
   *O bot vai gerar um código QR no terminal para você escanear com o WhatsApp.*

2. **Via Código de Emparelhamento (Pairing Code):**
   ```bash
   npm run start:code
   ```
   *Ideal para quem usa Termux ou VPS e não consegue escanear o QR Code.*

Na primeira conexão, escaneie o QR Code ou informe o número com DDD e código do país quando solicitado. Depois que a sessão for criada, não publique a pasta `database/YOS-FENIX-QR` no GitHub: ela contém dados privados da conexão.

### Instalação no Termux

No Termux, instale os pacotes do sistema antes do Node.js:

```bash
pkg update -y
pkg install nodejs ffmpeg git -y
```

Depois, clone o repositório ou extraia o ZIP, entre na pasta e instale as dependências:

```bash
cd YOS-FENIX
npm install --legacy-peer-deps
npm run check
```

Mantenha o Termux aberto durante a execução. Para reduzir o risco de o Android suspender o processo, use:

```bash
termux-wake-lock
npm run start:qr
```

Para encerrar, pressione `Ctrl+C`. Para liberar o bloqueio depois:

```bash
termux-wake-unlock
```

---

## ⚙️ Configuração (config.json)

Tudo que é essencial fica na pasta `database/config.json`. Lá você define:
- `NumeroDoDono`: Seu número (com código do país, ex: 5592...).
- `prefix`: O símbolo que o bot vai usar (ex: `!`, `#`).
- `NomeDoBot`: O nome que ela vai usar nas mensagens.

---

## 📂 Sistema de Plugins (A Magia da Base)

O YOS FÊNIX usa um sistema de carregamento automático. Você não precisa registrar os comandos manualmente; basta criar o arquivo na pasta certa!

### 🛡️ Pastas Especiais:
Cada pasta dentro de `plugins/` tem um "superpoder":

- **`plugins/admin/`**: Qualquer comando aqui dentro **só pode ser usado por admins** do grupo. O bot verifica isso automaticamente.
- **`plugins/dono/`**: Comandos restritos apenas ao número que você colocou no `config.json`.
- **`plugins/premium/`**: Apenas para usuários que você adicionou na lista premium.
- **`plugins/cmds-aleatorios/`**: Comandos públicos para qualquer pessoa usar.

### 📝 Como criar um novo comando?
Basta criar um arquivo `.js` dentro de uma das pastas acima com essa estrutura:

```javascript
module.exports = {
    name: 'nome_do_comando',
    description: 'O que o comando faz',
    category: 'categoria',
    aliases: ['apelido1', 'apelido2'],
    async execute({ reply, q }) {
        // Sua lógica aqui
        reply('Olá, mundo!')
    }
}
```

---

## 📊 Menu Dinâmico e Gestão de Comandos

O menu do YOS FÊNIX é inteligente. Ele lê os arquivos e se monta sozinho. Mas você tem controle total sobre ele:

- **Esconder um comando:** Se quiser tirar um comando do menu sem apagar o arquivo, use:
  - `!rmcmd [nome_do_comando]`
- **Trazer de volta:** Se mudou de ideia e quer que ele apareça no menu de novo, use:
  - `!rncmd [nome_do_comando]`

---

## ❄️ Funcionalidades Extras

- **Chokidar (Auto-Reload):** A base monitora seus arquivos. Se você editar um comando e salvar, o bot atualiza na hora sem precisar desligar e ligar de novo.
- **Bem-vindo:** Sistema automático de boas-vindas para novos membros em grupos (configurável em `plugins/admin/bemvindo.js`).
- **UserManager Inteligente:** Sistema que resolve problemas de IDs do WhatsApp (LID), garantindo que o bot sempre saiba quem é quem, mesmo com as atualizações de privacidade do Zap.

---

## 🛠️ Instalação de Módulos

Se você estiver começando do zero, use:
```bash
npm install --legacy-peer-deps
```
*Isso vai baixar todas as bibliotecas que eu deixei configuradas no `package.json`.*

---

### Identidade
Este projeto utiliza exclusivamente a identidade **YOS FÊNIX**.
