import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "../components/ui/header";
import Emoji from "../components/ui/emoji";

export default function Home() {
  return (
    <main className="p-8 m-auto">
      <Header></Header>
      <div className="absolute "></div>
      <div className="grid content-center grid-cols-2 space-x-14 pt-20 px-80">
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
          <Avatar className="place-self-end">
            <AvatarImage
              className="rounded-full w-[240px] place-self-end "
              src="https://github.com/MalKhar/bruno-branco/blob/main/public/images/profile.jpeg?raw=true"
              alt="@shadcn"
            />
            <AvatarFallback>Bruno Branco</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  );
}
