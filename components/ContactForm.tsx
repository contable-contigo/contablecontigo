'use client';

import { useState, useMemo } from 'react';

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  tipo: string;
};

type Touched = Partial<Record<keyof FormState, boolean>>;

const INITIAL_FORM: FormState = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
  tipo: 'personas',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [touched, setTouched] = useState<Touched>({});
  const [sent, setSent] = useState(false);
  const [ref] = useState(
    () => 'CC-26-' + String(Math.floor(Math.random() * 9000 + 1000))
  );

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre.';
    if (!form.email.trim()) e.email = 'Ingresa tu correo.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Correo no válido.';
    if (form.telefono && !/^[\d +()\-]{6,}$/.test(form.telefono))
      e.telefono = 'Teléfono no válido.';
    if (!form.mensaje.trim() || form.mensaje.trim().length < 8)
      e.mensaje = 'Cuéntanos un poco más (mín. 8 caracteres).';
    return e;
  }, [form]);

  const valid = Object.keys(errors).length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nombre: true, email: true, telefono: true, mensaje: true });
    if (!valid) return;
    console.log(form);
    setSent(true);
  };

  const fld = (name: keyof FormState) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [name]: e.target.value }),
    onBlur: () => setTouched({ ...touched, [name]: true }),
    'aria-invalid': !!(touched[name] && errors[name]) as boolean | undefined,
    'aria-describedby':
      touched[name] && errors[name] ? `err-${name}` : undefined,
  });

  if (sent) {
    return (
      <div className="contact-form">
        <div className="form-success" role="status">
          <div className="fs-mark">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12.5L10 17.5L19 7.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>¡Mensaje recibido!</h3>
          <p>
            Gracias {form.nombre.split(' ')[0]}. Te contactaremos a{' '}
            <strong>{form.email}</strong> en menos de 24 horas hábiles.
          </p>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setSent(false);
              setForm(INITIAL_FORM);
              setTouched({});
            }}
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <span className="mono">Formulario</span>
        <span className="mono dim">{ref}</span>
      </div>

      <div className="field">
        <label htmlFor="nombre">Nombre completo</label>
        <input id="nombre" type="text" placeholder="Camila Soto" {...fld('nombre')} />
        {touched.nombre && errors.nombre && (
          <span className="err" id="err-nombre">{errors.nombre}</span>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Correo</label>
          <input id="email" type="email" placeholder="tu@correo.cl" {...fld('email')} />
          {touched.email && errors.email && (
            <span className="err" id="err-email">{errors.email}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="telefono">
            Teléfono <span className="opt">(opcional)</span>
          </label>
          <input id="telefono" type="tel" placeholder="+56 9 1234 5678" {...fld('telefono')} />
          {touched.telefono && errors.telefono && (
            <span className="err" id="err-telefono">{errors.telefono}</span>
          )}
        </div>
      </div>

      <div className="field">
        <span className="label-as">Soy / represento a</span>
        <div className="radio-row" role="radiogroup" aria-label="Tipo de cliente">
          {(
            [
              ['personas', 'Persona natural'],
              ['nuevas', 'Empresa nueva'],
              ['establecidas', 'Empresa establecida'],
            ] as const
          ).map(([v, label]) => (
            <label key={v} className={'radio' + (form.tipo === v ? ' is-on' : '')}>
              <input
                type="radio"
                name="tipo"
                value={v}
                checked={form.tipo === v}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="mensaje">¿En qué te podemos ayudar?</label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente tu situación, plazos y dudas."
          {...fld('mensaje')}
        />
        {touched.mensaje && errors.mensaje && (
          <span className="err" id="err-mensaje">{errors.mensaje}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Enviar mensaje
        <span className="arr" aria-hidden="true">→</span>
      </button>
      <p className="finep">
        Al enviar aceptas que te contactemos por correo o teléfono. No
        compartimos tus datos.
      </p>
    </form>
  );
}
