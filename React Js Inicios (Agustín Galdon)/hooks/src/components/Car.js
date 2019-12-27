import React, { useState, useEffect } from "react";

export default function Car() {
  const [started, setStarted] = useState(false);
  const [countKm, setCountKm] = useState(0);

  useEffect(() => {
    document.title = started;
  }, [started]);

  const checkStartedCar = () => {
    if (started) {
      incrementKm();
      return <span style={{ color: "green" }}>Encendido</span>;
    } else {
      return <span style={{ color: "red" }}>Apagado</span>;
    }
  };

  const changeStartedCar = () => {
    setStarted(!started);
  };

  const incrementKm = () => {
    if (started) {
      setInterval(() => {
        setCountKm(countKm + 1);
      }, 1000);
    } else {
      clearInterval();
    }
  };

  return (
    <div>
      <h2>Nuestro coche esta: {checkStartedCar()}</h2>
      <h2>Km. recorridos: {countKm} km</h2>
      <button onClick={changeStartedCar}>Encender / Apagar</button>
    </div>
  );
}
