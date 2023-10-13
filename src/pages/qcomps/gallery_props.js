const baseUrl = 'https://i.imgur.com/';

function Profile(props) {
  return (
      <section className="profile">
        <h2>{props.name}</h2>
        <img
            className="avatar"
            src={baseUrl + props.imageID + 's.jpg'}
            alt={props.name}
            width={70}
            height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.profession}
          </li>
          <li>
            <b>Awards: {props.awards.length} </b>
            {props.awards.map((award, index) => (
                <span key={index}>{award}</span>
            ))}
          </li>
          <li>
            <b>Discovered: </b>
            {props.discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
            name="Maria Skłodowska-Curie"
            imageID=  'szV5sdG'
            profession="physicist and chemist"
            awards={[
              "Nobel Prize in Physics",
              "Nobel Prize in Chemistry",
              "Davy Medal",
              "Matteucci Medal"
            ]}
            discovered="polonium (element)"
        />
        <Profile
            name="Katsuko Saruhashi"
            imageID='YfeOqp2'
            profession="geochemist"
            awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
            discovered="a method for measuring carbon dioxide in seawater"
        />
      </div>
  );
}