function Avatar({person, size}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Avatar
            person={{ name: 'Woon sen', imageId: 'OKS67lh'}}
            size={250} />
        <Avatar
            person={{ name: 'Ron Ayah', imageId: 'YfeOqp2'}}
            size={150} />
        <Avatar
            person={{ name: 'Pani Dom', imageId: '1bX5QH6'}}
            size={100} />
    </div>
  );
}