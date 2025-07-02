import { AppRoutes } from "./routes"
import { SideBarProvider } from "./providers/SideBarProvider"
import { setupStore } from "./store"
import { Provider } from "react-redux"

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
      <SideBarProvider>
        <AppRoutes />
      </SideBarProvider>
    </Provider>
  );

}

export default App
