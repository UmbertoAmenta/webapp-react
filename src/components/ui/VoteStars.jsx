export default function VoteStars(vote) {
  if (vote == 0) {
    return <p>Non disponibile</p>;
  }

  let voteStars = [];
  for (let i = 0; i < vote; i++) {
    voteStars.push(<i key={i} className="fa-solid fa-star"></i>);
  }
  while (voteStars.length < 5) {
    voteStars.push(
      <i key={voteStars.length} className="fa-regular fa-star"></i>
    );
  }
  return voteStars;
}
