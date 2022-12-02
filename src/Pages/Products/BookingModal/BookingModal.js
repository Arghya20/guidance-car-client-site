import React from "react";

const BookingModal = ({ car }) => {
  const { carName, originalPrice, owner, color, kilometer, resalePrice } = car;
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
          <form>
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
                <span className="label-text">Address</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder="Your Address"
                className="input input-bordered w-full"
              />
            </div>

            <br />
            <br />
            <input className="btn myBtn w-full border-none" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
