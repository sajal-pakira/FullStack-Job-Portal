import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import { Button } from "./components/ui/button";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
function App() {
  // return router;
  return (
    <div>
      <Button>login</Button>
    </div>
  );
}

export default App;
