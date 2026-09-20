function app() {
  return {
    mobileMenuOpen: false,
    notifyOpen: false,
    openFaqApp: null,
    openFaqLegal: null,
    starsIOS: null,
    starsAndroid: null,
    darkMode: localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    faqsApp: [
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
        q: '¿Cuánto cuesta esta applicación?',
        a: 'Cero. Que con los pocos turistas que llegan últimamente, como para encima estar pagando por registrarlos.'
      },
    ],
    faqsLegal: [
      {
        q: '¿Es obligatorio reportar al MININT a las personas residentes en el exterior hospedadas en viviendas de alquiler?',
        a: 'Sí. Cuando se arriende una vivienda, habitación o espacio a una persona residente en el exterior, corresponde informar al órgano facultado del Ministerio del Interior los datos de identificación del arrendatario y de sus acompañantes.<br><br>En el caso de los trabajadores por cuenta propia, esta obligación está recogida en el artículo 27 del Decreto-Ley 90 de 2024, que exige informar los datos del arrendatario y de sus acompañantes permanentes o temporales cuando se arriende a personas residentes permanentes en el exterior.<br><br>Además, el Decreto 160 de 2026, vigente desde el 4 de agosto de 2026, establece esta obligación para los actores económicos no estatales que desarrollen actividades de arrendamiento de viviendas, habitaciones o espacios a personas residentes en el exterior.'
      },
      {
        q: '¿También deben reportarse los ciudadanos cubanos residentes en el exterior?',
        a: 'Sí. La obligación vigente no se limita a turistas o ciudadanos extranjeros. La normativa se refiere a personas residentes en el exterior, por lo que comprende también a los ciudadanos cubanos establecidos fuera de Cuba cuando se hospeden en viviendas, habitaciones o espacios destinados al arrendamiento.<br><br>También deben informarse los datos de identificación de sus acompañantes, cuando los hubiera.'
      },
      {
        q: '¿La obligación de realizar el reporte corresponde solamente a los trabajadores por cuenta propia?',
        a: 'No. Desde la entrada en vigor del Decreto 160/2026, la obligación alcanza a los actores económicos no estatales que desarrollen actividades de arrendamiento en los supuestos establecidos por la norma. Esto comprende a empresas privadas, micro, pequeñas y medianas empresas privadas, cooperativas no agropecuarias y trabajadores por cuenta propia.<br><br>No obstante, determinadas obligaciones específicas, como llevar y custodiar el Libro de Registro de Arrendatarios y Huéspedes, están reguladas expresamente para los trabajadores por cuenta propia en el Decreto-Ley 90 de 2024.'
      },
      {
        q: '¿Con qué tiempo debe realizarse el reporte?',
        a: 'El reporte debe realizarse dentro de las 24 horas siguientes al inicio del alojamiento, conforme al procedimiento operativo establecido para este servicio.<br><br>La gestión puede realizarse mediante las vías no presenciales habilitadas, sin necesidad de esperar al horario de atención de una oficina.'
      },
      {
        q: '¿Qué obligaciones tiene el trabajador por cuenta propia que ejerce la actividad de arrendamiento?',
        a: 'Cuando el proyecto de trabajo incluye el arrendamiento de viviendas, habitaciones o espacios, el Decreto-Ley 90 de 2024 establece, entre otras obligaciones, que el trabajador por cuenta propia debe:<ul class="list-disc list-inside space-y-1 mt-2"><li>ser responsable de lo que acontece en el inmueble;</li><li>consignar en el Libro de Registro de Arrendatarios y Huéspedes los datos del arrendatario y de sus acompañantes, si los hubiera;</li><li>custodiar ese libro durante los cinco años siguientes a partir de su entrega, aunque se cancele la autorización;</li><li>informar al órgano facultado del Ministerio del Interior los datos de identificación del arrendatario y sus acompañantes permanentes o temporales cuando se arriende a personas residentes permanentes en el exterior;</li><li>comunicar su intención de salir del país y acreditar, mediante el documento legal correspondiente, a la persona que asumirá su representación a los efectos del arrendamiento.</li></ul><br>Estas obligaciones están recogidas expresamente en el artículo 27 del Decreto-Ley 90/2024.'
      },
      {
        q: '¿Qué ventajas ofrece realizar el reporte por Internet o mediante SMS?',
        a: 'Las vías no presenciales permiten realizar el reporte sin acudir a una oficina de trámites del MININT y sin depender de un horario laboral presencial.<br><br>El arrendador puede utilizar el Portal Caseros o, cuando corresponda, el servicio de SMS desde el teléfono previamente registrado.<br><br>La disponibilidad efectiva de estos servicios depende del funcionamiento de las plataformas y de los servicios de telecomunicaciones.'
      },
      {
        q: '¿Dónde puedo obtener más información o realizar una consulta?',
        a: 'Para consultas o inquietudes relacionadas con los servicios de la Dirección de Identificación, Inmigración y Extranjería del Ministerio del Interior se encuentran habilitados:<br><br>Teléfono: <code class="code-inline">18808</code><br>Correo electrónico: <a href="mailto:diieminintcuba@rem.cu" class="text-clay hover:underline">diieminintcuba@rem.cu</a>'
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
