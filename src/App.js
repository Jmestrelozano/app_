import LoginState from "./providers/loginProvider/LoginState";
import { RouteInitial } from "./routes/RouteInitial";

function App() {
  return (
    <LoginState>
      <RouteInitial />
    </LoginState>
  );
}

export default App;
