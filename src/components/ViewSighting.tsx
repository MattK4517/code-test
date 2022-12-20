import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function ViewSighting() {
  const sighting: any = useLoaderData();
  if (sighting.id)
    return (
      <div>
        <div className='flex flex-col'>
          <div
            id='dashboard-header'
            className='flex justify-center items-center'
          >
            <h1 className='mr-8'>
              {sighting.location} on {sighting.reported_at}
            </h1>
            <Link
              to={"/dashboard"}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Dashboard
            </Link>
          </div>
          <div className='mt-20'>
            <h2>What Happened:</h2>
            <span>{sighting.description}</span>
          </div>
          <div className='mt-20'>
            <h2>Number of Birds</h2>
            <span>{sighting.number_of_birds}</span>
          </div>
        </div>
      </div>
    );
}
