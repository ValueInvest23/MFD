
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";

const dataSets = {
  "6": [
    { month: "Jan", income: 100000 },
    { month: "Feb", income: 120000 },
    { month: "Mar", income: 90000 },
    { month: "Apr", income: 150000 },
    { month: "May", income: 110000 },
    { month: "Jun", income: 130000 },
  ],
  "12": Array.from({ length: 12 }, (_, i) => ({ month: `M${i + 1}`, income: Math.floor(Math.random() * 100000 + 100000) })),
  "24": Array.from({ length: 24 }, (_, i) => ({ month: `M${i + 1}`, income: Math.floor(Math.random() * 100000 + 100000) })),
};

const investmentData = [
  { name: "Equity", value: 400 },
  { name: "Debt", value: 300 },
  { name: "Gold", value: 200 },
  { name: "Real Estate", value: 100 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

const topClients = [
  { name: "Alice Johnson", income: 150000, gain: true, pan: "ABCDE1234F" },
  { name: "Bob Smith", income: 125000, gain: false, pan: "FGHIJ5678K" },
  { name: "Charlie Lee", income: 175000, gain: true, pan: "KLMNO9012P" },
  { name: "Diana Prince", income: 95000, gain: false, pan: "QRSTU3456V" },
  { name: "Edward Stark", income: 200000, gain: true, pan: "WXYZA7890B" },
  { name: "Fiona Green", income: 110000, gain: true, pan: "CDEFG1234H" },
  { name: "George White", income: 105000, gain: false, pan: "HIJKL5678M" },
  { name: "Hannah Brown", income: 98000, gain: true, pan: "NOPQR9012S" },
  { name: "Ian Black", income: 87000, gain: false, pan: "TUVWX3456Z" },
  { name: "Jane Doe", income: 132000, gain: true, pan: "YZABC7890D" },
];

const topCompanies = [
  { name: "TechNova", color: "bg-blue-500" },
  { name: "FinCore", color: "bg-green-500" },
  { name: "GreenBank", color: "bg-yellow-500" },
  { name: "TrustLine", color: "bg-purple-500" },
  { name: "SafeInvest", color: "bg-red-500" },
];

export default function Dashboard() {
  const [selectedRange, setSelectedRange] = useState("6");

  return (
    <div className="space-y-6 p-4 bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">
      <div className="flex flex-wrap justify-between gap-4 animate-fade-in">
        {["AUM Income", "Total Income", "Budget", "Income"].map((title, i) => (
          <div key={i} className="flex-1 min-w-[200px] bg-gray-800 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-1">
                <Sparkles className="text-blue-400" size={20} /> {title}
              </h2>
              <span className="text-2xl font-bold text-blue-400">₹{(100000 + i * 50000).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="w-full lg:w-[100%] bg-gray-800 rounded-2xl shadow-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Income Graph</h2>
            <div className="space-x-2">
              {["6", "12", "24"].map((val) => (
                <button
                  key={val}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedRange === val ? "bg-blue-600 text-white shadow-lg" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedRange(val)}
                >
                  Last {val} Months
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataSets[selectedRange]}>
              <XAxis dataKey="month" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#1e293b', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>g

        <div className="w-full lg:w-[100%] bg-gray-800 rounded-2xl shadow-xl p-4">
          <h2 className="text-xl font-semibold mb-4">Top 10 Clients</h2>
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">PAN</th>
                <th className="px-4 py-2">Income</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {topClients.map((client, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-4 py-2 font-medium text-white">{client.name}</td>
                  <td className="px-4 py-2">{client.pan}</td>
                  <td className="px-4 py-2">₹{client.income.toLocaleString()}</td>
                  <td className={`px-4 py-2 ${client.gain ? 'text-green-400' : 'text-red-400'}`}>{client.gain ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Client Investment Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={investmentData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {investmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Top 5 Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {topCompanies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-700 rounded-xl p-4 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <div className={`h-12 w-12 rounded-full ${company.color} flex items-center justify-center text-white text-lg font-bold mb-2`}>
                {company.name.charAt(0)}
              </div>
              <p className="text-center text-sm font-medium text-gray-200">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}





