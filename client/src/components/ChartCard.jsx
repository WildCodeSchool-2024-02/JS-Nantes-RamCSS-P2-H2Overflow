import "./styles/Chartcard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chartcard({ dataChronique, dataStation }) {
  // creation of a table listing the unique years of reporting

  const yearsArray = [];
  for (let i = 0; i < dataChronique.length; i += 1) {
    const datesArray = dataChronique[i].date_mesure;
    const yearsString = datesArray.substring(0, 4);
    yearsArray.push(yearsString);
  }
  const years = [...new Set(yearsArray)];

  // calculation of a filling percentage per year
  // creation of an object grouping the values   classified by year

  const dataByYear = {};

  years.forEach((year) => {
    const dataForYear = dataChronique.filter((el) =>
      el.date_mesure.includes(year)
    );
    if (dataForYear.length > 0) {
      dataByYear[year] = dataForYear;
    }
  });

  // targeting water height values

  const extractNappeValuesForYear = (year) => {
    const nappeValues = [];
    if (dataByYear[year]) {
      for (let i = 0; i < dataByYear[year].length; i += 1) {
        nappeValues.push(dataByYear[year][i].profondeur_nappe);
      }
    }
    return nappeValues;
  };

  const nappeValuesByYear = {};
  years.forEach((year) => {
    nappeValuesByYear[year] = extractNappeValuesForYear(year);
  });

  // calculating the percentage per year

  const percentageByYear = {};

  years.forEach((year) => {
    // calculating the average

    const profondeurInvertigationYear = dataStation;

    const nappeValuesForAverage = nappeValuesByYear[year];

    const sum = nappeValuesForAverage.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );

    const average = (sum / nappeValuesForAverage.length).toFixed(2);

    percentageByYear[year] = (
      ((profondeurInvertigationYear - average) / profondeurInvertigationYear) *
      100
    ).toFixed(0);
  });

  // CHART

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      labels: {
        font: {
          color: "rgb(255, 0, 0)",
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Evolution du remplissage moyen mensuel de la nappe (%)",
      },
    },
  };

  const labels = years;

  const data = {
    labels,
    datasets: [
      {
        label: "Remplissage (en %)",
        data: percentageByYear,
        backgroundColor: "rgba(132, 211, 252, 1)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar className="chart" options={options} data={data} />
    </div>
  );
}

export default Chartcard;
