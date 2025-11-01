'use client';

import React, { useState } from 'react';
import { Gamepad2, Users, Shield, Sparkles, Trophy, Zap, Play, Download, Mail, Star } from 'lucide-react';

const categories = {
  'All Games': [
    { name: 'Ocho', emoji: '🎴' },
    { name: 'Pool', emoji: '🎱' },
    { name: 'Chess', emoji: '♟️' },
    { name: 'Werewolf', emoji: '🐺' },
    { name: 'Poker', emoji: '🃏' },
    { name: 'Table Soccer', emoji: '⚽' },
    { name: 'Bowling', emoji: '🎳' },
    { name: 'Minigolf', emoji: '⛳' },
    { name: 'Darts', emoji: '🎯' },
    { name: 'Paintball', emoji: '🔫' },
    { name: 'Draw Together', emoji: '🎨' },
    { name: 'Word Racing', emoji: '📝' },
  ],
  'Card Games': [
    { name: 'Ocho', emoji: '🎴' },
    { name: 'Poker', emoji: '🃏' },
    { name: 'Spades', emoji: '♠️' },
    { name: 'Hearts', emoji: '♥️' },
  ],
  'Strategy': [
    { name: 'Chess', emoji: '♟️' },
    { name: 'Checkers', emoji: '⚫' },
    { name: 'Dots & Boxes', emoji: '📦' },
    { name: 'Battleship', emoji: '🚢' },
  ],
  'Sports': [
    { name: 'Pool', emoji: '🎱' },
    { name: 'Table Soccer', emoji: '⚽' },
    { name: 'Bowling', emoji: '🎳' },
    { name: 'Minigolf', emoji: '⛳' },
  ],
  'Party Games': [
    { name: 'Werewolf', emoji: '🐺' },
    { name: 'Draw Together', emoji: '🎨' },
    { name: 'Paintball', emoji: '🔫' },
    { name: 'Word Racing', emoji: '📝' },
  ],
};

// GameZone Logo Component
const GameZoneLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 rotate-6 transform hover:rotate-12 transition-transform duration-300">
        <Gamepad2 className="w-7 h-7 text-white -rotate-6" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
    </div>
    <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      GameZone
    </span>
  </div>
);

export default function GameZonePlatform() {
  const [selectedCategory, setSelectedCategory] = useState('All Games');

  const features = [
    { 
      icon: <Gamepad2 className="w-12 h-12" />, 
      title: '50+ Multiplayer Games', 
      desc: 'Ocho, Pool, Chess, Werewolf & more!' 
    },
    { 
      icon: <Zap className="w-12 h-12" />, 
      title: '100% Ad-Free', 
      desc: 'Pure fun. No interruptions.' 
    },
    { 
      icon: <Sparkles className="w-12 h-12" />, 
      title: 'Personalize Everything', 
      desc: 'Themes, avatars, chat styles.' 
    },
    { 
      icon: <Users className="w-12 h-12" />, 
      title: 'Chat with Friends', 
      desc: 'Voice, text, group rooms.' 
    },
    { 
      icon: <Trophy className="w-12 h-12" />, 
      title: 'Leaderboards', 
      desc: 'Compete & climb ranks.' 
    },
    { 
      icon: <Shield className="w-12 h-12" />, 
      title: 'Privacy First', 
      desc: 'Your data stays yours.' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10">
        {/* Navigation Bar with Logo */}
        <nav className="px-4 sm:px-6 lg:px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <GameZoneLogo />
            <div className="flex items-center gap-4">
              <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
                Sign In
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
            <header className="relative px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-screen flex items-center">
          {/* Background Image with Overlay - extends behind navbar */}
          <div className="absolute inset-0 z-0" style={{ top: '-100px', bottom: '0', left: '0', right: '0' }}>
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80" 
              alt="Gaming Background" 
              className="w-full h-screen object-cover opacity-30 fixed top-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-purple-300">
              <Star className="w-4 h-4" />
              <span>Trusted by millions of gamers</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Welcome to
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">GameZone</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
              Where gaming meets chatting in the most epic way possible. Play online with over 50 amazing multiplayer team games.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 pt-4">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download GameZone
              </button>
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Trailer
              </button>
            </div>
          </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why You'll Love GameZone
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-purple-400 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Explore 50+ Games
            </span>
          </h2>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                    : 'bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 border border-white/10 hover:border-purple-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Game Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto">
            {categories[selectedCategory as keyof typeof categories].map((game, idx) => (
              <div
                key={game.name}
                className="group relative p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl text-center cursor-pointer hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {game.emoji}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {game.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Join Millions of Players
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 px-4">
              Download GameZone now and start playing with friends!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-slate-100 text-black rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                App Store
              </button>
              <button className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-slate-100 text-black rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Google Play
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center text-xs sm:text-sm text-slate-500 border-t border-white/10">
          <div className="space-y-4">
            <GameZoneLogo className="justify-center" />
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>Have a question? Email us at</span>
              <a href="mailto:hello@gamezoneapp.com" className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1">
                <Mail className="w-4 h-4" />
                hello@gamezoneapp.com
              </a>
            </p>
            <p className="text-slate-600">
              Version 5.8.2 | Updated on 24 Oct 2025 | © GameZone Team Inc.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}