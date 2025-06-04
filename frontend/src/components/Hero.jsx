import { Sparkles, Coffee } from 'lucide-react';

const Hero = ({ onExploreMenu }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30"></div>
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <div className="space-y-8">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Sparkles className="w-16 h-16 text-cyan-300 animate-pulse" />
            <div className="absolute inset-0 bg-cyan-300/20 blur-xl rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-tight">
          Welcome to<br />
          <span className="transition-transform duration-500">
            Cosmos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Welcome to Cosmos Café & Restaurant! Enjoy tasty food and friendly service in a warm, welcoming place under the stars.
         <em className="text-cyan-300">out of this world</em>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <button onClick={onExploreMenu} className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10 flex items-center space-x-2">
              <Coffee className="w-5 h-5" />
              <span >Explore Menu</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </div>

    <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
    <div className="absolute top-1/3 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50"></div>
  </section>
);

export default Hero;