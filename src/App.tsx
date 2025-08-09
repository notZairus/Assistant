import LandingPage from "@/pages/LandingPage";
import AssignmentForm from "@/pages/Assignment";
import { Switch, Route } from "wouter";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/assignment-form" component={AssignmentForm} />
      </Switch>
    </>
  )
}

export default App;