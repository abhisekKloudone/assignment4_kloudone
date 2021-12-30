import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/product/:id" component={ProductDetail} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
