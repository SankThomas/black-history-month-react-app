import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Titles from "./components/Titles"

const App = () => {
  return (
    <Router>
      <Header />

      <Route path="/" exact>
        <Titles />
      </Route>
    </Router>
  )
}

export default App
