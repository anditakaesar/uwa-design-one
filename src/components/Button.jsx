export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
