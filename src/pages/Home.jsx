import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const skills = ['Prioritization', 'Decision-making', 'Adaptability', 'Leadership judgment'];

const steps = [
  'Complete a short survey',
  'Participate in pilot activities',
  'Practice skills through future game-based modules',
  'Measure progress over time',
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-coral">
              Leadership practice for modern teams
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-ink sm:text-5xl lg:text-6xl">
              Build better workplace skills through short, engaging practice.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AI is changing work, but human judgment, prioritization, adaptability, and leadership still determine how well teams perform under pressure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/survey" variant="accent">
                Take the Survey
              </Button>
              <Button to="/about" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-mist p-6 shadow-soft">
            <div className="rounded-md bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-sm font-semibold text-slate-700">Practice Loop</span>
                <span className="rounded-md bg-field px-3 py-1 text-xs font-semibold text-pine">Pilot</span>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-4 rounded-md border border-slate-200 p-4">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{skill}</p>
                      <p className="text-sm text-slate-600">Short scenario, clear choice, useful feedback.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The problem"
            title="Workplace training needs to move beyond passive content."
            description="Traditional training is often passive, forgettable, and hard to measure. Companies need better ways to develop real workplace capability that shows up in decisions, priorities, and team behavior."
          />
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow="The solution"
            title="Short game-based training loops for practical skills."
            description="TwoPercent is exploring focused practice modules that help people rehearse everyday workplace decisions in a lighter, more engaging format."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <article key={skill} className="rounded-md border border-slate-200 bg-mist p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{skill}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practice the moments where judgment, tradeoffs, and context matter.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How it works"
            title="A simple path from insight to practice."
            description="The pilot starts with a survey and grows toward measurable skill practice over time."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-coral">Step {index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-md border border-slate-200 bg-ink p-8 text-white shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Early pilot</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal">Help shape the first version.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
              This website supports an early pilot program. Your survey responses help identify learning needs, workplace skill gaps, and interest in future activities.
            </p>
          </div>
          <Button to="/survey" variant="accent">
            Complete the Survey
          </Button>
        </div>
      </section>
    </>
  );
}
