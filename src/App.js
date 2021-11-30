import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Homepage from "./components/pages/homepage/Homepage";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUserPage/NewUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/pages/productList/ProductList";
import Products from "./components/pages/product/product";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
         <Route path="product" element={<ProductList /> } />
         <Route path="product/:productId" element={<Products/> } />
         <Route path="newProduct" element={<NewProduct /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
