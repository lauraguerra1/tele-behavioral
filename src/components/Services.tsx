import SingleService from "./SingleService"

const Services = () => {
  const services = [
    {
      name: "Addiction Recovery", 
      description: "Service description coming soon!"
    }, 
    {
      name: "Hypnotherapy", 
      description: "Service description coming soon!"
    }, 
    {
      name: "Behavioral Health", 
      description: "Service description coming soon!"
    },
    {
      name: "Alternative Medicine", 
      description: "Service description coming soon!"
    }
  ]
  const serviceEls = services.map((service, index) => <SingleService key={service.name} name={service.name} description={service.description} index={index} />)
  return (<>{serviceEls}</>)
}
export default Services