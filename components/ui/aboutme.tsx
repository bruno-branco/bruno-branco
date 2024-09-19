import Emoji from "./emoji";

export default function Aboutme() {
  return (
    <div className="grid content-center space-x-14 pt-20 px-80">
      <div className="space-y-8 place-self-end">
        <h1 className="text-7xl font-bold text-right">
          About me <Emoji symbol="☕" label="hello"></Emoji>
        </h1>
        <h2 className="text-xl font-semibold text-gray-400">
          My name is Bruno Camargos Branco, I'm 25 years old and I'm from
          Brazil.
        </h2>
      </div>
    </div>
  );
}
