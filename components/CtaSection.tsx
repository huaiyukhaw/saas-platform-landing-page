export const CtaSection = () => {
  return (
    <div className="mt-[12.75rem]">
      <div className="flex w-screen items-center justify-center bg-white bg-[url('/graphics/shapes-background.svg')] bg-center">
        <div className="my-[8.75rem] flex max-w-[29.125rem] flex-col items-center gap-6">
          <div className="text-center font-heading text-5xl font-semibold leading-[3.125rem]">
            Try <span className="bg-highlight">Frybix</span> For Free
          </div>
          <div className="text-center text-xl font-medium leading-[1.875rem]">
            Frybix is hub for managing productivity tasks professionaly and
            efficiently
          </div>
          <a
            className="flex items-center justify-center gap-2 rounded-full border-2 border-black bg-white px-4 py-[1.688rem] hover:bg-gray-100 sm:px-[6.25rem]"
            href="#"
          >
            <span className="text-base font-medium leading-[1.625rem]">
              Get Frybix App
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-black"
            >
              <path d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
