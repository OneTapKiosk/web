import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const useTimer = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      clearInterval(countdownInterval);
      localStorage.setItem("lastActivityTime", Date.now().toString());
      setTimeLeft(120);

      countdownInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      inactivityTimer = setTimeout(() => {
        localStorage.removeItem("sessionStartTime");
        localStorage.removeItem("lastActivityTime");
        navigate("/");
      }, 120000);
    };

    const checkSessionTimeout = () => {
      const sessionStartTime = localStorage.getItem("sessionStartTime");
      if (sessionStartTime) {
        const elapsed = Date.now() - parseInt(sessionStartTime);
        if (elapsed >= 300000) {
          // 5 minutes
          localStorage.removeItem("sessionStartTime");
          localStorage.removeItem("lastActivityTime");
          navigate("/");
          return;
        }
      }
    };

    const handleActivity = () => {
      resetInactivityTimer();
    };

    checkSessionTimeout();

    resetInactivityTimer();

    const sessionTimer: NodeJS.Timeout = setInterval(checkSessionTimeout, 1000);

    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];
    events.forEach((event) => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      clearInterval(sessionTimer);
      clearInterval(countdownInterval);
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [navigate]);

  return { timeLeft };
};
