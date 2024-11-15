import "./App.css";
import Layout from "./common/layout/Layout";
import AppRoutes from "./router/AppRoutes";
function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
