export default function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-black via-red-500 via-blue-500 to-white bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:via-red-400 dark:to-black">
      {children}
    </span>
  );
}
