export default function InputsShowcase() {
  const base = "px-3 py-2 border rounded-md focus:outline-none transition w-full max-w-sm";
  const variants = {
    default: "border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20",
    error: "border-red-500 focus:ring-red-200",
    disabled: "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed",
  };

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Inputs & Forms</h2>

      {/* Text Input */}
      <div className="space-y-2">
        <label className="font-medium">Text Input</label>
        <input
          type="text"
          placeholder="Enter text..."
          className={`${base} ${variants.default}`}
        />
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label className="font-medium">Email Input</label>
        <input
          type="email"
          placeholder="email@example.com"
          className={`${base} ${variants.default}`}
        />
      </div>

      {/* Error State */}
      <div className="space-y-1">
        <label className="font-medium text-red-600">With Error</label>
        <input
          type="text"
          placeholder="Invalid input..."
          className={`${base} ${variants.error}`}
        />
        <p className="text-sm text-red-600">This field is required</p>
      </div>

      {/* Disabled Input */}
      <div className="space-y-2">
        <label className="font-medium text-gray-600">Disabled</label>
        <input
          type="text"
          placeholder="Can't type here"
          disabled
          className={`${base} ${variants.disabled}`}
        />
      </div>

      {/* Textarea */}
      <div className="space-y-2">
        <label className="font-medium">Textarea</label>
        <textarea
          rows="3"
          placeholder="Write something..."
          className={`${base} ${variants.default}`}
        />
      </div>

      {/* Select */}
      <div className="space-y-2">
        <label className="font-medium">Select</label>
        <select className={`${base} ${variants.default}`}>
          <option value="">Select an option</option>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </select>
      </div>

      {/* Checkbox */}
      <div className="space-y-2">
        <label className="font-medium">Checkboxes</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-brand" defaultChecked />
            <span>Option 1</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-brand" />
            <span>Option 2</span>
          </label>
        </div>
      </div>

      {/* Radio */}
      <div className="space-y-2">
        <label className="font-medium">Radio Buttons</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="radioGroup" className="w-4 h-4 text-brand" defaultChecked />
            <span>Option A</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="radioGroup" className="w-4 h-4 text-brand" />
            <span>Option B</span>
          </label>
        </div>
      </div>

      {/* TODO toggle */}
    </section>
  );
}
