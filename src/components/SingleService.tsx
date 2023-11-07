const SingleService = ({ name, description, index }: { name: string, description: string, index: number }) => {

  return (
    <article className={`p-5 ${index < 2 ? 'border-b-1' : ''} ${!index || index === 2 ? 'border-r-1' : ''} border-black`}>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default SingleService