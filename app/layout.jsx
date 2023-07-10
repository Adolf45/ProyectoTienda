import "./custom.scss";
import Footer from "./footer";
import Menu from "./menu";
import Contacto from "../components/contacto/contacto"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Menu/>
        {children}
      <Contacto/>
      <br />
      <br />
      <Footer/>
      </body>
      
    </html>
  )
}
