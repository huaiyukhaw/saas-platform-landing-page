import { FeatureCard } from "./FeatureCard";

export const PlatformSection = () => {
  return (
    <div className="mt-[9.6875rem] px-4 sm:px-[6.25rem]">
      <h2 className="text-center font-heading text-5xl font-semibold leading-[3.125rem]">
        One <span className="bg-highlight">Platform</span> For Any Business
      </h2>
      <div className="mt-12 flex flex-col items-center justify-between gap-y-4 md:flex-row">
        <div className="flex flex-none flex-col gap-3">
          <FeatureCard
            title="Appointments"
            description="Many desktop publishing packages and web page editors now use for them."
            icon="folder"
          />
          <FeatureCard
            title="Class Bookings"
            description="Many desktop publishing packages and web page editors now use for them."
            icon="tick"
          />
          <FeatureCard
            title="Fast Support"
            description="Many desktop publishing packages and web page editors now use for them."
            icon="star"
          />
        </div>
        <img
          src="/graphics/user-activity-illustration.svg"
          alt="User activity illustration"
          className="flex-1"
        />
      </div>
    </div>
  );
};
