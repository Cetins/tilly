# Tilly Project

A full-stack application with Next.js frontend and Express.js backend, containerized with Docker.

**Live Demo:** [https://tilly-dev.vercel.app/](https://tilly-dev.vercel.app/)  
**Contact:** cetinsdev@gmail.com

## 📋 Prerequisites

### Required Software
- **Docker & Docker Compose** (for local development)
- **Node.js 20+** (optional, for local development without Docker)
- **Git**

### Environment Variables
Create a `.env` file in the project root:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# 🚀 Quick Start
Method 1: Docker (Recommended)
bash
# Clone the repository
git clone <your-repo-url>
cd tilly

# Create environment file
cp .env.example .env
# Edit .env with your Supabase credentials

# Start the application
docker-compose up
Access the application:

Frontend: http://localhost:3000

Backend API: http://localhost:4000

Method 2: Local Development
bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (in another terminal)
cd backend
npm install
npm run dev
🐳 Docker Commands
Development
bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
Build & Management
bash
# Rebuild containers
docker-compose build

# Rebuild specific service
docker-compose build frontend

# Remove containers and volumes
docker-compose down -v
Individual Services
bash
# Start only frontend
docker-compose up frontend

# Start only backend
docker-compose up backend
📁 Project Structure
text
tilly/
├── docker-compose.yml
├── .env
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── [Next.js app]
└── backend/
    ├── Dockerfile
    ├── package.json
    └── [Express app]
🔧 Available Scripts
Frontend (Next.js)
bash
npm run dev      # Development with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Start production server
npm run lint     # Run ESLint
Backend (Express.js)
bash
npm run dev      # Development with nodemon
npm run start    # Production start
🌐 Deployment
Frontend (Vercel)
The frontend automatically deploys when pushing to the main branch.

Vercel Configuration:

Framework: Next.js

Build Command: npm run build

Output Directory: .next

Environment Variables: Set in Vercel dashboard

Backend (Supabase)
The backend uses Supabase for database and serverless functions.

Environment Variables in Production:

Set SUPABASE_URL and SUPABASE_ANON_KEY in your deployment platform

🔄 Development Workflow
Create feature branch:

bash
git checkout -b feature/your-feature
Develop and test locally:

bash
docker-compose up
Commit changes:

bash
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature
Merge to main:

Create Pull Request

Merge to main triggers Vercel deployment

🛠️ Troubleshooting
Common Issues
Port already in use:

bash
# Find and kill process using port
lsof -ti:3000 | xargs kill -9
lsof -ti:4000 | xargs kill -9
Docker build failures:

bash
# Clear Docker cache
docker system prune -f
docker-compose build --no-cache
Node modules issues:

bash
# Reinstall node_modules in containers
docker-compose down
docker-compose build --no-cache
docker-compose up
Environment variables not loading:

Ensure .env file exists in project root

Check variable names match docker-compose.yml

Restart containers after changing .env

Hot Reload Issues
Frontend: Changes should reflect immediately

Backend: Nodemon should restart on file changes

If hot reload fails: Restart with docker-compose restart

📞 Support
For development issues:

Check Docker containers are running: docker-compose ps

Verify environment variables are set

Check application logs: docker-compose logs [service]

For deployment issues:

Vercel Dashboard: https://vercel.com

Supabase Dashboard: https://supabase.com

Contact: cetinsdev@gmail.com

🔒 Security Notes
Never commit .env file

Use different Supabase credentials for development/production

Rotate Supabase keys regularly

Monitor Vercel deployment logs for errors
