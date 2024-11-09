# Game Host Bros Community Guides

Welcome to the Game Host Bros community guides repository! This is a collaborative space where anyone can contribute their knowledge and expertise to help fellow gamers and server hosts.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🤝 How to Contribute

We welcome contributions from everyone! Here's how you can help:

1. **Fork the Repository**
   - Click the "Fork" button in the top right corner of this repository
   - Clone your fork locally: `git clone https://github.com/your-username/game-host-bros-guides`

2. **Make Your Changes**
   - Create a new branch: `git checkout -b my-new-guide`
   - Add or edit content in the `src/content/docs/` directory
   - All content should be written in Markdown (`.md`) or MDX (`.mdx`) format

3. **Submit Your Changes**
   - Push your changes to your fork
   - Create a Pull Request back to this repository
   - Our team will review your contribution

## 📁 Project Structure

```
.
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/      # Images and other assets used in guides
│   ├── content/
│   │   ├── docs/    # All guide content goes here
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Running Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   This will start the server at `localhost:4321`

## 📝 Writing Guidelines

1. **File Organization**
   - Place your guide in the appropriate category folder within `src/content/docs/`
   - Use kebab-case for filenames: `my-awesome-guide.md`

2. **Content Structure**
   - Start with a clear title and description
   - Use headings to organize content
   - Include code examples where relevant
   - Add images to enhance understanding

3. **Formatting**
   - Use Markdown formatting for consistency
   - Include code blocks with appropriate language tags
   - Add screenshots or diagrams when helpful