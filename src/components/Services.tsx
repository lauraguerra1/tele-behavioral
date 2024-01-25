import SingleService from "./SingleService"

const Services = () => {
  const services = ["Behavioral Health", "Integrative Psychiatry", "Habits & Lifestyle", "Supplementation", "Mind, Body & Biology", "Spirituality"]
  const serviceEls = services.map((service, index) => <SingleService key={service} name={service} index={index} />)
  return (<>{serviceEls}</>)
}
export default Services