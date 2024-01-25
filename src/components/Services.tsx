import SingleService from "./SingleService"

const Services = () => {
  const services = [
    {
      name: "Behavioral Health", 
      description: "Service description coming soon!"
    },
    {
      name: "Integrative Psychiatry", 
      description: "Service description coming soon!"
    }, 
    {
      name: "Habits & Lifestyle", 
      description: "Service description coming soon!"
    }, 
    {
      name: "Supplementation", 
      description: "Service description coming soon!"
    }, 
    {
      name: "Mind, Body & Biology", 
      description: "Service description coming soon!"
    }, 
    {
      name: "Spirituality", 
      description: "Service description coming soon!"
    }
  ]
  const serviceEls = services.map((service, index) => <SingleService key={service.name} name={service.name} description={service.description} index={index} />)
  return (<>{serviceEls}</>)
}
export default Services