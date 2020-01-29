const getRating = ({ food, environment, price, service }) => {
  return (food + environment + price + service) / 4
}

export default getRating