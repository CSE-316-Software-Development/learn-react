function Square({children}) {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export default function Holder() {
  return (
  <div>
    <Square>
     <img
       className="avatar"
       src={'https://i.imgur.com/YfeOqp2s.jpg'}
       alt={'Katsuko Saruhashi'}
       width={300}
       height={300}
     />
    </Square>
    <Square>
      <p>Hello React</p>
    </Square>
  </div>
  )
}
