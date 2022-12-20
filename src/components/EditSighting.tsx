import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

type formStateType = {
  location: string;
  description: string;
  date: Date;
  numberOfBirds: number;
};

export default function EditSighting() {
  const sighting: any = useLoaderData();
  let pageMessage: string;
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    fetch("/api/new_sighting", {
      method: "POST",
      body: JSON.stringify(formState),
    });
  };
  const [formState, setFormState] = useState<formStateType>({
    location: "",
    description: "",
    date: new Date(),
    numberOfBirds: 0,
  });
  if (sighting.id) pageMessage = "Edit this sighting";
  else pageMessage = "Report this sighting";
  return (
    <div>
      <div className='flex flex-col'>
        <div id='dashboard-header' className='flex justify-center items-center'>
          <h1 className='mr-8'>{pageMessage}</h1>
          <Link
            to={"/dashboard"}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Dashboard
          </Link>
        </div>
      </div>

      <form className='flex flex-row gap-6 mt-20' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <label className='input-field'>
            <div
              className={` flex items-center justify-center flex-col
                ${formState.location === "" ? "block" : "hidden"}`}
            >
              <img className='h-6 w-6' src='https://i.imgur.com/8dnCQcW.png' />
              <span>Enter a valid location</span>
            </div>
            Location:
            <input
              type='text'
              value={formState.location}
              onChange={(e) =>
                setFormState({ ...formState, location: e.target.value })
              }
            ></input>
          </label>
          <label className='input-field'>
            <div
              className={` flex items-center justify-center flex-col
                ${formState.description === "" ? "block" : "hidden"}`}
            >
              <img className='h-6 w-6' src='https://i.imgur.com/8dnCQcW.png' />
              <span>Enter a valid description</span>
            </div>
            Description:
            <input
              type='text'
              value={formState.description}
              onChange={(e) =>
                setFormState({ ...formState, description: e.target.value })
              }
            ></input>
          </label>
        </div>
        <div className='flex flex-col gap-4'>
          <label className='input-field'>
            <div
              className={` flex items-center justify-center flex-col
                ${formState.date ? "block" : "hidden"}`}
            >
              <img className='h-6 w-6' src='https://i.imgur.com/8dnCQcW.png' />
              <span>Enter a valid date</span>
            </div>
            Date of Sighting:
            <input
              type='date'
              value={formState.date}
              onChange={(e) =>
                setFormState({ ...formState, date: new Date(e.target.value) })
              }
            ></input>
          </label>
          <label className='input-field'>
            <div
              className={` flex items-center justify-center flex-col
                ${formState.numberOfBirds <= 0 ? "block" : "hidden"}`}
            >
              <img className='h-6 w-6' src='https://i.imgur.com/8dnCQcW.png' />
              <span>Enter a valid number of birds</span>
            </div>
            Number of birds:
            <input
              type='text'
              value={formState.numberOfBirds}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  numberOfBirds: parseInt(e.target.value) || 0,
                })
              }
            ></input>
          </label>
        </div>
        <input
          disabled={isFormValid(formState)}
          type='submit'
          value='Submit'
          className={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isFormValid(formState) === false ? "bg-blue-500" : "bg-gray-900"
          }`}
        />
      </form>
    </div>
  );
}

const isFormValid = (formState: formStateType) => {
  return Object.values(formState).some((value) => value === "" || value <= 0);
};
