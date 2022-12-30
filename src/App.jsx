import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navBar";
import About from "./components/about";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import SignOut from "./components/signOut";
import MyBusinessCards from "./components/myBusinessCards";
import SignUpBusiness from "./components/signUpBusiness";
import ProtectedRoute from "./components/common/protectedRoute";
import CreateCard from "./components/cardCreate";
import DeleteCard from "./components/cardDelete";
import EditCard from "./components/cardEdit";

import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <NavBar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-up-business" element={<SignUpBusiness />} />
          <Route path="sign-out" element={<SignOut />} />

          <Route
            path="my-business-cards"
            element={
              <ProtectedRoute onlyBusiness>
                <MyBusinessCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-card"
            element={
              <ProtectedRoute onlyBusiness>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-business-cards/delete/:id"
            element={
              <ProtectedRoute onlyBusiness>
                <DeleteCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-business-cards/edit/:id"
            element={
              <ProtectedRoute onlyBusiness>
                <EditCard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
