import { useState, useEffect } from 'react';
import { FaChartLine, FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import axios from 'axios';

export default function Dashboard() {
  const [stats] = useState({
    revenue: '$12,345',
    users: '1,234',
    orders: '567',
    growth: '+23%'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Dashboard loaded');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your overview.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Revenue</p>
                <p className="text-2xl font-bold text-gray-800">{stats.revenue}</p>
              </div>
              <FaDollarSign className="text-4xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Users</p>
                <p className="text-2xl font-bold text-gray-800">{stats.users}</p>
              </div>
              <FaUsers className="text-4xl text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Orders</p>
                <p className="text-2xl font-bold text-gray-800">{stats.orders}</p>
              </div>
              <FaShoppingCart className="text-4xl text-orange-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Growth</p>
                <p className="text-2xl font-bold text-gray-800">{stats.growth}</p>
              </div>
              <FaChartLine className="text-4xl text-purple-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">New user registered</p>
                    <p className="text-gray-500 text-sm">{item} hour ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="text-gray-800 font-semibold">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="text-gray-800 font-semibold">89%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Task Completion</span>
                  <span className="text-gray-800 font-semibold">67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
