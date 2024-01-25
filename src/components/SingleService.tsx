const SingleService = ({ name, index }: { name: string, index: number }) => {

  return (
    <article className={`single-service p-10 ${index < 4 ? 'border-b-1' : ''} ${index % 2 === 0 ? 'border-r-1' : ''} border-black flex flex-col items-center`}>
      <h3 className="text-center pb-10 text-xl font-extralight">{name.toUpperCase()}</h3>
      <button className="text-center bg-slate-400 px-5 py-2 mt-2 text-white">Read More</button>
    </article>
  )
}

export default SingleService