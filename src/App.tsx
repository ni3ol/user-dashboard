import "./App.css";
import { DashboardView } from "./dashboard/pages/dashboard-view";
import { Layout } from "./shared/components/layout";
import { usePromise } from "./shared/hooks/use-promise";
import { getUsers } from "./users/actions/get-users";

function App() {
  const getUsersQuery = usePromise(getUsers);

  const { data, isLoading, isError } = getUsersQuery;

  return isError ? (
    <Layout>
      <h1>An error occurred</h1>
    </Layout>
  ) : isLoading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <DashboardView users={data} />
  );
}

export default App;
