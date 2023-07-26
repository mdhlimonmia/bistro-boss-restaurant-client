import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseReservation = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: tables = [] } = useQuery({
      queryKey: ["reserve", user?.email],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/reserve?email=${user?.email}`);
  
        return res.json();
      },
    });
  
    return [tables, refetch];
};

export default UseReservation;