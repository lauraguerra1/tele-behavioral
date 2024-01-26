import SingleService from "./SingleService"

const Services = () => {
  const services = [
    { name: "Behavioral Health", link: "behavioral-health" },
    { name: "Integrative Psychiatry", link: "integrative-psychiatry" },
    { name: "Habits & Lifestyle", link: 'habits-and-lifestyle' },
    { name: "Supplementation", link: 'supplementation' },
    { name: "Mind, Body & Biology", link: "mind-body-biology" },
    { name: "Spirituality", link: "spirituality" }
  ]
  const serviceEls = services.map((service, index) => <SingleService key={service.name} name={service.name} link={service.link} index={index} />)
  return (<>{serviceEls}</>)
}
export default Services