//general
import * as React from "react"
//components
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
//styles
import "./styles.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
