import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import { Button } from "./components/ui/button";
import Onboarding from "./pages/Onboarding";
import Job from "./pages/job";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
    ],
  },
]);
function App() {
  // return router;
  return (
    <RouterProvider router={router} />
  );
}

export default App;
