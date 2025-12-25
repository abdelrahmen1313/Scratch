# MERN Backend Template

A production-ready Express.js backend template built with TypeScript, following a modular and scalable architecture. This template provides a solid foundation for building RESTful APIs, error handling, and a clean resource-based structure.

## 📦 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js 5.x
- **Database**: MongoDB (via Mongoose 9.x)
- **Dev Tools**: tsx (TypeScript execution)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd backend

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
    Create a `.env` file in the root directory:

   ```env
   PORT=3003
   MONGODB_URI=mongodb://localhost:27017/your-database
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3003` (or your specified PORT)

## 📜 Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Compile TypeScript to JavaScript
npm start        # Run compiled JavaScript from dist/
npm test         # Run tests (to be configured)
```

## 🏗️ Creating a New Resource

To add a new resource (e.g., Product, Post, etc.), follow this pattern:

1. Create a new folder in `lib/ressources/YourResource/`
2. Add the following files:
   - `yourresource.model.ts` - Mongoose schema or any provider
   - `yourresource.service.ts` - Business logic
   - `yourresource.controller.ts` - Route handlers
   - `yourresource.routes.ts` - Route definitions
   - `yourresource.middleware.ts` - Resource-specific middleware (optional)
   - `yourressource.repository?.ts` - Repository pattern for database queries.

3. Register the controller in `lib/index.ts`:

   ```typescript
   const app = new App(
       [
           new UserController(),
           new YourResourceController()  // Add here
       ],
       Number(process.env.PORT) || 3003
   )
   ```

## 🔧 Configuration

### TypeScript Configuration

The project uses `tsconfig.json` for TypeScript compilation settings. Modify as needed for your project requirements.

### Database Connection

Update the MongoDB connection string in your `.env` file and configure connection options in `lib/utils/connectDb.ts`.

### Middleware

- **Global middleware**: Add in `app.ts` → `initiateMiddleware()`
- **Resource-specific middleware**: Add in respective resource folders

## 🚦 API Routes

All API routes are prefixed with `/api`. Example:

```YAML
GET    /api/users
POST   /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

## 🤝 Contributing

Feel free to fork this template and customize it for your needs!

## 📝 License

ISC

## 👤 Author

EDAH

---

**Note**: This is a template project. Make sure to update configuration files, add proper error messages, implement authentication/authorization, and add tests before using in production.

Thanks for [Rettson channel]("https://www.youtube.com/@Rettson") for the base project tutorial,
this project is an extension using seperate routing logic
