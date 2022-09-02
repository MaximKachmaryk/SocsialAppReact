import './App.css';
import Header from './components/Header';


const App = () => {
  return (

    
    <div className='app-wrapper'>
    <Header/>
     <nav className='nav'> 
      <div> <a href="/#">Profile</a></div>
      <div><a href="/#">Messages</a></div>
      <div> <a href="/#">News</a></div>
      <div> <a href="/#">Music</a></div>
      <div> <a href="/#">Setting</a></div>
     </nav>
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
