import Button from "./ui/Button";
import Heading from "./ui/Heading";

export default function (ReviewForm) {
  return (
    <section className="bg-white mt-5 rounded-3xl p-5 ">
      <Heading variant={4}>Esprimi la tua opinione</Heading>
      <form action="">
        <div className="flex flex-col items-start my-4">
          <div className="flex">
            <div className=" px-3 mr-5 py-1 rounded-3xl space-x-2 flex flex-col items-center">
              <label htmlFor="name">Inserisci il tuo nome</label>
              <input
                type="text"
                id="name"
                placeholder="..."
                className="border-1 rounded-3xl pl-3"
              />
            </div>

            <div className=" px-3 mr-5 py-1 rounded-3xl space-x-2 flex flex-col items-center">
              <label htmlFor="vote">Voto</label>
              <input
                type="number"
                id="vote"
                placeholder="0"
                min={0}
                max={5}
                className="border-1 rounded-3xl pl-3"
              />
            </div>
          </div>

          <div className=" px-3 mr-5 py-1 rounded-3xl space-x-2 flex flex-col items-center">
            <label htmlFor="name">Lascia un commento</label>
            <input
              type="text"
              id="text"
              placeholder="..."
              className="border-1 rounded-3xl pl-3"
            />
          </div>
        </div>

        <Button variant="primary">Invia</Button>
      </form>
    </section>
  );
}
