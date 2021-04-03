import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import { Register } from './Register'
import { Login } from './Login'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Jumbotrom, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'


function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
        <a class="navbar-brand" href="#">Requiem Music</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Songs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artists</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bands</a>
            </li>
          </ul>
          <span class="navbar-text">
            This was a mine idea
          </span>
        </div>
      </div>
      </nav>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register/:id" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
