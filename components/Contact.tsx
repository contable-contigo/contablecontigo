import { ContactForm } from './ContactForm';

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.91A10.04 10.04 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.42 1.27 4.86L2 22l5.27-1.24A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09zM12 20.07a8.06 8.06 0 0 1-4.1-1.12l-.29-.18-3.12.73.74-3.04-.19-.31A8.06 8.06 0 1 1 20.07 12 8.08 8.08 0 0 1 12 20.07zm4.41-5.78c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.55.12s-.63.78-.78.94c-.14.16-.29.18-.53.06s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.43-1.34-1.67s-.02-.37.1-.49c.1-.1.24-.27.36-.4.12-.13.16-.22.24-.37s.04-.28-.02-.4c-.06-.12-.55-1.33-.75-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.41.06-.62.28s-.81.79-.81 1.93.83 2.24.94 2.4c.12.16 1.64 2.5 3.97 3.5.55.24.99.38 1.32.49.55.18 1.05.15 1.45.09.44-.07 1.42-.58 1.62-1.14.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28z"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container contact-grid">
        <div className="contact-left">
          <div className="section-eyebrow">
            <span>03</span> Contacto
          </div>
          <h2 className="section-title">
            Conversemos sobre tu <em>caso</em>.
          </h2>
          <p className="prose">
            Cuéntanos brevemente qué necesitas. Te respondemos en menos de 24
            horas hábiles, sin compromiso y con una propuesta clara.
          </p>
          <ul className="contact-list">
            <li>
              <span className="cl-k">Email</span>
              <a href="mailto:contacto.contablecontigo@gmail.com">
                contacto.contablecontigo@gmail.com
              </a>
            </li>
            <li>
              <span className="cl-k">Atención</span>
              <span>Online y presencial · con cita previa</span>
            </li>
          </ul>
          <div className="wa-row" style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <a
              className="wa-btn"
              href="https://wa.me/56981382489?text=Hola%20Viviana%2C%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contable"
              target="_blank"
              rel="noopener noreferrer"
              style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            >
              <WhatsAppIcon />
              <span>
                <span className="wa-t">Viviana</span>
                <span className="wa-s">+56 9 8138 2489</span>
              </span>
            </a>
            <a
              className="wa-btn"
              href="https://wa.me/56977489522?text=Hola%20Juan%2C%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contable"
              target="_blank"
              rel="noopener noreferrer"
              style={{ justifyContent: 'flex-end' }}
            >
              <WhatsAppIcon />
              <span>
                <span className="wa-t">Juan</span>
                <span className="wa-s">+56 9 7748 9522</span>
              </span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
