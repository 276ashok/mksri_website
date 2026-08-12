import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon prop
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      {icon && <div className="text-brand-primary">{icon}</div>}
      <div>
        <h3 className="text-xl font-semibold text-brand-dark">{title}</h3>
        <p className="text-brand-gray">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
