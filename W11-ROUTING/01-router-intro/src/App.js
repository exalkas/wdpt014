import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import Navigation from './components/Navigation';
import Post from './components/Post'
import {posts} from './posts'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      {/* Routes is like a switch statement */}
      <Routes> 
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/post/:id' element={<Post />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export function Home() {
  return (
    <div>
      {
        posts.map((item, idx) => <div key={item.id}><Link to={`/post/${item.id}`}>{item.text}</Link></div>)
      }
    </div>
  )
}

export function Contact() {
  return (
    <div>
     hello from contact
    </div>
  )
}
export function NotFound() {
  return (
    <div>
      Page Not Found ERROR 404
    </div>
  )
}