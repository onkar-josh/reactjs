import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Container,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";



import MainRoute from  '../Routes/MainRoute';

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.


export default function Welcome() {

  return (
    <Router>
      <MainRoute />
    </Router>
  );
}
/*
function ModalSwitch() {
  return (
    <div>
      <Switch /*location={background || location}*//*>
        <Route exact path="/" children={<Home/>} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/login" children={<Login />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>*/

      {/* Show the modal when a background page is set */}
      {/*background && <Route path="/img/:id" children={<Modal />} />*/}
    /*</div>
  );
}
*/
/*
const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
];

function Thumbnail({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color
      }}
    />
  );
}

function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
  );
}

function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Welcome to the First Page of the Website</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

function Gallery() {
  //let location = useLocation();

  return (
    <div>
      {IMAGES.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
        //    state: { background: location }
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}


function Login() {
    const [state,setState] = useState();
    const loginValidationForm=(event)=>{
        event.preventDefault();
        setState(true);
    }

    if(state){

        return(<>
                <Router>
                <div>
                    <NewHomePage/>
                  <hr />
                </div>
              </Router>
              </>
        );

    }

 
    return (
      <div>
          <h3>Login Form</h3>
       <form onSubmit={loginValidationForm}>
           username :<input type="text" placeholder="enter username"/><br/><br/>
           password :<input type="password" placeholder="enter password"/><br/>
           <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
function NewHomePage(){
return(
<div>

                <Switch>
                    <Route exact path="/login/" children={<InnerHomePage />} >
                      <InnerHomePage />
                    </Route>
                    <Route path="/login/list" children={<ListOfUsers />} />
                    <Route path="/login/about" children={<About />}>
                      <About children={<About />} />
                    </Route>
                  </Switch>
 
                </div>
);

}
  function ListOfUsers(){
    return(
       <>
        <OldSchoolMenuLink
                    activeOnlyWhenExact={true}
                    to="/login/"
                    label="return"
                  />
                  <marquee>
        <h1>
            List of Users Will Be Printed Here
        </h1>
        </marquee>
        </>
    );
}

  function InnerHomePage() {
    return (
      <div>

        <h2>welcome to homepage</h2>
        <OldSchoolMenuLink
                    activeOnlyWhenExact={true}
                    to="/login/"
                    label="Home"
                  />
                  <OldSchoolMenuLink to="/login/list" label="List Of Users" />
                  <OldSchoolMenuLink to="/login/about" label="About" />   
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>this website is created by mr. Onkar Hasabe</h2>
      </div>
    );
  }
  function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
        {match && "> "}
        <Link to={to}>{label}</Link>
      </div>
    );
  }

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}*/
