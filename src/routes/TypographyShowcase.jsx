import React from "react";

export default function TypographyShowcase() {
  return (
    <>
      <h2 className="text-2xl pb-5">Typography Show Case</h2>
      {/* Headings */}
      <section>
        <div className="space-y-2">
          <h1 className="text-4xl font-heading font-bold text-brand">Heading 1</h1>
          <h2 className="text-3xl font-heading font-semibold text-brand-dark">Heading 2</h2>
          <h3 className="text-2xl font-heading font-semibold text-brand">Heading 3</h3>
          <h4 className="text-xl font-heading font-medium text-brand-dark">Heading 4</h4>
          <h5 className="text-lg font-heading font-medium text-brand">Heading 5</h5>
          <h6 className="text-base font-heading font-medium text-brand-dark">Heading 6</h6>
        </div>
      </section>

      {/* Paragraphs */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Body Text
        </h2>
        <p className="text-base text-neutral-800 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Small text for additional notes or secondary information.
        </p>
      </section>

      {/* Lists */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">Lists</h2>
        <ul className="list-disc pl-6 text-neutral-800">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </section>

      {/* Inline text elements */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">Inline Styles</h2>
        <p className="text-base text-neutral-800 space-x-2">
          <span>Normal</span>
          <strong className="font-bold">Bold</strong>
          <em className="italic">Italic</em>
          <u className="underline">Underline</u>
          <code className="px-1 py-0.5 bg-neutral-100 text-neutral-800 rounded font-mono text-sm">
            Code
          </code>
          <span className="text-brand font-medium">Brand text</span>
        </p>
      </section>

      {/* Blockquote */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">Blockquote</h2>
        <blockquote className="border-l-4 border-brand pl-4 italic text-neutral-700">
          “Design is not just what it looks like and feels like. Design is how it works.”
          <br />
          <span className="block text-sm text-neutral-500 mt-1">— Steve Jobs</span>
        </blockquote>
      </section>

      {/* Code block */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">Code Block</h2>
        <pre className="bg-neutral-100 text-neutral-800 p-4 rounded font-mono text-sm overflow-x-auto">
          {`const greet = (name) => {
  return \`Hello, \${name}!\`;
};`}
        </pre>
      </section>
    </>
  );
};