import './App.css'
import logo from './assets/logo-white.png'
// import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navigation/NavBar.jsx'
// import HomePage from './pages/homepage/HomePage.jsx'
// import NewPost from './pages/newPost/newPost.jsx'
// import Overview from './pages/overviewPage/OverviewPage.jsx'
// import NotFound from './pages/notFound/NotFound.jsx'
// import PostPage from './pages/postPage/PostPage.jsx'

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <NavBar/>
        {/*    <Routes>*/}
        {/*        <Route path="/" element={<HomePage/>}/>*/}
        {/*        <Route path="/newPost" element={<NewPost/>}/>*/}
        {/*        <Route path="/overview" element={<Overview/>}/>*/}
        {/*        <Route path="/notFound" element={<NotFound/>}/>*/}
        {/*        <Route path="*" element={<PostPage/>} />*/}
        {/*    </Routes>*/}
        </div>



    )
}


export default App
