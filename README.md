# GitHub Profile Viewer

A React-based web application that allows users to discover and explore GitHub profiles with a beautiful, responsive interface.

## Overview

GitHub Profile Viewer is an interactive web application that lets you search for GitHub users and view their profiles in an elegant card-based layout. You can search for specific users by username or discover random GitHub users by specifying the number of profiles you want to view.

## Features

- 🔍 Search GitHub users by username
- 👤 View user profile cards with essential information
- 🖼️ Profile images with hover effects
- 📱 Fully responsive design for all devices
- 🎨 Modern UI with smooth animations
- 🌓 Dark theme interface
- ⚡ Fast and lightweight

## Live Demo

[https://github-profile-viewer-blush.vercel.app/](#) <!-- Add your live demo link here -->

## Screenshots
<img width="1000" height="777" alt="Screenshot 2025-08-07 003547" src="https://github.com/user-attachments/assets/a3d41557-3327-4fef-9ee9-4fa42326ab25" />
<img width="1000" height="777" alt="Screenshot 2025-08-07 004018" src="https://github.com/user-attachments/assets/a1e8bed1-443e-467d-8922-50b0c9ad1289" />




## Tech Stack

- **React**: Frontend library for building the user interface
- **GitHub REST API**: For fetching user data
- **CSS3**: Modern styling with features like:
  - Flexbox for layout
  - CSS Grid for responsive design
  - CSS Variables for theming
  - Modern CSS features (clamp, min, max)
- **Parcel**: For bundling and building the application

## Features

- 🔍 Search GitHub users by username
- 👥 View multiple random GitHub profiles
- 🎨 Beautiful card-based UI with hover effects
- 📱 Fully responsive design for all devices
- 🖼️ Profile images with smooth animations
- 🌓 Dark theme by default
- ⚡ Fast loading and efficient performance

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge recommended)
- GitHub account (for API access)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AshutoshCoder2024/Github-profile-viewer.git
   cd Github-profile-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Usage

1. Enter a number to view that many random GitHub profiles
2. Or search for a specific user by entering their GitHub username
3. Click on "github-profile" to visit a user's GitHub page

## API Endpoints

The application uses the following GitHub API endpoints:

1. Get Random Users:
   ```
   GET https://api.github.com/users?since=${randomId}&per_page=${count}
   ```
   - `randomId`: Random number to get different sets of users
   - `per_page`: Number of users to fetch (1-100)

2. Get Specific User:
   ```
   GET https://api.github.com/users/${username}
   ```
   - `username`: GitHub username to search for

## Project Structure

```
Github-Profile-viewer/
├── index.html        # Main HTML file
├── style.css        # Styles and animations
├── main.jsx         # React entry point
└── src/
    └── component/   # React components
        ├── Body.jsx     # Main content
        └── Header.jsx   # Page header
```

## Responsive Design

The interface is mobile-first and responsive:

- Fluid layouts that adapt to screen size
- Smooth animations and transitions
- Touch-friendly on mobile devices
- Optimized for all screen sizes

## Future Plans

- [ ] Add repository listing
- [ ] Show user statistics
- [ ] Add profile comparison
- [ ] Implement dark/light theme toggle
- [ ] Add pagination for results 

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments

- GitHub API for data access
- React community
- Open source community

Made with ❤️ by [AshutoshCoder2024](https://github.com/AshutoshCoder2024)
