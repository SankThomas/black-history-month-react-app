import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Purpose from "./components/Purpose"
import Titles from "./components/Titles"
import Footer from "./components/Footer"

// Pages
import WebApp from "./pages/WebApp"
import Documentation from "./pages/Documentation"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Route path="/" exact>
        <Purpose />
        <Titles />
      </Route>
      <Route path="/web-app">
        <WebApp />
      </Route>
      <Route path="/purpose-of-the-api">
        <Purpose />
      </Route>
      <Route path="/documentation">
        <Documentation />
      </Route>

      <Footer />
    </Router>
  )
}

export default App
