import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyBookig = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-6 mb-8">My Order</h2>

      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Car</th>
              <th>Resell Price</th>
              <th>Owner</th>
              <th>Kilo-Miter</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>

                <td>{booking?.carName}</td>
                <td>{booking?.resalePrice}</td>
                <td>{booking?.owner}</td>
                <td>{booking?.kilometer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookig;
