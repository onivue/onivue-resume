const Footer = () => {
  return (
    <footer className=" dark:bg-dark-200">
      <div className="my-16 flex flex-col">
        <div className="mx-auto flex flex-col items-center ">
          <p className="leading-125 text-sm font-light lg:block">created by Albin Hoti</p>
        </div>

        <p className="block text-center text-xs font-light lg:block">
          © 2024 •{' '}
          <a href="https://www.onivue.ch" className="decoration-primary-400 decoration-2 hover:underline">
            onivue
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
