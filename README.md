---

![Screenshot 2024-09-24 202905](https://github.com/user-attachments/assets/5133e7de-a822-40b9-b2c3-6d57bdf4e823)


# 🏢 Full Stack Job Portal Web Application

This is a full-featured job portal web application built as part of my internship at **Zidio Development**. It allows users to search and apply for jobs, companies to post jobs, and includes an admin dashboard for managing jobs and applicants.

## 🚀 Features

- 🔐 **User Authentication**: Secure login/signup with hashed passwords using JWT.
- 🏢 **Company Job Posting**: Companies can post jobs and manage applications.
- 📂 **File Upload**: Upload resumes and profile pictures with Cloudinary & Multer.
- 🔎 **Job Filtering**: Advanced job search and filtering by categories and location.
- ⚙️ **Admin Dashboard**: Manage job posts, view applicants, and update application statuses.
- 🔄 **State Management**: Handled using Redux Toolkit for seamless data flow.

## 🛠️ Tech Stack

- **Frontend**: 
  - React.js (Vite)
  - ShadCN UI
  - Redux Toolkit for state management
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **File Storage**: 
  - Cloudinary & Multer for file uploads
- **Authentication**: 
  - JWT with hashed passwords

## 🎯 Key Functionalities

1. **User Authentication**: Secure user login and signup system using hashed passwords and JSON Web Tokens.
2. **Job Search & Apply**: Users can browse and filter jobs based on location and category, and apply directly from the job page.
3. **Company Management**: Employers can post jobs, manage applications, and update job listings.
4. **Admin Dashboard**: Admins can monitor all job listings, view applicants, and update application statuses.
5. **Resume Upload**: Users can upload resumes (PDF) using Cloudinary and Multer.

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-portal.git
   ```

2. Install dependencies:
   ```bash
   cd job-portal
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file and configure the following variables:
     ```
     MONGO_URI=your_mongo_db_uri
     CLOUDINARY_CLOUD_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     JWT_SECRET=your_jwt_secret
     ```

4. Run the application:
   ```bash
   npm start
   ```

## 🤝 Contributions

Feel free to contribute to this project! Open issues or submit PRs to enhance the functionality.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by Nithin Pasula

---
