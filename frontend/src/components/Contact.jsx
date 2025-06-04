import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = ({ isVisible, formData, handleInputChange, handleSubmit }) => (
    <div>
            <section id="contact" className="py-24 px-6" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to embark on a cosmic culinary journey? We would love to hear from you.
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Address</div>
                      <div className="text-slate-400">Ras Mekonen Ave, Addis Ababa</div>
                      <div className="mt-4">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.473668339747!2d38.75300307355536!3d9.011827391048813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c6bdc38425%3A0x762e8c382604d2ac!2sCosmos%20Cafe!5e1!3m2!1sen!2set!4v1748956220386!5m2!1sen!2set" 
                          className="w-full h-64 rounded-lg" 
                          allowfullscreen 
                          loading="lazy" 
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-slate-400">(+251) 123-4567-89</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-pink-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-slate-400">hello@cosmosrestaurant.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Hours</div>
                      <div className="text-slate-400">
                        Mon-Sun: 7AM - 7PM<br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(handleInputChange)}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry, reservation request, or feedback..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

export default Contact
