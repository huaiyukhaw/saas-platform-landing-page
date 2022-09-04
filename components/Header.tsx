export const Header = () => {
  return (
    <header className="z-50 flex w-full flex-wrap py-8 px-4 text-base sm:flex-nowrap sm:justify-start sm:px-[6.25rem]">
      <nav
        className="mx-auto w-full max-w-[77.5rem] sm:flex sm:flex-wrap sm:items-center sm:justify-between"
        aria-label="Global Navigation"
      >
        <a className="flex-none" href="#">
          <img src="/brand/header-logo.svg" alt="Logo" />
        </a>
        <div className="flex items-center gap-8 sm:justify-end">
          <a
            className="text-primary flex-none font-black lg:text-white"
            href="#"
            aria-current="page"
          >
            Home
          </a>
          <a className="flex-none font-medium lg:text-white" href="#">
            About Us
          </a>
          <a className="flex-none font-medium lg:text-white" href="#">
            Pricing
          </a>
          <a className="flex-none font-medium lg:text-white" href="#">
            Features
          </a>
          <a
            className="flex-none rounded-full bg-primary-100 px-[3.375rem] py-[1.0625rem] font-bold text-white lg:bg-white lg:text-primary-100 lg:hover:hover:bg-gray-100"
            href="#"
          >
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};
