import "./App.css";
import Router from "./route/Router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCompetiters } from "./components/storeRedux/CompetiterRedux";
import "./styles/style.sass";

function App() {
  const dispatch = useDispatch();
  const Data = () => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        response.data.map((comp) => {
          return (comp.vote = 0);
        });
        dispatch(setCompetiters(response.data));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    Data();
  }, []);

  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
