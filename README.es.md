# 🏠 CASERO.cu — Web
Cliente y plataforma web para CASERO.cu. 🇨🇺

[![Android Stars](https://img.shields.io/github/stars/albertolicea00/BancaRemota?style=flat&logo=android&label=Android%20Stars&color=B38B4D)](https://github.com/albertolicea00/casero.cu-apk)
[![iOS Stars](https://img.shields.io/github/stars/albertolicea00/BancaRemota?style=flat&logo=apple&label=iOS%20Stars&color=B38B4D)](https://github.com/albertolicea00/casero.cu-ios)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat&logo=alpinedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

[See the English version](README.md)

## ⚠️ Aviso
> **Proyecto no oficial.** No está afiliado con CIDP-MININT ni ninguna entidad gubernamental. Se conecta al portal oficial usando las credenciales del propio arrendador, igual que lo haría un navegador.No nos responsabilizamos por cambios en `casero.rem.cu`, los códigos USSD/SMS, o cualquier problema derivado del uso de este software. Úselo bajo su propio riesgo. Siempre verifique los registros de huéspedes por los canales oficiales.

<!-- TODO -->

## 🔐 Certificado pineado (`casero.rem.cu`)

El portal sirve un certificado autofirmado (emisor: `CSIC P-Services CA`) que
falla la validación estándar de cadena. Los clientes nativos (iOS, Android)
pinean contra una copia local de este certificado en vez de confiar en
cualquier CA. `casero.rem.cu` solo es alcanzable desde dentro de Cuba, así que
el certificado hay que obtenerlo desde una red que sí llegue a él.

```bash
scripts/fetch-casero-cert.sh
```

Esto guarda `casero_rem_cu.cer` (formato DER) en el directorio actual e
imprime su subject/issuer/fechas de validez. Copia ese archivo a los recursos
del cliente correspondiente (ej. `casero-cu-ios/Resources/casero_rem_cu.cer`)
y asegúrate de agregarlo al Resources build phase del target de la app.

El certificado vence — revisa `notAfter` y vuelve a correr el script para
renovarlo antes de que expire.

## 📦 Repositorios Relacionados

- [casero.cu-ios](https://github.com/albertolicea00/casero.cu-ios) — Cliente nativo iOS (Swift / SwiftUI)
- [casero.cu-apk](https://github.com/albertolicea00/casero.cu-apk) — Cliente nativo Android (Kotlin)
- [casero.cu-web](https://github.com/albertolicea00/casero.cu-web) — Cliente Web (este repo)

## 📄 Licencia

[MIT](LICENSE) © 2026 Alberto Licea
