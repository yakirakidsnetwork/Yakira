import React from 'react';
import { colors } from '@/lib/design-system';

export function DesignPreview() {
  return (
    <div className="container-default section-padding">
      <h1 className="heading-1 mb-8 text-african-earth">Design System Preview</h1>
      <p className="body-large mb-12 text-text-light">
        A quick reference for the Yakira Kids Network design tokens.
      </p>

      <section className="mb-16">
        <h2 className="heading-2 mb-8 border-b pb-2">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors).map(([name, code]) => (
            <div key={name} className="flex flex-col gap-2">
              <div 
                className="w-full h-24 rounded-md shadow-soft" 
                style={{ backgroundColor: code }} 
              />
              <span className="body-small font-semibold">{name}</span>
              <span className="caption uppercase">{code}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="heading-2 mb-8 border-b pb-2">Typography</h2>
        <div className="flex flex-col gap-6">
          <div><span className="heading-1">Heading 1</span></div>
          <div><span className="heading-2">Heading 2</span></div>
          <div><span className="heading-3">Heading 3</span></div>
          <div><span className="heading-4">Heading 4</span></div>
          <div><span className="heading-5">Heading 5</span></div>
          <div><span className="heading-6">Heading 6</span></div>
          <div><span className="body-large">Body Large</span></div>
          <div><span className="body-regular">Body Regular</span></div>
          <div><span className="body-small">Body Small</span></div>
          <div><span className="caption">Caption</span></div>
          <div><span className="quote-large">Quote Large</span></div>
          <div><span className="quote-small">Quote Small</span></div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="heading-2 mb-8 border-b pb-2">Buttons & Cards</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary text-african-earth">Secondary Button</button>
          <button className="btn-ghost">Ghost Button</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-default card-hover">
            <h4 className="heading-4 mb-2">Standard Card</h4>
            <p className="body-regular text-text-light">Hover this card to see the lift effect and increased shadow.</p>
          </div>
          <div className="card-testimonial">
            <p className="quote-small text-text-dark mb-4">&quot;Testimonial card with left border and cream background.&quot;</p>
            <span className="heading-6 text-african-earth">— Example User</span>
          </div>
        </div>
      </section>
    </div>
  );
}
