<p align="center">
  <img src="docs/logo.png" width="110" alt="Chati.AI">
</p>

<h1 align="center">Chati.AI</h1>

<p align="center">
  <b>An AI agent with a face, a voice, a phone and hands. On your PC.</b>
</p>

<p align="center">
  Gets things done for you: browses, codes, manages your files and runs commands · Talks to you on video call · Sees and hears you<br>
  Has her own WhatsApp and her own phone number · No added censorship<br>
  Models on your PC or in the cloud, even several free accounts chained together: when one runs out of credits, she jumps to the next
</p>

<p align="center">
  <a href="https://github.com/nombrote/chati.ai/releases/latest"><img src="https://img.shields.io/badge/⬇_Download-latest_release-7c4dff?style=for-the-badge" alt="Download"></a>
  &nbsp;
  <img src="https://img.shields.io/badge/Windows-10_·_11-0078d4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows">
  &nbsp;
  <img src="https://img.shields.io/badge/Setup-open_and_go-2ea44f?style=for-the-badge" alt="Open and go">
  &nbsp;
  <a href="README.ES.md"><img src="https://img.shields.io/badge/🇪🇸_Léelo-en_español-e0e0e0?style=for-the-badge" alt="En español"></a>
</p>

<p align="center">
  <img src="docs/captura_principal.png" width="860" alt="Chati.AI: video call on the left, chat on the right">
</p>

<p align="center"><i>Not a chat with a picture next to it. An agent that works for you, and who also looks at you, answers, laughs and, if you cross the line, gets mad.</i></p>

> The interface is currently in Spanish. The models answer in whatever language you talk to them.

---

## In 30 seconds

| | |
|---|---|
| 🧰 **She's an agent** | Browses the web, reads and writes files, runs commands, makes plans, uses skills and MCP servers. With permission cards or in auto mode. |
| 🎭 **She has a face** | Real video stitched by emotion. She smiles, gets surprised, winks, gets angry. When you're not typing, she stays alive. |
| 🎙️ **A voice and ears** | Speaks and listens on your PC, no internet needed. You can interrupt her by talking. |
| 👀 **She sees you** | Share your webcam or your screen and she comments on what she sees. Video calls with her from the window, on WhatsApp or on Meet. |
| 📱 **A phone** | Her own WhatsApp account, her own number with a SIM, Google Meet video calls, Telegram and email. |
| 🖥️ **Local or cloud** | Ollama, LM Studio, llama.cpp, your ChatGPT account, Gemini, Groq, Cerebras, Mistral, OpenRouter… |
| 🔁 **Free, all day** | Several free accounts: when one runs out of quota, she switches to the next one by herself. |
| 🔀 **Model router** | A free model for chatting and another one, paid or free, for coding. She switches by herself depending on what you ask. |
| 🔓 **No added censorship** | What she says depends only on the model and the persona you choose. Nobody in between. |
| ⚡ **Open and go** | A one-minute installer with a wizard. Everything she needs is inside. |

---

## What it looks like

<table>
  <tr>
    <td width="50%" align="center">
      <img src="docs/gestos.gif" alt="Character gestures"><br>
      <b>She reacts to what she says</b><br>
      <sub>Video clips by emotion, with seamless cross-fades. If you go quiet for a while, she speaks first.</sub>
    </td>
    <td width="50%" align="center">
      <img src="docs/whatsapp.png" alt="WhatsApp video call"><br>
      <b>She picks up on WhatsApp</b><br>
      <sub>With her own number. She chats, sends photos and voice notes, and answers voice and video calls with her face and her voice.</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/agente.png" alt="Chati browsing and editing files"><br>
      <b>She gets things done</b><br>
      <sub>Searches the web with a real browser, edits files, runs commands, and shows you a card before touching anything.</sub>
    </td>
    <td align="center">
      <img src="docs/programador.png" alt="Programmer mode in purple"><br>
      <b>A router that picks the model</b><br>
      <sub>A cheap or free one for chatting and a powerful one for coding. It steps in only when code is involved and she comes back when you change the subject.</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/pantalla.png" alt="Sharing the screen"><br>
      <b>She sees what you show her</b><br>
      <sub>Your webcam or your screen. "Tell me when the download finishes."</sub>
    </td>
    <td align="center">
      <img src="docs/servidores.png" alt="Servers and accounts list"><br>
      <b>Your models, your accounts</b><br>
      <sub>Switch models without losing the conversation. Several keys per provider, in order, with automatic failover.</sub>
    </td>
  </tr>
</table>

---

## Install: open and go

1. **Download** the installer from the [latest release](https://github.com/nombrote/chati.ai/releases/latest).
2. **Follow the wizard**: folder, character and voice. Nothing else to install.
3. **Pick a model** from the button in the top bar:
   - **Free, in one minute**: *Gemini* or *Groq*, paste a free key and you're done.
   - **With your ChatGPT**: sign in with the account you already have. No API billing.
   - **Everything on your PC**: install [Ollama](https://ollama.com) or [LM Studio](https://lmstudio.ai), download a model and Chati.AI finds it by herself.

Type `/help` in the chat to see the commands.

> **Requirements:** Windows 10 or 11, 64-bit. For local models a graphics card helps a lot
> (12 GB runs 12-14B models comfortably). With cloud models any PC will do.

---

## Everything she does

<details>
<summary><b>🎭 How you see her</b></summary>
<br>

- **Video characters**: each character is a folder with its videos and cut points. Add your own and
  they show up in *Settings › Appearance*.
- **Light wave**: an abstract, discreet avatar for when you don't want a face.
- **Two moods**: happy or angry. Offend her and even her idle gestures change, and it lasts.
- **Built-in clip editor**: mark where each gesture starts and ends and tag it. The model learns the
  new gestures on its own.
- **Compact mode** (F11): folds the video away and leaves a small chat window at your side.
- Trigger any gesture by hand: `/beso` (kiss), `/triste` (sad), `/lengua` (tongue out)…

</details>

<details>
<summary><b>👀 What she sees and hears</b></summary>
<br>

- **Your webcam or your screen**, shared with her. A green border tells you she's watching.
- **Screen watching**: "tell me when the build finishes".
- **Photos and files**: drag images, PDF, Word, Excel or CSV into the chat.
- **Voice**: she speaks with Piper neural voices (language, voice and speed of your choice) and
  listens with Whisper. Both on your PC, offline. You can interrupt her by talking and send without
  pressing Enter.
- **Voice and video calls** with her, right from the window.

</details>

<details>
<summary><b>📱 Her own accounts: WhatsApp, phone, Meet, Telegram, email</b></summary>
<br>

She is not a chat locked inside a window: she can have her own accounts and talk to you like anyone else.

- **Full WhatsApp**: link a number with a QR code and she gets a real WhatsApp account. She chats,
  sends photos and voice notes and **answers voice and video calls**, with her face and her voice.
- **Google Meet video calls**: she joins with her own Google account and talks on video in real time:
  she sees you, hears you and answers out loud.
- **Her own phone number**: with a **USB modem and a SIM card**, she reads the SMS she receives and
  **picks up calls** to her number. For safety, she never sends SMS or makes calls on her own.
- **Telegram**: her own bot. She sends text, photos, videos of her gestures and voice notes. With
  *Away* mode you carry her on your phone, and permission cards reach you there, with a PIN for
  dangerous actions.
- **Email**: she reads your mail and sums it up. She always asks before sending.
- **Contacts**: you decide who can talk to her. Each contact gets their own tab and their own Chati,
  with separate history and memory and **no access to your tools**.

</details>

<details>
<summary><b>🧰 The agent: tools, skills and MCP</b></summary>
<br>

- **Internet** with a real browser: search, read pages, click, fill in forms, download. Long pages
  are summarized by a researcher sub-agent so they don't flood the model's memory.
- **Files and commands**: read, write and edit files; run PowerShell.
- **Plans**: for long tasks she writes a plan and ticks it off step by step.
- **Skills**: import them **straight from GitHub** (`user/repo`), from a `.zip`, a `.md` or a folder.
  Claude, Codex, Cursor and skills.sh formats all work. Or ask her to make a new one: she ships with a
  skill for creating skills.
- **MCP servers**: add any server by URL and switch its tools on and off with one click.
- **Model router**: no need to pay for an expensive model for everything. Set a free or light model
  for conversation and a stronger one, paid or free, for coding. A router decides on every message:
  when what you ask touches code she hands over to the coder on her own, and comes back when you
  change the subject. Its output is shown in purple so you always know who's talking. Also by hand
  with `/programa` and `/chati`.
- **Reminders and recurring tasks**: "remind me every 30 minutes to drink water", "tomorrow at 9
  tell me…", "tell me a story non-stop".

</details>

<details>
<summary><b>🛡️ You decide what she can do</b></summary>
<br>

- **Manual**: before touching anything she shows you a card with *Run / Always allow / No*. The
  cards also reach your phone through Telegram.
- **Auto**: she does whatever it takes, but **only inside the folders you share with her**. Outside
  them, a card.
- Dangerous commands need a PIN. The modem never sends or calls. Email is never sent without asking.

</details>

<details>
<summary><b>🖥️ Models: on your PC or in the cloud, for free</b></summary>
<br>

| On your PC (private, offline) | In the cloud |
|---|---|
| **Ollama** | **ChatGPT with your account**: the subscription you already pay, no API |
| **LM Studio** | **Gemini** (AI Studio, free tier) |
| **llama.cpp**: the app starts the server itself with your `.gguf` files, vision models included | **Groq**, **Cerebras**, **Mistral**, **OpenRouter**, all with free models |
| Any OpenAI-compatible server | OpenAI API or any other compatible one |

- **Hot switching**: change models without losing the conversation. Star your favourites.
- **Several free accounts, one after another**: add several keys or accounts for the same provider
  and order them. When one runs out of quota she notices, switches to the next, tells you in the
  chat and goes back to the first when it recovers. Stack free tiers and you have big models all day.
- **Reasoning effort** of your choice (off, auto, low, medium, high) on thinking models.
- You always see how full the model's memory is and how fast it's writing.

</details>

<details>
<summary><b>🧠 Memory and personality</b></summary>
<br>

- **Long-term memory**: she saves what matters and recalls it in other conversations. You can view,
  search and delete what she remembers.
- **Context that never runs out**: when the conversation fills up, she summarizes it herself and
  carries on. Also by hand with `/compact`.
- **Editable personas**: switch characters from the chat header or write your own in a `.md` file.
  Even the internal instructions of her sub-agents can be rewritten.
- Conversation history, several tabs, edit, delete or regenerate any message.
- Tray icon and start with Windows.

</details>

<details>
<summary><b>⌨️ Commands</b></summary>
<br>

| Command | What it does |
|---|---|
| `/help` | Help and command list |
| `/new` | New chat, choosing who with |
| `/screen` | Shows her your screen (`/screen todas`, all screens) |
| `/programa` | Hands over to the coder (`/programa fix this…` sends it straight to it) |
| `/chati` | Brings her back |
| `/compact` | Summarizes the conversation to free memory |
| `/beso`, `/triste`… | Plays that gesture on the video |

</details>

---

## Privacy and disclaimer

- With a local model **nothing leaves your PC**: not the text, not the voice, not the image.
  Conversations, memories, keys and settings are stored on your machine.
- With a cloud provider, what you type goes to that provider under its own terms.
- Chati.AI **adds no content filters**. Depending on the model and the character you choose it can
  produce adult content: **18+ only**. You are responsible for how you use it, for the models you
  load and for the accounts you connect.

---

<p align="center">
  <sub>Made with love and far too many late nights. If it makes your day better, <a href="https://paypal.me/nombrote">buy me a coffee</a> ☕</sub>
</p>
