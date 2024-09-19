
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      
    >
      {theme === "dark" ? <SunIcon className="text-8xl" style={{backgroundColor:"#020817"}} /> : <MoonIcon className="text-8xl" style={{backgroundColor:"white"}} />}
    </button>
  );
}
