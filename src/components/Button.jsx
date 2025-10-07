export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const variants = {
    // Brand
    primary:
      "bg-brand text-white hover:bg-brand-dark focus:ring-brand-dark",

    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",

    // Ghost button (no background)
    ghost:
      "bg-transparent text-brand hover:bg-brand/10 focus:ring-brand/30",

    // Outline button (border)
    outline:
      "border border-brand text-brand hover:bg-brand/10 focus:ring-brand/30",

    // Destructive
    danger:
      "bg-error text-white hover:bg-red-700 focus:ring-red-700",

    // Success
    success:
      "bg-success text-white hover:bg-green-700 focus:ring-green-700",

    // Warning
    warning:
      "bg-warning text-white hover:bg-yellow-600 focus:ring-yellow-600",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
