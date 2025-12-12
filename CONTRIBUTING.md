# Contributing to ggalign Learning Hub

First off, thank you for considering contributing to the ggalign Learning Hub! 🎉

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, OS, Node version)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description** of the enhancement
- **Use case** - why would this be useful?
- **Possible implementation** if you have ideas

### 📝 Improving Documentation

Documentation improvements are always welcome! This includes:

- Fixing typos or clarifying existing docs
- Adding examples or explanations
- Improving code comments
- Adding new learning resources

### 🎨 Adding Content

We welcome contributions that add value:

- **New topics** about ggalign features
- **Code examples** demonstrating specific use cases
- **Better explanations** in simpler language
- **Visual aids** like diagrams or screenshots

## Development Process

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   # Click 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/ggalign-notebook.git
   cd ggalign-notebook
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

### Making Changes

1. **Write clear, concise code**
   - Follow existing code style
   - Add comments for complex logic
   - Keep functions focused and small

2. **Test your changes**
   - Test in multiple browsers
   - Check responsive design
   - Verify AI chat functionality

3. **Update documentation**
   - Update README.md if needed
   - Add code comments
   - Update relevant documentation files

### Commit Guidelines

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add: Section on circular layouts"
git commit -m "Fix: Chat input not clearing after send"
git commit -m "Update: Improve explanation of align_dendro"
git commit -m "Docs: Add troubleshooting section"

# Bad examples
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### Submitting Changes

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template

3. **PR Description should include:**
   - What changes you made
   - Why these changes are needed
   - Any related issues (use #issue-number)
   - Screenshots if UI changed

### Code Review Process

- Maintainers will review your PR
- May request changes or ask questions
- Be responsive to feedback
- Once approved, your PR will be merged!

## Code Style Guidelines

### JavaScript/React

- Use **functional components** with hooks
- Use **clear, descriptive variable names**
- Add **JSDoc comments** for complex functions
- Keep components **focused and reusable**

```javascript
// Good
const handleUserInput = (value) => {
  // Process and validate user input
  const sanitized = value.trim();
  return sanitized;
};

// Bad
const f = (x) => x.trim();
```

### Styling

- Use **Tailwind CSS** utility classes
- Follow existing **color scheme**
- Maintain **responsive design**
- Ensure **accessibility** (ARIA labels, keyboard navigation)

### File Organization

```
src/
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── utils/           # Helper functions
├── constants/       # Static data and configurations
└── App.jsx          # Main application component
```

## Adding New Topics

To add a new learning topic:

1. Update `ggalignKnowledge` object in `App.jsx`:

```javascript
const ggalignKnowledge = {
  // ... existing topics
  newTopic: {
    title: "Your Topic Title",
    icon: YourIcon,  // Import from lucide-react
    content: `Your explanation here...`,
    keyPoints: [
      "Key point 1",
      "Key point 2"
    ]
  }
};
```

2. Add icon import at top of file:
```javascript
import { YourIcon } from 'lucide-react';
```

## Adding Code Examples

Add examples to `quickExamples` array:

```javascript
const quickExamples = [
  // ... existing examples
  {
    question: "How do I...?",
    code: `library(ggalign)
# Your example code here
`
  }
];
```

## Testing Checklist

Before submitting PR, verify:

- [ ] Code runs without errors
- [ ] UI looks correct on desktop
- [ ] UI looks correct on mobile
- [ ] Navigation works properly
- [ ] AI chat functionality works
- [ ] External links are correct
- [ ] No console errors
- [ ] Code follows style guidelines

## Community Guidelines

- **Be respectful** and constructive
- **Help others** when you can
- **Give credit** where it's due
- **Stay on topic** in discussions
- **Follow code of conduct**

## Questions?

- Open an issue with the `question` label
- Start a discussion in GitHub Discussions
- Check existing documentation first

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions

Thank you for contributing! 🙏
