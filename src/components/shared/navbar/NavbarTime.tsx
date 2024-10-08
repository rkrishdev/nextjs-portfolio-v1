"use client";

import defaultStyles from "@/styles/default.module.css";
import { montserrat } from "@/styles/fonts/fonts";
import navbarStyles from "@/styles/navbar.module.css";
import { useState, useEffect } from "react";

export const NavbarTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={[
        defaultStyles.textSmall,
        montserrat.className,
        navbarStyles.timeContainer,
      ].join(" ")}
    >
      <p style={{ display: "flex", alignItems: "center" }}>
        Coimbatore, India <span className={navbarStyles.timeSplitter}></span>
        <span className={navbarStyles.time} suppressHydrationWarning={true}>
          {time}
        </span>
      </p>
    </div>
  );
};
