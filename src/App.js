import './App.css';
import HomePage from './pages/homepage.component';
import {Route, Switch, Link} from 'react-router-dom';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const HatDetail = (props) => {
  console.log(props)
  return (
    <div>
      HatDetail
    </div>
  )
}



function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/hats" component={HatsPage}/>
          <Route path="/hats/:id" component={HatDetail}/>


        </Switch>
    </div>
  );
}

export default App;
