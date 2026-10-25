# Third-party notices

Chati.AI is distributed under its own [license](LICENSE). It includes the third-party components
listed below, each under its own license. Those licenses apply to those components only, and the
Chati.AI license does not limit the rights they give you. The full license texts are in the
[`licenses`](licenses) folder that comes with Chati.AI, and the copyright notice of each component is
listed in [Copyright notices](#copyright-notices) below.

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
| OpenCvSharp4 and its native runtimes (OpenCvSharpExtern) | 4.13.0.20260627 | Apache-2.0 | https://github.com/shimat/opencvsharp |
| OpenCV (inside OpenCvSharpExtern) | 4.13 | Apache-2.0. Its bundled third-party libraries (such as Intel IPP ICV) keep their own permissive licenses | https://github.com/opencv/opencv · https://github.com/opencv/opencv/tree/4.x/3rdparty |
| FFmpeg (Windows: `opencv_videoio_ffmpeg4130_64.dll`; Linux and macOS: inside `libOpenCvSharpExtern`) | 4.4 (Windows), 7.1 (Linux), 8.0 (macOS) | LGPL-2.1-or-later. Source code: https://ffmpeg.org/download.html. The library that contains it can be replaced with your own build | https://ffmpeg.org/ |
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
| NLayer / NLayer.NAudioSupport (MP3 decoding) | 2.0.1 | MIT | https://github.com/naudio/NLayer |
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
| Open XML SDK (DocumentFormat.OpenXml) | 3.5.1 | MIT | https://github.com/dotnet/Open-XML-SDK |
| HtmlToOpenXml (Word documents from HTML) | 3.5.0 | MIT | https://github.com/onizet/html2openxml |
| Markdig (Markdown to HTML) | 1.4.2 | BSD-2-Clause | https://github.com/xoofx/markdig |
| SSH.NET | 2025.1.0 | MIT | https://github.com/sshnet/SSH.NET |
| SharpZipLib | 1.4.2 | MIT | https://github.com/icsharpcode/SharpZipLib |
| ZstdSharp | 0.8.1 | MIT | https://github.com/oleg-st/ZstdSharp |
| Microsoft.Extensions.* | 8.0 / 10.x | MIT | https://github.com/dotnet/extensions |

## Graphics

| Component | License | Source |
|---|---|---|
| Twemoji graphics (`emojis` folder) | CC BY 4.0. Copyright Twitter, Inc. and other contributors | https://github.com/twitter/twemoji |

## Copyright notices

The license texts in the `licenses` folder apply to the components below with these copyright
notices (MIT and BSD texts there use a placeholder for them).

**MIT**
- .NET runtime, Microsoft.Extensions.*, Microsoft Playwright for .NET, Open XML SDK, SkiaSharp, HarfBuzzSharp,
  ONNX Runtime: Copyright (c) Microsoft Corporation and .NET Foundation and Contributors.
- Avalonia UI: Copyright (c) 2013-2026 The AvaloniaUI Project.
- MicroCom.Runtime: Copyright (c) 2021 Nikita Tsukanov.
- Tmds.DBus.Protocol: Copyright (c) Tom Deseyn.
- AngleSharp: Copyright (c) 2013-2026 AngleSharp.
- MailKit / MimeKit: Copyright (c) .NET Foundation and Contributors.
- BouncyCastle.Cryptography: Copyright (c) 2000-2026 Legion of the Bouncy Castle Inc.
- ClosedXML / ClosedXML.Parser: Copyright (c) ClosedXML contributors.
- ExcelNumberFormat: Copyright (c) Anders Nielsen and contributors.
- HtmlToOpenXml: Copyright (c) 2009-2026 Olivier Nizet.
- SSH.NET: Copyright (c) 2010-2025 Renci and SSH.NET contributors.
- SharpZipLib: Copyright (c) 2000-2022 SharpZipLib Contributors.
- ZstdSharp: Copyright (c) 2024 Oleg Stepanischev.
- RBush: Copyright (c) 2017-2024 Turning Code, LLC (and others).
- NAudio, NLayer: Copyright (c) 2023-2026 Mark Heath and contributors.
- Concentus.Oggfile: Copyright (c) Logan Stromberg, Andrew Ward.
- Whisper.net: Copyright (c) Sandro Hanea. whisper.cpp: Copyright (c) 2023-2026 The ggml authors.
  Whisper model: Copyright (c) 2022 OpenAI.
- Piper voice model: Copyright (c) 2022 Michael Hansen.
- PortAudio: Copyright (c) 1999-2006 Ross Bencina and Phil Burk.

**BSD-2-Clause**
- Markdig: Copyright (c) 2018-2026 Alexandre Mutel. All rights reserved.

**BSD-3-Clause**
- Concentus (Opus): Copyright (c) Xiph.Org Foundation, Skype Limited, CSIRO, Microsoft Corp.
- ANGLE: Copyright (c) The ANGLE Project Authors.

**Apache-2.0**
- OpenCvSharp: Copyright (c) 2008-2026 shimat. OpenCV: Copyright (c) 2000-2026 Intel Corporation, Willow
  Garage, Itseez, OpenCV Foundation and other contributors.
- sherpa-onnx, PortAudioSharp2: Copyright (c) 2019-2026 Xiaomi Corporation and k2-fsa contributors.
- PdfPig: Copyright (c) UglyToad and PdfPig contributors.
- SixLabors.Fonts: Copyright (c) Six Labors.
- Playwright driver: Copyright (c) Microsoft Corporation (see `.playwright/package/ThirdPartyNotices.txt`).

**LGPL-2.1-or-later**
- FFmpeg: Copyright (c) the FFmpeg developers.

**GPL-3.0-or-later**
- eSpeak NG: Copyright (c) 2005-2017 Jonathan Duddington, (c) 2015-2026 eSpeak NG contributors.

**SIL Open Font License 1.1**
- Inter font: Copyright (c) 2016 The Inter Project Authors.

**CC BY 3.0 / CC BY 4.0**
- Sharvard corpus (Piper voice training data): Aubanel, García Lecumberri, Cooke, University of Edinburgh.
- Twemoji graphics: Copyright (c) Twitter, Inc. and other contributors.

## Downloaded on request, not included

When you ask for it, Chati.AI can download other software and models. They are not part of
Chati.AI and are used under their own licenses:

- **Ollama** (MIT): https://github.com/ollama/ollama
- **AI models**, for example the Gemma family ([Gemma Terms of Use](https://ai.google.dev/gemma/terms)),
  Qwen, or community fine-tunes from Hugging Face, each under the license on its model page.
- **Extra Piper voices** (sherpa-onnx builds), each under the license in its model card.
- **`embeddinggemma`** for long-term memory ([Gemma Terms of Use](https://ai.google.dev/gemma/terms)).

If you believe something is missing or wrong in this list, please open an issue.
