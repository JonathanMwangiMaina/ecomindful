const Footer = () => {
  return (
    <footer className="bg-muted/50 py-8 text-center mt-16">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EcoMindful. Cultivating a greener tomorrow.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
