/**
 * Prime Cinemas Engine - Portfolio Showcase Structure
 */

// --- Centralized Database State ---
const branches = [
    { 
        id: "abdali", 
        name: "Prime Cinemas - Abdali Mall", 
        city: "Amman",
        phone: "06 401 1300", 
        mapEmbed: "https://maps.google.com/maps?q=Abdali%20Mall&t=&z=14&ie=UTF8&iwloc=&output=embed" 
    },
    { 
        id: "baraka", 
        name: "Prime Cinemas - Baraka Mall", 
        city: "Amman",
        phone: "06 585 3200", 
        mapEmbed: "https://maps.google.com/maps?q=Baraka%20Mall&t=&z=14&ie=UTF8&iwloc=&output=embed" 
    },
    { 
        id: "irbid", 
        name: "Prime Cinemas - Irbid", 
        city: "Irbid",
        phone: "02 720 1400", 
        mapEmbed: "https://maps.google.com/maps?q=Irbid%20City%20Center&t=&z=14&ie=UTF8&iwloc=&output=embed" 
    }
];

const movies = [
    {
        id: 1,
        title: "Gladiator II",
        genre: "Action",
        time: "2h 30m",
         synopsis: "Years after witnessing the death of Maximus, Lucius is forced into the Colosseum after his home is conquered by Rome's tyrannical new emperors.",
        image: "assets/images/gladiator.jpg",
        status: "now",
        showtimes: {
            abdali: ["1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"],
            baraka: ["1:30 PM", "4:30 PM", "7:30 PM", "10:30 PM"],
            irbid: ["2:00 PM", "5:00 PM", "8:00 PM"]
        }
    },
    {
        id: 2,
        title: "7 Dogs",
        genre: "Action",
        time: "2h 5m",
        synopsis: "A ragtag crew of small-time hustlers gets pulled into a high-stakes scheme that spirals fast, testing their loyalty to each other and the city they call home.",
        image: "assets/images/7dogs.jpeg",
        status: "now",
        showtimes: {
            abdali: ["5:20 PM", "7:40 PM", "10:00 PM", "12:00 AM"],
            baraka: ["4:30 PM", "6:45 PM", "8:55 PM", "11:10 PM"],
            irbid: ["7:15 PM", "9:40 PM", "12:05 AM"]
        }
    },
    {
        id: 3,
        title: "Backrooms",
        genre: "Horror",
        time: "1h 32m",
        synopsis: "Trapped in an endless maze of empty office corridors that shouldn't exist, a small group must find a way out before whatever's stalking them does.",
        image: "assets/images/backrooms.jpeg",
        status: "now",
        showtimes: {
            abdali: ["7:05 PM", "9:05 PM", "12:15 AM"],
            baraka: ["6:10 PM", "8:10 PM", "11:45 PM"]
        }
    },
    {
        id: 4,
        title: "Sakr W Canaria",
        genre: "Comedy",
        time: "2h 10m",
        synopsis: "A mismatched pair of rivals-turned-partners stumble through one chaotic misadventure after another, proving opposites really do cause the most trouble.",
        image: "assets/images/saker-kanarya.jpeg",
        status: "now",
        showtimes: {
            abdali: ["5:30 PM★", "6:55 PM+", "7:55 PM★", "9:15 PM+", "10:15 PM★", "11:00 PM+", "11:45 PM+"],
            baraka: ["5:30 PM◆", "6:45 PM", "8:00 PM◆", "9:15 PM", "10:30 PM◆", "11:30 PM"],
            irbid: ["6:10 PM", "8:30 PM"]
        }
    },
    {
        id: 5,
        title: "Toy Story 5",
        genre: "Animation",
        time: "1h 50m",
        synopsis: "Woody, Buzz, and the gang face their strangest challenge yet when a new kind of toy threatens to change what it means to be loved by a kid.",
        image: "assets/images/toystory.jpeg",
        status: "now",
        showtimes: {
            abdali: ["7:00 PM+", "9:00 PM+"],
            baraka: ["6:00 PM", "7:00 PM◆", "8:00 PM", "9:45 PM"],
            irbid: ["6:00 PM", "8:00 PM"]
        }
    },
    {
        id: 6,
        title: "El Kalam Ala Eh (Awel Leila)",
        genre: "Comedy",
        time: "1h 45m",
        synopsis: "On the night before a life-changing decision, old friends gather for one last conversation that says more about them than any of them expected.",
        image: "assets/images/elkalam.jpeg",
        status: "now",
        showtimes: {
            baraka: ["8:30 PM", "9:30 PM", "11:45 PM"]
        }
    },
    {
        id: 7,
        title: "Ezma",
        genre: "Drama",
        time: "1h 40m",
        synopsis: "A quiet family drama about the weight of unspoken resentment, and what it takes to finally let go of a grudge that's lasted a generation.",

        image: "assets/images/ethma.jpeg",
        status: "now",
        comingToBranches: { abdali: "Mon, 6 Jul" },
        showtimes: {
            baraka: ["7:00 PM"]
        }
    },
    {
        id: 8,
        title: "Michael",
        genre: "Action",
        time: "2h 0m",
        synopsis: "A disgraced ex-operative is pulled back into a world he swore off, racing against former allies to stop a plot only he can see coming.",
        image: "assets/images/michael.jpeg",
        status: "now",
        comingToBranches: { abdali: "Mon, 6 Jul" },
        showtimes: {
            baraka: ["6:45 PM", "9:00 PM"]
        }
    },
    {
        id: 9,
        title: "Supergirl",
        genre: "Sci-Fi",
        time: "2h 15m",
        synopsis: "Kara Zor-El steps out of her cousin's shadow to defend a world that isn't always sure it wants her help — on her own terms.",
        image: "assets/images/supergirl.jpeg",
        status: "now",
        comingToBranches: { abdali: "Mon, 6 Jul" },
        showtimes: {
            baraka: ["6:30 PM", "9:00 PM◆", "11:15 PM◆"]
        }
    },
    {
        id: 10,
        title: "Minions",
        genre: "Animation",
        time: "1h 30m",
        image: "assets/images/minions.jpeg",
        status: "soon"
    },
    {
        id: 11,
        title: "Spider-Man",
        genre: "Action",
        time: "2h 20m",
        image: "assets/images/spiderman.jpeg",
        status: "soon"
    },
    {
        id: 12,
        title: "The Keeper",
        genre: "Drama",
        time: "1h 55m",
        image: "assets/images/keeper.jpeg",
        status: "soon"
    },
    {
        id: 13,
        title: "Khali Balak Mn Nfsak",
        genre: "Comedy",
        time: "1h 50m",
        image: "assets/images/KhaliBalak.jpeg",
        status: "soon"
    },
    {
        id: 14,
        title: "Ibn Meen",
        genre: "Drama",
        time: "1h 48m",
        image: "assets/images/ibnmeen.jpeg",
        status: "soon"
    },
    {
        id: 15,
        title: "Infiltrate",
        genre: "Action",
        time: "1h 58m",
        image: "assets/images/infiltrate.jpeg",
        status: "soon"
    },
    {
        id: 16,
        title: "Obsession",
        genre: "Horror",
        time: "1h 45m",
        image: "assets/images/obession.jpeg",
        status: "soon"
    },
    {
        id: 17,
        title: "Evil Dead Rise",
        genre: "Horror",
        time: "1h 36m",
        image: "assets/images/evildeadburn.jpeg",
        status: "soon"
    },
    {
        id: 18,
        title: "The Furious",
        genre: "Action",
        time: "2h 12m",
        image: "assets/images/theFurious.jpeg",
        status: "soon"
    }
];

// --- Global Booking State Object ---
let activeBookingSession = {
    movie: "",
    branch: "",
    time: ""
};

// --- DOM Target Registry ---
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const moviesContainer = document.getElementById('movies-container');
const comingSoonContainer = document.getElementById('coming-soon-container');
const locationsContainer = document.getElementById('locations-container');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const bookingModal = document.getElementById('booking-modal');
const trailerModal = document.getElementById('trailer-modal');
const bookingSummary = document.getElementById('booking-summary');

// --- Initialization Orchestration ---
window.addEventListener('load', () => {
    // Graceful loader dismissal
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);

    // Initial Renders
    renderNowShowingGrid(movies.filter(m => m.status === 'now'));
    renderComingSoon(movies.filter(m => m.status === 'soon'));
    renderLocations();
});

// --- Navbar Transition Matrix ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Advanced UI Component Generators ---
function renderNowShowingGrid(movieData) {
    moviesContainer.innerHTML = '';
    
    if(movieData.length === 0) {
        moviesContainer.innerHTML = `<p class="no-data">No movies found matching that selection.</p>`;
        return;
    }

    movieData.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'premium-movie-card';

   

        card.innerHTML = `
            <div class="card-visual-wrapper">
                <img src="${movie.image}" alt="${movie.title}" class="card-poster" loading="lazy">
                <div class="card-hover-metadata">
                    <button class="btn btn-secondary btn-sm" onclick="openTrailerModal()">Watch Trailer</button>
                </div>
            </div>
            <div class="card-details-panel">
                <div class="card-prime-meta">
                    <span class="card-genre-tag">${movie.genre}</span>
                    <span class="card-runtime">${movie.time}</span>
                </div>
            <h3>${movie.title}</h3>
                <p class="card-synopsis">${movie.synopsis || ''}</p>
                <button class="btn btn-secondary btn-sm showtimes-toggle" onclick="openShowtimesModal(${movie.id})">Show Times</button>
            </div>
        `;
        moviesContainer.appendChild(card);
    });
}
function openShowtimesModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    let markup = '';
    branches.forEach(br => {
        const times = movie.showtimes[br.id] || [];
        const startDate = movie.comingToBranches && movie.comingToBranches[br.id];
        if (times.length > 0) {
            markup += `
                <div class="branch-time-group">
                    <h4>${br.name}</h4>
                    <div class="time-chips">
                        ${times.map(t => `<button class="time-chip" onclick="initiateBooking('${movie.title}', '${br.name}', '${t}')">${t}</button>`).join('')}
                    </div>
                </div>
            `;
        } else if (startDate) {
            markup += `
                <div class="branch-time-group">
                    <h4>${br.name}</h4>
                    <p class="starts-soon-note">Starts ${startDate}</p>
                </div>
            `;
        }
    });

    document.getElementById('showtimes-modal-title').innerText = movie.title;
    document.getElementById('showtimes-modal-body').innerHTML = markup;
    document.getElementById('showtimes-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function renderComingSoon(movieData) {
    comingSoonContainer.innerHTML = '';
    movieData.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'minimal-soon-card';
        card.innerHTML = `
            <div class="soon-poster-frame">
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            </div>
            <h3>${movie.title}</h3>
            <p>${movie.genre} &bull; Expected Soon</p>
        `;
        comingSoonContainer.appendChild(card);
    });
}

function renderLocations() {
    locationsContainer.innerHTML = '';
    branches.forEach(br => {
        const card = document.createElement('div');
        card.className = 'location-card glassmorphism';
        card.innerHTML = `
            <div class="location-info-side">
                <h3>${br.name}</h3>
                <p class="city-badge">${br.city}</p>
                <div class="contact-item">
                    <span class="label">Phone Support:</span>
                    <a href="tel:${br.phone.replace(/\s/g,'')}" class="phone-link">${br.phone}</a>
                </div>
                <div class="status-indicator">
                    <span class="pulse-dot"></span> Open &bull; Showing Today
                </div>
            </div>
            <div class="location-map-side">
                <iframe src="${br.mapEmbed}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        `;
        locationsContainer.appendChild(card);
    });
}

// --- Data Filtering Matrix ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        executeSearchAndFilter();
    });
});

searchInput.addEventListener('input', () => {
    executeSearchAndFilter();
});

function executeSearchAndFilter() {
    const activeGenre = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const query = searchInput.value.toLowerCase().trim();
    
    let result = movies.filter(m => m.status === 'now');
    
    if (activeGenre !== 'all') {
        result = result.filter(m => m.genre === activeGenre);
    }
    if (query) {
        result = result.filter(m => m.title.toLowerCase().includes(query));
    }
    
    renderNowShowingGrid(result);
}

// --- Booking Engine Subroutines ---
function initiateBooking(movie, branch, time) {
    activeBookingSession = { movie, branch, time };
    
    bookingSummary.innerHTML = `
        <div class="summary-line"><strong>Movie:</strong> <span>${movie}</span></div>
        <div class="summary-line"><strong>Cinema:</strong> <span>${branch}</span></div>
        <div class="summary-line"><strong>Showtime:</strong> <span class="highlight-text">${time}</span></div>
    `;
    
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openTrailerModal() {
    trailerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModals() {
    bookingModal.classList.remove('active');
    trailerModal.classList.remove('active');
    document.getElementById('showtimes-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', (e) => {
    if(e.target === bookingModal || e.target === trailerModal) closeModals();
});

function submitBooking(e) {
    e.preventDefault();
    const tickets = document.getElementById('ticket-qty').value;
    const actionBtn = e.target.querySelector('button[type="submit"]');
    
    actionBtn.innerText = "Processing Reservation...";
    actionBtn.style.opacity = "0.6";
    
    setTimeout(() => {
        actionBtn.innerText = "Reservation Successful!";
        actionBtn.style.backgroundColor = "#2e7d32";
        
        setTimeout(() => {
            closeModals();
            e.target.reset();
            actionBtn.innerText = "Reserve Seats Now";
            actionBtn.style.backgroundColor = "var(--accent)";
            actionBtn.style.opacity = "1";
        }, 1800);
    }, 1200);
}