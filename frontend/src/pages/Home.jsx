import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Star, Clock, MapPin, Phone, Mail, Send, Sparkles, Coffee, Utensils, Heart } from 'lucide-react';
import pasta from '../assets/pasta.jpg';
import Hero from '../components/Hero';
import Menu from '../components/Menu';

// Initialize EmailJS
emailjs.init("wav-Q52MmI5_-DfLA");

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState({});

  const menuItems = [
    {
      id: 1,
      name: "Cosmic Latte",
      description: "Our signature blend with hints of vanilla and cosmic dust, served with steamed milk art",
      price: "80.50 Birr",
      category: "Signature Drinks",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Nebula Toast",
      description: "Artisanal sourdough with avocado, heirloom tomatoes, and edible flowers",
      price: "140.00 Birr",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Galaxy Bowl",
      description: "Acai bowl topped with fresh berries, granola, and coconut flakes in spiral formation",
      price: "16.50 Birr",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Stardust Pasta",
      description: "House-made linguine with truffle oil, wild mushrooms, and parmesan constellation",
      price: "22.00 Birr",
      category: "Mains",
      image: pasta
    },
    {
      id: 5,
      name: "Cosmic Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone clouds",
      price: "12.00 Birr",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Moonlight Cocktail",
      description: "Gin-based cocktail with elderflower, cucumber, and a touch of shimmer",
      price: "55.00 Birr",
      category: "Cocktails",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop"
    }
  ];

  const scrollToMenu = () => {
    document.getElementById('menu').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_yq2ck0k";
    const templateID = "template_28cuieu";
    emailjs.send(serviceID, templateID, formData)
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent!');

        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send error:', error.text || error);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero onExploreMenu={scrollToMenu} />

      {/* Menu Section */}
      <Menu menuItems={menuItems} isVisible={isVisible} />

      {/* About Section */}
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

      {/* Contact Section */}
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
                    onChange={handleInputChange}
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
    </main>
  );
};

export default Home;
