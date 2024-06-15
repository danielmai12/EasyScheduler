// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import HomePage from "./pages/HomePage";
import ScheduleNewMessagePage from "./pages/ScheduleNewMessagePage";
import Authenticator from "./components/Authenticator";

import "./App.css";
import ViewMessagesPage from "./pages/ViewMessagesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/view-messages",
      element: <ViewMessagesPage />,
    },
    {
      path: "/schedule-message",
      element: <ScheduleNewMessagePage />,
    },
  ]);
  return (
    <>
      <Authenticator>
        <RouterProvider router={router} />
      </Authenticator>
    </>
  );
}

export default App;
