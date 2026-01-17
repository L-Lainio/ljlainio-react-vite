export default function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-amber-400 dark:to-orange-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}
