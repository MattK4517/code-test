import { Link, useLoaderData } from "react-router-dom";

export default function DashBoard() {
  const sightings: any = useLoaderData();
  if (sightings)
    return (
      <div className='flex flex-col'>
        <div id='dashboard-header' className='flex justify-center items-center'>
          <h1 className='mr-8'>Bird Websightings</h1>
          <Link
            to={"/sighting/new"}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Report Sighting
          </Link>
        </div>
        <div
          id='sighting-list'
          className='flex flex-col p-2 bg-black mt-20 gap-2 overflow-auto'
        >
          {Object.values(sightings).map((sighting, index) => {
            return (
              <div
                key={index}
                className='flex justify-center p-2 items-center bg-slate-600'
              >
                <div className='flex flex-col flex-1'>
                  <div className='flex'>
                    {sighting.location} - {sighting.reported_at}
                  </div>
                  <div className='flex'>
                    reported by - {sighting.reported_by.first_name}{" "}
                    {sighting.reported_by.last_name}
                  </div>
                </div>
                <div>
                  <Link
                    to={`/sighting/view/${sighting.id}`}
                    className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  >
                    View
                  </Link>
                  <Link
                    to={`/sighting/edit/${sighting.id}`}
                    className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => fetch(`/api/delete/${sighting.id}`)}
                    className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
