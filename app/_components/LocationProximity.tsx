import {
  Plane,
  Train,
  Building2,
  GraduationCap,
  Landmark,
  Hospital,
  ShoppingBag,
  MapPin,
  LucideIcon,
} from "lucide-react";

interface ProximityItem {
  name: string;
  distance: string;
  icon: string;
}

interface LocationProximityProps {
  items: ProximityItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Plane,
  Train,
  Building2,
  GraduationCap,
  Landmark,
  Hospital,
  ShoppingBag,
};

export default function LocationProximity({ items }: LocationProximityProps) {
  return (
    <div className="py-16 md:py-24 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
            <MapPin className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-white">
              Everything <span className="font-medium text-red-400">Within Reach</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">Strategic location with excellent connectivity</p>
          </div>
        </div>

        {/* Proximity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || MapPin;
            return (
              <div key={index} className="group">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="shrink-0 p-2.5 bg-linear-to-br from-red-500/20 to-orange-500/20 rounded-lg group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" strokeWidth={1.5} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-red-100 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <span className="text-red-400 font-semibold text-lg">{item.distance}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-red-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

