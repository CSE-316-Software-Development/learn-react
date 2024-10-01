interface ProfilePropsType {
  name: string,
  profession: string,
  awards: string,
  discovered: string,
  image: {
    src: string,
    alt: string,
    width: number,
    height: number
  }
}

function Profile(props:ProfilePropsType) {
  const {name, image, profession, awards, discovered} = props;
  return (
    <section>
      <h2> {name} </h2>
      <img 
        className="avatar"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <ul>
        <li>
        <b> Profession: </b>
        {profession}
        </li>
        <li>
          <b> Awards: </b>
          {awards}
        </li>
        <li>
          <b> Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
      name={"Maria Skłodowska-Curie"} 
      profession={"physicist and chemist"}
      awards={"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"}
      discovered={"polonium (element)"}
      image={{src:'https://i.imgur.com/szV5sdGs.jpg', alt: 'Maria Skłodowska-Curie', width: 70, height: 70}}
      />
      <Profile 
      name="Katsuko Saruhashi"
      profession={"geochemist"}
      awards={"(Miyake Prize for geochemistry, Tanaka Prize)"}
      discovered={"a method for mesauring carbon dioxide in seawater"}
      image={{src: 'https://i.imgur.com/YfeOqp2s.jpg', alt: 'Katsuko Saruhashi', width: 70, height: 70}}
      />
    </div>
  );
}
