// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ScheduleNewMessagePage from "./pages/ScheduleNewMessagePage";
import ViewMessagesPage from "./pages/ViewMessagesPage";

// Amplify
import { Authenticator } from "@aws-amplify/ui-react";

// CSS
import "./App.css";

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
    <div className="homePage">
      <Authenticator.Provider>
        <RouterProvider router={router} />
      </Authenticator.Provider>
    </div>
  );
}

export default App;
