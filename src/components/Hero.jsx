import { useState, useEffect, useRef } from "react";
import { 
  School, 
  Search, 
  Globe, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ChevronRight,
  Users,
  BookOpen,
  X,
  ChevronDown,
  Star
} from "lucide-react";

export const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const statsRef = useRef(null);

  const stats = [
    { value: "10,000+", label: "Master's Programs", icon: <BookOpen className="h-6 w-6" /> },
    { value: "500+", label: "Universities", icon: <School className="h-6 w-6" /> },
    { value: "25,000+", label: "Successful Students", icon: <Users className="h-6 w-6" /> },
  ];

  const featuredPrograms = [
    {
      title: "Computer Science",
      university: "Stanford University",
      country: "USA",
      duration: "2 Years",
      ranking: "🏆 #1",
      match: "100% Match"
    },
    {
      title: "Business Analytics",
      university: "MIT",
      country: "USA",
      duration: "18 Months",
      ranking: "🥈 #2",
      match: "95% Match"
    },
    {
      title: "Data Science",
      university: "University of Oxford",
      country: "UK",
      duration: "2 Years",
      ranking: "🥉 #3",
      match: "92% Match"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          statsRef.current.classList.add('animate-fade-in-up');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-bg to-transparent pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-linear-to-r from-indigo-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-60 h-60 bg-linear-to-r from-cyan-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification Banner */}
        {showNotification && (
          <div className="mb-8 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl p-4 shadow-lg transition-all duration-300 animate-slide-down">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Early Admissions Open!</p>
                  <p className="text-sm text-blue-100">Apply now for Fall 2024 intake</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="/deadlines" className="text-sm font-medium hover:text-white/90 underline">
                  View Deadlines
                </a>
                <button 
                  onClick={() => setShowNotification(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold mb-6 animate-pulse-slow">
                <TrendingUp className="h-4 w-4" />
                <span>Trusted by 50,000+ Students Worldwide</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Find Your Perfect</span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Master's Program
                  </span>
                  <div className="absolute bottom-2 left-0 w-0 h-3 bg-linear-to-r from-blue-200 to-purple-200 rounded-full animate-expand-width animation-delay-500"></div>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover personalized Master's programs from top global universities. 
                Get matched with opportunities that align with your career goals.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-6 w-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search programs by field, university, or country..."
                  className="w-full pl-14 pr-40 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none shadow-lg transition-all"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl group">
                  Search
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
                <span className="text-sm text-gray-500">Popular searches:</span>
                {["Computer Science", "Business Analytics", "Data Science", "Engineering", "Finance"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4" ref={statsRef}>
              {[
                { icon: <Award className="h-5 w-5" />, text: "100% Verified Programs", color: "text-green-600" },
                { icon: <Globe className="h-5 w-5" />, text: "50+ Countries", color: "text-blue-600" },
                { icon: <CheckCircle className="h-5 w-5" />, text: "Free Application", color: "text-purple-600" },
                { icon: <Users className="h-5 w-5" />, text: "Expert Guidance", color: "text-orange-600" },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 hover:translate-x-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2 rounded-lg ${feature.color.replace('text-', 'bg-')}/10`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-gray-800 font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-3.5 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                <span>Explore Programs</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-3.5 bg-white text-gray-800 font-semibold border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:text-blue-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-float-slow">
                {/* Header */}
                <div className="p-6 bg-linear-to-r from-blue-600 to-purple-600 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <School className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Top Programs 2024</h3>
                        <p className="text-white/80 text-sm">Handpicked for Excellence</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      🏆 Ranked
                    </div>
                  </div>
                </div>

                {/* Program Cards Carousel */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-blue-500 to-purple-500 w-1/3"></div>
                      </div>
                      <span className="text-sm text-gray-500">1 of 3</span>
                    </div>
                    
                    {featuredPrograms.map((program, index) => (
                      <div key={index} className={`mb-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                        index === 0 ? 'border-blue-200 bg-blue-50' : 'border-gray-100 hover:border-blue-100'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">MS</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{program.title}</h4>
                              <p className="text-gray-600">{program.university}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="flex items-center gap-1 text-sm text-gray-500">
                                  <Globe className="h-4 w-4" /> {program.country}
                                </span>
                                <span className="flex items-center gap-1 text-sm text-gray-500">
                                  ⏱️ {program.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-blue-600 mb-1">{program.ranking}</div>
                            <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                              <CheckCircle className="h-3 w-3" />
                              {program.match}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button className="flex-1 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm">
                            View Details
                          </button>
                          <button className="px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm">
                            Save
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 cursor-pointer hover:shadow-md ${
                          index === currentStat 
                            ? 'bg-linear-to-br from-blue-50 to-purple-50 border border-blue-100 transform scale-105' 
                            : 'bg-gray-50 hover:bg-white'
                        }`}
                        onClick={() => setCurrentStat(index)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`p-1.5 rounded-lg transition-colors ${
                            index === currentStat 
                              ? 'bg-linear-to-r from-blue-100 to-purple-100 text-blue-600' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {stat.icon}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Indicator */}
                  <div className="flex justify-center gap-2 mb-6">
                    {stats.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStat(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStat 
                            ? 'bg-linear-to-r from-blue-500 to-purple-500 w-6' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Notification 1 */}
                <div className="absolute -top-6 left-10 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-linear-to-r from-green-100 to-emerald-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">100% Match</div>
                      <div className="text-sm text-gray-600">Based on profile</div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification 2 */}
                <div className="absolute -bottom-6 right-10 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 animate-bounce-slower animation-delay-1000">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-linear-to-r from-orange-100 to-amber-100 rounded-lg">
                      <Star className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Scholarship</div>
                      <div className="text-sm text-gray-600">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Logos */}
        <div className="mt-20 pt-8 border-t border-gray-200/50 animate-fade-in-up animation-delay-700">
          <p className="text-center text-gray-500 mb-8 font-medium">Trusted by students from leading universities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Stanford", "MIT", "Harvard", "Oxford", "Cambridge", "ETH Zurich"].map((uni, index) => (
              <div 
                key={uni} 
                className="text-xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes bounceSlower {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-expand-width {
          animation: expandWidth 0.8s ease-out 0.5s forwards;
        }
        
        .animate-float-slow {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slower {
          animation: bounceSlower 4s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};