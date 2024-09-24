# 🌟 Blog Management System

Welcome to the **Blog Management System** – a sophisticated platform designed to offer a seamless blogging experience with state-of-the-art features such as authentication, role-based access control, and real-time analytics. Crafted meticulously using **React** and **TypeScript**, and powered by **MockAPI** for the backend, this application delivers performance, elegance, and functionality.

🌐 **Live Demo**: [Access the Application](https://blog-app-huyit.vercel.app/)

## ✨ Screenshots

- **Home Page**  
  ![Home Page](https://firebasestorage.googleapis.com/v0/b/gallary-e49ab.appspot.com/o/blog-app%2Fhome.png?alt=media&token=adcb7bf8-4f9d-4a7b-9236-12dcd9cbc1b9)

- **Blogs Section**  
  ![Blogs](https://firebasestorage.googleapis.com/v0/b/gallary-e49ab.appspot.com/o/blog-app%2Fblogs.png?alt=media&token=c8091b7b-697d-43cb-95a2-cc4c98e83815)

- **Login Page**  
  ![Login Page](https://firebasestorage.googleapis.com/v0/b/gallary-e49ab.appspot.com/o/blog-app%2Flogin.png?alt=media&token=7671f1a2-d969-4ff4-a3a5-8f55ee51b46b)

- **Admin Dashboard**  
  ![Dashboard](https://firebasestorage.googleapis.com/v0/b/gallary-e49ab.appspot.com/o/blog-app%2Fdashboard.png?alt=media&token=b0080574-8685-453c-a9d5-53bdae6a07f9)

---

## 🚀 Key Features

### 🔐 Authentication & Authorization
- **Login/Logout**: Enjoy a smooth, secure authentication process.
- **Role-Based Access Control**: Manage access with roles such as `Admin`, `Editor`, and `Viewer`, ensuring the right people have access to the right tools.

### 🔎 Advanced Search
- **Search Blogs**: Easily search for blog posts using titles, content, or author names.
- **Search Users**: Quickly find users by name or email.

### 🛎 Notifications
- **Email Alerts**: Automatically sent upon new blog posts or comments.
- **In-App Notifications**: Stay informed with in-app alerts for new activities.

### 📊 Analytics Dashboard
- **User Activity**: Monitor user engagement with detailed statistics on posts and comments.
- **Blog Performance**: Track blog popularity with insights on views, likes, and comments.

---

## 🗃 Database Design (MockAPI)

### Users Object
- **id**: `string` - Unique User ID.
- **username**: `string` - User's display name.
- **email**: `string` - User's email address.
- **password**: `string` - Encrypted user password.
- **role**: `string` - Role (admin, editor, viewer).
- **userCreatedAt**: `string` - Timestamp of user creation.
- **userUpdatedAt**: `string` - Timestamp of last user update.
- **userImage**: `string` - URL to user's avatar.

#### Users API:
[MockAPI - Users](https://66f187c4415379191551492f.mockapi.io/users)

### Blogs Object
- **id**: `string` - Unique Blog ID.
- **title**: `string` - Blog title.
- **content**: `string` - Main blog content.
- **userId**: `string` - User ID (foreign key referencing Users).
- **blogCreatedAt**: `string` - Timestamp of blog creation.
- **blogUpdatedAt**: `string` - Timestamp of last blog update.
- **blogImage**: `string` - URL to blog's feature image.

#### Blogs API:
[MockAPI - Blogs](https://66f187c4415379191551492f.mockapi.io/blogs)

---

## 🛠 Key Components

### Authentication Service
Handles secure user login, registration, and session management.

### API Service
Effortless communication with MockAPI via **Axios**. Integrates seamlessly with backend services.

### User Management
A stylish admin page for managing user data, roles, and more.

### Blog Management
Sophisticated interfaces for managing blog posts with features for creation, editing, and deletion.

### Dashboard
A visually captivating admin dashboard showcasing insightful user activity and blog performance metrics.

### Blog List
Component responsible for fetching and displaying a refined list of blog posts.

### Blog Form
User-friendly form for creating or editing blogs.

### Notification Center
Elegant notification lists and individual items for a delightful user experience.

### Search Bar
Seamlessly integrated search bar for quickly finding blogs or users.

---

## 📦 Getting Started

### Prerequisites
- **Node.js**
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/server-craftsman/blog-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd blog-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

2. Open your browser and go to `http://localhost:3000` to see the application in action.

---

## 👑 Admin Account

For testing as an admin user, you can use these credentials:

- **Email**: `huyit2003@gmail.com`
- **Password**: `1`

---

## 🎯 Contributing

We welcome contributions to this project! If you have any suggestions or improvements, please open an issue or submit a pull request.

---

### 💻 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: MockAPI
- **Deployment**: Vercel

---

### 🛡 License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects!

--- 
Copyright © 2024 Server Craftsman. All rights reserved.