import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

import Header from "./Header";
import Main from "./Main";

function App() {
//   function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }
// let query = useQuery();
// const page = query.get("page");
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
