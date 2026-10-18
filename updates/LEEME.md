# Avisos de versión nueva

Chati.AI lee `latest.json` al arrancar (en segundo plano, una vez al día como mucho) y, si su
`version` es mayor que la de la aplicación, avisa con la fecha y las novedades, un botón para
descargar (lleva a `descarga`) y otro para dejarlo para más tarde.

## Sacar una versión nueva

1. Sube la versión en el código: `<Version>` de `ChatiCam/App/ChatiAI.App.csproj` (y la de
   `ChatiCam/Nucleo/ChatiAI.Nucleo.csproj`), por ejemplo `1.1.0`.
2. Compila los paquetes (`publica.bat`) y súbelos a una release nueva de GitHub.
3. Copia `latest.json` a `versiones/<la versión que tenía>.json` (el historial) y cambia en
   `latest.json`:
   - `version`: la nueva (tres números: `1.1.0`).
   - `fecha`: el día (`AAAA-MM-DD`).
   - `novedades`: lo nuevo en cada idioma. Varias líneas con `\n`. Si falta un idioma,
     sale el inglés.
4. Súbelo al repositorio (`main`). Avisará a quien tenga una versión anterior.

El orden importa: primero la release y luego `latest.json`, para que el botón de descargar ya
lleve a la nueva.
