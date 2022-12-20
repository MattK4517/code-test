import "./App.css";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import { Sighting, EditSighting, ViewSighting } from "./components";
import DashBoard from "./components/Dashboard";
const appRoutes = [
  {
    path: "/dashboard",
    element: <DashBoard />,
    loader: async () => {
      let data = (await fetch("/api/get_all_sightings")).json();
      return data;
    },
  },
  {
    path: "/sighting",
    children: [
      {
        path: "/sighting/new/",
        loader: async () => {
          return fetch("/api/new_sighting");
        },
        element: <EditSighting />,
      },
      {
        path: "/sighting/edit/:id",
        loader: async ({ params }) => {
          let data = (await fetch(`/api/get_sighting/${params.id}`)).json();
          return data;
        },
        element: <EditSighting />,
      },
      {
        path: "/sighting/view/:id",
        loader: async ({ params }) => {
          return fetch(`/api/get_sighting/${params.id}`);
        },
        element: <ViewSighting />,
      },
    ],
  },
];

function App() {
  const appRouter = createBrowserRouter(appRoutes);

  return (
    <div className='App'>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
