import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Artist from './Components/Artist/Artist';
import LayOut from './Components/LayOut/LayOut';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home';
const routes = createBrowserRouter([{
  path: "", element: <LayOut />, children: [
    { path: "home", element: <Home /> },
    { path: "artist", element: <Artist /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
  ]
}])
function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;