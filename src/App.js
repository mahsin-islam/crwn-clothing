import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => (
  <div>
    <Link to='/topics'>Topics</Link>
    <h1>HATS PAGE</h1>
  </div>
);
const TopicsList = props => {
  console.log(props);
  return (
    <div>
      <h1>Topics List PAGE</h1>
    </div>
  );
};
const TopicDetail = (props) => {
  console.log(props);
  return (<div>
    <h1>Topic Detail PAGE: {props.match.params.topicId}</h1>
  </div>
  );
};
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route exact={true} path="/topics" element={<TopicsList />} ></Route>
        <Route path="/topics/:topicId" element={<TopicDetail />} ></Route>
        <Route path="/shop" element={<ShopPage />} ></Route>

      </Routes>

      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
