export const FeatureWithPictureSection = () => {
  return (
    <div className="mt-[9.375rem] flex flex-col gap-[9.375rem] px-4 sm:px-[6.25rem]">
      <div className="flex items-center justify-between gap-[7.813rem]">
        <div className="flex basis-1/2 flex-col gap-6">
          <div className="font-heading text-5xl font-semibold leading-[3.125rem]">
            Manage your tasks <span className="bg-highlight">online</span>{" "}
            easily.
          </div>
          <div className="text-[1.0625rem] font-medium leading-[1.6875rem] opacity-50">
            Pellentesque blandit augue facilisis malesuada interdum eleifend
            risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit
            pulvinar urna diam lacus fringilla eu cursus.
          </div>
        </div>
        <div className="flex-none">
          <img
            src="/graphics/manage-your-tasks-online-easily.png"
            alt=""
            aria-hidden="true"
            className="drop-shadow-default"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-[7.813rem]">
        <div className="flex-none">
          <img
            src="/graphics/keep-track-of-all-your-progress.png"
            alt=""
            aria-hidden="true"
            className="drop-shadow-default"
          />
        </div>
        <div className="flex basis-1/2 flex-col gap-6">
          <div className="font-heading text-5xl font-semibold leading-[3.125rem]">
            Keep <span className="bg-highlight">Track</span> Of All Your
            Progress.
          </div>
          <div className="text-[1.0625rem] font-medium leading-[1.6875rem] opacity-50">
            Pellentesque blandit augue facilisis malesuada interdum eleifend
            risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit
            pulvinar urna diam lacus fringilla eu cursus.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[7.813rem]">
        <div className="flex basis-1/2 flex-col items-start gap-6">
          <div className="font-heading text-5xl font-semibold leading-[3.125rem]">
            More <span className="bg-highlight">connections</span>, no more
            cancellations
          </div>
          <div className="text-[1.0625rem] font-medium leading-[1.6875rem] opacity-50">
            Pellentesque blandit augue facilisis malesuada interdum eleifend
            risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit
            pulvinar urna diam lacus fringilla eu cursus.
          </div>
          <a
            className="rounded-full bg-primary-100 px-[2.313rem] py-[1.0625rem] font-bold text-white hover:bg-primary-200"
            href="#"
          >
            Get Started
          </a>
        </div>
        <div className="flex-none">
          <img
            src="/graphics/more-connections-no-more-cancellations.png"
            alt=""
            aria-hidden="true"
            className="drop-shadow-default"
          />
        </div>
      </div>
    </div>
  );
};
