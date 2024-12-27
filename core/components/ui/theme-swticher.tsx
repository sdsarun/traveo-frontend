"use client";

import { cn } from "@/core/utils/common/cn";
import useMounted from "@/core/utils/hooks/use-mounted";
import { useTheme } from "next-themes";
import { IconType } from "react-icons";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export type ThemeSwitcherProps = {
  rootClassName?: string;
  iconLightProps?: React.ComponentProps<IconType>;
  iconDarkProps?: React.ComponentProps<IconType>;
};

export default function ThemeSwitcher({
  rootClassName,
  iconDarkProps,
  iconLightProps
}: ThemeSwitcherProps) {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  return (
    <button className={cn("border-[1px] rounded-full p-1", rootClassName)} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <MdOutlineNightlight size={18} {...iconDarkProps} />
      ) : (
        <MdOutlineLightMode size={18} {...iconLightProps} />
      )}
    </button>
  );
}
