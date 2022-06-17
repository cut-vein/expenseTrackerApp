import { QueryClient } from "react-query";
const queryClient = new QueryClient();

//CHAGE THIS TO YOUR OWN API
const AXIOS_URL =
  process.env.NODE_ENV === "production"
    ? "http://expensetracker20/api/"
    : "http://localhost:5000/api/";
export { AXIOS_URL, queryClient };
