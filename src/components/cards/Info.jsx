import { MapPin, Timer, Clock } from "lucide-react";

export const Info = ({ title, badge, desc, time, place, start_time, onClick }) => {
  return (
    <div
      className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Event: ${title}. Click for details.`}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400" />
      
      <div className="pl-5 pr-4 py-5">
        {/* Header section */}
        <div className="flex justify-between items-start mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            {badge}
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {desc}
        </p>
        
        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />
        
        {/* Info details */}
        <div className="space-y-3">
          <DetailItem 
            icon={<Clock className="w-4 h-4" />}
            text={time}
            subtext="Duration"
          />
          <DetailItem 
            icon={<MapPin className="w-4 h-4" />}
            text={place}
            subtext="Location"
          />
          <DetailItem 
            icon={<Timer className="w-4 h-4" />}
            text={start_time}
            subtext="Starts at"
          />
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon, text, subtext }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-50 flex items-center justify-center text-gray-600">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-500 mb-0.5">{subtext}</p>
        <p className="font-medium text-gray-900 truncate">{text}</p>
      </div>
    </div>
  );
};