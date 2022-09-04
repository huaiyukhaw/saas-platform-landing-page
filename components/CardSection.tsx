import { FeatureCard } from "./FeatureCard";

export const CardSection = () => {
  return (
    <div className="mt-[8.375rem] px-4 sm:px-[4.75rem]">
      <h2 className="text-center font-heading text-5xl font-semibold leading-[3.125rem]">
        Frybix Has The Ability To Serve Any <br />
        <span className="bg-highlight">Business Segment</span>
      </h2>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
        <FeatureCard
          active
          title="Education System"
          description="Many desktop publishing packages and web page editors now use for them."
          icon="play"
        ></FeatureCard>
        <FeatureCard
          active
          title="Sports & Fitness"
          description="Many desktop publishing packages and web page editors now use for them."
          icon="folder"
        ></FeatureCard>
        <FeatureCard
          active
          title="Beauty & Wellness"
          description="Many desktop publishing packages and web page editors now use for them."
          icon="star"
        ></FeatureCard>
        <FeatureCard
          active
          title="Officials & Financial"
          description="Many desktop publishing packages and web page editors now use for them."
          icon="bag"
        ></FeatureCard>
        <FeatureCard
          active
          title="Medical Services"
          description="Many desktop publishing packages and web page editors now use for them."
          icon="filter"
        ></FeatureCard>
        <FeatureCard
          active
          title="Events & Entertainment"
          description="Many desktop publishing packages and web page editors now use for them."
          icon="notification"
        ></FeatureCard>
      </div>
    </div>
  );
};
