import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";

import Welcome from "./views/Welcome";
import About from "./views/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Advertise from "./views/Advertise";
import PostBid from "./views/PostBid";
import Feature from "./views/Feature";


import Forgot from "./views/Forgot";
import TransporterHome from "./views/TransporterHome";
import CustomerHome from "./views/CustomerHome";
import AdminHome from "./views/AdminHome";
import PostAdd from "./views/PostAdd";
import AcceptOffer from "./views/AcceptOffer";
import Terms from "./views/Terms";
import DealDetails from "./views/DealDetails";
import ContactUs from "./views/ContactUs";

import ForgotPassword from "./views/ForgotPassword";

import Registration from "./views/CustomerReg";
import Payment from "./views/Payment";
import ProtectedRouteAdmin from "./views/ProtectedRouteAdmin";
import ProtectedRouteTransporter from "./views/ProtectedRouteTransporter";
import ProtectedRouteCustomer from "./views/ProtectedRouteCustomer";

import LoginRouter from "./views/LoginRouter";

export default function App() {
  return (
    <>
      {/* <Payment></Payment> */}
      <Header />
      <Routes>
        <Route exact path="/Welcome" element={<Welcome />} />
        <Route exact path="/" element={<Welcome />} />
      
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Advertise" element={<Advertise />} />
        <Route exact path="/Feature" element={<Feature />} />
        
        <Route exact path="/Forgot" element={<Forgot />} />
        <Route exact path="/CustomerReg" element={<Registration />} />
       
      
       
        <Route  path="/adminhome" 
        element={ <ProtectedRouteAdmin>
          <AdminHome />
          </ProtectedRouteAdmin>
          }
          />
          
       
       <Route  path="/transporterhome" 
        element={ <ProtectedRouteTransporter>
          <TransporterHome />
          </ProtectedRouteTransporter>
          }
          />

        <Route  path="/postbid/:id" 
        element={ <ProtectedRouteTransporter>
                  <PostBid />
                   </ProtectedRouteTransporter>
          }
          />


      <Route  path="/dealdetails/:bidid" 
        element={ <ProtectedRouteTransporter>
                 <DealDetails />
                   </ProtectedRouteTransporter>
          }
          />




       
       <Route  path="/customerhome" 
        element={ <ProtectedRouteCustomer>
          <CustomerHome />
          </ProtectedRouteCustomer>
          }
          />

        <Route  path="/postadd" 
        element={ <ProtectedRouteCustomer>
          <PostAdd />
          </ProtectedRouteCustomer>
          }
          />

        <Route  path="/acceptoffer/:bidid" 
        element={ <ProtectedRouteCustomer>
          <AcceptOffer />
          </ProtectedRouteCustomer>
          }
          />
           <Route  path="/acceptoffer/:bidid/:addid" 
        element={ <ProtectedRouteCustomer>
          <AcceptOffer />
          </ProtectedRouteCustomer>
          }
          />
        <Route path="/login"
        element={<LoginRouter>
          <Login/>
        </LoginRouter>}
        />

         
      
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/*" element={<Welcome />} />
      </Routes>
      <Footer />
    </>
  );
}
