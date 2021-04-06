import React from "react";
import Spinner from "../../assets/spinner.gif";
import eventData from "../../fakeData/data.json";
import EventCard from "../EventCard/EventCard";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      {eventData.length > 0 ? (
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            {eventData.map((event) => (
              <EventCard eventData={eventData} event={event} />
            ))}
          </div>
        </div>
      ) : (
        <img src={Spinner} alt=""></img>
      )}
    </>
  );
};

export default Home;
