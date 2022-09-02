import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';


const App = () => {
  return (

    
    <div className='app-wrapper'>
    <Header/>
      <Navbar />
      <div className='content'>
      <img src="https://cutewallpaper.org/21/linkedin-background-images/chicago-skyline-linkedIn-background-Blackmore-Partners-Inc.jpg" alt="bg" />
      <div>My post</div>
      <div>New post</div>
      <div>post 1</div>
      <div>post 1</div></div>
    </div>

  )
}


export default App;
