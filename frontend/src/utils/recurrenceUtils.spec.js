import { shouldReset } from "./recurrenceUtils";
describe("shouldReset", () => {
  describe("when task is not completed", () => {
    it("should return false", () => {
      const task = {
        completed: false,
        type: "Daily",
        dateCompleted: "2026-07-29T00:00:00.000Z",
      };
      expect(shouldReset(task, 30, 4, 7, 2026)).toBe(false);
    });
  });
  describe("Daily Tasks", () => {
    it("should not reset on the same day", () => {
      const task = {
        completed: true,
        type: "Daily",
        dateCompleted: "2026-07-30T00:00:00.000Z",
      };
      expect(shouldReset(task, 30, 4, 7, 2026)).toBe(false);
    });
    it("should reset when the current day is after completion day", () => {
      const task = {
        completed: true,
        type: "Daily",
        dateCompleted: "2026-07-29T00:00:00.000Z",
      };
      expect(shouldReset(task, 30, 4, 7, 2026)).toBe(true);
    });
    it("should reset when the month is different", () => {
      const task = {
        completed: true,
        type: "Daily",
        dateCompleted: "2026-06-30T00:00:00.000Z",
      };
      expect(shouldReset(task, 1, 4, 7, 2026)).toBe(true);
    });
  });
  describe("Weekly Tasks", () => {
    it("should not reset when the current weekday is the same", () => {
      const task = {
        completed: true,
        type: "Weekly",
        dateCompleted: "2026-07-29T00:00:00.000Z",
      };
      expect(shouldReset(task, 30, 4, 7, 2026)).toBe(false);
    });
    it("should reset when the current weekday is before the completion weekday", () => {
      const task = {
        completed: true,
        type: "Weekly",
        dateCompleted: "2026-07-29T00:00:00.000Z",
      };
      expect(shouldReset(task, 30, 2, 7, 2026)).toBe(true);
    });
    it("should reset on Sunday when the day is different", () => {
      const task = {
        completed: true,
        type: "Weekly",
        dateCompleted: "2026-07-29T00:00:00.000Z",
      };
      expect(shouldReset(task, 2, 0, 7, 2026)).toBe(true);
    });
  });
  describe("Monthly Tasks", () => {
    it("should not reset during the same month and year", () => {
      const task = {
        completed: true,
        type: "Monthly",
        dateCompleted: "2026-07-15T00:00:00.000Z",
      };
      expect(shouldReset(task, 30, 4, 7, 2026)).toBe(false);
    });
    it("should reset when the current month is after completion month", () => {
      const task = {
        completed: true,
        type: "Monthly",
        dateCompleted: "2026-06-15T00:00:00.000Z",
      };
      expect(shouldReset(task, 1, 3, 7, 2026)).toBe(true);
    });
    it("should reset when the year is different", () => {
      const task = {
        completed: true,
        type: "Monthly",
        dateCompleted: "2025-12-15T00:00:00.000Z",
      };
      expect(shouldReset(task, 1, 3, 7, 2026)).toBe(true);
    });
  });
  describe("Yearly Tasks", () => {
    it("should not reset during the same year", () => {
      const task = {
        completed: true,
        type: "Yearly",
        dateCompleted: "2026-01-15T00:00:00.000Z",
      };
      expect(shouldReset(task, 31, 4, 12, 2026)).toBe(false);
    });
    it("should reset when the year is different", () => {
      const task = {
        completed: true,
        type: "Yearly",
        dateCompleted: "2026-01-01T00:00:00.000Z",
      };
      expect(shouldReset(task, 1, 5, 1, 2027)).toBe(true);
    });
  });
});
