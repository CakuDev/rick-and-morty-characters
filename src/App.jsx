import './App.css'
import CharacterPage from './pages/CharacterPage'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Main from './sections/Main'


function App() {
  return (
    <>
      <Header />
      <Main>
        <CharacterPage />
      </Main>
      <Footer />
    </>
  )
}

export default App
