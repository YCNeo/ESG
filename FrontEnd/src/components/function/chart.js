import { XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';
import { PieChart, Pie } from 'recharts';

function mergeData(projectData, type) {
  const merged = projectData.reduce((acc, item) => {
    const currentDate = new Date(item.date);

    const modifiedItem = {
      ...item,
      amount: item.amount * item.unit * item.current_factor
    };

    const key = type !== 'date'
      ? item[type]
      : `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

    if (!acc[key]) {
      acc[key] = { ...modifiedItem, [type]: key };
    } else {
      for (const prop in modifiedItem) {
        if (prop !== type && typeof modifiedItem[prop] === 'number') {
          acc[key][prop] = (acc[key][prop] || 0) + modifiedItem[prop];
        }
      }
    }
    return acc;
  }, {});
  return Object.values(merged);
}

export const linechart = (projectData) => {
  const xaxis = "date";
  const yaxis = "amount";
  const mergedData = mergeData(projectData, "date");
  return (
    <LineChart width={600} height={300} data={mergedData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey={`${yaxis}`} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey={`${xaxis}`} />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export const barchart = (projectData) => {
  const xaxis = "PN_name";
  const yaxis = "amount";
  const mergedData = mergeData(projectData, "PN_name");
  return (
    <BarChart width={500} height={300} data={mergedData} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={`${xaxis}`} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={`${yaxis}`} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
  );
}

export const piechart = (projectData) => {
  const mergedData = mergeData(projectData, "Pname");

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const currentData = payload[0].payload;
      return (
        <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: "5px" }}>
          <p>{`${currentData.Pname}`}</p>
          <p>{`Amount: ${currentData.amount}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="amount" data={mergedData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
}