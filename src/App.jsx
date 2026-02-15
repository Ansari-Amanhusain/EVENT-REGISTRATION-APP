import { Provider } from "react-redux";
import { store } from "./app/store";
import { UIProvider } from "./context/UIContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <UIProvider>
        <Dashboard />
      </UIProvider>
    </Provider>
  );
}

export default App;
  