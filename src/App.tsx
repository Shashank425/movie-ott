import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
