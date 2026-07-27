# Simulador de Comisiones — Iruña S.A.

Listo para publicarse en GitHub Pages y usarse como app instalable en
iPhone y Android (PWA - Progressive Web App).

## Archivos del paquete

```
index.html                          → el simulador (toda la app vive acá)
manifest-comisiones.webmanifest     → metadata de la app (nombre, ícono, colores)
sw-comisiones.js                    → service worker (permite instalar y usar offline)
icon-comisiones-192.png             → ícono de la app (192x192)
icon-comisiones-512.png             → ícono de la app (512x512)
```

Los 5 archivos tienen que quedar **en la misma carpeta**, en la raíz del repo
(o en la raíz de la carpeta que publiques con GitHub Pages). No cambies los
nombres, porque `index.html` ya los referencia tal cual. Ojo: el archivo
principal se tiene que llamar exactamente **`index.html`** (si lo subiste con
otro nombre, renombralo antes de subirlo).

## 1. Subir a GitHub

1. Creá un repositorio nuevo en GitHub (público o privado; si es privado
   necesitás GitHub Pro/Team/Enterprise para poder activarle Pages).
2. Subí los 5 archivos de arriba a la raíz del repo (podés arrastrarlos desde
   la web de GitHub con "Add file → Upload files", o con git:
   ```bash
   git init
   git add .
   git commit -m "Simulador de comisiones Iruña"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

## 2. Activar GitHub Pages

1. En el repo: **Settings → Pages**.
2. En "Source" elegí **Deploy from a branch**.
3. Rama: **main**, carpeta: **/ (root)**. Guardar.
4. GitHub te da una URL parecida a:
   `https://TU-USUARIO.github.io/TU-REPO/`
5. Esperá 1-2 minutos y entrá a esa URL. Ya vas a tener el simulador andando
   con HTTPS (necesario para poder instalarlo como app).

## 3. Instalar en el iPhone

1. Abrí la URL de GitHub Pages en **Safari** (tiene que ser Safari — iOS solo
   permite instalar PWAs desde ahí, no desde Chrome).
2. Tocá el botón de **Compartir** (el cuadradito con la flecha hacia arriba).
3. Elegí **"Agregar a la pantalla de inicio"**.
4. Confirmá el nombre ("Comisiones Iruña") y tocá **Agregar**.
5. Va a aparecer un ícono verde en el celular que abre el simulador a
   pantalla completa, como una app nativa (sin la barra de Safari arriba).

## 4. Instalar en Android

1. Abrí la URL en **Chrome**.
2. Va a aparecer un cartel abajo: **"Instalar app en el celular"**. Si no
   aparece solo, tocá los **3 puntitos** arriba a la derecha → **"Instalar
   app"** / **"Agregar a pantalla de inicio"**.
3. Confirmá y queda instalada con ícono propio.

## 5. Sobre tus datos (ventas cargadas)

- Las ventas que cargues se guardan automáticamente en el **almacenamiento
  local del navegador** de ese celular/computadora (no se suben a ningún
  servidor ni a GitHub).
- Si querés pasar tus datos a otro dispositivo, o tener un respaldo, usá el
  botón 📤 **"Guardar como…"** de la barra superior: te descarga un archivo
  con todas tus ventas, que después podés volver a abrir desde cualquier
  otro celular o computadora con el mismo simulador instalado.
- Instalar la app en un celular nuevo **no trae** las ventas que cargaste en
  otro — para eso siempre usá el archivo exportado.

## 6. Actualizar el simulador más adelante

Cuando quieras subir una versión nueva:
1. Reemplazá `index.html` en el repo por el archivo actualizado.
2. Los celulares que ya tienen la app instalada la actualizan solos la
   próxima vez que la abran con internet (el service worker siempre busca
   la versión más nueva primero, y solo usa la copia guardada si no hay
   señal). Esto no afecta ni borra las ventas ya cargadas.
3. Si algún celular queda con una versión vieja "pegada", abrí
   `sw-comisiones.js` y subí el número de versión del caché
   (`comisiones-irunia-v1` → `comisiones-irunia-v2`), volvé a subirlo, y eso
   fuerza a actualizar todo de nuevo.

## Notas

- No hace falta backend ni servidor propio: todo corre en el navegador.
- Si el repo es público, cualquiera con el link puede entrar y usar el
  simulador (y ver el código, no los datos — esos quedan en cada
  dispositivo). Si necesitás privacidad, usá un repo privado con GitHub
  Pro/Team, o restringí el acceso por otra vía.
