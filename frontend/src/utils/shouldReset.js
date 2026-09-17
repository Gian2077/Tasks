export function shouldReset(task, DAY, DAY_WEEK, MONTH, YEAR) {
  if (!task.completed) return false;
  const dateObject = new Date(task.dateCompleted);
  const dayCompleted = Number(task.dateCompleted.split("T")[0].split("-")[2]);
  const dayWeekCompleted = Number(dateObject.getUTCDay());
  const monthCompleted = Number(task.dateCompleted.split("T")[0].split("-")[1]);
  const yearCompleted = Number(task.dateCompleted.split("T")[0].split("-")[0]);
  switch (task.type) {
    case "Daily":
      return MONTH !== monthCompleted || DAY > dayCompleted;
    case "Weekly":
      return (
        (DAY !== dayCompleted && DAY_WEEK === 0) || DAY_WEEK < dayWeekCompleted
      );
    case "Monthly":
      return YEAR !== yearCompleted || MONTH > monthCompleted;
    case "Yearly":
      return YEAR !== yearCompleted;
    default:
      return false;
  }
}
