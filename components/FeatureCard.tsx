import { ComponentProps, FC } from "react";
import { clsx } from "clsx";

interface FeatureCardProps extends Omit<ComponentProps<"div">, "className"> {
  title?: string;
  description?: string;
  icon?:
    | "bag"
    | "filter"
    | "folder"
    | "notification"
    | "play"
    | "star"
    | "tick";
  active?: boolean;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title = "Placeholder text",
  description = "Placeholder text",
  icon = "placeholder",
  active = false,
  ...otherProps
}) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-[26rem] items-start gap-5 rounded-3xl bg-white px-5 py-[1.875rem]",
        active
          ? "drop-shadow-default hover:drop-shadow-darker"
          : "hover:drop-shadow-default"
      )}
      {...otherProps}
    >
      <div className="flex-none">
        <img
          src={`/icons/${icon}.svg`}
          alt=""
          className="h-[3.125rem] w-[3.125rem]"
          aria-hidden="true"
        />
      </div>
      <div>
        <div className="font-heading text-2xl font-semibold leading-[1.875rem]">
          {title}
        </div>
        <div className="mt-[0.375rem] text-[1.0625rem] leading-[1.6875rem]">
          {description}
        </div>
      </div>
    </div>
  );
};
