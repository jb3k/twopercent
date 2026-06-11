import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { GOOGLE_FORMS_URL } from '../config.js';

export default function Survey() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Survey"
            title="Share what practical workplace development should focus on."
            description="The survey helps our team understand learning needs, workplace skills, and interest in future pilot activities."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={GOOGLE_FORMS_URL} target="_blank" rel="noreferrer" variant="accent">
              Open Google Form
            </Button>
            <Button to="/" variant="secondary">
              Back Home
            </Button>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">What the survey covers</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="rounded-md bg-mist p-4">Current workplace learning needs</li>
            <li className="rounded-md bg-mist p-4">Skills that feel most important for teams</li>
            <li className="rounded-md bg-mist p-4">Interest in pilot activities and future game-based modules</li>
          </ul>
          <p className="mt-6 rounded-md border border-field bg-field p-4 text-sm leading-6 text-pine">
            Privacy note: responses are collected through Google Forms. Please review the form before submitting personal information.
          </p>
        </div>
      </div>
    </section>
  );
}
