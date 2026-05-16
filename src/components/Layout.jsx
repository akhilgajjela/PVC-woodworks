import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main page-content">{children}</main>
      <Footer />
    </div>
  );
}
