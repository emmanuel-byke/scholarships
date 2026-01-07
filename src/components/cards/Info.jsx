import { MapPin, Timer, Clock, ChevronRight } from "lucide-react";

export const Info = ({ title, badge, desc, time, place, start_time, url }) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div
      className="group relative bg-bg rounded-tr-4xl border border-border overflow-hidden shadow-xs hover:shadow-md 
        hover:border-accent transition-all duration-500 cursor-pointer shadow-muted
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 w-sm"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Event: ${title}. Click for details.`}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-accent to-transparent group-hover:to-accent 
        transition-colors duration-3000" />
      
      <div className="pl-5 pr-4 py-5">
        {/* Header section */}
        <div className="flex justify-between items-start mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent text-text border border-border">
            {badge}
          </span>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 size-8 text-accent" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold font-poppins text-text/70 mb-3 group-hover:text-text 
          transition-colors duration-500 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {desc}
        </p>
        
        {/* Divider */}
        <div className="border-t border-border/80 my-4" />
        
        {/* Info details */}
        <div className="space-y-3">
          <DetailItem 
            icon={<Clock className="w-4 h-4" />}
            text={time}
            subtext="Application Period"
          />
          <DetailItem 
            icon={<MapPin className="w-4 h-4" />}
            text={place}
            subtext="Location"
          />
          <DetailItem 
            icon={<Timer className="w-4 h-4" />}
            text={start_time}
            subtext="Classes starts at"
          />
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon, text, subtext }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0 w-8 h-8 rounded-md bg-accent/30 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-accent mb-0.5 font-poppins">{subtext}</p>
        <p className="font-medium text-muted truncate">{text}</p>
      </div>
    </div>
  );
};