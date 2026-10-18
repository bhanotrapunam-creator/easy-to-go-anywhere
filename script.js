const destinations = [
  {
    id: "delhi", name: "Delhi", city: "New Delhi", state: "Delhi",
    category: ["Historical Places", "Family Trips", "Weekend Trips"],
    budget: 5000, bestTime: "October to March",
    attractions: ["India Gate", "Red Fort", "Qutub Minar", "Humayun's Tomb"],
    description: "Explore India's capital through historic monuments, busy markets, museums and famous street food.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    days: ["Visit India Gate and Humayun's Tomb.", "Explore the Red Fort and Old Delhi markets.", "Visit Qutub Minar and enjoy local food."]
  },
  {
    id: "agra", name: "Agra", city: "Agra", state: "Uttar Pradesh",
    category: ["Historical Places", "Romantic Getaways", "Family Trips"],
    budget: 4500, bestTime: "October to March",
    attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    description: "Discover the magnificent Taj Mahal, Mughal architecture and centuries of history.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    days: ["See the Taj Mahal and explore its gardens.", "Visit Agra Fort and Mehtab Bagh.", "Explore local handicrafts before departure."]
  },
  {
    id: "jaipur", name: "Jaipur", city: "Jaipur", state: "Rajasthan",
    category: ["Historical Places", "Family Trips", "Romantic Getaways"],
    budget: 6000, bestTime: "October to March",
    attractions: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
    description: "Explore the Pink City, royal palaces, colorful bazaars and Rajasthani cuisine.",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
    days: ["Visit Amber Fort and Jal Mahal.", "Explore Hawa Mahal and City Palace.", "Shop in local bazaars and taste Rajasthani food."]
  },
  {
    id: "udaipur", name: "Udaipur", city: "Udaipur", state: "Rajasthan",
    category: ["Romantic Getaways", "Historical Places", "Family Trips"],
    budget: 7000, bestTime: "October to March",
    attractions: ["Lake Pichola", "City Palace", "Fateh Sagar Lake"],
    description: "A beautiful lakeside city filled with palaces, heritage streets and romantic sunsets.",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80",
    days: ["Explore City Palace and the old city.", "Enjoy a Lake Pichola boat ride if available.", "Visit Fateh Sagar Lake and local cafes."]
  },
  {
    id: "goa", name: "Goa", city: "Panaji", state: "Goa",
    category: ["Beaches", "Adventure", "Romantic Getaways", "Family Trips"],
    budget: 8000, bestTime: "November to February",
    attractions: ["Baga Beach", "Fort Aguada", "Old Goa", "Palolem Beach"],
    description: "Enjoy sandy beaches, Portuguese heritage, coastal cuisine and beautiful sunsets.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    days: ["Explore North Goa beaches and markets.", "Visit Old Goa churches and Fort Aguada.", "Relax at a beach and explore local food."]
  },
  {
    id: "manali", name: "Manali", city: "Manali", state: "Himachal Pradesh",
    category: ["Mountains", "Adventure", "Hill Stations", "Romantic Getaways"],
    budget: 9000, bestTime: "March to June",
    attractions: ["Solang Valley", "Hadimba Temple", "Old Manali", "Rohtang area"],
    description: "Enjoy Himalayan scenery, mountain cafes, river valleys and seasonal outdoor activities.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Old Manali and Hadimba Temple.", "Visit Solang Valley if conditions permit.", "Enjoy mountain views and local cafes."]
  },
  {
    id: "shimla", name: "Shimla", city: "Shimla", state: "Himachal Pradesh",
    category: ["Mountains", "Hill Stations", "Family Trips", "Weekend Trips"],
    budget: 7000, bestTime: "March to June",
    attractions: ["The Ridge", "Mall Road", "Jakhoo Temple"],
    description: "Walk along colonial-era streets, enjoy pine forests and take in Himalayan views.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    days: ["Explore the Ridge and Mall Road.", "Visit Jakhoo Temple and nearby viewpoints.", "Enjoy a relaxed morning and local shopping."]
  },
  {
    id: "leh", name: "Leh-Ladakh", city: "Leh", state: "Ladakh",
    category: ["Mountains", "Adventure", "Wildlife"],
    budget: 14000, bestTime: "June to September",
    attractions: ["Pangong Lake", "Nubra Valley", "Shanti Stupa", "Leh Palace"],
    description: "Discover high-altitude deserts, dramatic mountains, monasteries and unique landscapes.",
    image: "https://images.unsplash.com/photo-1566837497312-7be4f6f6c9e6?auto=format&fit=crop&w=800&q=80",
    days: ["Acclimatize in Leh and visit Shanti Stupa.", "Explore a suitable local valley tour.", "Plan a lake visit only if permits and road conditions allow."]
  },
  {
    id: "srinagar", name: "Srinagar", city: "Srinagar", state: "Jammu and Kashmir",
    category: ["Mountains", "Romantic Getaways", "Family Trips"],
    budget: 10000, bestTime: "April to October",
    attractions: ["Dal Lake", "Mughal Gardens", "Shankaracharya Temple"],
    description: "Experience Himalayan scenery, traditional houseboats, gardens and Kashmiri cuisine.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Srinagar's gardens and old city.", "Enjoy Dal Lake and a boat ride if available.", "Visit local markets and viewpoints."]
  },
  {
    id: "rishikesh", name: "Rishikesh", city: "Rishikesh", state: "Uttarakhand",
    category: ["Adventure", "Religious Places", "Mountains", "Weekend Trips"],
    budget: 5000, bestTime: "September to April",
    attractions: ["Lakshman Jhula area", "Triveni Ghat", "Beatles Ashram"],
    description: "Visit riverside temples, yoga centers, mountain foothills and adventure activity hubs.",
    image: "https://images.unsplash.com/photo-1589307357647-7c3b5f7b8e2d?auto=format&fit=crop&w=800&q=80",
    days: ["Explore the riverfront and local cafes.", "Visit ashrams and attend the evening Ganga Aarti.", "Try a permitted activity or enjoy a peaceful walk."]
  },
  {
    id: "varanasi", name: "Varanasi", city: "Varanasi", state: "Uttar Pradesh",
    category: ["Religious Places", "Historical Places", "Family Trips"],
    budget: 4500, bestTime: "October to March",
    attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath"],
    description: "Experience one of India's oldest cities, its sacred riverfront, heritage and traditions.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    days: ["Explore the ghats and old city.", "Visit important temples and Sarnath.", "Discover local food and traditional markets."]
  },
  {
    id: "mumbai", name: "Mumbai", city: "Mumbai", state: "Maharashtra",
    category: ["Historical Places", "Family Trips", "Weekend Trips"],
    budget: 7000, bestTime: "November to February",
    attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
    description: "Discover a lively coastal metropolis, historic architecture, cinema culture and food.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    days: ["Visit the Gateway of India and Colaba.", "Explore Marine Drive and museums.", "Try local street food and explore a neighborhood."]
  },
  {
    id: "kerala", name: "Kerala Backwaters", city: "Alappuzha", state: "Kerala",
    category: ["Beaches", "Wildlife", "Romantic Getaways", "Family Trips"],
    budget: 9000, bestTime: "October to March",
    attractions: ["Alappuzha Backwaters", "Kumarakom", "Varkala Beach"],
    description: "Discover tranquil waterways, coconut groves, beaches and lush tropical landscapes.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    days: ["Explore the backwaters and local villages.", "Enjoy a responsibly operated boat trip.", "Visit a nearby beach or local market."]
  },
  {
    id: "ooty", name: "Ooty", city: "Ooty", state: "Tamil Nadu",
    category: ["Mountains", "Hill Stations", "Family Trips", "Weekend Trips"],
    budget: 6500, bestTime: "March to June",
    attractions: ["Ooty Lake", "Botanical Gardens", "Doddabetta Peak"],
    description: "Enjoy tea gardens, cool weather, green hills and peaceful hill-station walks.",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Ooty town and Botanical Gardens.", "Visit tea gardens and a suitable viewpoint.", "Enjoy a relaxed walk and local shopping."]
  },
  {
    id: "darjeeling", name: "Darjeeling", city: "Darjeeling", state: "West Bengal",
    category: ["Mountains", "Hill Stations", "Family Trips"],
    budget: 8000, bestTime: "March to May",
    attractions: ["Tiger Hill", "Batasia Loop", "Tea Gardens"],
    description: "Discover tea plantations, mountain sunrises, heritage railways and Himalayan views.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2488ffa?auto=format&fit=crop&w=800&q=80",
    days: ["Explore local markets and tea gardens.", "Visit Tiger Hill at an appropriate time.", "Explore Batasia Loop and nearby viewpoints."]
  },
  {
    id: "sikkim", name: "Sikkim", city: "Gangtok", state: "Sikkim",
    category: ["Mountains", "Adventure", "Wildlife"],
    budget: 10000, bestTime: "March to May",
    attractions: ["Tsomgo Lake", "MG Marg", "Rumtek Monastery"],
    description: "Explore Himalayan scenery, monasteries, mountain lakes and welcoming local culture.",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Gangtok and MG Marg.", "Visit permitted nearby mountain attractions.", "Discover monasteries and local culture."]
  },
  {
    id: "meghalaya", name: "Meghalaya", city: "Shillong", state: "Meghalaya",
    category: ["Mountains", "Adventure", "Wildlife"],
    budget: 9000, bestTime: "October to April",
    attractions: ["Living Root Bridges", "Cherrapunji", "Umiam Lake"],
    description: "Discover misty hills, waterfalls, living root bridges and lush green landscapes.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Shillong and Umiam Lake.", "Visit a root bridge with a local guide.", "Explore waterfalls subject to weather and access."]
  },
  {
    id: "andaman", name: "Andaman Islands", city: "Port Blair", state: "Andaman and Nicobar Islands",
    category: ["Beaches", "Adventure", "Romantic Getaways"],
    budget: 14000, bestTime: "October to May",
    attractions: ["Swaraj Dweep", "Radhanagar Beach", "Cellular Jail"],
    description: "Explore tropical beaches, marine life, island scenery and fascinating history.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Port Blair and its historical sites.", "Travel to an accessible island and visit its beaches.", "Enjoy a permitted water activity or a relaxed beach day."]
  },
  {
    id: "hyderabad", name: "Hyderabad", city: "Hyderabad", state: "Telangana",
    category: ["Historical Places", "Family Trips", "Weekend Trips"],
    budget: 5500, bestTime: "October to February",
    attractions: ["Charminar", "Golconda Fort", "Hussain Sagar"],
    description: "Explore historic forts, lively markets, modern city attractions and famous biryani.",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=800&q=80",
    days: ["Visit Charminar and local markets.", "Explore Golconda Fort and nearby attractions.", "Enjoy city parks and local cuisine."]
  },
  {
    id: "hampi", name: "Hampi", city: "Hosapete", state: "Karnataka",
    category: ["Historical Places", "Adventure"],
    budget: 5000, bestTime: "October to February",
    attractions: ["Virupaksha Temple", "Vittala Temple", "Hampi Bazaar"],
    description: "Walk through the remarkable ruins and rocky landscapes of a historic Vijayanagara city.",
    image: "https://images.unsplash.com/photo-1600100397608-f0101c5e4a34?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Virupaksha Temple and Hampi Bazaar.", "Discover historic monuments and stone architecture.", "Enjoy the rocky landscapes and local village areas."]
  },
  {
    id: "amritsar", name: "Amritsar", city: "Amritsar", state: "Punjab",
    category: ["Religious Places", "Historical Places", "Family Trips"],
    budget: 4500, bestTime: "October to March",
    attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah border ceremony"],
    description: "Discover Sikh heritage, important historical sites and vibrant Punjabi cuisine.",
    image: "https://images.unsplash.com/photo-1588096344356-3e5c2b3b6e1e?auto=format&fit=crop&w=800&q=80",
    days: ["Visit the Golden Temple and surrounding heritage sites.", "Explore Jallianwala Bagh and local markets.", "Check current timings for the border ceremony."]
  },
  {
    id: "jaisalmer", name: "Jaisalmer", city: "Jaisalmer", state: "Rajasthan",
    category: ["Historical Places", "Adventure", "Romantic Getaways"],
    budget: 7000, bestTime: "November to February",
    attractions: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
    description: "Discover a golden desert city, sandstone architecture and traditional Rajasthani culture.",
    image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Jaisalmer Fort and old streets.", "Visit the havelis and local markets.", "Explore desert areas with a responsible local operator."]
  },
  {
    id: "pune", name: "Pune", city: "Pune", state: "Maharashtra",
    category: ["Historical Places", "Weekend Trips", "Family Trips"],
    budget: 4500, bestTime: "October to February",
    attractions: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
    description: "Discover Maratha heritage, museums, nearby hills and a lively food scene.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Shaniwar Wada and nearby heritage areas.", "Visit Aga Khan Palace.", "Plan a suitable day trip to a nearby hill fort."]
  },
  {
    id: "agra2", name: "Khajuraho", city: "Khajuraho", state: "Madhya Pradesh",
    category: ["Historical Places", "Religious Places"],
    budget: 5000, bestTime: "October to March",
    attractions: ["Western Group of Temples", "Archaeological Museum", "Panna National Park"],
    description: "Explore intricate temple architecture, heritage sites and nearby natural landscapes.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    days: ["Explore the Western Group of Temples.", "Visit museums and nearby heritage sites.", "Consider a planned excursion to the Panna area."]
  },
  {
    id: "mysore", name: "Mysuru", city: "Mysuru", state: "Karnataka",
    category: ["Historical Places", "Family Trips", "Weekend Trips"],
    budget: 5000, bestTime: "October to March",
    attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
    description: "Explore royal palaces, local markets, historic temples and beautiful gardens.",
    image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?auto=format&fit=crop&w=800&q=80",
    days: ["Explore Mysore Palace and nearby markets.", "Visit Chamundi Hills.", "Enjoy the gardens and local food."]
  },
  {
    id: "jimcorbett", name: "Jim Corbett", city: "Ramnagar", state: "Uttarakhand",
    category: ["Wildlife", "Adventure", "Family Trips"],
    budget: 8000, bestTime: "November to February",
    attractions: ["National Park safari zones", "Corbett Museum", "Kosi River area"],
    description: "Discover forest landscapes and wildlife habitats with authorized local guides.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
    days: ["Explore the area and check authorized safari options.", "Take a permitted guided wildlife excursion.", "Enjoy nearby nature trails where access is allowed."]
  },
  {
    id: "pondicherry", name: "Puducherry", city: "Puducherry", state: "Puducherry",
    category: ["Beaches", "Romantic Getaways", "Weekend Trips"],
    budget: 6000, bestTime: "October to March",
    attractions: ["Promenade Beach", "White Town", "Auroville"],
    description: "Enjoy coastal promenades, colorful architecture, cafes and a relaxed seaside atmosphere.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    days: ["Explore White Town and the promenade.", "Visit Auroville according to visitor guidelines.", "Enjoy the coast and local cafes."]
  }
];

const categories = [
  { name: "Mountains", icon: "🏔️" },
  { name: "Beaches", icon: "🏖️" },
  { name: "Historical Places", icon: "🏰" },
  { name: "Religious Places", icon: "🛕" },
  { name: "Wildlife", icon: "🦁" },
  { name: "Adventure", icon: "🧗" },
  { name: "Hill Stations", icon: "🌲" },
  { name: "Family Trips", icon: "👨‍👩‍👧‍👦" },
  { name: "Weekend Trips", icon: "🚗" }
];

const STORAGE = {
  favorites: "easyGoFavorites",
  history: "easyGoHistory",
  trips: "easyGoTrips"
};

const read = key => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

const write = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

let favorites = read(STORAGE.favorites);
let history = read(STORAGE.history);
let savedTrips = read(STORAGE.trips);
let activeCategory = "All";
let currentTrip = null;
let authMode = "login";

const $ = id => document.getElementById(id);
const getPlace = id => destinations.find(place => place.id === id);

const money = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Math.round(amount));

function safe(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function toast(message) {
  const box = $("toast");
  if (!box) return;

  box.textContent = message;
  box.classList.add("show");

  clearTimeout(toast.timer);
  toast.timer = setTimeout(
    () => box.classList.remove("show"),
    2500
  );
}

function addHistory(type, title, destinationId = "") {
  history.unshift({
    id: Date.now().toString(),
    type,
    title,
    destinationId,
    date: new Date().toISOString()
  });

  history = history.slice(0, 60);
  write(STORAGE.history, history);
  renderHistory();
}

function renderCategories() {
  $("categoryGrid").innerHTML = [
    { name: "All", icon: "🌏", label: "All Places" },
    ...categories
  ].map(category => `
    <button class="category-card ${
      activeCategory === category.name ? "active" : ""
    }" data-category="${safe(category.name)}">
      <span class="category-icon">${category.icon}</span>
      <strong>${safe(category.label || category.name)}</strong>
    </button>
  `).join("");
}

function matches(place, query) {
  const text = [
    place.name,
    place.city,
    place.state,
    ...place.category,
    ...place.attractions,
    place.description
  ].join(" ").toLowerCase();

  return text.includes(query.toLowerCase());
}

function filteredPlaces() {
  const query = $("destinationSearch").value.trim();
  const sort = $("sortPlaces").value;

  const list = destinations.filter(place =>
    (!query || matches(place, query)) &&
    (activeCategory === "All" ||
      place.category.includes(activeCategory))
  );

  if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "budget") {
    list.sort((a, b) => a.budget - b.budget);
  }

  return list;
}

function renderDestinations() {
  const grid = $("destinationGrid");
  const list = filteredPlaces();

  $("resultsMessage").textContent =
    `${list.length} destination(s) found`;

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No destinations found</h3>
        <p>Try another search or reset the filters.</p>
        <button class="btn btn-outline" id="resetSearch">
          Reset filters
        </button>
      </div>
    `;

    $("resetSearch").onclick = resetFilters;
    return;
  }

  grid.innerHTML = list.map(place => `
    <article class="destination-card">
      <div class="card-image-wrap">
        <img src="${place.image}" alt="${safe(place.name)}" loading="lazy">
        <span class="image-label">${safe(place.category[0])}</span>
        <button class="favorite-button ${
          favorites.includes(place.id) ? "active" : ""
        }" data-favorite="${place.id}">
          ${favorites.includes(place.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="card-body">
        <p class="card-location">
          📍 ${safe(place.city)}, ${safe(place.state)}
        </p>
        <h3>${safe(place.name)}</h3>
        <p class="card-description">${safe(place.description)}</p>

        <div class="card-meta">
          <span>🗓 ${safe(place.bestTime)}</span>
          <strong>${money(place.budget)}+</strong>
        </div>

        <div class="card-actions">
          <button class="btn btn-outline" data-details="${place.id}">
            View Details
          </button>
          <button class="btn btn-primary" data-plan="${place.id}">
            Plan Trip
          </button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-favorite]").forEach(button => {
    button.onclick = () => toggleFavorite(button.dataset.favorite);
  });

  grid.querySelectorAll("[data-details]").forEach(button => {
    button.onclick = () => openDetails(button.dataset.details);
  });

  grid.querySelectorAll("[data-plan]").forEach(button => {
    button.onclick = () => selectTripDestination(button.dataset.plan);
  });
}

function resetFilters() {
  $("destinationSearch").value = "";
  $("categoryFilter").value = "All";
  $("sortPlaces").value = "featured";
  activeCategory = "All";

  renderCategories();
  renderDestinations();
}

function searchPlaces(query = $("destinationSearch").value) {
  $("destinationSearch").value = query;
  activeCategory = "All";
  $("categoryFilter").value = "All";

  renderCategories();
  renderDestinations();

  if (query.trim()) {
    addHistory("Search", query.trim());
  }

  $("suggestions").classList.remove("show");
}

function renderSuggestions() {
  const query = $("destinationSearch").value.trim();
  const box = $("suggestions");

  if (!query) {
    box.innerHTML = "";
    box.classList.remove("show");
    return;
  }

  const found = destinations
    .filter(place => matches(place, query))
    .slice(0, 6);

  box.innerHTML = found.length
    ? found.map(place => `
        <button class="suggestion-item" data-suggestion="${place.id}">
          📍 ${safe(place.name)} · ${safe(place.state)}
        </button>
      `).join("")
    : `<p class="suggestion-item">No matching destination.</p>`;

  box.classList.add("show");

  box.querySelectorAll("[data-suggestion]").forEach(button => {
    button.onclick = () => {
      searchPlaces(getPlace(button.dataset.suggestion).name);
    };
  });
}

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  searchPlaces();
});

$("destinationSearch").addEventListener("input", renderSuggestions);

$("categoryGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  $("categoryFilter").value = activeCategory;

  renderCategories();
  renderDestinations();
});

$("categoryFilter").addEventListener("change", event => {
  activeCategory = event.target.value;
  renderCategories();
  renderDestinations();
});

$("sortPlaces").addEventListener("change", renderDestinations);

$("showAllPlaces").onclick = () => {
  resetFilters();
  $("destinationSearch").value = "";
};

document.addEventListener("click", event => {
  if (!event.target.closest(".search-box")) {
    $("suggestions").classList.remove("show");
  }
});
function openDetails(id) {
  const place = getPlace(id);
  if (!place) return;

  addHistory("Viewed destination", place.name, id);

  $("detailsContent").innerHTML = `
    <img src="${place.image}" alt="${safe(place.name)}">
    <p class="eyebrow">${safe(place.state)}</p>
    <h2>${safe(place.name)}</h2>
    <p>${safe(place.description)}</p>
    <p><strong>Best time:</strong> ${safe(place.bestTime)}</p>
    <p><strong>Estimated budget:</strong> ${money(place.budget)} per person</p>
    <p><strong>Categories:</strong> ${place.category.map(safe).join(", ")}</p>
    <h3>Popular attractions</h3>
    <ul>${place.attractions.map(item => `<li>${safe(item)}</li>`).join("")}</ul>
    <button class="btn btn-primary" id="detailPlan">Plan a Trip</button>
    <button class="btn btn-outline" id="detailMap">View Map</button>
  `;

  $("detailsDialog").showModal();

  $("detailPlan").onclick = () => {
    $("detailsDialog").close();
    selectTripDestination(id);
  };

  $("detailMap").onclick = () => {
    $("detailsDialog").close();
    openMap(id);
  };
}

$("closeDetails").onclick = () => $("detailsDialog").close();

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(item => item !== id)
    : [...favorites, id];

  write(STORAGE.favorites, favorites);
  renderDestinations();
  renderFavorites();

  toast(
    favorites.includes(id)
      ? "Added to favorites."
      : "Removed from favorites."
  );
}

function renderFavorites() {
  const grid = $("favoritesGrid");
  const places = favorites.map(getPlace).filter(Boolean);

  if (!places.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No favorites yet</h3>
        <p>Use the heart button on a destination to save it.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = places.map(place => `
    <article class="destination-card">
      <div class="card-image-wrap">
        <img src="${place.image}" alt="${safe(place.name)}" loading="lazy">
        <button class="favorite-button active"
          data-unfavorite="${place.id}">♥</button>
      </div>

      <div class="card-body">
        <h3>${safe(place.name)}</h3>
        <p>${safe(place.description)}</p>

        <div class="card-actions">
          <button class="btn btn-outline"
            data-fav-details="${place.id}">View Details</button>
          <button class="btn btn-primary"
            data-fav-plan="${place.id}">Plan Trip</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-unfavorite]").forEach(button => {
    button.onclick = () => toggleFavorite(button.dataset.unfavorite);
  });

  grid.querySelectorAll("[data-fav-details]").forEach(button => {
    button.onclick = () => openDetails(button.dataset.favDetails);
  });

  grid.querySelectorAll("[data-fav-plan]").forEach(button => {
    button.onclick = () => selectTripDestination(button.dataset.favPlan);
  });
}

function populateSelects() {
  const options = destinations.map(place => `
    <option value="${place.id}">
      ${safe(place.name)} · ${safe(place.state)}
    </option>
  `).join("");

  ["tripDestination", "weatherDestination", "mapDestination"].forEach(id => {
    $(id).innerHTML = options;
  });

  $("categoryFilter").innerHTML = `
    <option value="All">All Categories</option>
    ${categories.map(category => `
      <option value="${safe(category.name)}">${safe(category.name)}</option>
    `).join("")}
  `;
}

function selectTripDestination(id) {
  const place = getPlace(id);
  if (!place) return;

  $("tripDestination").value = id;
  $("tripBudget").value = place.budget;
  $("planner").scrollIntoView({ behavior: "smooth" });
}

const today = new Date().toLocaleDateString("en-CA");

$("startDate").min = today;
$("endDate").min = today;

$("startDate").addEventListener("change", () => {
  $("endDate").min = $("startDate").value || today;

  if ($("endDate").value < $("startDate").value) {
    $("endDate").value = $("startDate").value;
  }
});

function tripDays(start, end) {
  return Math.round(
    (new Date(end) - new Date(start)) / 86400000
  ) + 1;
}

function estimateBudget(place, trip) {
  const transportRates = {
    train: 800,
    bus: 600,
    flight: 3500,
    car: 1800
  };

  const stayRates = {
    budget: 900,
    standard: 1800,
    premium: 4000
  };

  const transport =
    transportRates[trip.transport] * trip.travelers * 2;

  const stay =
    stayRates[trip.accommodation] *
    (trip.days - 1) * trip.travelers;

  const food = 650 * trip.days * trip.travelers;

  const activities =
    Math.max(500, place.budget * 0.18) * trip.travelers;

  const other = 400 * trip.days * trip.travelers;
  const total = transport + stay + food + activities + other;

  return {
    transport,
    stay,
    food,
    activities,
    other,
    total,
    perPerson: total / trip.travelers
  };
}

function makeItinerary(place, days) {
  return Array.from({ length: days }, (_, index) => `
    <div class="itinerary-day">
      <strong>Day ${index + 1}</strong>
      <p>${safe(place.days[index % place.days.length])}</p>
    </div>
  `).join("");
}

$("tripForm").addEventListener("submit", event => {
  event.preventDefault();

  const place = getPlace($("tripDestination").value);
  const start = $("startDate").value;
  const end = $("endDate").value;
  const travelers = Number($("travelers").value);
  const budgetLimit = Number($("tripBudget").value);

  if (
    !place ||
    !$("departureCity").value.trim() ||
    !start ||
    !end ||
    start < today ||
    end < start ||
    travelers < 1
  ) {
    toast("Please check all trip details and dates.");
    return;
  }

  const trip = {
    id: Date.now().toString(),
    destinationId: place.id,
    destination: place.name,
    departure: $("departureCity").value.trim(),
    start,
    end,
    days: tripDays(start, end),
    travelers,
    transport: $("transport").value,
    accommodation: $("accommodation").value,
    budgetLimit
  };

  trip.budget = estimateBudget(place, trip);
  currentTrip = trip;

  renderTripResult(trip);

  addHistory(
    "Planned trip",
    `${trip.departure} to ${place.name}`,
    place.id
  );
});

function renderTripResult(trip) {
  const budget = trip.budget;
  const place = getPlace(trip.destinationId);

  $("tripResult").innerHTML = `
    <div class="trip-summary">
      <h3>${safe(trip.destination)} Trip</h3>
      <p>From ${safe(trip.departure)} · ${trip.start} to ${trip.end}</p>
      <p>${trip.days} day(s) · ${trip.travelers} traveler(s)</p>

      <h4>Estimated budget</h4>
      <ul class="budget-breakdown">
        <li>Transport: ${money(budget.transport)}</li>
        <li>Accommodation: ${money(budget.stay)}</li>
        <li>Food: ${money(budget.food)}</li>
        <li>Activities: ${money(budget.activities)}</li>
        <li>Other: ${money(budget.other)}</li>
      </ul>

      <h3>Total: ${money(budget.total)}</h3>
      <p>Per person: ${money(budget.perPerson)}</p>

      <p class="form-note">
        ${budget.perPerson > trip.budgetLimit
          ? "Estimate is above your budget."
          : "Estimate is within your budget."}
      </p>

      <h4>Suggested itinerary</h4>
      ${makeItinerary(place, trip.days)}

      <button class="btn btn-primary" id="saveTrip">Save Trip</button>
      <button class="btn btn-outline" id="copyTrip">Copy Summary</button>
    </div>
  `;

  $("saveTrip").onclick = saveTrip;

  $("copyTrip").onclick = async () => {
    try {
      await navigator.clipboard.writeText(
        `${trip.destination}: ${trip.start} to ${trip.end}. ` +
        `Estimated total: ${money(budget.total)}.`
      );

      toast("Trip summary copied.");
    } catch {
      toast("Copy is unavailable in this browser.");
    }
  };
}

function saveTrip() {
  if (!currentTrip) return;

  savedTrips.unshift(currentTrip);
  savedTrips = savedTrips.slice(0, 50);

  write(STORAGE.trips, savedTrips);
  renderSavedTrips();

  toast("Trip saved in this browser.");
}
function renderSavedTrips() {
  const grid = $("savedTrips");

  if (!savedTrips.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No saved trips yet.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = savedTrips.map(trip => `
    <article class="history-item">
      <div>
        <h3>🧳 ${safe(trip.destination)}</h3>
        <p>${trip.start} to ${trip.end} · ${trip.travelers} traveler(s)</p>
        <p>${money(trip.budget.total)} estimated</p>
      </div>

      <div class="history-actions">
        <button class="small-action" data-load="${trip.id}">
          View Plan
        </button>
        <button class="small-action" data-remove="${trip.id}">
          Remove
        </button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-load]").forEach(button => {
    button.onclick = () => {
      currentTrip = savedTrips.find(
        trip => trip.id === button.dataset.load
      );

      renderTripResult(currentTrip);
      $("planner").scrollIntoView({ behavior: "smooth" });
    };
  });

  grid.querySelectorAll("[data-remove]").forEach(button => {
    button.onclick = () => {
      savedTrips = savedTrips.filter(
        trip => trip.id !== button.dataset.remove
      );

      write(STORAGE.trips, savedTrips);
      renderSavedTrips();
    };
  });
}

// Display travel searches and activities.
function renderHistory() {
  const list = $("historyList");

  if (!history.length) {
    list.innerHTML = `
      <div class="empty-state">
        <p>No travel activity yet.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = history.map(item => `
    <article class="history-item">
      <div>
        <h3>${safe(item.type)}: ${safe(item.title)}</h3>
        <p>${new Date(item.date).toLocaleString()}</p>
      </div>

      <button class="small-action"
        data-delete-history="${item.id}">
        Delete
      </button>
    </article>
  `).join("");

  list.querySelectorAll("[data-delete-history]").forEach(button => {
    button.onclick = () => {
      history = history.filter(
        item => item.id !== button.dataset.deleteHistory
      );

      write(STORAGE.history, history);
      renderHistory();
    };
  });
}

$("clearHistory").onclick = () => {
  if (confirm("Clear travel history?")) {
    history = [];
    write(STORAGE.history, history);
    renderHistory();
  }
};

// Demo only: live weather is not connected.
function showWeather() {
  const place = getPlace($("weatherDestination").value);

  $("weatherTitle").textContent =
    `Weather for ${place?.name || "your destination"}`;

  $("weatherMessage").textContent =
    "Live weather is not connected. Check an official forecast before travelling.";
}

$("weatherCheck").onclick = showWeather;
$("weatherDestination").onchange = showWeather;

// Open a destination in OpenStreetMap.
function openMap(id) {
  const place = getPlace(id);

  if (place) {
    const query = encodeURIComponent(
      `${place.name}, ${place.state}, India`
    );

    window.open(
      `https://www.openstreetmap.org/search?query=${query}`,
      "_blank",
      "noopener"
    );
  }
}

$("openMap").onclick = () => {
  openMap($("mapDestination").value);
};

// Demo login and signup.
$("loginOpen").onclick = () => openAuth("login");
$("signupOpen").onclick = () => openAuth("signup");

$("closeAuth").onclick = () => {
  $("authDialog").close();
};

$("switchAuth").onclick = () => {
  openAuth(authMode === "login" ? "signup" : "login");
};

function openAuth(mode) {
  authMode = mode;

  $("authTitle").textContent =
    mode === "login" ? "Login" : "Create Account";

  $("nameGroup").hidden = mode === "login";
  $("authName").required = mode === "signup";

  $("switchAuth").textContent =
    mode === "login"
      ? "Need an account? Sign up"
      : "Already registered? Login";

  $("authMessage").textContent = "";
  $("authForm").reset();

  $("authDialog").showModal();
}

$("authForm").onsubmit = event => {
  event.preventDefault();

  $("authMessage").textContent =
    "Demo only. Real authentication requires a secure backend.";

  $("authPassword").value = "";
};

// Mobile navigation menu.
$("menuToggle").onclick = () => {
  const open = $("navLinks").classList.toggle("open");

  $("menuToggle").textContent = open ? "✕" : "☰";

  $("menuToggle").setAttribute(
    "aria-expanded",
    open
  );
};

$("navLinks").querySelectorAll("a").forEach(link => {
  link.onclick = () => {
    $("navLinks").classList.remove("open");

    $("menuToggle").textContent = "☰";

    $("menuToggle").setAttribute(
      "aria-expanded",
      "false"
    );
  };
});

// Initialize the website.
$("currentYear").textContent = new Date().getFullYear();

populateSelects();
renderCategories();
renderDestinations();
renderFavorites();
renderHistory();
renderSavedTrips();
showWeather();