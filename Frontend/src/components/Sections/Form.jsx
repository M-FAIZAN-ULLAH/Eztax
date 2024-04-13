import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";
import axios from "axios";

export default function Form(props) {
  const [autocomplete, setAutocomplete] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    pickupLocation: "",
    stops: "",
    dropoffLocation: "",
    phoneNumber: "",
    fleet: "",
    date: "",
    time: "",
    paymentMethod: "",
  });
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailData = {
        // to: "Reciever email",
        subject: "Book Now",
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Pickup Location: ${formData.pickupLocation}
          Stops: ${formData.stops}
          Drop-off Location: ${formData.dropoffLocation}
          Phone Number: ${formData.phoneNumber}
          Fleet: ${formData.fleet}
          Date: ${formData.date}
          Time: ${formData.time}
          Payment Method: ${formData.paymentMethod}
        `,
      };

      const response = await axios.post(
        "http://localhost:5000/api/send-email",
        emailData
      );
      setMessage("Your message has been sent.");
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        pickupLocation: "",
        stops: "",
        dropoffLocation: "",
        phoneNumber: "",
        fleet: "",
        date: "",
        time: "",
        paymentMethod: "",
      });
    } catch (error) {
      setMessage("Error sending email. Please try again later.");
      console.error(error);
    }
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
    <div className="container flex justify-center lightBg">
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
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
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
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
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
                  style={{ color: "black" }} // Set the font color to black
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  name="pickupLocation"
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
                value={formData.stops}
                onChange={handleChange}
                name="stops"
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
                value={formData.dropoffLocation}
                onChange={handleChange}
                name="dropoffLocation"
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Phone Number
              </Typography>
              <Input
                size="lg"
                placeholder="+44 1234 567890"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:none",
                }}
                value={formData.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
              />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                Enter a phone number starting with country code
              </Typography>

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
                value={formData.fleet}
                onChange={handleChange}
                name="fleet"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Date
              </Typography>
              <Input
                size="lg"
                placeholder="dd/mm/yyyy"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.date}
                onChange={handleChange}
                name="date"
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
                value={formData.time}
                onChange={handleChange}
                name="time"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Choose Payment Method
              </Typography>
              <Input
                size="lg"
                placeholder="Debit Card"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.paymentMethod}
                onChange={handleChange}
                name="paymentMethod"
              />
            </div>

            <Button
              className="mt-6"
              variant="gradient"
              color="yellow"
              ripple={true}
              fullWidth
              onClick={handleSubmit} // Add onClick event handler
            >
              Submit
            </Button>

            <Link to="/">
              <Button
                className="mt-4 border-black"
                variant="outlined"
                color="black"
                fullWidth
              >
                Go Back
              </Button>
            </Link>
          </form>
          {message && <Typography className="mt-3">{message}</Typography>}
        </Card>
      </LoadScript>
    </div>
  );
}
