import Table from "./components/table/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

const App = () => {
  // Calcular el promedio usando reduce
  const averageIncome =
    netIncomes.reduce((acc, item) => acc + item.income, 0) / netIncomes.length;

  return (
    <div>
      <h1>Ingresos Netos por Compañía</h1>
      <Table data={netIncomes} />
      <p>Promedio de ingreso neto: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;
