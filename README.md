# Learn Lingo App

This project is a language learning application that demonstrates the skills in developing a full-stack application. Users can register, search for teachers that best suit their needs, book lessons, and add teachers to their favorites list.

![Learn Lingo App Preview](./src/assets/learn-lingo-preview.jpg)

---

### Features

- **User Registration and Authentication**: Users can register and authenticate using their email and password, as well as through Google.
- **Teacher Search and Filtering**: Users can search and filter teachers based on various criteria.
- **Favorite Teachers**: Users can add teachers to their favorites list for quick access.
- **Lesson Booking**: Users can book lessons with teachers.
- **Responsive Design**: The app is optimized for both desktop and mobile devices.

### Technology Stack

- **Frontend**:

  - **React**: JavaScript library for building user interfaces.
  - **React Router**: For routing and navigation.
  - **Styled Components**: For styling React components.
  - **Framer Motion**: For animations.

- **Backend**:

  - **Firebase**: Used for authentication (including Google authentication), database, and storage.

- **Form Handling**:

  - **React Hook Form**: For managing form state.
  - **Yup**: For form validation.

- **Build Tool**:
  - **Vite**: For fast development and build setup.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yurii-corssa/language-learning-app.git
   cd language-learning-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Build for production:
   ```sh
   npm run build
   ```

### Usage

1. **Register/Login**: Create an account or log in with existing credentials or via Google.
2. **Search Teachers**: Use the search and filter options to find teachers that meet your criteria.
3. **Book Lessons**: Select available times and book lessons with your preferred teachers.
4. **Manage Favorites**: Add or remove teachers from your favorites list for easy access.

### Additional Resources

- [Technical Specification](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit): Detailed project requirements and implementation details.
- [Figma Design](https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=0-1): Visual design and user interface mockups.

### Development and Deployment

- **Development**: The application is developed using modern JavaScript practices and tools. The development environment uses Vite for fast builds and hot module replacement.
- **Deployment**: The application can be deployed to any static hosting service. The build script generates a production-ready bundle that can be served by any web server.

### Security

The application leverages Firebase for secure authentication and database management. Users' data is securely stored and managed, ensuring privacy and security.

### Performance

The app is optimized for performance with efficient loading and rendering. Vite's fast build times and hot module replacement enhance the development experience, while React's virtual DOM ensures efficient updates and rendering.

### Future Enhancements

- **Teacher Reviews and Ratings**: Allowing users to leave reviews and ratings for teachers.
- **Multi-language Support**: Adding support for multiple languages to cater to a global audience.
- **Advanced Filtering**: Enhancing the filtering options for a more personalized search experience.

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
