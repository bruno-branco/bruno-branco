import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "../components/ui/header";
import Emoji from "../components/ui/emoji";

export default function Home() {
  return (
    <main className="p-8 m-auto">
      <Header></Header>
      <div className="grid content-center grid-cols-2 space-x-14 pt-20 px-40">
        <div className="">
          <h1 className="text-7xl">
            Hey, there!{" "}
            <span>
              <Emoji symbol="👋" label="hello"></Emoji>
            </span>
          </h1>
        </div>
        <div className="place-self-end">
          <Avatar className="place-self-end">
            <AvatarImage
              className="rounded-full w-[240px] h-[240px] place-self-end "
              src="@public/images/profile.jpeg"
              alt="@shadcn"
            />
            <AvatarFallback>Bruno Branco</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  );
}
