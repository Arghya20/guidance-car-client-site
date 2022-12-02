import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const BookingModal = ({ car }) => {
  const { user } = useContext(AuthContext);
  const { carName, originalPrice, owner, color, kilometer, resalePrice, image } = car;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const address = form.address.value;
    const name = form.name.value;
    const email = form.useremail.value;

    const booking = {
      name,
      email,
      address,
      carName,
      originalPrice,
      image,
      owner,
      color,
      kilometer,
      resalePrice,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2 myBtn"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{carName}</h3>
          <form onSubmit={handleBooking}>
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">owner</span>
              </label>
              <input
                type="text"
                name="owner"
                value={owner}
                disabled
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">kilo-Meter</span>
              </label>
              <input
                name="kilometer"
                type="text"
                value={kilometer}
                disabled
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">Resale-Price</span>
              </label>
              <input
                name="resalePrice"
                type="text"
                value={resalePrice}
                disabled
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                value={user.displayName}
                disabled
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                name="useremail"
                type="text"
                value={user.email}
                disabled
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                required
                name="address"
                type="text"
                placeholder="Your Address"
                className="input input-bordered w-full"
              />
            </div>

            <br />
            <br />
            <input
              className="btn myBtn w-full border-none"
              type="submit"
              value="Book Now"
              htmlFor="bookingModal"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
