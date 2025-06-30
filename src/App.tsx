import { AppRoutes } from "./routes"
import { SideBarProvider } from "./providers/SideBarProvider"

function App() {
  return (
    <SideBarProvider>
      <AppRoutes />
    </SideBarProvider>
  );

}

export default App
