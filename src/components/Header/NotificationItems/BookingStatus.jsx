import React from "react";

const BookingStatus = () => {
  return (
    <div className="d-flex">
      <div className="userImg">
        <sh4an className="rounded-circle">
          <img src="https://cdn.pfps.gg/pfps/9377-zorro.png" />
        </sh4an>
      </div>

      <div className="notification-item-card-info">
        <div className="d-flex-column align-items-center h4s-3">
          <div className="d-flex align-items-center justify-content-between">
            <h4><b>Room 305</b></h4>
            <h4>2 Nights</h4>
          </div>

          <h4>Check in : 11 Oct. 2024</h4>
          <h4>Check out : 13 Oct. 2024</h4>
          <p className="text-sky">few secods ago!</p>
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
