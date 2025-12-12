import React, { useState, useRef, useEffect } from 'react';
import { Search, BookOpen, Code, Layout, GitBranch, Layers, ChevronRight, Sparkles, MessageSquare, Send, Loader2 } from 'lucide-react';

const GGAlignNotebook = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const ggalignKnowledge = {
    overview: {
      title: "What is ggalign?",
      icon: BookOpen,
      content: `ggalign is like a smart organizer for your data plots in R. Think of it as a tool that helps you line up multiple graphs perfectly, especially when you're working with complex biological data like genes or cells.

**The Problem It Solves:**
Imagine you have a heatmap showing gene expression, a dendrogram (tree) showing how samples cluster together, and bar charts showing patient information. Getting these to align perfectly is usually painful. ggalign makes it easy!

**Key Benefit:**
Instead of fighting with plot dimensions and margins, ggalign automatically aligns everything based on your data structure.`,
      keyPoints: [
        "Extension of ggplot2 (the popular R plotting package)",
        "Automatically aligns multiple plots",
        "Perfect for genomics, transcriptomics, microbiome data",
        "Based on the 'grammar of graphics' principle"
      ]
    },
    layouts: {
      title: "Two Main Layout Types",
      icon: Layout,
      content: `ggalign offers two fundamental ways to arrange your plots:

**1. Heatmap Layout (layout_heatmap / ggheatmap)**
Think of this as creating a quilt with your data. The heatmap is the center piece, and you can add "annotations" around it - like borders on a quilt. These annotations can be plots showing additional information about your rows and columns.

Example use: Gene expression heatmap with sample information on top and gene categories on the side.

**2. Stack Layout (layout_stack / ggstack)**
This is like stacking pancakes - you arrange plots vertically or horizontally, and they share a common axis so everything lines up perfectly.

Example use: Multiple plots showing different measurements for the same samples, stacked so you can easily compare across measurements.`,
      keyPoints: [
        "Heatmap Layout: Center plot with surrounding annotations",
        "Stack Layout: Linear arrangement (vertical or horizontal)",
        "Both share alignment to keep data synchronized",
        "Can be combined and nested for complex figures"
      ]
    },
    alignment: {
      title: "Alignment Functions",
      icon: GitBranch,
      content: `These are the magic functions that tell ggalign how to organize your data:

**align_group()**
Groups your data into categories. Like sorting books by genre - all mysteries together, all sci-fi together.
Example: Group samples by patient type (healthy vs. disease)

**align_kmeans()**
Automatically finds patterns and groups similar things together using k-means clustering. Like having a robot that organizes similar photos into albums.

**align_dendro()**
Creates and uses hierarchical clustering (a tree structure) to order your data. Shows which samples or genes are most similar to each other.
Example: Ordering genes by expression pattern similarity

**align_reorder()**
Reorders your data based on some values - like sorting a list by score, highest to lowest.`,
      keyPoints: [
        "align_group: Manual categorical grouping",
        "align_kmeans: Automatic pattern-based grouping",
        "align_dendro: Hierarchical clustering with tree visualization",
        "align_reorder: Sort by values or statistics"
      ]
    },
    plotting: {
      title: "Creating Plots",
      icon: Code,
      content: `ggalign provides special functions to create plots that integrate with the layout:

**align_gg() / ggalign()**
Creates a standard ggplot that knows about your layout structure. It automatically maps the correct axis for alignment.

**align_panel() / ggpanel()**
Uses the panel data from your layout. If you've grouped or clustered your data, this function gives you access to that grouped information for plotting.

**The Magic:**
You use regular ggplot2 syntax (geom_point, geom_bar, etc.) but ggalign handles the alignment automatically!`,
      keyPoints: [
        "Works with standard ggplot2 syntax",
        "Automatically inherits layout structure",
        "align_gg for custom data plots",
        "align_panel for using layout groupings"
      ]
    },
    advanced: {
      title: "Advanced Features",
      icon: Layers,
      content: `Once you master the basics, ggalign has powerful advanced features:

**Circle Layout**
Arrange your plots in a circle - useful for circular genomic data or showing cyclical patterns.

**Quad-side Layout**
Put annotations on all four sides of a heatmap (top, bottom, left, right) for maximum information density.

**Nested Layouts**
Combine layouts within layouts! Put a stack layout inside a heatmap annotation, or create complex hierarchical arrangements.

**Operators**
Use simple math-like operators to combine plots:
- '+' to add plots to a layout
- '/' for vertical stacking
- '|' for horizontal arrangement

**Links**
Draw connecting lines between related elements across different plots - great for showing relationships.`,
      keyPoints: [
        "Circle layouts for circular data",
        "Multi-panel quad layouts",
        "Nested combinations of layouts",
        "Visual links between plot elements",
        "Intuitive operators for plot arithmetic"
      ]
    }
  };

  const quickExamples = [
    {
      question: "How do I create a simple heatmap with annotations?",
      code: `library(ggalign)
library(ggplot2)

# Create a heatmap layout
ggheatmap(my_matrix) +
  hmanno("top") +  # Add top annotation
  align_group(sample_groups) +  # Group by categories
  geom_bar(aes(y = value, fill = group))
`
    },
    {
      question: "How do I stack multiple plots vertically?",
      code: `# Stack plots with aligned x-axis
ggstack(data, direction = "vertical") +
  ggalign() + geom_point(aes(x = sample, y = expression)) +
  ggalign() + geom_line(aes(x = sample, y = mutation_rate))
`
    }
  ];

  const handleAskClaude = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const context = `You are a helpful tutor explaining ggalign, an R package for aligning ggplot2 visualizations. 

Key concepts to remember:
- ggalign aligns multiple plots for complex data visualization
- Main layouts: layout_heatmap (center with annotations) and layout_stack (linear arrangement)
- Key functions: align_group (categorize), align_kmeans (cluster), align_dendro (hierarchical), align_reorder (sort)
- Used primarily for genomics, transcriptomics, and biological data
- Based on ggplot2 grammar of graphics

Explain concepts in simple, everyday language. Use analogies and avoid jargon. Be concise but thorough.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: context,
          messages: [
            ...messages,
            { role: "user", content: userMessage }
          ]
        })
      });

      const data = await response.json();
      const assistantMessage = data.content
        .filter(item => item.type === 'text')
        .map(item => item.text)
        .join('\n');

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try asking your question again!' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  const activeContent = ggalignKnowledge[activeTab];
  const Icon = activeContent.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ggalign Learning Hub</h1>
              <p className="text-sm text-gray-600">Master plot alignment in R with simple explanations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Topics</h2>
              <nav className="space-y-1">
                {Object.entries(ggalignKnowledge).map(([key, value]) => {
                  const NavIcon = value.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                        activeTab === key
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <NavIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{value.title}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Resources</h3>
                <a href="https://yunuuuu.github.io/ggalign-book/" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-700 mb-2">
                  📖 Official Documentation
                </a>
                <a href="https://github.com/Yunuuuu/ggalign" target="_blank" rel="noopener noreferrer"
                   className="block text-sm text-blue-600 hover:text-blue-700">
                  💻 GitHub Repository
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Content Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <div className="flex items-center gap-3 text-white">
                  <Icon className="w-6 h-6" />
                  <h2 className="text-xl font-bold">{activeContent.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="prose prose-sm max-w-none">
                  {activeContent.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                      const [title, ...rest] = paragraph.split(':**');
                      return (
                        <div key={idx} className="mb-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{title.replace(/\*\*/g, '')}</h3>
                          <p className="text-gray-700">{rest.join(':**')}</p>
                        </div>
                      );
                    }
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <h3 key={idx} className="font-semibold text-gray-900 mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h3>;
                    }
                    return <p key={idx} className="text-gray-700 mb-3">{paragraph}</p>;
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Chat Interface */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Ask Claude About ggalign</h2>
                </div>
              </div>

              <div className="p-6">
                {/* Quick Questions */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleQuickQuestion("What's the difference between layout_heatmap and layout_stack?")}
                      className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      Layout differences?
                    </button>
                    <button
                      onClick={() => handleQuickQuestion("How do I add a dendrogram to my heatmap?")}
                      className="text-xs px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full hover:bg-purple-100 transition-colors"
                    >
                      Add dendrogram?
                    </button>
                    <button
                      onClick={() => handleQuickQuestion("What does align_group do?")}
                      className="text-xs px-3 py-1.5 bg-pink-50 text-pink-700 rounded-full hover:bg-pink-100 transition-colors"
                    >
                      align_group explained?
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-96 overflow-y-auto">
                  {messages.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">Ask me anything about ggalign!</p>
                      <p className="text-xs mt-1">I'll explain concepts in simple terms</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-lg px-4 py-2 ${
                              msg.role === 'user'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-800 border border-gray-200'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                            <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskClaude()}
                    placeholder="Ask a question about ggalign..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleAskClaude}
                    disabled={isLoading || !inputValue.trim()}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
                <div className="flex items-center gap-3 text-white">
                  <Code className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Quick Start Examples</h2>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {quickExamples.map((example, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-700">{example.question}</p>
                    </div>
                    <div className="bg-gray-900 p-4">
                      <pre className="text-xs text-green-400 overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GGAlignNotebook;
