import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Settings, 
  Plus, 
  LogOut, 
  Clock, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Calendar,
  DollarSign,
  BarChart3,
  Edit3,
  Save,
  X,
  Cloud,
  Sync
} from 'lucide-react';

const D5GovernanceApp = () => {
  // Ana state'ler
  const [currentUser, setCurrentUser] = useState({ 
    id: 1, 
    name: 'Admin Kullanıcı', 
    role: 'admin', 
    email: 'admin@d5.gov' 
  });
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin Kullanıcı', role: 'admin', email: 'admin@d5.gov' },
    { id: 2, name: 'Sarah Katkıcı', role: 'contributor', email: 'sarah@d5.gov' },
    { id: 3, name: 'Mike Yönetici', role: 'admin', email: 'mike@d5.gov' }
  ]);

  const [contributions, setContributions] = useState([
    {
      id: 1,
      userId: 2,
      description: 'Yeni üyeler için kapsamlı onboarding dokümantasyonu oluşturdum',
      category: 'content',
      subcategory: 'Preparing guides, tutorials, or onboarding docs',
      difficulty: 7,
      proposedImpact: 85,
      impactRatings: [
        { userId: 1, rating: 80, timestamp: '2025-06-08T10:30:00Z' }
      ],
      timestamp: '2025-06-07T09:00:00Z',
      status: 'active'
    }
  ]);

  const [monthlyBudget, setMonthlyBudget] = useState({
    expenditure: 10000,
    completionPercentage: 100,
    month: 'Haziran 2025'
  });

  const [currentPage, setCurrentPage] = useState('dashboard');

  // Kategoriler
  const categories = {
    community: { name: 'Topluluk', percentage: 20 },
    content: { name: 'İçerik', percentage: 25 },
    marketing: { name: 'Pazarlama', percentage: 20 },
    product: { name: 'Ürün', percentage: 25 },
    outreach: { name: 'Erişim', percentage: 7 },
    governance: { name: 'Yönetişim', percentage: 3 }
  };

  // Dashboard bileşeni
  const Dashboard = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Toplam Bütçe</p>
                <p className="text-2xl font-bold">${monthlyBudget.expenditure.toLocaleString()}</p>
                <p className="text-sm text-blue-100">{monthlyBudget.month}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Katkılarım</p>
                <p className="text-2xl font-bold">{contributions.filter(c => c.userId === currentUser.id).length}</p>
                <p className="text-sm text-green-100">Bu ay</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Bekleyen Değerlendirmeler</p>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-orange-100">Değerlendirmenizi bekliyor</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Son Katkılar</h3>
          <div className="space-y-4">
            {contributions.map(contribution => (
              <div key={contribution.id} className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-900">{contribution.description}</h4>
                <p className="text-sm text-gray-600">
                  {users.find(u => u.id === contribution.userId)?.name} • 
                  {categories[contribution.category]?.name} • 
                  Zorluk: {contribution.difficulty}/10
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Ana render
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">D5 Governance</h1>
            </div>
            
            <nav className="flex space-x-4">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'dashboard' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Dashboard
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {currentUser.name} ({currentUser.role})
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Ana İçerik */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard />
      </main>
    </div>
  );
};

export default D5GovernanceApp;
