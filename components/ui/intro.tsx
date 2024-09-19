import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Emoji from "./emoji";

export function Intro() {
  return (
    <div className="grid content-center grid-cols-2 space-x-14 pt-20 px-80 mb-20">
      <div className="space-y-8">
        <h1 className="text-7xl font-bold">
          Hey, there! <Emoji symbol="👋" label="hello"></Emoji>
        </h1>
        <h2 className="text-xl font-semibold text-gray-400">
          Hope you're great! I'm Bruno Branco, a full-stack developer based in
          Brazil. For now I just want you to have fun on my website!
        </h2>
      </div>
      <div className="place-self-end">
        <div className="relative big-yellow-box rounded-full z-1"></div>
        <div className="relative big-red-box rounded-full z-1"></div>
        <div className="relative big-green-box rounded-full z-1"></div>
        <Avatar className="place-self-end">
          <AvatarImage
            className="rounded-full w-[240px] place-self-end z-10 relative"
            src="https://github.com/MalKhar/bruno-branco/blob/main/public/images/profile.jpeg?raw=true"
            alt="@shadcn"
          />
          <AvatarFallback>Bruno Branco</AvatarFallback>
        </Avatar>{" "}
      </div>
    </div>
  );
}
