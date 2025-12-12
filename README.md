# ggalign Learning Hub 📚

An interactive NotebookLM-style learning interface for [ggalign](https://github.com/Yunuuuu/ggalign), the R package for aligning ggplot2 visualizations.

![ggalign Learning Hub](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8) ![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

- **📖 5 Comprehensive Topics**: Overview, Layouts, Alignment, Plotting, and Advanced features
- **🤖 AI-Powered Chat**: Ask Claude AI questions about ggalign and get simple explanations
- **💻 Code Examples**: Quick-start snippets you can use immediately
- **🎨 Beautiful UI**: Modern, responsive interface with intuitive navigation
- **🔗 Resource Links**: Direct access to official documentation and GitHub repo

## 🚀 Quick Start

### Online Demo

Visit the live demo: [kroy3.github.io/ggalign-notebook](https://kroy3.github.io/ggalign-notebook)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/ggalign-notebook.git
   cd ggalign-notebook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Claude AI (Anthropic)** - AI-powered explanations
- **Vite** - Build tool

## 📖 What is ggalign?

ggalign is an R package that provides an integrative framework for composable visualization. It's particularly useful for:

- **Genomics & Transcriptomics**: Align gene expression heatmaps with dendrograms and annotations
- **Multi-omics Research**: Compare multiple data types across same samples
- **Complex Layouts**: Create publication-ready figures with precise alignment

### Key Concepts Covered

1. **Heatmap Layout** (`layout_heatmap`/`ggheatmap`)
   - Center heatmap with surrounding annotations
   - Perfect for omics data visualization

2. **Stack Layout** (`layout_stack`/`ggstack`)
   - Vertical or horizontal plot arrangement
   - Shared axis for perfect alignment

3. **Alignment Functions**
   - `align_group()` - Group by categories
   - `align_kmeans()` - Automatic clustering
   - `align_dendro()` - Hierarchical clustering
   - `align_reorder()` - Sort by values

4. **Plotting Functions**
   - `align_gg()`/`ggalign()` - Custom ggplot integration
   - `align_panel()`/`ggpanel()` - Use layout panel data

## 🎓 Learning Path

1. **Start with Overview** - Understand what ggalign solves
2. **Explore Layouts** - Learn the two main layout types
3. **Master Alignment** - Use grouping and clustering functions
4. **Create Plots** - Integrate your visualizations
5. **Go Advanced** - Nested layouts, circles, and links

## 💬 AI Chat Assistant

The built-in Claude AI assistant can answer questions like:

- "What's the difference between layout_heatmap and layout_stack?"
- "How do I add a dendrogram to my heatmap?"
- "Explain align_group in simple terms"
- "Can you show me an example of nested layouts?"

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ggalign](https://github.com/Yunuuuu/ggalign) by Yun Peng - The amazing R package this project documents
- [ggplot2](https://ggplot2.tidyverse.org/) - The foundation for R graphics
- [Anthropic Claude](https://www.anthropic.com/) - AI-powered explanations
- [Tailwind CSS](https://tailwindcss.com/) - Beautiful styling made easy

## 🔗 Useful Links

- [ggalign Official Documentation](https://yunuuuu.github.io/ggalign-book/)
- [ggalign GitHub Repository](https://github.com/Yunuuuu/ggalign)
- [ggalign Gallery](https://yunuuuu.github.io/ggalign-gallery)
- [ggalign Manuscript](https://www.biorxiv.org/content/10.1101/2025.02.06.636847v1)

## 📧 Contact

If you have questions or feedback, please open an issue on GitHub.

---

Made with ❤️ for the R community
