🏗️Fullstack Project - Backend + Frontend ==> Next.js + React +  Tailwind CSS - TypeScript + Express + Prisma + PostgreSQL + APIs

---
## ✨ Auteur
**Nom :** Imane Lmzk  
**Email :** imane.lmzk@gmail.com 
**Projet Fullstack** : backend TypeScript + Express + Prisma + PostgreSQL .....
---
LICENSE
https://github.com/%3Cton-username%3E/%3Cnom-du-projet%3E/actions


📌 Description
    Ce dossier contient le backend de mon projet fullstack.
    Technologies utilisées :

**  TypeScript
**  Express.js pour le serveur
**  Prisma ORM pour PostgreSQL
**  PostgreSQL comme base de données
**  Postman pour tester les endpoints

Objectif : apprendre et pratiquer la création d’APIs RESTful robustes avec gestion de la base de données et tests.

🛠️ Prérequis
   - Node.js >= 18
   - PostgreSQL installé et actif
   - npm ou yarn
   - Postman (ou autre outil API)

⚡ Installation
Cloner le projet fullstack si pas déjà fait :

git clone https://github.com/<imanelmzk>/<Backend-Node-Express
>.git
cd <Backend-Node-Express>/backend

    🧪 Installer les dépendances :
         npm install

    🧪 Configurer la base de données :
         Crée une base PostgreSQL (ex: fullstack_db)

    🧪 Copier .env.example en .env et modifier :
         DATABASE_URL="postgresql://user:password@localhost:5432/fullstack_db?schema=public"
    
    🧪 Générer le client Prisma :
        npx prisma generate
        
    🧪 Exécuter les migrations initiales :
        npx prisma migrate dev --name init
***************************************************************       

🚀 Lancer le serveur
    npm run dev

Le serveur tourne sur http://localhost:3000
.
Les routes sont dans /routes, la logique métier dans /controllers.

    📂 Structure du projet
    backend/
    ├─ /config      # Configuration serveur & DB
    ├─ /controllers # Logique métier
    ├─ /routes      # Définition des endpoints
    ├─ /middlewares # Middleware (erreurs, auth, etc.)
    ├─ /prisma      # Client Prisma + migrations
    └─ /utils       # Fonctions utilitaires

***************************************************************

    🧪 Test des endpoints
        ** GET /users → liste des utilisateurs

        ** POST /users → créer un utilisateur

        ** PUT /users/:id → mettre à jour un utilisateur

        ** DELETE /users/:id → supprimer un utilisateur
***************************************************************
    🧪Exemple POST via Postman :
        POST /users
        Content-Type: application/json

            {
            "name": "Imane",
            "email": "imane@example.com"
            }
***************************************************************

    🔧 Commandes utiles
        # Lancer le serveur en mode dev
        npm run dev

        # Compiler TypeScript
        npm run build

        # Exécuter le code compilé
        npm start

        # Vérifier Prisma Client
        npx prisma generate

        # Migration
        npx prisma migrate dev --name <migration_name>

        # Ouvrir Prisma Studio (interface DB)
        npx prisma studio
        📈 Bonnes pratiques

***************************************************************
 - Séparer routes et controllers
 - Toujours typer avec TypeScript
 - Utiliser Prisma Client pour toutes les opérations DB
 - Maintenir un format JSON cohérent pour les réponses

    🤝 Contribution
     - Contributions possibles :

        Améliorer les endpoints
        Ajouter des tests
        Optimiser la structure backend
        Compléter la documentation

***************************************************************       

📄 Licence
Ce projet est sous licence MIT.

***************************************************************
***************************************************************
***************************************************************
***************************************************************

# 📘 React + TypeScript Learning Repository

## 🎯 Purpose

## This repository documents my structured learning journey in **TypeScript** and **React with TypeScript integration**.
It serves as both a practice workspace and a reference base for core and advanced concepts.

---

## 🧠 Learning Objectives

## The goal of this project is to progressively master:

  * Type safety in modern frontend development
  * Scalable component architecture
  * Strong typing patterns used in real-world applications
  * Clean and maintainable code practices

---

## 📂 Project Structure
```
  project-root/
  │
  ├── basics/
  ├── types/
  ├── interfaces/
  ├── enums/
  ├── generics/
  ├── utilities/
  ├── react-components/
  └── experiments/
  ```

Each folder represents a focused concept module.

---

## 📚 Topics Covered

### 1. TypeScript Fundamentals
* Primitive types
* Type inference
* Union & intersection types
* Literal types
* Type aliases

---

### 2. Interfaces
* Interface declaration
* Optional properties
* Readonly properties
* Extending interfaces
* Interface vs Type comparison

---

### 3. Enums
* Numeric enums
* String enums
* Const enums
* When to use enums vs unions

---

### 4. Generics
* Generic functions
* Generic types
* Constraints
* Default generics
* Real-world reusable patterns

---

### 5. Utility Types
Practice and understanding of built-in utilities:
* `Partial<T>`
* `Required<T>`
* `Readonly<T>`
* `Pick<T>`
* `Omit<T>`
* `Record<K,T>`
* `ReturnType<T>`

---

### 6. React + TypeScript Integration
* Typing props
* Typing state
* Functional components with types
* Event typing
* Generic components
* Custom hooks typing
* Component composition patterns

---

## 🧪 Practice Methodology
Each concept is learned through:
1. Concept explanation
2. Minimal example
3. Realistic example
4. Edge case testing
5. Refactoring exercise

---

## 🚀 Progress Strategy
Learning is structured progressively:
```
Fundamentals → Types → Interfaces → Generics → Utilities → React Integration
```

Each stage builds on the previous one to reinforce understanding.

---

## 🧩 Goals of This Repository
* Build strong TypeScript intuition
* Understand professional React typing patterns
* Prepare for real-world projects
* Create reusable typed components
* Develop debugging reflexes

---

## 📈 Future Additions
Planned extensions:
* Advanced generics patterns
* Type-safe API calls
* State management typing
* Form validation typing
* Testing with TypeScript
* Scalable architecture examples

---
## ✨ Author Note
This repository is part of an active learning journey focused on mastering modern frontend engineering with strong typing discipline.

---

**Status:** In Progress 🚧
