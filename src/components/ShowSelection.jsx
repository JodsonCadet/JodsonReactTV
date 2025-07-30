export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav>
      {shows.map(show => (
        <a
          className="show"
          key={show.name}
          href="#"
          onClick={e => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}