export const Footer = () => {
  return (
    <div className="text-base font-medium leading-[1.625rem]">
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <div className="flex flex-col gap-6">
          <a className="flex-none" href="#">
            <img src="/brand/footer-logo.svg" alt="Logo" />
          </a>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-primary-100"
            >
              <path d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.06037C4.26937 21 2.00037 18.74 2.00037 15.95V8.05C2.00037 5.26 4.25937 3 7.06037 3H16.9394ZM18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.50037 8.4C6.18937 8.17 5.75937 8.2 5.50037 8.47C5.23037 8.74 5.20037 9.17 5.42937 9.47L5.56037 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2Z" />
            </svg>
            <a href="mailto:help@frybix.com" className="hover:underline">
              help@frybix.com
            </a>
          </div>
          <div className="flex gap-2">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-primary-100"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
              />
            </svg>
            <a href="tel:+123445667889" className="hover:underline">
              +1 234 456 678 89
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-heading text-[2rem] font-semibold leading-[2.625rem]">
            Links
          </div>
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Bookings
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-heading text-[2rem] font-semibold leading-[2.625rem]">
            Legal
          </div>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-heading text-[2rem] font-semibold leading-[2.625rem]">
            Product
          </div>
          <a href="#" className="hover:underline">
            Take
          </a>
          <a href="#" className="hover:underline">
            Live Chat
          </a>
          <a href="#" className="hover:underline">
            Reviews
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-heading text-[2rem] font-semibold leading-[2.625rem]">
            Newsletter
          </div>
          <div>Stay up to date</div>
          <form className="relative flex w-full justify-between gap-6">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-[21.25rem] flex-1 rounded-full border border-[#E1E1E1] bg-white py-[1.688rem] pl-6 pr-44 text-base font-normal leading-[1.625rem] outline-none focus:border-primary-100"
            />
            <button className="absolute right-0 top-0 bottom-0 m-[0.625rem] flex-none rounded-full bg-primary-100 px-[2.688rem] text-base leading-[1.625rem] text-white hover:bg-primary-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-[6.25rem] mt-[5.75rem] border-t border-[#D9D9D9] py-10 text-center">
        Copyright 2022 Frybix Inc. All Rights Reserved
      </div>
    </div>
  );
};
