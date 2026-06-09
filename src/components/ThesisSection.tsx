const base = import.meta.env.BASE_URL

const THESIS_ABSTRACT = `Many dynamical and enumerative problems can be recast in terms of translation surfaces, and studying the associated moduli spaces can reveal fascinating insights into their behaviour. We develop combinatorial tools to compute volumes of these moduli spaces and provide a new extension to recent techniques to evaluate volumes of strata. Kontsevich's proof of Witten's conjecture provided a link between intersection theory and counts of ribbon graphs which was later developed to evaluate volumes of principal strata. We discuss this approach and some applications to combinatorial problems of meander counts.`

const THESIS_INTRO =
  'A thesis written as part of my research project in enumerative geometry and moduli spaces, completed during my Masters of Mathematics.'

export function ThesisSection() {
  return (
    <section id="thesis" className="section">
      <h2>Masters Thesis</h2>
      <div className="content-card">
        <p className="thesis-intro">{THESIS_INTRO}</p>
        <figure className="thesis-figure">
          <img
            src={`${base}assets/tikz_website_display.svg`}
            alt="Cylinder decomposition diagram"
          />
        </figure>
        <div className="thesis-links">
          <a href={`${base}assets/Quan_Nguyen_Masters_Thesis.pdf`}>
            Thesis PDF
          </a>
          <a
            href={`${base}assets/Quan%20Masters%20Thesis%20Presentation.pdf`}
          >
            Presentation slides
          </a>
        </div>
        <h3 className="thesis-label">Abstract</h3>
        <p className="thesis-description">{THESIS_ABSTRACT}</p>
      </div>
    </section>
  )
}
