import { Provider } from "react-redux";
import { RouteInitial } from "./routes/RouteInitial";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouteInitial />
    </Provider>
  );
}

export default App;
