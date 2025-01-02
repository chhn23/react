import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { gitInfoLoader } from "./components/Github/Github";
import GithubUsingUseEffect from "./components/Github/GithubUsingUseEffect";
//Method1 for creating router:::>>>>>>>>
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "home",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

//Method2 for creating router:::::>>>>>>>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userName" element={<User />} />
      <Route path="githubUsingUseEffect" element={<GithubUsingUseEffect />} />
      <Route loader={gitInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
