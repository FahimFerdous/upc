
import './App.css';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';

import SimpleReactLightbox from 'simple-react-lightbox'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Upc from './pages/others/Upc';

import Contact from './pages/others/Contact';
import Management from './pages/others/Management';
import LocationMap from './pages/others/LocationMap';
import ProjectLayout from './pages/others/ProjectLayout';
import BirdEye from './pages/others/BirdEye';
import VideoGallery from './pages/others/VideoGallery';
import PhotoGallery from './pages/others/PhotoGallery';
import News from './pages/others/News';
import DemoGallery from './pages/others/DemoGallery';
import UpdateNews from './admin/UpdateNews';
import AdminDashboard from './admin/AdminDashboard';
import NewsHomePage from './pages/News/NewsHomePage';
import Dashboard from './pages/News/Dashboard';
import SingleBlogPage from './pages/News/SingleBlogPage';
import EditSingleBlog from './pages/News/EditSingleBlog';
import { AuthProvider } from './admin/context/AuthContext';
import Login from './admin/Login';
import PrivateRoute from './admin/context/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <SimpleReactLightbox>
        <Router>
          <div id="page-wrapper">

            <Header />
            <Switch>
              <Route exact path="/">

                <MainPage />
              </Route>
              <Route path="/About-Us">

                <Upc />
              </Route>
              <Route path="/Contact-Us">

                <Contact />
              </Route>
              <Route path="/Management">

                <Management />
              </Route>
              <Route path="/Location-map">

                <LocationMap />
              </Route>
              <Route path="/Project-Layout">

                <ProjectLayout />
              </Route>
              <Route path="/BirdsEye">

                <BirdEye />
              </Route>
              <Route path="/VideoGallery">

                <VideoGallery />
              </Route>
              <Route path="/PhotoGallery">

                <PhotoGallery />
              </Route>
              <Route path="/News">

                <NewsHomePage />
              </Route>
              <Route path="/NewsDashboard">

                <Dashboard />
              </Route>
              <Route path="/view/:id">

                <SingleBlogPage />
              </Route>
              <Route path="/Edit/:id">

                <EditSingleBlog />
              </Route>
              <Route path="/demo">

                <DemoGallery />
              </Route>
              <PrivateRoute path="/admin" component={AdminDashboard} />


              <Route path="/login">
                <Login />
              </Route>
            </Switch>


            <Footer />
          </div>

        </Router>
      </SimpleReactLightbox>
    </AuthProvider>
  );
}

export default App;
