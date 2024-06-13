// Components
import Navbar from "../components/Navbar";
import Authenticator from "../components/Authenticator";

const ScheduleNewMessagePage = () => {
  return (
    <Authenticator>
      <div>
        <Navbar />
        <h1>Schedule New Message</h1>
      </div>
    </Authenticator>
  );
};

export default ScheduleNewMessagePage;
