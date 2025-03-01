import { useState } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";

// UI
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const initialFormData = {
  name: "",
  text: "",
  vote: 0,
};

export default function ({ fetchMovie }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

  const handlerField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        fetchMovie();
      });
  };

  return (
    <section className="bg-white mt-5 rounded-3xl p-5 ">
      <Heading variant={4}>Esprimi la tua opinione</Heading>
      <form onSubmit={handlerSubmit}>
        <div className="flex flex-col items-start my-4">
          <div className="flex">
            <div className=" px-3 mr-5 py-1 rounded-3xl space-x-2 flex flex-col items-center">
              <label htmlFor="name">Inserisci il tuo nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-1 rounded-3xl pl-3"
                placeholder="..."
                value={formData.name}
                onChange={(e) => handlerField("name", e.target.value)}
              />
            </div>

            <div className=" px-3 mr-5 py-1 rounded-3xl space-x-2 flex flex-col items-center">
              <label htmlFor="vote">Voto</label>
              <input
                type="number"
                id="vote"
                name="vote"
                className="border-1 rounded-3xl pl-3"
                placeholder="0"
                min={0}
                max={5}
                value={formData.vote}
                onChange={(e) => handlerField("vote", e.target.value)}
              />
            </div>
          </div>

          <div className=" px-3 mr-5 py-1 rounded-3xl space-x-2 flex flex-col items-center">
            <label htmlFor="text">Lascia un commento</label>
            <input
              type="text"
              id="text"
              name="text"
              className="border-1 rounded-3xl pl-3"
              placeholder="..."
              value={formData.text}
              onChange={(e) => handlerField("text", e.target.value)}
            />
          </div>
        </div>

        <Button variant="primary">Invia</Button>
      </form>
    </section>
  );
}
