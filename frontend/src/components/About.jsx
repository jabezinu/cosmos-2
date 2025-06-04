import { Heart, Clock, Sparkles } from 'lucide-react';
const About = ({isVisible}) => (
    <div>
            <section id="about" className="py-24 px-6 bg-slate-800/30" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-6">
                  Our Cosmic Story
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-300">Cosmos</strong> started with a dream to be more than just a place to eat.
                  It shows our love for great food and a special, space-like feeling that makes you imagine and wonder.
                </p>
                <p>
                  Award-winning chef Nahom Kiflu opened our restaurant in 2020.
                  He brought together new ways of cooking with amazing building design. This makes an experience that uses all your senses.
                </p>
                <p>
                  We get all our food from local makers and farms that care about the environment. Our kitchen team
                  then turns these foods into dishes that look amazing and taste incredibly good.
                </p>
              </div>
              
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">4.9</div>
                  <div className="text-slate-400 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">1000+</div>
                  <div className="text-slate-400 text-sm">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-300 mb-2">3</div>
                  <div className="text-slate-400 text-sm">Awards</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <Heart className="w-8 h-8 text-pink-400" />
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    To create unforgettable moments through exceptional cuisine, innovative presentation, 
                    and an atmosphere that transports our guests to a realm where taste and imagination collide.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                      <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-sm text-slate-300">Fresh Daily</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                      <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-slate-300">Artistic Plating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default About
