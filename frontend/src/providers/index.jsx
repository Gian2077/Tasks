import { DateProvider } from "./DateProvider.jsx";
import { TaskProvider } from "./TaskProvider.jsx";

export function Providers({ children }) {
  return (
    <DateProvider>
      <TaskProvider>{children}</TaskProvider>
    </DateProvider>
  );
}
