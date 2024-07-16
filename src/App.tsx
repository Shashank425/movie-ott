import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { QueryClientProvider, QueryClient } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </>
  );
}

export default App;
