const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center">
      <span>
        Business World App <i className="bi bi-signpost-2-fill"></i>
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};
export default Footer;
