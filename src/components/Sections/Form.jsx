import React, { useRef } from "react";

// This is the about us section. Most if not all styling will be done using tailwind css
import {
  Card,
  Input,
  Button,
  Typography,
  input,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

// Google maps
import {
  StandaloneSearchBox,
  LoadScript,
  Autocomplete,
} from "@react-google-maps/api";

export default function Form(props) {
  const [autocomplete, setAutocomplete] = React.useState(null);

  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlace();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
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
        <Card color="white" shadow={true} className="my-32 p-12">
          <Typography variant="h2" color="blue-gray">
            {props.heading}
          </Typography>

          <form className="mt-8 mb-2 ">
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
                  />
                </>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Pickup Location
              </Typography>
              <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlaceChanged={handlePlaceChanged}
              >
                <Input
                  size="lg"
                  placeholder="Enter Pickup Location"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                />
              </StandaloneSearchBox>
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
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Drop-off Location
              </Typography>
              <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlaceChanged={handlePlaceChanged}
              >
                <Input
                  size="lg"
                  placeholder="Enter Drop-off Location"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </StandaloneSearchBox>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Phone Number
              </Typography>
              <Input
                placeholder="Phone Number"
                variant="outlined"
                label="Outlined"
                size="md"
                className="border"
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
              />
            </div>

            <Button
              className="mt-6"
              variant="gradient"
              color="yellow"
              ripple={true}
              fullWidth
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
        </Card>
      </LoadScript>
    </div>
  );
}
