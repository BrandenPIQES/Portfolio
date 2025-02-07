// Project data structure
const projectData = {
  'toppers-tutoring': {
    title: 'Toppers Tutoring',
    images: [
      '/images/toppers_project.png',
      '/images/toppers_2.png',
      '/images/toppers_3.png'
    ],
    description: `A comprehensive tutoring platform built to bridge educational gaps and make quality tutoring accessible to all students. 

Key Features:
• Intelligent tutor-student matching system based on subject expertise and learning style
• Real-time scheduling and availability management
• Integrated video conferencing for remote sessions
• Progress tracking and performance analytics
• Secure payment processing

Technical Stack:
• Frontend: HTML5, CSS3, JavaScript
• Backend: Node.js with Express
• Database: MongoDB
• Authentication: JWT
• Payment Integration: Stripe

Impact:
The platform currently serves over 100 active students and has facilitated more than 1000 tutoring sessions. Our student satisfaction rate is consistently above 95%, and we've seen an average grade improvement of 15% among regular users.`,
    link: 'https://topperstutoring.onrender.com/'
  },
  'get-recipe': {
    title: 'GET-RECIPE',
    images: [
      '/images/get_recipe_project.png',
      '/images/recipe_2.png',
      '/images/recipe_3.png'
    ],
    description: `An AI-powered recipe recommendation system that helps users discover meals based on their preferences and available ingredients.

Key Features:
• Natural language processing for ingredient recognition
• Dietary restriction and allergy filtering
• Step-by-step cooking instructions
• Nutritional information calculation
• Shopping list generation

Technical Stack:
• Python for backend logic
• Spoonacular API for recipe data
• Twilio API for messaging interface
• Natural Language Processing
• SQLite Database

Impact:
Processing over 500 recipe requests daily with a 95% user satisfaction rate. The app has helped reduce food waste by suggesting recipes based on available ingredients.`,
    link: 'https://github.com/BrandenPIQES/GET-RECIPE'
  },
  'phumla': {
    title: 'Phumla Kamnandi Hotel Management System',
    images: [
      '/images/phumla_project.png',
      '/images/phumla_2.png',
      '/images/phumla_3.png'
    ],
    description: `A comprehensive hotel management system developed in C# to streamline operations across multiple locations.

Key Features:
• Reservation management and booking system
• Room inventory and maintenance tracking
• Staff scheduling and management
• Guest check-in/check-out automation
• Billing and payment processing
• Real-time reporting and analytics

Technical Stack:
• C# .NET Framework
• SQL Server Database
• Windows Forms for UI
• Crystal Reports for reporting
• Entity Framework for ORM

Impact:
Successfully implemented across 3 hotel locations, reducing booking errors by 75% and improving staff efficiency by 40%.`,
    link: 'https://github.com/BrandenPIQES/Hotel-Management-System'
  },
  'sandpile': {
    title: 'Abelian Sandpile Simulation',
    images: [
      '/images/abelian_sandpile_java.png',
      '/images/sandpile_2.png',
      '/images/sandpile_3.png'
    ],
    description: `A parallel computing implementation comparing serial and parallel processing speeds in sandpile simulations.

Key Features:
• Parallel processing implementation
• Performance comparison metrics
• Visual representation of sandpile patterns
• Configurable grid sizes and parameters
• Real-time simulation statistics

Technical Stack:
• Java
• Java Thread Pool
• Java FX for visualization
• JUnit for testing
• Performance monitoring tools

Research Findings:
Achieved up to 4x speed improvement with parallel processing on an 8-core system compared to serial processing.`,
    link: 'https://github.com/BrandenPIQES/Abelian-Sandpile-Sim-'
  },
  'swimmers': {
    title: 'Medley Relay Swimming Race Simulation',
    images: [
      '/images/swimmers_project.png',
      '/images/swimmers_2.png',
      '/images/swimmers_3.png'
    ],
    description: `A sophisticated multithreading simulation that models a medley relay swimming race, demonstrating concurrent programming principles.

Key Features:
• Real-time race simulation using multiple threads
• Synchronized swimmer transitions
• Lane management and collision avoidance
• Race statistics and performance metrics
• Visual representation of race progress

Technical Stack:
• Java
• Java Thread Synchronization
• Java Concurrent Package
• Java Swing for UI
• JUnit for testing

Learning Outcomes:
• Deep understanding of thread synchronization
• Resource sharing and deadlock prevention
• Race condition handling
• Performance optimization in concurrent systems

The project successfully demonstrates complex threading concepts through an engaging sports simulation.`,
    link: 'https://github.com/BrandenPIQES/Medley-Relay-Swim'
  },
  'wave': {
    title: 'WAVE File Decoder',
    images: [
      '/images/mips_project.png',
      '/images/wave_2.png',
      '/images/wave_3.png'
    ],
    description: `An assembly language project focused on decoding and analyzing WAVE audio files at the lowest level of computer architecture.

Key Features:
• Header parsing and validation
• Audio data extraction
• Format chunk analysis
• Sample rate calculation
• Bit depth verification
• Channel count detection

Technical Implementation:
• MIPS Assembly language
• Direct memory manipulation
• Binary file handling
• Data structure navigation
• Efficient register usage

Learning Outcomes:
• Low-level file format understanding
• Binary data manipulation
• Memory management in assembly
• Efficient register allocation
• Performance optimization

This project provided invaluable experience in low-level programming and computer architecture concepts.`,
    link: 'https://github.com/BrandenPIQES/.WAVE-file-exploration'
  },
  'ecommerce': {
    title: 'E-commerce Platform with Open Payments',
    images: [
      '/images/interledger_hackathon_project.png',
      '/images/ecommerce_2.png',
      '/images/ecommerce_3.png'
    ],
    description: `An innovative e-commerce platform developed during the Interledger 2024 hackathon, featuring open payment protocols and modern web technologies.

Key Features:
• Integration with Interledger Protocol
• Cross-currency transactions
• Real-time payment processing
• Product catalog management
• User authentication system
• Order tracking and history

Technical Stack:
• Frontend: HTML5, CSS3, JavaScript
• Payment Processing: Interledger Protocol
• Authentication: OAuth 2.0
• Database: PostgreSQL
• API: RESTful architecture
• Hosting: Docker containers

Achievements:
• Successfully implemented cross-border payments
• Reduced transaction fees by 60%
• Achieved sub-second payment confirmation
• Built scalable architecture

This project showcases modern payment integration and e-commerce best practices.`,
    link: 'https://github.com/BrandenPIQES/Group-6-'
  },
  'zwiri': {
    title: 'Zwiri - The Intelligent Assistant',
    images: [
      '/images/zwiri.png',
      '/images/zwiri_2.png',
      '/images/zwiri_3.png'
    ],
    description: `A first-year project that evolved into an intelligent personal assistant with unique detection capabilities and natural language processing.

Key Features:
• Natural language understanding
• Context-aware responses
• Custom command recognition
• Task automation capabilities
• Learning from user interactions
• Multi-modal input processing

Technical Implementation:
• Python core language
• Natural Language Processing
• Pattern recognition algorithms
• Custom command parser
• State management system
• Error handling and recovery

Learning Journey:
• Started as a basic command-line tool
• Evolved to include NLP capabilities
• Added pattern recognition
• Implemented context awareness
• Developed error recovery systems

Though built as a first-year project, Zwiri demonstrates fundamental concepts of AI assistants and natural language processing.`,
    link: 'https://github.com/BrandenPIQES/ZWIRI'
  }
};

// Create modal container
const modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
modalContainer.innerHTML = `
  <div class="modal">
    <span class="close-button">&times;</span>
    <div class="modal-content">
      <div class="slider-container">
        <div class="slider"></div>
        <button class="slider-button prev">&#10094;</button>
        <button class="slider-button next">&#10095;</button>
      </div>
      <h2 class="modal-title"></h2>
      <div class="modal-description"></div>
      <a class="modal-link" target="_blank">View Project</a>
    </div>
  </div>
`;
document.body.appendChild(modalContainer);

// Initialize variables
let currentSlide = 0;
let currentImages = [];

// Add click handlers to project cards
document.querySelectorAll('.project-card').forEach(card => {
  const projectId = card.getAttribute('data-project-id');
  if (projectData[projectId]) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => showModal(projectId));
  }
});

// Modal control functions
function showModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modal = document.querySelector('.modal-container');
  const slider = modal.querySelector('.slider');
  
  // Reset and populate slider
  currentSlide = 0;
  currentImages = project.images;
  slider.innerHTML = '';
  project.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'slider-image';
    slider.appendChild(img);
  });

  // Update modal content
  modal.querySelector('.modal-title').textContent = project.title;
  modal.querySelector('.modal-description').textContent = project.description;
  const modalLink = modal.querySelector('.modal-link');
  modalLink.href = project.link;
  modalLink.textContent = `View ${project.title}`;

  // Show first slide
  updateSlider();
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function updateSlider() {
  const slider = document.querySelector('.slider');
  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Event listeners
document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'none';
  document.body.style.overflow = 'auto';
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % currentImages.length;
  updateSlider();
});

// Close modal when clicking outside
document.querySelector('.modal-container').addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-container')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});