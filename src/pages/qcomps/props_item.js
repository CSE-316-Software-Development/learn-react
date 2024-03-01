function Item({ name, isPacked }) {
  return (
    <li className="item">
      { isPacked ? <s>{name}</s> : name } { isPacked ? "✔" : "" }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
