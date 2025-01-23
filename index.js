const express = require('express');
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const applications = {
        "Space Shooter": "C:/\Users/\prana/\AppData//\Local/\Discord\app-1.0.9177/\Discord.exe",
        "Astro Drop": "C:\Users\prana\AppData\Roaming\Telegram Desktop\Telegram.exe"
    };

    res.status(200).json(applications);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
