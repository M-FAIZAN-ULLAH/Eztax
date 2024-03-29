import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { LoadScript } from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import Axios for making HTTP requests

export default function Form(props) {
  const [autocomplete, setAutocomplete] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupLocation: "",
    stops: "",
    dropoffLocation: "",
    fleet: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCalculate = async () => {
    try {
      // Make an HTTP POST request to the Calculate API endpoint
      const response = await axios.post("http://localhost:5000/api/calculate", formData);
      console.log(response.data); // Log the response from the backend
      // Handle any additional logic here
    } catch (error) {
      console.error("Error calculating:", error);
      // Handle error
    }
  };

  const handleBookNow = () => {
    navigate("/form");
  };

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <div className="container flex justify-center">
      <LoadScript googleMapsApiKey="" libraries={["places"]}>
        <Card color="transparent" shadow={false} className="mt-36 mb-36">
          <Typography variant="h2" color="blue-gray">
            {props.heading}
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              {!props.quotation && (
                <>
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter Full Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter Email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Pickup Location
              </Typography>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <Input
                  size="lg"
                  placeholder="Enter Pickup Location"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                />
              </Autocomplete>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Select no of stops in between journey
              </Typography>
              <Input
                size="lg"
                placeholder="#"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="stops"
                value={formData.stops}
                onChange={handleChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Drop-off Location
              </Typography>
              <Input
                size="lg"
                placeholder="Enter Drop-off Location"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Choose Fleet
              </Typography>
              <Input
                size="lg"
                placeholder="Select Fleet"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="fleet"
                value={formData.fleet}
                onChange={handleChange}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Time
              </Typography>
              <Input
                size="lg"
                placeholder="--:-- --"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <Button className="mt-6" color="yellow" fullWidth onClick={handleCalculate}>
              Calculate
            </Button>
            <Button className="mt-6" color="yellow" fullWidth onClick={handleBookNow}>
              Book Now
            </Button>
          </form>
        </Card>
      </LoadScript>
    </div>
  );
}
