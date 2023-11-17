import SingleService from "./SingleService"

const Services = () => {
  const services = [
    {
      name: "Addiction Recovery", 
      description: "Im a paragraph. Click here to add your own text and edit me. Its easy. Just click or double click me to add your own content and make changes to the font."
    }, 
    {
      name: "Hypnotherapy", 
      description: "Im a paragraph. Click here to add your own text and edit me. Its easy. Just click or double click me to add your own content and make changes to the font."
    }, 
    {
      name: "Behavioral Health", 
      description: "Im a paragraph. Click here to add your own text and edit me. Its easy. Just click or double click me to add your own content and make changes to the font."
    },
    {
      name: "Alternative Medicine", 
      description: "Im a paragraph. Click here to add your own text and edit me. Its easy. Just click or double click me to add your own content and make changes to the font."
    }
  ]
  const serviceEls = services.map((service, index) => <SingleService key={service.name} name={service.name} description={service.description} index={index} />)
  return (<>{serviceEls}</>)
}
export default Services