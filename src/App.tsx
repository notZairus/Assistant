import LandingPage from "@/pages/LandingPage";
import AssignmentForm from "@/pages/AssignmentForm";
import BirhtdayForm from "@/pages/BirthdayForm";
import { Switch, Route } from "wouter";

function App() {
  return (
    <>
      <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/assignment-form" component={AssignmentForm} />
          <Route path="/birthday-form" component={BirhtdayForm} />
      </Switch>
    </>
  )
}

export default App;