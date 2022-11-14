var currenTime = new Date();

var horaActual = currenTime.toLocaleTimeString();

console.log(horaActual);

const Section = [
  {
    text: "Hora",
    background: "#0C3A70",
    colspan: "0",
  },
  {
    text: 9,
    background: "gray",
    colspan: "0",
  },
];

export default Section;
