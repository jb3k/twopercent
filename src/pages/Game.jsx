import SectionHeader from '../components/SectionHeader.jsx';

function GamePlaceholder() {
  return (
    <div className="grid min-h-[360px] place-items-center rounded-md border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">Future module</p>
        <h2 className="mt-3 text-2xl font-bold text-ink">Training game loads here</h2>
        <p className="mt-4 max-w-md text-slate-600">
          This panel is ready for a React game component when the first practice module is designed.
        </p>
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Game"
          title="A home for future game-based training modules."
          description="Game-based training modules will be added later. The page is structured so a React game component can be inserted without changing the surrounding layout."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          <GamePlaceholder />
          <aside className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-ink">Planned module shape</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <p>Scenario-driven prompt</p>
              <p>Short decision window</p>
              <p>Feedback tied to workplace skills</p>
              <p>Progress view for later measurement</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
