import Footer from "./component/Footer/Footer";
import Home from "./pages/home/Home";
import { Route, Routes } from 'react-router-dom';
import UserList from "./userList/UserList";
import Header from "./component/Header/Header";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
