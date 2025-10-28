# VoiceCpen - Voice-Activated Coding Environment

VoiceCpen is an **AI-powered voice-controlled coding environment** that lets you write, edit, and control code using **natural voice commands**.  
It features a browser-based interface, customizable voice command mappings, and optional Python backend utilities for text-to-speech (TTS) or NLP-based code generation.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Prerequisites](#️-prerequisites)
- [🧩 Project Structure](#-project-structure)
- [🗣️ How Voice Commands Work](#️-how-voice-commands-work)
- [🧠 Development Notes](#-development-notes)
- [🪲 Troubleshooting](#-troubleshooting)

---

## ✨ Features

- 🎤 **Voice-activated control** - write and execute code using voice commands.
- ⚙️ **Configurable commands** via `commands.json` - define custom phrases and mapped actions/snippets.
- 🧠 **Lightweight NLP layer** for intent detection and speech parsing (`nlp.js`, `train.js`).
- 🧩 **Browser UI** built with HTML, CSS, and JavaScript.
- 🐍 **Optional Python backend** for serving generated audio or TTS (`server.py`, `genwav.py`).
- 🧾 **Training & testing scripts** for NLP and speech model improvements.
- 🔊 **Integrated speech synthesis** and microphone input using the Web Speech API.

---

## 🚀 Quick Start

### Just open index.html in Chrome (recommended for Web Speech API).

---

## ⚙️ Prerequisites

- Modern browser - Chrome or Edge recommended for Web Speech API.
- Node.js (optional) - to run train.js, nlp.js, or testing scripts.
- Python 3 - required for backend scripts like server.py or genwav.py.
- (Optional) Run npm install if you plan to use Node scripts or dependencies.

## 🧩 Project Structure

| File / Folder | Description |
|----------------|--------------|
| **index.html** | Main UI of VoiceCpen - entry point of the app. |
| **scripts.js** | Frontend logic handling speech recognition and actions. |
| **nlp.js** | NLP and intent parsing module for interpreting commands. |
| **commands.json** | JSON list of voice commands and mapped actions/snippets. |
| **train.js**, **testnlp.js** | Scripts to train or test phrase-matching logic. |
| **server.py** | Lightweight Python backend for serving or processing requests. |
| **genwav.py** | Script for generating or testing audio files (e.g. WAV samples). |
| **codeGenerator.js**, **codeSnippetGenerator.js** | Modules for creating or inserting code snippets programmatically. |
| **styles.css**, **test.css** | UI styling files. |
| **test.html**, **test.wav** | Example/test files for debugging audio and UI. |

---

## 🗣️ How Voice Commands Work

-🎧 **Voice input** is captured using the Web Speech API in the browser.  
-🧠 **Recognized text** is processed by `scripts.js` and `nlp.js`.  
-🗂️ The phrase is **matched with `commands.json`** - if found, the mapped action runs.  
-⚙️ **Actions** can include inserting code snippets, editing text, or triggering backend tasks.  

---

## 🧠 Development Notes

🗂️ **To add new commands:**  
Edit `commands.json` → add new phrases and corresponding actions.  
Reload the browser to apply changes.

⚙️ **Backend setup:**  
Check Python script dependencies (`pip install flask`, `speechrecognition`, etc., if used).

🌐 **HTTPS requirement:**  
Some browsers need HTTPS for microphone access — use `localhost` or tools like **ngrok** for secure tunnels.

🔧 **Training scripts:**  
Use `train.js` or `nlp.js` to extend NLP behavior or command recognition.

---

## 🪲 Troubleshooting

| Issue | Possible Fix |
|--------|---------------|
| ❌ Speech recognition not starting | Ensure mic permission is granted; use Chrome desktop. |
| ❌ Commands not recognized | Check `commands.json` for syntax or phrase match errors. |

---

#### by Gokula Krishnan G V - exploring the future of voice-driven development.
