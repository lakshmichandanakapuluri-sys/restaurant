import { ShieldCheck, Smile, Leaf } from 'lucide-react';

export default function FeatureBadges() {
  const features = [
    { name: 'HYGIENE', icon: ShieldCheck,color: 'text-blue-500' },
    { name: 'TASTY', icon: Smile, color: 'text-yellow-500' },
    { name: 'FRESH', icon: Leaf, color: 'text-green-500' },
  ];

  return (
  
      <div className="flex items-center gap-1 px-2 py-0.5 bg-white rounded-full border border-neutral-200 shadow-sm w-fit mx-auto">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex items-center gap-0.5 px-1">
              <IconComponent className={`w-2 h-2 ${feature.color}`} />
              <span className="text-[9px] font-bold text-neutral-600 tracking-wider">
                {feature.name}
              </span>
            </div>
          );
        })
        }
      </div>

  );
}