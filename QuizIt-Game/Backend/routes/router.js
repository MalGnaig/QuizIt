const express = require('express');
const router = express.Router();

// Define sample user data
router.get('/users', (req, res) => {
    const userData = [
        {
            username: "SarahBraddickIsaLoser",
            highestScore: 1200,
            gamesPlayed: 10,
            favoriteCategory: "Science",
            achievements: ["First Win", "10 Correct Streak"]
        },
        {
            username: "BraddickisGay",
            highestScore: 1500,
            gamesPlayed: 15,
            favoriteCategory: "History",
            achievements: ["All Categories Completed", "Perfect Score"]
        },
        {
            username: "IHateSarah",
            highestScore: 1800,
            gamesPlayed: 20,
            favoriteCategory: "PopCulture",
            achievements: ["Top 1%", "Fastest Answer"]
        }
    ];

    // Send user data as the response
    res.json(userData);
});

module.exports = router;
