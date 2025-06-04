import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import pasta from '../assets/pasta.jpg';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Contact from '../components/Contact';

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
      <About isVisible={isVisible} />

      {/* Contact Section */}
      <Contact isVisible={isVisible} formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Home;
