  // DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    { id: 1, content: 'Four Clowns', start: '1985-01-01' },
    { id: 2, content: 'Baptism', start: '1987-04-12' },
    { id: 3, content: 'Baptism', start: '1987-04-12' },
    { id: 4, content: 'Bears', start: '1989-12-08' },
    { id: 5, content: 'DINO-MITES', start: '1992-12-25' },
    { id: 6, content: 'Alexander\'s Amazing Crazy Clowns', start: '1993-12-25' },
    { id: 7, content: 'Jonathan\'s Jaunty Penguin Parade', start: '1993-12-25' },
    { id: 8, content: 'Teddy Hide and Seek', start: '1994-12-25' },
    { id: 9, content: 'Eagle Mountain', start: '1996-12-25' },
    { id: 10, content: 'Woodpeckers & Windmills', start: '1996-12-25' },
    { id: 11, content: 'Snowman Hall of Fame', start: '1998-12-25' },
    { id: 12, content: 'Definitely NOT The Millenium Quilt \'Yellow\'', start: '1999-12-08' },
    { id: 13, content: 'Definitely NOT The Millenium Quilt \'Red\'', start: '1999-12-08' },
    { id: 14, content: 'Look Son, There\'s The Titanic............', start: '2000-12-08' },
    { id: 15, content: 'Eric', start: '2001-12-25' }
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);