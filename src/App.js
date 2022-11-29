import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News key="home" pageSize={6} country="in" category="general" />
          }
        />
        <Route
          exact
          path="/business"
          key="business"
          element={
            <News
              key="business"
              pageSize={6}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          key="entertainment"
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={6}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News key="health" pageSize={6} country="in" category="health" />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News key="science" pageSize={6} country="in" category="science" />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News key="sports" pageSize={6} country="in" category="sports" />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={6}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
