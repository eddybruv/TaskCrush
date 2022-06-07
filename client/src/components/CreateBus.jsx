import React from "react";
import CustomInputs from "../components/CustomInputs";
import Button from "./Button";
import "../components/componentStyles/CreateBus.css";
import AddBus from "./AddBus";

const CreateBus = () => {
  const [location, setLocation] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [busNum, setBusNum] = React.useState("");
  const [timeOfDay, setTimeOfDay] = React.useState("");
  const [timeOfDeparture, setTimeOfDeparture] = React.useState("");

  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (busNum !== "Select Bus") {
      console.log(busNum);
    }
  }, [busNum]);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="section">
      <section>
        <div className="fform">
          <h1>Create a Journey</h1>
          <form className="busCreationForm" action="">
            <CustomInputs
              placeholder={"location"}
              value={location}
              setState={setLocation}
            />
            <CustomInputs
              placeholder={"Destinatoin"}
              value={destination}
              setState={setDestination}
            />
            <CustomInputs
              placeholder={"time of Day"}
              value={timeOfDay}
              setState={setTimeOfDay}
            />
            <CustomInputs
              placeholder={"Price"}
              value={price}
              setState={setPrice}
            />
            <CustomInputs
              placeholder={"Time of departure"}
              value={timeOfDeparture}
              setState={setTimeOfDeparture}
            />
            <div className="busSelect">
              <select
                className="bus-options"
                onClick={(e) => setBusNum(e.target.value)}
              >
                <option value={null}>Select Bus</option>
                {[245, 125, 25, 427, 365].map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <button className="add-bus" onClick={handleModal}>
                Add Bus
              </button>
            </div>
            <Button btnText={"Submit"} path="/" />
          </form>
        </div>
      </section>
      {showModal && <AddBus closeModal = {() => setShowModal(false)}/>}
    </div>
  );
};

export default CreateBus;
