import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import route from "./routes/route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { setAuthToken } from "./services/api";

function App() {
  const queryClient = new QueryClient();
  setAuthToken(localStorage.getItem("token") || "");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(route)} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
