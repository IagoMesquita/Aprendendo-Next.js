import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/MainContainer.module.css"
export default function MainContainer({ children }) {
  return (
    <>
      <Navbar/>
      <main className={ styles.container }>
      { children }
      </main>
      <Footer/>
    </>
  )
}