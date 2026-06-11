import SectionHeader from '../components/SectionHeader.jsx';

const sections = [
  {
    title: 'Mission',
    body: 'Our mission is to help people build practical workplace skills through engaging, measurable practice that fits into the pace of modern teams.',
  },
  {
    title: 'Why now',
    body: 'Companies are investing heavily in AI, automation, and new tools. Even with that shift, people remain the biggest driver of performance because teams still need judgment, context, communication, and leadership.',
  },
  {
    title: 'What we are building',
    body: 'We are exploring short, game-based practice loops that let employees rehearse prioritization, decision-making, adaptability, and leadership judgment in realistic workplace scenarios.',
  },
  {
    title: 'Who it is for',
    body: 'The early product is intended for growing teams, people leaders, HR partners, and operators who want development to feel practical, measurable, and easier to repeat.',
  },
];

export default function About() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Practical leadership development for work that keeps changing."
          description="TwoPercent is focused on helping people grow the skills that remain essential as workplaces adopt more AI: judgment, prioritization, adaptability, and leadership."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-ink">{section.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">People still make performance happen.</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-600">
            AI can accelerate work, but organizations still rely on people to decide what matters, adapt when plans change, lead through ambiguity, and turn information into action. TwoPercent is built around that belief.
          </p>
        </div>
      </div>
    </section>
  );
}
