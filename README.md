# abu-pick-4-me-ai-campus-concierge
# 🍽️ ABU PICK 4 ME

<div align="center">

### AI Campus Food Concierge Powered by Google Gemma 4

*Helping university students eliminate decision fatigue through intelligent, offline AI-powered food recommendations.*

Built for **Google Developer Groups (GDG) on Campus ABU** — **Build with Gemma Hackathon 2026**

---

![Gemma](https://img.shields.io/badge/Google-Gemma%204-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)
![Platform](https://img.shields.io/badge/Platform-Web-orange)

</div>

---

# 📖 Overview

ABU PICK 4 ME is an AI-powered Campus Food Concierge designed to help university students quickly discover meals, trusted vendors, and budget-friendly food recommendations without wasting time deciding what to eat.

The application uses **Google Gemma 4** as its intelligent reasoning engine, allowing students to receive personalized recommendations based on:

- Budget
- Time of day
- Location
- Food preferences
- Campus context
- Dietary needs
- Meal purpose (breakfast, lunch, dinner, events)

Unlike traditional food ordering platforms, ABU PICK 4 ME focuses on solving **decision fatigue**, a common problem among students.

---

# ❗ Problem Statement

Every day, thousands of university students spend valuable time asking questions like:

- What should I eat today?
- Which vendor is trustworthy?
- Can I afford this meal?
- What is the closest food vendor?
- What should I eat before an exam?

Many students eventually:

- Skip meals
- Waste time
- Overspend
- Eat unhealthy meals
- Experience decision fatigue

ABU PICK 4 ME solves this using AI.

---

# 💡 Solution

ABU PICK 4 ME is an intelligent campus dining assistant that understands each student's context and recommends meals tailored specifically for them.

Students simply describe their situation, and the AI generates recommendations instantly.

Example:

> "I only have ₦1,500 and I have an exam in one hour."

Gemma responds with:

- Recommended meal
- Trusted vendor
- Estimated cost
- Walking distance
- Nutritional suggestion
- Reason for recommendation

---

# ✨ Features

## 🤖 AI Meal Recommendation

Receive personalized meal suggestions based on:

- Budget
- Preferences
- Time
- Hunger level
- Nutrition

---

## 🏪 Vendor Discovery

Find trusted campus food vendors with AI-assisted recommendations.

---

## 💰 Budget Planner

Plan meals based on available spending.

---

## 🎉 Occasion Planner

Get food recommendations for:

- Birthdays
- Group meetings
- Department events
- Study groups
- Hangouts

---

## 👨‍🍳 Chef François

Meet our AI Campus Food Concierge.

Chef François provides:

- Food recommendations
- Vendor suggestions
- Nutrition advice
- Campus food guidance
- Friendly conversations

---

## ❤️ Healthy Eating Assistant

Receive healthier alternatives based on your goals.

---

## 📍 Campus-aware Recommendations

Suggest vendors closest to the student's current location.

---

## 🌐 Offline AI

Powered locally by Google Gemma 4.

The application is designed to work even with limited or no internet connectivity.

---

# 🧠 Why Google Gemma 4?

Google Gemma 4 provides lightweight, efficient local AI inference suitable for offline campus applications.

Gemma powers:

- Natural conversations
- Intelligent reasoning
- Personalized recommendations
- Context understanding
- Campus assistance

---

# 🏗️ System Architecture

```
Student

↓

Frontend (React)

↓

Backend (Express.js)

↓

Gemma 4 via Ollama

↓

Recommendation Engine

↓

SQLite Database

↓

Vendor & Meal Database
```

---

# 🛠 Technology Stack

## Frontend

- React
- TailwindCSS
- Vite

## Backend

- Node.js
- Express.js

## Artificial Intelligence

- Google Gemma 4
- Ollama

## Database

- SQLite

## Authentication

- Google OAuth

---

# 📂 Project Structure

```
ABU-PICK-4-ME/

├── frontend/
├── backend/
├── ai/
├── database/
├── docs/
├── assets/
├── public/
├── scripts/
├── tests/
├── README.md
├── LICENSE
└── .env.example
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/haddir/abu-pick-4-me-ai-campus-concierge.git
```

Move into the project

```bash
cd ABU-PICK-4-ME
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# 🤖 Running Gemma 4 Locally

Install Ollama

```bash
ollama pull gemma3:4b
```

Start Ollama

```bash
ollama serve
```

Start backend

```bash
npm run server
```

---

# 📸 Screenshots

Coming Soon

- Landing Page
- Dashboard
- AI Chat
- Vendor Discovery
- Budget Planner

---

# 📹 Demonstration

A complete demonstration video showing:

- AI conversation
- Meal recommendation
- Vendor recommendation
- Gemma integration
- Offline execution

will be included after project completion.

---

# 📚 Documentation

Additional documentation can be found inside the **docs/** folder.

Including:

- Installation Guide
- API Documentation
- System Architecture
- User Guide
- Gemma Integration
- Deployment Guide
- Future Roadmap

---

# 🎯 Hackathon Track

This project is submitted under:

## Gemma for Civic & Campus Life

---

# 🌍 Future Roadmap

- Voice Assistant
- Hausa Language Support
- Nutrition Tracking
- Food Delivery Integration
- Multi-campus Support
- Event Catering
- AI Meal Scheduling
- Smart Notifications
- Referral Rewards

---

# 👥 Team

Team Name:

**(Add Team Name Here)**

Members:

- Suleiman Haddir Mohammed 
- IsahAbubakarEgya 
- Ibrahim Zugo 
- Hayatullahi Imam Lawal
- Anisah Muhammad Mustapha 

---

# 🤝 Contributing

Contributions are welcome.

Please create a feature branch before opening a Pull Request.

---


<div align="center">

### Built with ❤️ using Google Gemma 4

**Helping students decide what to eat, one recommendation at a time.**

</div>