import "../App.css";
import { Home, Ownercard } from "../Pages";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import { Fragment } from "react";

// const PrivateRoute = () => {
//   const auth = useAuth();
//   return auth.user ? <Outlet /> : <Navigate to="/login" />;
// };
const Page404 = () => {
  return <h1>Pagenot Found</h1>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/ownercard" element={<Ownercard />}></Route>


            {/* <Route exact path="/settings" element={<PrivateRoute />}>
              <Route exact path="/settings" element={<Settings />} />
            </Route> */}

            <Route exact path="*" element={<Page404 />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
