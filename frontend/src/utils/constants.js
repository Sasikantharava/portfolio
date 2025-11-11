export const skills = [
  { name: 'MERN Stack', level: 90, category: 'fullstack' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'React.js', level: 88, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'Express.js', level: 82, category: 'backend' },
  { name: 'NLP & AI', level: 75, category: 'ai' },
  { name: 'LLMs', level: 70, category: 'ai' },
  { name: 'REST APIs', level: 85, category: 'backend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'JavaScript/ES6+', level: 90, category: 'frontend' },
  { name: 'Git & GitHub', level: 85, category: 'tools' }
];

export const projects = [
  {
    id: 1,
    title: 'Expenses Manager',
    description: 'A full-stack expense tracking application with advanced analytics and reporting features. Helps users manage their finances effectively.',
    longDescription: 'A comprehensive expense management system built with React and Node.js that allows users to track their spending, set budgets, and generate detailed reports. Features include category-wise analysis, monthly trends, and export functionality.',
    image: '/expenses.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    features: [
      'Real-time expense tracking',
      'Category-wise analytics',
      'Budget setting and alerts',
      'Data export to CSV/PDF',
      'Multi-currency support'
    ],
    githubLink: 'https://github.com/santoshpg8095/expensesmanager-com',
    liveLink: 'https://expensesmanager-com.vercel.app/',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Car Showcase Website',
    description: 'Modern car dealership platform with advanced filtering, 3D car views, and seamless booking system.',
    longDescription: 'A cutting-edge car showcase platform featuring immersive 3D car views, advanced search and filtering capabilities, and an integrated booking system. Built with modern web technologies for optimal performance.',
    image: '/carshow.png',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Stripe'],
    features: [
      '3D car model viewer',
      'Advanced search and filters',
      'Virtual test drive',
      'Online booking system',
      'Payment integration'
    ],
    githubLink: 'https://github.com/Sasikantharava/LUXEGO',
    liveLink: 'https://luxego.vercel.app/',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by NLP and machine learning, capable of understanding context and providing human-like responses.',
    longDescription: 'An advanced AI chatbot built with Python and NLP technologies that can understand context, maintain conversations, and provide intelligent responses. Integrated with multiple AI models for enhanced capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'React', 'FastAPI'],
    features: [
      'Natural language understanding',
      'Context-aware conversations',
      'Multi-language support',
      'Sentiment analysis',
      'Custom training interface'
    ],
    githubLink: 'https://github.com/sasikanth/ai-chatbot',
    liveLink: 'https://chatbot.sasikanth.dev',
    category: 'ai'
  }
];

export const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building responsive, scalable web applications using MERN stack and modern frameworks.',
    icon: '💻',
    features: ['React.js Development', 'Node.js Backend', 'MongoDB Database', 'RESTful APIs']
  },
  {
    title: 'Python & AI Development',
    description: 'Creating intelligent applications with Python, machine learning, and AI technologies.',
    icon: '🤖',
    features: ['Python Programming', 'NLP Solutions', 'Machine Learning', 'AI Integration']
  },
  {
    title: 'Chatbot Development',
    description: 'Building intelligent chatbots with NLP capabilities for enhanced customer interactions.',
    icon: '💬',
    features: ['AI Chatbots', 'NLP Processing', 'Multi-platform', 'Custom Training']
  },
  {
    title: 'API Development',
    description: 'Designing and developing robust RESTful APIs with proper documentation and security.',
    icon: '🔗',
    features: ['REST APIs', 'GraphQL', 'Authentication', 'API Documentation']
  }
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/sasikanth', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sasikanth', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/sasikanth', icon: 'twitter' },
  { name: 'Email', url: 'mailto:sasikanth@example.com', icon: 'email' }
];