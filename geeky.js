document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const previewContainer = document.getElementById('previewContainer');
    const memesGrid = document.getElementById('memesGrid');
    const captionInputContainer = document.getElementById('captionInputContainer');
    const captionInput = document.getElementById('captionInput');
    const postMemeBtn = document.getElementById('postMemeBtn');
    const modal = document.getElementById('memeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.querySelector('.modal-title');
    const modalCaption = document.querySelector('.modal-caption');
    const closeBtn = document.querySelector('.close-btn');
    const commentsContainer = document.querySelector('.comments-container');
    const commentInput = document.querySelector('.comment-input');
    const commentBtn = document.querySelector('.comment-btn');

    // State
    let memes = [];
    let currentUpload = null;
    let currentMeme = null;

    // ============ UPLOAD FUNCTIONALITY ============

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    // Handle drag enter and over
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('dragover');
        });
    });

    // Handle drag leave and drop
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('dragover');
        });
    });

    // Handle file drop
    dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Handle file selection via button
    selectFileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // Process uploaded files
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = (e) => {
                    currentUpload = {
                        url: e.target.result,
                        title: file.name,
                        laughReactions: 0,
                        loveReactions: 0,
                        comments: []
                    };
                    
                    // Show preview
                    previewContainer.innerHTML = '';
                    const preview = createPreview(e.target.result, file.name);
                    previewContainer.appendChild(preview);
                    
                    // Show caption input
                    captionInputContainer.style.display = 'flex';
                    captionInput.focus();
                };
                
                reader.readAsDataURL(file);
            } else {
                alert('Please upload image files only!');
            }
        });
    }

    // Create preview image
    function createPreview(url, title) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = title;
        img.className = 'preview-image';
        return img;
    }

    // Handle meme posting
    postMemeBtn.addEventListener('click', () => {
        if (currentUpload && captionInput.value.trim()) {
            const meme = {
                ...currentUpload,
                id: Date.now(),
                caption: captionInput.value.trim(),
                date: new Date().toLocaleDateString()
            };
            
            memes.unshift(meme);
            updateMemesGrid();
            
            // Reset upload state
            currentUpload = null;
            previewContainer.innerHTML = '';
            captionInput.value = '';
            captionInputContainer.style.display = 'none';
        }
    });

    // ============ MEME GRID FUNCTIONALITY ============

    // Create individual meme card
    function createMemeCard(meme) {
        return `
            <div class="meme-card" data-meme-id="${meme.id}">
                <img src="${meme.url}" alt="${meme.title}" class="meme-image">
                <div class="meme-info">
                    <div class="meme-title">${meme.title}</div>
                    <div class="meme-caption">${meme.caption}</div>
                    <div class="meme-reactions">
                        😂 ${meme.laughReactions} ❤️ ${meme.loveReactions}
                        ${meme.comments.length ? `💬 ${meme.comments.length}` : ''}
                    </div>
                    <div class="meme-date">${meme.date}</div>
                </div>
            </div>
        `;
    }

    // Update entire memes grid
    function updateMemesGrid() {
        memesGrid.innerHTML = memes.map(meme => createMemeCard(meme)).join('');
        attachMemeCardListeners();
    }

    // Attach click listeners to meme cards
    function attachMemeCardListeners() {
        const memeCards = document.querySelectorAll('.meme-card');
        memeCards.forEach(card => {
            card.addEventListener('click', () => {
                const memeId = parseInt(card.dataset.memeId);
                const meme = memes.find(m => m.id === memeId);
                if (meme) {
                    openMemeModal(meme);
                }
            });
        });
    }

    // ============ MODAL FUNCTIONALITY ============

    // Open modal with meme details
    function openMemeModal(meme) {
        currentMeme = meme;
        modalImage.src = meme.url;
        modalImage.alt = meme.title;
        modalTitle.textContent = meme.title;
        modalCaption.textContent = meme.caption;
        
        updateReactionCounts();
        updateComments();
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Update reaction counts in modal
    function updateReactionCounts() {
        const laughBtn = document.querySelector('.laugh-btn .reaction-count');
        const loveBtn = document.querySelector('.love-btn .reaction-count');
        
        laughBtn.textContent = currentMeme.laughReactions;
        loveBtn.textContent = currentMeme.loveReactions;
    }

    // Update comments section in modal
    function updateComments() {
        commentsContainer.innerHTML = currentMeme.comments.map(comment => `
            <div class="comment">
                <p>${comment}</p>
            </div>
        `).join('');
    }

    // Close modal button
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentMeme = null;
    }

    // ============ REACTIONS AND COMMENTS ============

    // Handle laugh reaction
    document.querySelector('.laugh-btn').addEventListener('click', () => {
        if (currentMeme) {
            currentMeme.laughReactions++;
            updateReactionCounts();
            updateMemesGrid();
        }
    });

    // Handle love reaction
    document.querySelector('.love-btn').addEventListener('click', () => {
        if (currentMeme) {
            currentMeme.loveReactions++;
            updateReactionCounts();
            updateMemesGrid();
        }
    });

    // Handle comment posting
    commentBtn.addEventListener('click', () => {
        const comment = commentInput.value.trim();
        if (comment && currentMeme) {
            currentMeme.comments.push(comment);
            updateComments();
            updateMemesGrid();
            commentInput.value = '';
        }
    });

    // Handle Enter key in comment input
    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            commentBtn.click();
        }
    });

    // Add these to your DOM Elements section
    const prevBtn = document.getElementById('prevMeme');
    const nextBtn = document.getElementById('nextMeme');

    // Add this function to handle navigation
    function navigateToMeme(direction) {
        if (!currentMeme) return;
        
        const currentIndex = memes.findIndex(meme => meme.id === currentMeme.id);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex + 1 >= memes.length ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex - 1 < 0 ? memes.length - 1 : currentIndex - 1;
        }
        
        openMemeModal(memes[newIndex]);
    }

    // Add these event listeners
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateToMeme('prev');
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateToMeme('next');
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                navigateToMeme('prev');
            } else if (e.key === 'ArrowRight') {
                navigateToMeme('next');
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Initialize the page
    updateMemesGrid();
});