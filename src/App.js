import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Homepage from "./components/pages/homepage/Homepage";



function App() {
  return (
   <div className="App">
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Homepage/>
     

    </div>

   </div>
  );
}

export default App;
