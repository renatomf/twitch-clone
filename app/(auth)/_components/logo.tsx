import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image 
          src="/spooky.svg"
          alt="Twitch Clone"
          height="80"
          width="80"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className={cn(
          "text-xl font-semibold",
          font.className
        )}>
          Gamehub
        </p>
        <p className="text-sm text-muted-foreground">
          Let's play
        </p>
      </div>
    </div>
  )
}