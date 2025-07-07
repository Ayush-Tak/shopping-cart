function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} FakeStore. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          A Project for The Odin Project
        </p>
        <p className="text-xs text-gray-500 mt-2">
          <a
            href="https://www.flaticon.com/free-icons/spike"
            title="spike icons"
            className="underline"
          >
            Spike icons created by Freepik - Flaticon
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;