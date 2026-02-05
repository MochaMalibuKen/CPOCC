import Section from '@/components/section';
import Card from '@/components/card';
import { MapPin } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CPOCC | Citizens Park Office & Conference Center',
  description: 'History and mission of CPOCC in Aiken, SC—professional offices, event space, and business support adjacent to Citizen’s Park.',
};

export default function AboutPage() {
  return (
    <div>
      <Section title="Rooted in Aiken. Built for What’s Next." subtitle="Citizens Park Office & Conference Center" background="muted">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Citizens Park Office & Conference Center is located at 640 Old Airport Road in Aiken, South Carolina, adjacent to Citizen’s Park. The building has long served as a site for professional and community use, supporting organizations and services that connect people and activity across the region.</p>
            <p>Today, CPOCC continues that tradition by reimagining the space as a modern center for offices, events, and business development—preserving its role as a place of connection while adapting it for contemporary needs.</p>
            <div className="card-surface p-4 space-y-2">
              <h3 className="text-xl font-semibold text-brand-navy">From connection to collaboration</h3>
              <p>Where this site once supported communication and service, it now supports collaboration, enterprise, and community engagement. CPOCC provides a flexible yet professional environment where people come together to work, meet, and grow.</p>
            </div>
          </div>
          <div className="space-y-4">
            <Card title="Where to find us" eyebrow="Location">
              <p className="flex items-start gap-3 text-slate-700"><MapPin /> 640 Old Airport Rd, Aiken, SC 29801</p>
              <div className="placeholder-img aspect-video">Map embed placeholder</div>
            </Card>
            <Card title="Programs" eyebrow="At a glance">
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Traditional office leasing with parking and internet included.</li>
                <li>Lily Event Center for meetings, trainings, and gatherings.</li>
                <li>Citizen’s Park Business Development Lab membership program.</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
