const stocksData = [
  {
    companyName: "Microsoft",
    marketCap: "$381.7 B",
    sales: "$26.7 B",
    profit: "$86.8 B",
    employees: "128,000",
  },
  {
    companyName: "Symetra Financial",
    marketCap: "$2.7 B",
    sales: "$978.3 M",
    profit: "$2.2 B",
    employees: "1,400",
  },
  {
    companyName: "Micron Technology",
    marketCap: "$37.6 B",
    sales: "$3.0 B",
    profit: "$16.4 B",
    employees: "30,400",
  },
  {
    companyName: "F5 Networks",
    marketCap: "$9.5 B",
    sales: "$526.3 M",
    profit: "$1.7 B",
    employees: "3,834",
  },
  {
    companyName: "Expedia",
    marketCap: "$10.8 B",
    sales: "$1.0 B",
    profit: "$5.8 B",
    employees: "18,210",
  },
  {
    companyName: "Nautilus",
    marketCap: "$476 M",
    sales: "$31.2 M",
    profit: "$274.4 M",
    employees: "340",
  },
  {
    companyName: "Heritage Financial",
    marketCap: "$531 M",
    sales: "$47.4 M",
    profit: "$137.6 M",
    employees: "748",
  },
  {
    companyName: "Cascade Microtech",
    marketCap: "$239 M",
    sales: "$19.3 M",
    profit: "$136 M",
    employees: "449",
  },
  {
    companyName: "Nike",
    marketCap: "$83.1 B",
    sales: "$2.1 B",
    profit: "$27.8 B",
    employees: "56,500",
  },
  {
    companyName: "Alaska Air Group",
    marketCap: "$7.9 B",
    sales: "$336 M",
    profit: "$5.4 B",
    employees: "13,952",
  },
];

document.getElementById("loadDataBtn").addEventListener("click", function () {
  const tableBody = document.querySelector("#stockTable tbody");
  tableBody.innerHTML = "";

  stocksData.forEach(function (stock) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${stock.companyName}</td>
    <td>${stock.marketCap}</td>
    <td>${stock.sales}</td>
    <td>${stock.profit}</td>
    <td>${stock.employees}</td>
    `;
    tableBody.appendChild(row);
  });
});
