document.addEventListener("DOMContentLoaded", () => {

const newUsersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "New Users",
        data: [120, 185, 210, 175, 230, 295, 340, 310, 275, 390, 420, 480],
        borderColor: "#4A90D9",
        backgroundColor: "rgba(74, 144, 217, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4 
    }]
};

new Chart(document.getElementById("newUsersChart"), {
    type: "line",
    data: newUsersData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: "top" }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Number of Users"
                }
            }
        }
    }
});



const ratingsData = {
    labels: ["1-2 Stars", "2-3 Stars", "3-4 Stars", "4-5 Stars"],
    datasets: [{
        label: "Number of Cafes",
        data: [5, 18, 42, 35],
        backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 193, 7, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(75, 192, 92, 0.7)"
        ],
        borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 193, 7)",
            "rgb(54, 162, 235)",
            "rgb(75, 192, 92)"
        ],
        borderWidth: 1
    }]
};

new Chart(document.getElementById("ratingsChart"), {
    type: "bar",
    data: ratingsData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: "top" }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Number of Cafes"
                }
            }
        }
    }
});



const reviewsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Reviews Submitted",
        data: [45, 72, 68, 90, 115, 140, 162, 138, 120, 175, 195, 220],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
        borderColor: "rgb(153, 102, 255)",
        borderWidth: 1
    }]
};

new Chart(document.getElementById("reviewsChart"), {
    type: "bar",
    data: reviewsData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: "top" }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Number of Reviews"
                }
            }
        }
    }
});
});