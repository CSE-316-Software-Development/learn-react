function Profile(props) {
  return <section className="profile">
    <h2>{props.name}</h2>
    <img
      className="avatar"
      src={props.src}
      alt={props.alt}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {props.profession}
      </li>
      <li>
        <b>Awards: {props.awardsCount} </b>
        {props.awardsList}
      </li>
      <li>
        <b>Discovered: </b>
        {props.discovered}
      </li>
    </ul>
  </section>
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        src='https://i.imgur.com/szV5sdGs.jpg'
        alt="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awardsCount={4}
        awardsList="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        src='https://i.imgur.com/YfeOqp2s.jpg'
        alt="Katsuko Saruhashi"
        profession="geochemist"
        awardsCount={2}
        awardsList="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
