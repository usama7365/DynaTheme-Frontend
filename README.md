# DynaTheme Frontend

The **DynaTheme Frontend** is the user interface of **DynaTheme**, an open-source CMS that provides users with real-time dynamic control over website themes and styles. Built with **Next.js** and **TypeScript**, it offers a modern, fast, and scalable solution for customizing websites through easy-to-use controls and live preview functionality.

## Features

- **Real-Time Editing**: Clients can edit and preview components such as buttons, headers, and other elements in real-time.
- **Customizable Styling**: Modify colors, fonts, animations, and hover effects directly from the frontend.
- **Next.js + TypeScript**: Fast and scalable, built using Next.js for static generation and server-side rendering.
- **API-Driven**: Integrated with the DynaTheme backend to fetch and save dynamic styling data.
- **Live Preview**: Instantly see changes to styles before publishing them to the live site.

## Installation

### Requirements

- Node.js >= 14.x

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/DynaTheme-Frontend.git
   cd DynaTheme-Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file with your backend API URL:

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:3000`.

## Project Structure

```
frontend/
│
├── components/          // Reusable components (buttons, headers, etc.)
├── pages/               // Next.js pages (home, settings, etc.)
│   └── index.tsx        // Main CMS interface
├── styles/              // Global and component-specific styles
├── utils/               // Utility functions for API calls and data handling
└── types/               // TypeScript types and interfaces
```

## API Integration

The DynaTheme frontend interacts with the backend API to fetch, edit, and save custom styling options.

### 1. Fetch Styles

**Endpoint**: `/api/styles/:userId`  
**Method**: `GET`
Fetches all the saved styles for the specified user to display them in the CMS interface for real-time editing.

### 2. Save Styles

**Endpoint**: `/api/styles/save`  
**Method**: `POST`
Sends the updated styles to the backend to be saved and applied to the user's live site.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out to [Usama Aamir](mailto:usamaaamirsohail@gmail.com).
