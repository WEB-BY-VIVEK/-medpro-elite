"use client";

import React from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { DOCTOR_DATA } from "../../constants";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean; isAvailable?: boolean }> = ({
  day,
  isHeader,
  isAvailable
}) => {
  const bgClass =
    !isHeader && isAvailable
      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
      : "text-muted-foreground";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-lg"
      } ${bgClass}`}
    >
      <span className={`font-bold font-sans ${isHeader ? "text-[10px]" : "text-xs"}`}>
        {day}
      </span>
    </div>
  );
};

export function Calendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const bookingLink = `#book`;

  const renderCalendarDays = () => {
    // Generate some "available" days for the demo
    const availableDays = [12, 14, 15, 18, 20, 22, 25];

    let days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array.from({ length: firstDayOfWeek }).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array.from({ length: daysInMonth }).map((_, i) => (
        <CalendarDay 
            key={`date-${i + 1}`} 
            day={i + 1} 
            isAvailable={availableDays.includes(i + 1)} 
        />
      )),
    ];

    return days;
  };

  return (
    <BentoCard height="h-auto" linkTo={bookingLink}>
      <div className="grid h-full gap-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-foreground font-serif">
            Check Availability
          </h2>
          <p className="mb-6 text-sm text-muted-foreground font-medium font-sans">
            Highlighted dates indicate open consultation slots for {currentMonth}.
          </p>
          <Button className="rounded-xl uppercase text-[10px] tracking-widest font-bold px-6 font-sans">Book Now</Button>
        </div>
        <div className="transition-all duration-500 ease-out">
          <div className="h-full w-full max-w-[320px] md:max-w-none rounded-[24px] border border-border p-2 bg-muted shadow-inner">
            <div
              className="h-full rounded-2xl border border-card bg-card p-4 shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-6 font-sans">
                <p className="text-sm">
                  <span className="font-bold text-foreground">
                    {currentMonth}, {currentYear}
                  </span>
                </p>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/30"></span>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">30 min slots</p>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
  linkTo?: string;
}

export function BentoCard({
  children,
  height = "h-auto",
  className = "",
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={`group relative flex flex-col rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300 ${height} ${className}`}
    >
      {linkTo && (
        <div className="absolute top-8 right-8 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 shadow-lg shadow-primary/20">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return (
      <a
        href={linkTo}
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
