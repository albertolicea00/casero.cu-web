function app() {
  return {
    mobileMenuOpen: false,
    notifyOpen: false,
    openFaq: null,
    starsIOS: null,
    starsAndroid: null,
    darkMode: localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    faqs: [
      {
        q: '¿CASERO.cu es una app oficial?',
        a: 'No. Es un proyecto independiente, no afiliado a CIDP-MININT ni a ninguna entidad gubernamental. Se conecta al portal oficial <code class="code-inline">casero.rem.cu</code> usando tus propias credenciales, exactamente igual que lo haría un navegador.'
      },
      {
        q: '¿Es seguro meter mi usuario y contraseña del portal?',
        a: 'La app no guarda tu contraseña en el dispositivo ni la envía a ningún servidor propio de CASERO.cu — se usa una sola vez para autenticarte directamente contra <code class="code-inline">casero.rem.cu</code>, el mismo portal oficial al que entrarías desde el navegador. El código es abierto: puedes revisarlo tú mismo.'
      },
      {
        q: '¿Por qué la app "salta" la advertencia de certificado del portal?',
        a: 'El portal oficial sirve un certificado que no pasa la validación estándar (por eso el navegador marca <code class="code-inline">net::ERR_CERT_AUTHORITY_INVALID</code>). La app usa certificate pinning al certificado real del portal — no desactiva la seguridad en general, solo confía específicamente en ese certificado conocido.'
      },
      {
        q: '¿Funciona sin conexión a internet, por USSD/SMS?',
        a: 'Esa vía está en desarrollo — el código de reporte por USSD/SMS todavía no ha sido publicado por las autoridades, así que hoy en día la app funciona reportando a través del portal web (necesitas datos móviles o wifi). En cuanto el código oficial se publique, se habilitará el reporte por USSD/SMS sin conexión.'
      },
      {
        q: '¿Cuándo estará en App Store / Play Store?',
        a: 'Por ahora está en beta — solo instalable compilando desde el código fuente en GitHub. <button onclick="window.dispatchEvent(new CustomEvent(\'notify:open\'))" class="text-[color:var(--color-clay)] underline cursor-pointer">Suscríbete</button> para que te avisemos cuando se publique.'
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Cero. Que con los pocos turistas que llegan últimamente, como para encima estar pagando por registrarlos.'
      },
    ],
    init() {
      this.$watch('darkMode', val => localStorage.setItem('darkMode', val));
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
          this.darkMode = e.matches;
        }
      });
      window.addEventListener('notify:open', () => { this.notifyOpen = true; });
      fetch('https://api.github.com/repos/albertolicea00/casero.cu-ios')
        .then(r => r.json())
        .then(d => { if (d.stargazers_count !== undefined) this.starsIOS = d.stargazers_count; })
        .catch(() => {});
      fetch('https://api.github.com/repos/albertolicea00/casero.cu-apk')
        .then(r => r.json())
        .then(d => { if (d.stargazers_count !== undefined) this.starsAndroid = d.stargazers_count; })
        .catch(() => {});
    }
  }
}

function notifyForm() {
  return {
    email: '',
    sent: false,
    loading: false,
    error: '',
    async submit() {
      if (!this.email) return;
      this.loading = true;
      this.error = '';

      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        });

        if (res.ok) {
          this.sent = true;
        } else {
          this.error = 'Hubo un error al suscribirte. Inténtalo de nuevo.';
        }
      } catch (err) {
        this.error = 'Error de red. Por favor, revisa tu conexión e inténtalo de nuevo.';
      } finally {
        this.loading = false;
      }
    }
  }
}
