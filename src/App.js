import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchMovies from "./components/searchpage";
import Home from "./components/HomePage";

function App() {
/*  const [state, setState] = useState({
    searchQuery: "",
    results: [],
    selected: {},
    page_num: 1,
    next_call: false,
    prev_call: false,
    err_message: "",
  });
  const api = "http://www.omdbapi.com/?apikey=7e808ec3";
  useEffect(() => {
    search();
  }, [state.page_num]);
  const search = (e) => {
    if (
      (e !== undefined && e.key === "Enter") ||
      state.prev_call ||
      state.next_call
    ) {
      axios(api + "&s=" + state.searchQuery + "&page=" + state.page_num).then(
        (res) => {
          console.log(res);
          if (res.data.Response === "True") {
            const results = res.data.Search;
            setState((prevState) => {
              return {
                ...prevState,
                results: results,
                prev_call: false,
                next_call: false,
                err_message: "",
              };
            });
          } else {
            setState((prevState) => {
              return {
                ...prevState,
                err_message: res.data.Error,
              };
            });
          }
        }
      );
    }
  };
  const inputHandler = (event) => {
    const value = event.target.value;
    setState((prevState) => {
      return {
        ...prevState,
        searchQuery: value,
        next_call: false,
        prev_call: false,
      };
    });
  };
  const openPopup = (id) => {
    console.log(id);
    axios(api + "&i=" + id).then((res) => {
      const result = res.data;
      console.log(res);
      setState((prevState) => {
        return {
          ...prevState,
          selected: result,
          prev_call: false,
          next_call: false,
        };
      });
    });
  };
  const closePopup = () => {
    setState((prevState) => {
      return {
        ...prevState,
        selected: {},
        prev_call: false,
        next_call: false,
      };
    });
  };
  const prevPageHandler = () => {
    const p = state.page_num;
    setState((prevState) => {
      return {
        ...prevState,
        page_num: p - 1,
        prev_call: true,
      };
    });
  };
  const nextPageHandler = () => {
    const p = state.page_num;
    setState((prevState) => {
      return {
        ...prevState,
        page_num: p + 1,
        next_call: true,
      };
    });
  };*/
  return (
    <Router>
      <Switch>
        <Route path="/search" component={SearchMovies}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
