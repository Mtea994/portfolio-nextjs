"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { Card, CardHeader } from "./ui/card";

const selectLastHalfYear = (contributions: any): any => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity: any) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function MyGithubCalendar() {
  const { theme } = useTheme();
  const colorScheme = theme === "dark" ? "dark" : "light";
  return (
    <Card className="h-full p-2">
      <CardHeader>My Github Calendar</CardHeader>
      <GitHubCalendar
        colorScheme={colorScheme}
        transformData={selectLastHalfYear}
        username="mtea994"
        showWeekdayLabels={false}
      />
    </Card>
  );
}

export default MyGithubCalendar;
// export const metadata = {
//   title: "Github Calendar",
//   description: "A cool chart",
// };
