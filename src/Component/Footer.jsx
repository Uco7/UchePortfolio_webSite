import "../css/App.css"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <p className="mono text-muted">
          © {new Date().getFullYear()} Jordan Cole
        </p>
        <p className="mono text-muted">built with React</p>
      </div>
    </footer>
  )
}