// Initialize interncoin balance
let coinBalance = 100;
document.getElementById("coin-balance").textContent = coinBalance;

// Enroll in a course and award interncoins
function enrollCourse(courseName) {
    alert(`You have enrolled in ${courseName}!`);
    coinBalance += 20;  // Award interncoins for enrollment
    document.getElementById("coin-balance").textContent = coinBalance;
    console.log(`Enrolled in ${courseName}. New balance: ${coinBalance}`);
}

// Redeem rewards
function redeemReward(cost) {
    if (coinBalance >= cost) {
        coinBalance -= cost;
        alert("Reward redeemed successfully!");
        document.getElementById("coin-balance").textContent = coinBalance;
    } else {
        alert("Not enough interncoins to redeem this reward.");
    }
}
// Sample courses data
const courses = [
    { name: "Web Development", category: "Development", coins: 20 },
    { name: "Data Analysis", category: "Data Science", coins: 20 },
    { name: "Digital Marketing", category: "Marketing", coins: 20 },
];

// Display courses dynamically
function displayCourses() {
    const courseContainer = document.getElementById("course-list");
    courseContainer.innerHTML = ""; // Clear previous courses
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("card", "mb-3");
        courseCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${course.name}</h5>
                <p class="card-text">Category: ${course.category}</p>
                <button class="btn btn-primary" onclick="enrollCourse('${course.name}')">Enroll</button>
            </div>
        `;
        courseContainer.appendChild(courseCard);
    });
}

// Call displayCourses to initialize
displayCourses();
// Sample internships data
const internships = [
    { title: "Web Developer Internship", location: "Remote", coins: 30 },
    { title: "Data Analyst Internship", location: "San Francisco", coins: 30 },
];

// Display internships dynamically
function displayInternships() {
    const internshipContainer = document.getElementById("internship-list");
    internshipContainer.innerHTML = ""; // Clear previous internships
    internships.forEach(internship => {
        const internshipCard = document.createElement("div");
        internshipCard.classList.add("card", "mb-3");
        internshipCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${internship.title}</h5>
                <p class="card-text">Location: ${internship.location}</p>
                <button class="btn btn-primary" onclick="applyInternship('${internship.title}', ${internship.coins})">Apply Now</button>
            </div>
        `;
        internshipContainer.appendChild(internshipCard);
    });
}

// Apply for internship function
function applyInternship(title, coins) {
    alert(`You have applied for ${title}!`);
    coinBalance += coins; // Award interncoins for applying
    document.getElementById("coin-balance").textContent = coinBalance;
    console.log(`Applied for ${title}. New balance: ${coinBalance}`);
}

// Call displayInternships to initialize
displayInternships();
let rewardHistory = []; // Track redeemed rewards

function redeemReward(cost, rewardName) {
    if (coinBalance >= cost) {
        coinBalance -= cost;
        rewardHistory.push(rewardName); // Add to history
        alert(`Reward ${rewardName} redeemed successfully!`);
        document.getElementById("coin-balance").textContent = coinBalance;
        displayRewardHistory(); // Update history display
    } else {
        alert("Not enough interncoins to redeem this reward.");
    }
}

// Display reward history
function displayRewardHistory() {
    const historyContainer = document.getElementById("reward-history");
    historyContainer.innerHTML = ""; // Clear previous history
    rewardHistory.forEach(reward => {
        const historyItem = document.createElement("li");
        historyItem.textContent = reward;
        historyContainer.appendChild(historyItem);
    });
}

// HTML for Reward History
// <h4>Redeemed Rewards History</h4>
// <ul id="reward-history"></ul>
