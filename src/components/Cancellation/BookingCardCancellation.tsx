import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { IBookingState } from "../../models/IBookingState";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import { randomIndexGen } from "../../utils/randomIndexGen";
import { DialogBox } from "../Admin/ChildComponents/DialogBox";
import { Button } from "@material-ui/core";
import { deleteBookingAndSendConfirmation } from "../../utils/deleteBookingFromDB";

interface IBookingCard {
  bookingObj: IBookingState;
}

export default function BookingCardCancellation({ bookingObj }: IBookingCard) {
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

  const foodEmojis = [
    "🍗",
    "🥩",
    "🥓",
    "🍔",
    "🍟",
    "🍕",
    "🌭",
    "🥪",
    "🌮",
    "🌯",
    "🥙",
    "🍩",
    "🧁",
    "🍹",
    "🍓",
    "🥑",
    "🥗",
  ];

  const {
    firstName,
    lastName,
    numberOfGuests,
    numberOfTables,
    date,
    sitting,
    bookingReference,
  } = bookingObj;

  const randomIdx: number = randomIndexGen(foodEmojis.length);

  const toggleDialogBox = (): void => {
    setDialogBoxOpen((prevState) => !prevState);
  };
  const deleteBookingFromDB = (): void => {
    deleteBookingAndSendConfirmation(bookingObj);
    toggleDialogBox();
  };

  return (
    <Card className="booking-card cancellationCard">
      {dialogBoxOpen && (
        <DialogBox
          open={dialogBoxOpen}
          linkToDelete={bookingReference!}
          closeDialog={toggleDialogBox}
          deleteBooking={deleteBookingFromDB}
        />
      )}
      <CardContent className="booking-card__content-container">
        <section className="booking-card__icon">
          {foodEmojis[randomIdx]}
        </section>
        <section className="booking-card__content">
          <div>
            <span className="bold">Guest: </span>
            {`${firstName} ${lastName}`}
          </div>
          <div>
            <span className="bold">Party Size: </span>
            {`${numberOfGuests} guests / ${numberOfTables} ${
              numberOfTables === 1 ? "table" : "tables"
            }`}
          </div>
          <div>
            <span className="bold">Arrival day: </span>
            {`${date} / ${sitting}`}
          </div>
          <div>
            <span className="bold">Ref: </span>
            {bookingReference}
          </div>
        </section>
        <section className="booking-card__actions">
          <Divider light />
          <div>
            <div className="booking-card__actions__container">
              <Link
                to={`/admin/edit/${bookingReference}`}
                className="booking-card__actions--edit"
              ></Link>
              <Button
                onClick={toggleDialogBox}
                className="booking-card__actions--edit"
              >
                <div className="edit-inner delete">
                  <Delete style={{ color: "#FF7B51" }} />
                  <p>Cancel</p>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

BookingCardCancellation.defaultProps = {
  numberOfGuests: 3,
  numberOfTables: 1,
  firstName: "Danny",
  lastName: "Isaac",
  date: "2021-09-29",
  sitting: "18:00",
  bookingReference: "SOM4rVuijjAFHfewPe",
};
