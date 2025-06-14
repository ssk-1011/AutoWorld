# AutoWorld - Premium Cars and Motorcycles

A Next.js application showcasing premium cars and motorcycles with a shopping cart functionality.

## Features

- Browse premium cars and motorcycles
- Add vehicles to cart
- Responsive design
- Server-side rendering
- Persistent cart using localStorage

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Vercel (Deployment)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sample-ssr-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your project to Vercel:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js and set up the build configuration

3. Deploy:
   - Click "Deploy"
   - Vercel will build and deploy your application
   - Once complete, you'll get a production URL

### Environment Variables

No environment variables are required for this project.

### Build and Start Commands

Vercel will automatically use the following commands:
- Build: `npm run build`
- Start: `npm run start`

## Project Structure

```
sample-ssr-app/
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── context/         # React context
│   └── data/            # Static data
├── public/              # Static files
└── package.json         # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
