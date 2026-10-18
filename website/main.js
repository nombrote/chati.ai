// Chati.AI: idioma (inglés y español aquí; los demás van a su readme), descarga según el
// sistema, versión y tamaños de la última release, y vídeos que solo cargan YouTube al pulsar.

const REPO = "https://github.com/nombrote/chati.ai";

const ES = {
  "nav.demos": "Vídeos", "nav.features": "Qué hace", "nav.install": "Instalar", "nav.support": "Apoyar",
  "hero.pill": "Gratis · Windows · Linux · macOS",
  "hero.title": 'Un agente de IA con cara, voz, teléfono y manos. <span class="grad">En tu PC.</span>',
  "hero.lead": "No es un chatbot con una foto al lado: es un agente de verdad que <b>te habla, gesticula y se emociona</b>, tiene su propia personalidad y <b>hace el trabajo</b>. Navega, programa, maneja tus archivos y usa herramientas. Puede tener <b>su propio WhatsApp</b> y cogerte las videollamadas. Con modelos en tu PC o en la nube.",
  "hero.download": "Descargar",
  "hero.watch": "Mírala en acción",
  "hero.other": "Otros sistemas y pasos para instalar",
  "hero.alt": "Chati.AI: videollamada a la izquierda, chat a la derecha",
  "hero.quote": "Te mira, te contesta, se ríe y, si te pasas, se enfada. Y mientras charláis, te hace los recados.",
  "demos.title": "Chati.AI en acción",
  "demos.v1": "🎭 Cara, voz y emociones", "demos.v1d": "Lena charlando contigo y enseñando lo que siente.",
  "demos.v2": "🧰 Un agente que trabaja por ti", "demos.v2d": "Se encarga de tareas de verdad en tu ordenador.",
  "demos.v3": "📱 Videollamadas por WhatsApp", "demos.v3d": "La llamas desde el móvil y te lo coge, con su cara y su voz.",
  "feat.title": "Lo que la hace distinta",
  "f1": "Es un agente", "f1d": "Navega, lee y escribe archivos, ejecuta comandos, hace planes, usa habilidades y servidores MCP. Con tarjetas de permiso o en modo automático.",
  "f2": "Tiene cara", "f2d": "Vídeo real encadenado por emociones: sonríe, se sorprende, te guiña, se enfada. Varios avatares, masculinos y femeninos, y pronto más.",
  "f3": "Voz en tiempo real", "f3d": "Habla y te escucha en tu PC, sin internet. La puedes interrumpir hablando.",
  "f4": "Te ve", "f4d": "Compártele la webcam o la pantalla y te comenta lo que ve.",
  "f5": "Tiene teléfono", "f5d": "Su propia cuenta de WhatsApp, su número con SIM, videollamadas por Meet, Telegram y correo.",
  "f6": "Multilingüe", "f6d": "La aplicación en 8 idiomas, y te contesta en el tuyo.",
  "f7": "Local o nube", "f7d": "Ollama, LM Studio, llama.cpp, tu cuenta de ChatGPT, Gemini, Groq, Cerebras, Mistral, OpenRouter…",
  "f8": "Gratis, todo el día", "f8d": "Varias cuentas gratuitas: cuando una se agota, salta sola a la siguiente.",
  "f9": "Router de modelos", "f9d": "Un modelo gratuito para charlar y otro, de pago o gratuito, para programar. Cambia sola según lo que pidas.",
  "f10": "Sin censura añadida", "f10d": "Lo que dice depende solo del modelo y la personalidad que elijas. No hay nadie en medio.",
  "gal.title": "Más de cerca",
  "g1": "Reacciona a lo que dice", "g1d": "Clips de vídeo por emoción, con fundidos que no se notan. Si llevas rato callado, te habla ella.",
  "g2": "Te coge el WhatsApp", "g2d": "Con su propio número. Chatea, manda fotos y notas de voz y coge llamadas y videollamadas.",
  "g3": "Hace cosas por ti", "g3d": "Busca en internet con un navegador real, edita archivos, lanza comandos y te enseña una tarjeta antes de tocar nada.",
  "g4": "Un router que elige el modelo", "g4d": "Uno barato o gratuito para charlar y otro potente para programar. Entra solo cuando toca código.",
  "g5": "Ve lo que le enseñas", "g5d": "Tu webcam o tu pantalla. «Avísame cuando acabe la descarga.»",
  "g6": "Tus modelos, tus cuentas", "g6d": "Cambia de modelo sin perder la charla. Varias cuentas por proveedor, con salto automático.",
  "g7": "Elige con quién hablas", "g7d": "Lena, Marc o la onda de luz, y pronto más, algunos sin censura. Cada personaje es una carpeta: añade los tuyos.",
  "gal.more": "Ver todo lo que hace en GitHub →",
  "inst.title": "Instalar",
  "inst.sub": "No hay que instalar nada a mano: descargas, abres y un asistente lo prepara todo.",
  "inst.mac": "Apple Silicon (M1 o posterior)",
  "inst.vt": "Analizado con VirusTotal:", "inst.sha": "Huellas SHA-256 (v1.0.0)",
  "s1": "Ábrela", "s1d": "<b>Windows:</b> descomprime y abre <code>ChatiAI.exe</code>. <b>Linux:</b> descomprime con <code>tar xzf</code> y ejecuta <code>./install.sh</code> dentro de la carpeta; la pone en el menú de aplicaciones e instala la librería de sonido si falta (te pide la contraseña una vez). <b>macOS:</b> descomprime con <code>tar xzf</code> y ejecuta <code>./ChatiAI</code> dentro de la carpeta.",
  "s2": "Deja que el asistente la prepare", "s2d": "Eliges idioma; mira la memoria de tu tarjeta gráfica y tu RAM y te recomienda el modelo local más grande que cabe, instalándote Ollama y el modelo. O entras con tu cuenta de ChatGPT o pegas la clave de un proveedor en la nube. Después eliges su aspecto y su voz.",
  "s3": "Empieza a hablar", "s3d": "Escribe <code>/help</code> en el chat para ver los comandos. Puedes volver a abrir el asistente cuando quieras desde el menú.",
  "inst.req": "<b>Requisitos:</b> para modelos locales, una tarjeta gráfica con 5 GB como mínimo (9 GB para el modelo de 12 B); los más pequeños también van en el procesador si tienes RAM de sobra. Con modelos en la nube vale cualquier PC.",
  "inst.sign": "<b>Todavía no va firmada:</b> si Windows muestra el aviso de SmartScreen, pulsa <i>Más información › Ejecutar de todas formas</i>. Si macOS no la deja abrir, ejecuta una vez <code>xattr -dr com.apple.quarantine Chati.AI-osx-arm64</code>.",
  "priv.title": "Privada de serie",
  "priv.p1": "Con un modelo local <b>nada sale de tu PC</b>: ni el texto, ni la voz, ni la imagen. Conversaciones, recuerdos, claves y ajustes se quedan en tu equipo. Con un proveedor en la nube, lo que escribes va a ese proveedor y se rige por sus condiciones.",
  "priv.adult": "Solo para mayores de 18",
  "priv.p2": "Chati.AI no añade filtros de contenido. Según el modelo y el personaje que elijas, puede generar contenido para adultos. Eres responsable del uso que hagas de ella.",
  "sup.title": "Apoya el proyecto",
  "sup.p": "Chati.AI es gratis y está hecha con cariño y demasiadas noches sin dormir. Si te alegra el día, puedes invitarme a un café.",
  "sup.btn": "Invítame a un café con PayPal",
  "foot.rel": "Versiones", "foot.lic": "Licencia", "foot.tp": "Avisos de terceros", "foot.issues": "Avisar de un problema",
  "dl.for": "Descargar para {0}",
  "title": "Chati.AI: un agente de IA con cara, voz, teléfono y manos",
};

// Lo que pone en inglés el propio HTML, para poder volver a él sin recargar.
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll("[data-i18n-alt]").forEach(el => { EN[el.dataset.i18nAlt] = el.alt; });
EN["dl.for"] = "Download for {0}";
EN["title"] = document.title;

let idioma = "en";
function t(clave) { return (idioma === "es" ? ES : EN)[clave] ?? EN[clave]; }

function ponIdioma(cual) {
  idioma = cual;
  document.documentElement.lang = cual;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.getElementById("lang").value = cual;
  ponDescarga();
  try { localStorage.setItem("idioma", cual); } catch (e) { /* sin almacenamiento, da igual */ }
}

document.getElementById("lang").addEventListener("change", e => {
  const v = e.target.value;
  if (v === "en" || v === "es") ponIdioma(v);
  else location.href = `${REPO}/blob/main/${v}`;
});

// El sistema de quien visita, para que el botón grande baje el archivo que le toca.
const SISTEMAS = {
  win: { nombre: "Windows", archivo: "Chati.AI-win-x64.zip" },
  linux: { nombre: "Linux", archivo: "Chati.AI-linux-x64.tar.gz" },
  mac: { nombre: "macOS", archivo: "Chati.AI-osx-arm64.tar.gz" },
};
function sistema() {
  const p = ((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent || "").toLowerCase();
  if (/android|iphone|ipad/.test(navigator.userAgent.toLowerCase())) return null;
  if (p.includes("win")) return "win";
  if (p.includes("mac")) return "mac";
  if (p.includes("linux") || p.includes("x11")) return "linux";
  return null;
}
const miSistema = sistema();

function ponDescarga() {
  const boton = document.getElementById("dl-main");
  const texto = document.getElementById("dl-main-text");
  if (!miSistema) { boton.href = "#install"; texto.textContent = t("hero.download"); return; }
  const s = SISTEMAS[miSistema];
  boton.href = `${REPO}/releases/latest/download/${s.archivo}`;
  texto.textContent = t("dl.for").replace("{0}", s.nombre);
}
if (miSistema) {
  const tarjeta = document.querySelector(`.dl-card[data-os="${miSistema}"]`);
  if (tarjeta) tarjeta.classList.add("yours");
}

// Versión y tamaños de la última release (si GitHub no contesta, la página sigue igual).
fetch("https://api.github.com/repos/nombrote/chati.ai/releases/latest")
  .then(r => r.ok ? r.json() : null)
  .then(rel => {
    if (!rel) return;
    document.getElementById("ver").textContent = "· " + rel.tag_name;
    for (const a of rel.assets || []) {
      const el = document.querySelector(`.size[data-file="${a.name}"]`);
      if (el) el.textContent = Math.round(a.size / 1048576) + " MB";
    }
  })
  .catch(() => {});

// Los vídeos: la miniatura es nuestra y YouTube solo entra cuando le das al play.
document.querySelectorAll(".yt").forEach(b => {
  b.addEventListener("click", () => {
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0`;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    f.title = "YouTube";
    const caja = document.createElement("div");
    caja.className = "yt";
    caja.append(f);
    b.replaceWith(caja);
  }, { once: true });
});

// Idioma inicial: el que eligió antes, o el del navegador si es español.
let guardado = null;
try { guardado = localStorage.getItem("idioma"); } catch (e) { /* nada */ }
ponIdioma(guardado || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en"));
