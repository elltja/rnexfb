const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get('/api/taskitems', (req, res) => {

    const { checked } = req.query;
    const isChecked = checked === 'true'; 

    const taskItems = [
        { id: 1, text: 'Buy groceries', checked: false },
        { id: 2, text: 'Walk the dog', checked: false },
        { id: 3, text: 'Do laundry', checked: false },
    ];

    const filteredTaskItems = checked ? taskItems.filter(item => item.checked === isChecked) : taskItems;
    res.json(filteredTaskItems);
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
