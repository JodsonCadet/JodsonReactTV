import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Please select a show to see details.</p>;
  }

  return (
    <section>
      <h2>{show.name}</h2>
      <p>{show.genre}</p>
      <EpisodeList
        episodes={show.episodes}
        setSelectedEpisode={setSelectedEpisode}
        selectedEpisode={selectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </section>
  );
}
