import DateContext from "../context/DateContext.js";
export function DateProvider({ children }) {
  const DATE = new Date().toISOString();
  const DAY = Number(DATE.split("T")[0].split("-")[2]);
  const DAY_WEEK = new Date().getUTCDay();
  const MONTH = Number(DATE.split("T")[0].split("-")[1]);
  const YEAR = Number(DATE.split("T")[0].split("-")[0]);
  return (
    <DateContext value={{ DAY, DAY_WEEK, MONTH, YEAR }}>{children}</DateContext>
  );
}
