import { Route, Routes, useParams } from "react-router-dom";


function IndexPage() {
  return(
    <h1>
      Welcome to Daneddie Spanish Club
    </h1>
  );
    }

function AboutUs() {
  return(
    <h1>
      About Us: We're a group of spanish language lovers.
    </h1>
  );
    }

function InteractionPage() {
  return(
    <h1>
      Get to mingle and make friend in spanish.
    </h1>
  );
    }

 function LearnersRoom() {
  return(
    <h1>
      If you love the language, you're in the right place.
    </h1>
  );
    }

function ContactUs() {
  return(
    <h1>
      We will gladly hear from you. daneddiespanishclub@gmail.com
    </h1>    
  );
    }

function UserPage() {
  const {user} = useParams();
  return(
    <h1>
      Hola  {user}, Bienvenido!
    </h1>    
  );
    }

export default function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/interactionpage" element={<InteractionPage />}></Route>
        <Route path="/learnersroom" element={<LearnersRoom />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/:user" element={<UserPage />}></Route>
     </Routes>
    </>
  );
}


