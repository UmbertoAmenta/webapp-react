// UI
import Heading from "./ui/Heading";
import VoteAvgStars from "./ui/VoteStars";

export default function Review({ review }) {
  return (
    <section>
      <ul>
        <li>
          <Heading variant={4}>{review.name}</Heading>
        </li>
        <li>
          <VoteAvgStars vote={review.vote} />
        </li>
        <li>
          <p>{review.text}</p>
        </li>
      </ul>
    </section>
  );
}
