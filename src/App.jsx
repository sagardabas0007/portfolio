import Cursor from "./Components/Cursor"
import Loading from "./Components/Loading"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div>
      <Loading />
      {/* <Cursor/> */}
      <Navbar />
      <Main/>
    </div>
  )
}

export default App
