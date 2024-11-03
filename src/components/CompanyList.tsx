import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';
import { Company } from '../types';

interface CompanyListProps {
  companies: Company[];
}

const CompanyList = ({ companies }: CompanyListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <div className="h-40 overflow-hidden">
              <img 
                src={company.image} 
                alt={company.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
              <p className="text-gray-600 mb-4">{company.industry}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{company.employees} employees</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Founded {company.founded}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;