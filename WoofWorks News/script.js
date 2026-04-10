const newsGrid = document.getElementById('news-grid');
const JSON_FILE_PATH = 'articles.json';

// Function to create a single news block HTML element
function createNewsBlock(item) {
    // 1. Create the main anchor tag (the clickable block)
    const blockLink = document.createElement('a');
    blockLink.href = item.detailsUrl;
    blockLink.classList.add('news-block');

    // 2. Build the HTML structure for the block
    blockLink.innerHTML = `
        <div class="news-image-container">
            <img src="${item.imageUrl}" alt="${item.title}" class="news-image">
        </div>
        <div class="news-content">
            <div class="news-meta">
                <span class="meta-icon">${item.metaIconText}</span>
                <span class="meta-info">${item.metaAuthor} • ${item.metaDate}</span>
            </div>
            <span class="category-tag">${item.category}</span>
            <h2 class="news-title">
                ${item.title}
            </h2>
        </div>
        <div class="news-footer">
            <div class="views">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                ${item.views}
            </div>
            <div class="likes">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.736 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                ${item.likes}
            </div>
        </div>
    `;
    return blockLink;
}


// Function to fetch data and render the grid
async function loadArticles() {
    try {
        const response = await fetch(JSON_FILE_PATH);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const articles = await response.json(); // Parse the JSON data
        
        // Loop through the array and create the blocks
        articles.forEach(item => {
            const block = createNewsBlock(item);
            newsGrid.appendChild(block);
        });

    } catch (error) {
        console.error("Could not load news articles:", error);
        newsGrid.innerHTML = '<p>Error loading news. Please check the console.</p>';
    }
}

// Start the process
loadArticles();