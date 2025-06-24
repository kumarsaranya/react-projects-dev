import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./src/store";

const AppComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
