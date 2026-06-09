export function About() {
  return (
    <section className="section about" id="nosotros">
      <div className="container about-grid">
        <div className="about-left">
          <div className="section-eyebrow">
            <span>01</span> Nosotros
          </div>
          <h2 className="section-title">
            Un equipo contable que <em>habla claro</em>, no en jerga.
          </h2>
        </div>
        <div className="about-right">
          <p className="prose">
            Somos Viviana y Juan, contadores auditores con + 15 años de
            experiencia acompañando a personas naturales, emprendedores y
            empresas en sus decisiones financieras y tributarias.
          </p>
          <p className="prose">
            Hemos aprendido que cada cliente tiene una realidad distinta, y que
            las mejores soluciones son las que se adaptan a esa realidad. Por
            eso trabajamos cerca: en simple, plazos cumplidos y un contador que
            te conoce por nombre.
          </p>
        </div>
      </div>
    </section>
  );
}
