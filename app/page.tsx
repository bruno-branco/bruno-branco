import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "../components/ui/header";
import Emoji from "../components/ui/emoji";
import { Intro } from "@/components/ui/intro";
import Aboutme from "@/components/ui/aboutme";
import { Space } from "lucide-react";

export default function Home() {
  return (
    <main className="p-8 m-auto">
      <Header></Header>
      <Intro />
      <Aboutme />
    </main>
  );
}
