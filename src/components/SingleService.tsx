const SingleService = ({ name, description, index }: { name: string, description: string, index: number }) => {

  return (
    <article className={`single-service p-10 ${index < 2 ? 'border-b-1' : ''} ${!index || index === 2 ? 'border-r-1' : ''} border-black`}>
      <h3 className="text-center pb-10 text-xl font-extralight">{name.toUpperCase()}</h3>
      <p className="text-center">{description}</p>
    </article>
  )
}

export default SingleService