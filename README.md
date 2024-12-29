# Netflix Clone

A modern Netflix-like web application built using React and RTK with advanced features like lazy loading, infinite scrolling, and a carousel.

---

## Project Objectives
- Recreate the Netflix experience with features like video portals, animations, and infinite scrolling.
- Utilize modern React tools such as Context, Custom Hooks, and RTK Query.
- Enhance user experience with Material UI and animations.

---

## Features
- **Custom Hooks**: Simplify reusable logic.
- **Context and Provider**: Manage global state efficiently.
- **Code-Splitting**: Reduce bundle size using `React.lazy` and `Suspense`.
- **Data Fetching**: Use `RTK Query` and React Router loaders.
- **Infinite Scrolling**: Smooth data loading with Intersection Observer API.
- **Carousel**: Slick carousel implementation for content display.
- **Animations**: Beautiful animations with Framer Motion.
- **Reusable Components**: Use Forwarding Refs and Higher Order Components (HOCs).
- **MUI Customization**: Themed Material UI components.

---

## Prerequisites
1. **TMDB API Key**:
   - Create a free account on [TMDB](https://www.themoviedb.org/).
   - Obtain your API Key (v3) from the developer settings.
2. **Environment File**:
   - Copy `.env.example` to `.env`.
   - Replace `your_api_key_here` with your TMDB API Key.

---

## Setup Instructions

### Install Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Install with Docker
1. Build the Docker image:
   ```bash
   docker build --build-arg TMDB_V3_API_KEY=your_api_key_here -t netflix-clone .
   ```
2. Run the Docker container:
   ```bash
   docker run --name netflix-clone-website --rm -d -p 80:80 netflix-clone
   ```

---

## Challenges Faced
- **Performance**: Excessive re-renders caused by React Context in deeply nested components.
- **Animations**: Mimicking Netflix's seamless video portal animations.
- **Bundle Size**: Optimizing for better load times by reducing bundle size.

---

## Future Improvements
- Replace Vite with Turbopack for faster builds (once Turbopack supports standalone projects).
- Add accessibility features to improve UX for users with disabilities.
- Write unit and integration tests for critical components.

---

## Third-Party Libraries
- **React Router v6.9**
- **Material UI (MUI)**
- **Framer Motion**
- **Video.js**
- **React Slick**

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License.

