# Third-party notices

Chati.AI is distributed under its own [license](LICENSE). It includes the third-party components
listed below, each under its own license. Those licenses apply to those components only, and the
Chati.AI license does not limit the rights they give you. The full license texts are available at
each project's page.

Versions refer to Chati.AI 1.0.0.

## Application framework and runtime

| Component | Version | License | Source |
|---|---|---|---|
| .NET runtime | 8.0 | MIT | https://github.com/dotnet/runtime |
| Avalonia UI (Avalonia, Desktop, Skia, Win32, X11, FreeDesktop, Native, Themes.Fluent, Remote.Protocol) | 11.3.22 | MIT | https://github.com/AvaloniaUI/Avalonia |
| Avalonia ANGLE natives (Windows) | 2.1.25547 | BSD-3-Clause | https://chromium.googlesource.com/angle/angle |
| Inter font (Avalonia.Fonts.Inter) | 11.3.22 | SIL Open Font License 1.1 | https://github.com/rsms/inter |
| MicroCom.Runtime | 0.11.0 | MIT | https://github.com/kekekeks/MicroCom |
| Tmds.DBus.Protocol | 0.21.3 | MIT | https://github.com/tmds/Tmds.DBus |
| SkiaSharp | 2.88.9 | MIT | https://github.com/mono/SkiaSharp |
| HarfBuzzSharp | 8.3.1.1 | MIT | https://github.com/mono/SkiaSharp |
| Microsoft Visual C++ runtime (Windows) | 14.4 | Microsoft Visual Studio redistributable terms | https://visualstudio.microsoft.com/license-terms/ |

## Video and images

| Component | Version | License | Source |
|---|---|---|---|
| Emgu CV | 4.12.0.5764 | GPL-3.0 (dual licensed: GPL v3 or commercial) | https://www.emgu.com/ |
| OpenCV (inside Emgu CV) | 4.12 | Apache-2.0 | https://github.com/opencv/opencv |
| FFmpeg (opencv_videoio_ffmpeg) | — | LGPL-2.1-or-later | https://ffmpeg.org/ |
| libusb (Windows) | 1.0 | LGPL-2.1-or-later | https://github.com/libusb/libusb |
| SixLabors.Fonts | 1.0.0 | Apache-2.0 | https://github.com/SixLabors/Fonts |
| RBush | 4.0.0 | MIT | https://github.com/viceroypenguin/RBush |

## Voice and hearing

| Component | Version | License | Source |
|---|---|---|---|
| sherpa-onnx | 1.13.8 | Apache-2.0 | https://github.com/k2-fsa/sherpa-onnx |
| eSpeak NG (phonemizer used by the Piper voices, and its `espeak-ng-data`) | — | GPL-3.0-or-later | https://github.com/espeak-ng/espeak-ng |
| ONNX Runtime | — | MIT | https://github.com/microsoft/onnxruntime |
| Piper voice `es_ES-sharvard-medium` | — | Model: MIT. Training data: Sharvard corpus, CC BY 3.0 (Aubanel, García Lecumberri, Cooke, University of Edinburgh) | https://github.com/rhasspy/piper · https://datashare.ed.ac.uk/handle/10283/574 |
| Whisper.net | 1.9.1 | MIT | https://github.com/sandrohanea/whisper.net |
| whisper.cpp (inside Whisper.net) | — | MIT | https://github.com/ggml-org/whisper.cpp |
| Whisper `base` model (ggml format) | — | MIT (OpenAI) | https://github.com/openai/whisper |
| PortAudio | 19 | MIT-style PortAudio license | https://www.portaudio.com/ |
| PortAudioSharp2 | 1.0.6 | Apache-2.0 | https://github.com/csukuangfj/PortAudioSharp2 |
| NAudio | 2.2.1 | MIT | https://github.com/naudio/NAudio |
| Concentus / Concentus.Oggfile (Opus) | 2.2.2 / 1.0.7 | BSD-3-Clause / MIT | https://github.com/lostromb/concentus |

## Web, files and messaging

| Component | Version | License | Source |
|---|---|---|---|
| Microsoft Playwright for .NET | 1.63.0 | MIT | https://github.com/microsoft/playwright-dotnet |
| Playwright driver and Node.js (`.playwright` folder) | — | Apache-2.0 / MIT, see `.playwright/package/ThirdPartyNotices.txt` | https://github.com/microsoft/playwright · https://nodejs.org/ |
| AngleSharp | 1.8.2 | MIT | https://github.com/AngleSharp/AngleSharp |
| MailKit / MimeKit | 4.18.1 | MIT | https://github.com/jstedfast/MailKit |
| BouncyCastle.Cryptography | 2.7.0 | MIT | https://github.com/bcgit/bc-csharp |
| PdfPig | 0.1.9 | Apache-2.0 | https://github.com/UglyToad/PdfPig |
| ClosedXML / ClosedXML.Parser | 0.104.2 / 1.2.0 | MIT | https://github.com/ClosedXML/ClosedXML |
| ExcelNumberFormat | 1.1.0 | MIT | https://github.com/andersnm/ExcelNumberFormat |
| Open XML SDK (DocumentFormat.OpenXml) | 3.1.1 | MIT | https://github.com/dotnet/Open-XML-SDK |
| SharpZipLib | 1.4.2 | MIT | https://github.com/icsharpcode/SharpZipLib |
| ZstdSharp | 0.8.1 | MIT | https://github.com/oleg-st/ZstdSharp |
| Microsoft.Extensions.* | 8.0 / 10.x | MIT | https://github.com/dotnet/extensions |

## Graphics

| Component | License | Source |
|---|---|---|
| Twemoji graphics (`emojis` folder) | CC BY 4.0. Copyright Twitter, Inc. and other contributors | https://github.com/twitter/twemoji |

## Downloaded on request, not included

When you ask for it, Chati.AI can download other software and models. They are not part of
Chati.AI and are used under their own licenses:

- **Ollama** (MIT): https://github.com/ollama/ollama
- **AI models**, for example the Gemma family ([Gemma Terms of Use](https://ai.google.dev/gemma/terms)),
  Qwen, or community fine-tunes from Hugging Face, each under the license on its model page.
- **Extra Piper voices** (sherpa-onnx builds), each under the license in its model card.
- **`embeddinggemma`** for long-term memory ([Gemma Terms of Use](https://ai.google.dev/gemma/terms)).

If you believe something is missing or wrong in this list, please open an issue.
