import { createContext, useState } from "react";

export const SeatContext = createContext();

const SeatProvider = ({ children }) => {
  const [seats, setSeats] = useState([]);

  return (
    <SeatContext.Provider value={{ seats, setSeats }}>
      {children}
    </SeatContext.Provider>
  );
};

export default SeatProvider;
