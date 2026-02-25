function d3Example() {
    const data = [10, 20, 30, 40, 50];

    console.log("D3 Example");
    const body = document.body;
    const html = `
    <svg id="container" width="800" height="600">
    <rect />
    <rect />
    <rect />
    <rect />
    <rect />
    </svg>
`;

    body.innerHTML = html;

    const svg = d3.select("#container");
    const select = svg.select("rect");
    const selectAll = svg.selectAll("rect");

    console.log("svg:", svg);
    // console.log('select:', select);
    // console.log('selectAll:', selectAll);

    // return svg
    // return select
    // return selectAll
    // return svg.select("rect").datum(data);
    // console.log('data:',  svg.selectAll("rect").data(data));
    // return svg.selectAll("rect").data(data).enter().append("rect");
    return svg
        .selectAll("rect")
        .data(data)
        .attr("x", (d, i) => i * 55)
        .attr("y", (d) => 600 - d * 10)
        .attr("width", 50)
        .attr("height", (d) => d * 10)
        .attr("fill", "teal");
}

// d3Example();

function exampleFM() {
    const data = [45, 67, 96, 84, 41];

    console.log("D3 Example");
    const body = document.body;
    const html = `
    <svg id="container" width="800" height="100" style="border: 1px dashed pink;">
    <rect />
    <rect />
    <rect />
    <rect />
    <rect />
    </svg>
`;
    body.innerHTML = html;
    const rectWidth = 50;

    const svg = d3
        .select("#container")
        .selectAll("rect")
        .data(data)
        // calculate x-position based on its index
        .attr("x", (d, i) => i * rectWidth)
        // set height based on the bound datum
        .attr("height", (d) => d)
        .attr("y", (d) => 100 - d)
        // rest of attributes are constant values
        .attr("width", rectWidth)
        .attr("stroke-width", 3)
        .attr("stroke-dasharray", "5 5")
        .attr("stroke", "plum")
        .attr("fill", "pink");

    return svg;
}
// exampleFM();

function exampleCopilot() {
    const body = document.body;
    const barData = [45, 67, 96, 84, 41];

    const rectWidth = 50;

    const svg = `
    <svg width=${
        rectWidth * barData.length
    } height="200" style="border: 1px dashed pink;">
        ${barData.map(
            (d, i) =>
                `<rect x=${i * rectWidth} y=${200 - d} width=${
                    rectWidth - 5
                } height=${d} fill="pink" />`
        )}
    </svg>
    `;

    body.innerHTML = svg;
}

// exampleCopilot();

const moviesData = [{
        title: "The Legend of Tarzan",
        released: "2016-07-01T07:00:00.000Z",
        genres: ["Action", "Adventure"],
        rating: 7.6,
        votes: 541,
        rated: "PG-13",
    },
    {
        title: "Independence Day: Resurgence",
        released: "2016-06-24T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 5.9,
        votes: 7058,
        rated: "PG-13",
    },
    {
        title: "Central Intelligence",
        released: "2016-06-17T07:00:00.000Z",
        genres: ["Comedy", "Crime"],
        rating: 7,
        votes: 4663,
        rated: "PG-13",
    },
    {
        title: "Finding Dory",
        released: "2016-06-17T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 8.2,
        votes: 13158,
        rated: "PG",
    },
    {
        title: "Now You See Me 2",
        released: "2016-06-10T07:00:00.000Z",
        genres: ["Action", "Comedy", "Thriller"],
        rating: 7.3,
        votes: 2876,
        rated: "PG-13",
    },
    {
        title: "Straight Outta Compton",
        released: "2015-08-14T07:00:00.000Z",
        genres: ["Biography", "Crime", "Drama"],
        rating: 8,
        votes: 110326,
        rated: "R",
    },
    {
        title: "Mission: Impossible - Rogue Nation",
        released: "2015-07-31T07:00:00.000Z",
        genres: ["Action", "Adventure", "Thriller"],
        rating: 7.5,
        votes: 223103,
        rated: "PG-13",
    },
    {
        title: "Ant-Man",
        released: "2015-07-17T07:00:00.000Z",
        genres: ["Action", "Adventure", "Comedy"],
        rating: 7.4,
        votes: 297867,
        rated: "PG-13",
    },
    {
        title: "Minions",
        released: "2015-07-10T07:00:00.000Z",
        genres: ["Animation", "Action", "Comedy"],
        rating: 6.4,
        votes: 135756,
        rated: "PG",
    },
    {
        title: "Terminator Genisys",
        released: "2015-07-01T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.6,
        votes: 182812,
        rated: "PG-13",
    },
    {
        title: "Teenage Mutant Ninja Turtles",
        released: "2014-08-08T07:00:00.000Z",
        genres: ["Action", "Adventure", "Comedy"],
        rating: 5.9,
        votes: 164422,
        rated: "PG-13",
    },
    {
        title: "Guardians of the Galaxy",
        released: "2014-08-01T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 8.1,
        votes: 669684,
        rated: "PG-13",
    },
    {
        title: "Dawn of the Planet of the Apes",
        released: "2014-07-11T07:00:00.000Z",
        genres: ["Action", "Adventure", "Drama"],
        rating: 7.6,
        votes: 312612,
        rated: "PG-13",
    },
    {
        title: "Transformers: Age of Extinction",
        released: "2014-06-27T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 5.7,
        votes: 240006,
        rated: "PG-13",
    },
    {
        title: "22 Jump Street",
        released: "2014-06-13T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 7.1,
        votes: 253238,
        rated: "R",
    },
    {
        title: "Gravity",
        released: "2013-10-04T07:00:00.000Z",
        genres: ["Adventure", "Drama", "Sci-Fi"],
        rating: 7.8,
        votes: 577366,
        rated: "PG-13",
    },
    {
        title: "Despicable Me 2",
        released: "2013-07-03T07:00:00.000Z",
        genres: ["Animation", "Comedy", "Family"],
        rating: 7.5,
        votes: 282972,
        rated: "PG",
    },
    {
        title: "World War Z",
        released: "2013-06-21T07:00:00.000Z",
        genres: ["Action", "Adventure", "Horror"],
        rating: 7,
        votes: 459688,
        rated: "PG-13",
    },
    {
        title: "Monsters University",
        released: "2013-06-21T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 7.3,
        votes: 230835,
        rated: "G",
    },
    {
        title: "Man of Steel",
        released: "2013-06-14T07:00:00.000Z",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 7.2,
        votes: 539282,
        rated: "PG-13",
    },
    {
        title: "The Dark Knight Rises",
        released: "2012-07-20T07:00:00.000Z",
        genres: ["Action", "Adventure", "Drama"],
        rating: 8.5,
        votes: 1131146,
        rated: "PG-13",
    },
    {
        title: "Ice Age: Continental Drift",
        released: "2012-07-13T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 6.7,
        votes: 142145,
        rated: "PG",
    },
    {
        title: "The Amazing Spider-Man",
        released: "2012-07-03T07:00:00.000Z",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 7,
        votes: 447493,
        rated: "PG-13",
    },
    {
        title: "Ted",
        released: "2012-06-29T07:00:00.000Z",
        genres: ["Comedy", "Fantasy"],
        rating: 7,
        votes: 466710,
        rated: "R",
    },
    {
        title: "Brave",
        released: "2012-06-22T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 7.2,
        votes: 270429,
        rated: "PG",
    },
    {
        title: "Rise of the Planet of the Apes",
        released: "2011-08-05T07:00:00.000Z",
        genres: ["Action", "Drama", "Sci-Fi"],
        rating: 7.6,
        votes: 399342,
        rated: "PG-13",
    },
    {
        title: "Captain America: The First Avenger",
        released: "2011-07-22T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.9,
        votes: 502898,
        rated: "PG-13",
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 2",
        released: "2011-07-15T07:00:00.000Z",
        genres: ["Adventure", "Drama", "Fantasy"],
        rating: 8.1,
        votes: 535695,
        rated: "PG-13",
    },
    {
        title: "Transformers: Dark of the Moon",
        released: "2011-06-29T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.3,
        votes: 322619,
        rated: "PG-13",
    },
    {
        title: "Cars 2",
        released: "2011-06-24T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 6.3,
        votes: 99327,
        rated: "G",
    },
    {
        title: "Inception",
        released: "2010-07-16T07:00:00.000Z",
        genres: ["Action", "Adventure", "Crime"],
        rating: 8.8,
        votes: 1446708,
        rated: "PG-13",
    },
    {
        title: "Despicable Me",
        released: "2010-07-09T07:00:00.000Z",
        genres: ["Animation", "Comedy", "Family"],
        rating: 7.7,
        votes: 379642,
        rated: "PG",
    },
    {
        title: "The Twilight Saga: Eclipse",
        released: "2010-06-30T07:00:00.000Z",
        genres: ["Adventure", "Drama", "Fantasy"],
        rating: 4.9,
        votes: 182635,
        rated: "PG-13",
    },
    {
        title: "Toy Story 3",
        released: "2010-06-18T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 8.3,
        votes: 538240,
        rated: "G",
    },
    {
        title: "The Karate Kid",
        released: "2010-06-11T07:00:00.000Z",
        genres: ["Action", "Drama", "Family"],
        rating: 6.2,
        votes: 118096,
        rated: "PG",
    },
    {
        title: "G.I. Joe: The Rise of Cobra",
        released: "2009-08-07T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 5.8,
        votes: 172509,
        rated: "PG-13",
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        released: "2009-07-15T07:00:00.000Z",
        genres: ["Adventure", "Family", "Fantasy"],
        rating: 7.5,
        votes: 317551,
        rated: "PG",
    },
    {
        title: "Ice Age: Dawn of the Dinosaurs",
        released: "2009-07-01T07:00:00.000Z",
        genres: ["Animation", "Action", "Adventure"],
        rating: 7,
        votes: 163446,
        rated: "PG",
    },
    {
        title: "Transformers: Revenge of the Fallen",
        released: "2009-06-24T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6,
        votes: 320072,
        rated: "PG-13",
    },
    {
        title: "The Proposal",
        released: "2009-06-19T07:00:00.000Z",
        genres: ["Comedy", "Drama", "Romance"],
        rating: 6.7,
        votes: 224613,
        rated: "PG-13",
    },
    {
        title: "Slumdog Millionaire",
        released: "2008-12-25T08:00:00.000Z",
        genres: ["Drama", "Romance"],
        rating: 8,
        votes: 637553,
        rated: "R",
    },
    {
        title: "Mamma Mia!",
        released: "2008-07-18T07:00:00.000Z",
        genres: ["Comedy", "Family", "Musical"],
        rating: 6.3,
        votes: 144461,
        rated: "PG-13",
    },
    {
        title: "The Dark Knight",
        released: "2008-07-18T07:00:00.000Z",
        genres: ["Action", "Adventure", "Crime"],
        rating: 9,
        votes: 1652832,
        rated: "PG-13",
    },
    {
        title: "Hancock",
        released: "2008-07-02T07:00:00.000Z",
        genres: ["Action", "Drama"],
        rating: 6.4,
        votes: 338756,
        rated: "PG-13",
    },
    {
        title: "WALL·E",
        released: "2008-06-27T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Family"],
        rating: 8.4,
        votes: 705530,
        rated: "G",
    },
    {
        title: "The Bourne Ultimatum",
        released: "2007-08-03T07:00:00.000Z",
        genres: ["Action", "Mystery", "Thriller"],
        rating: 8.1,
        votes: 483157,
        rated: "PG-13",
    },
    {
        title: "The Simpsons Movie",
        released: "2007-07-27T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 7.4,
        votes: 256430,
        rated: "PG-13",
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        released: "2007-07-11T07:00:00.000Z",
        genres: ["Adventure", "Family", "Fantasy"],
        rating: 7.5,
        votes: 350333,
        rated: "PG-13",
    },
    {
        title: "Transformers",
        released: "2007-07-03T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 7.1,
        votes: 509845,
        rated: "PG-13",
    },
    {
        title: "Ratatouille",
        released: "2007-06-29T07:00:00.000Z",
        genres: ["Animation", "Comedy", "Family"],
        rating: 8,
        votes: 466263,
        rated: "G",
    },
    {
        title: "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
        released: "2006-11-03T08:00:00.000Z",
        genres: ["Comedy"],
        rating: 7.3,
        votes: 294595,
        rated: "R",
    },
    {
        title: "Talladega Nights: The Ballad of Ricky Bobby",
        released: "2006-08-04T07:00:00.000Z",
        genres: ["Action", "Comedy", "Sport"],
        rating: 6.6,
        votes: 129793,
        rated: "PG-13",
    },
    {
        title: "Pirates of the Caribbean: Dead Man's Chest",
        released: "2006-07-07T07:00:00.000Z",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 7.3,
        votes: 515601,
        rated: "PG-13",
    },
    {
        title: "Superman Returns",
        released: "2006-06-28T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.1,
        votes: 239077,
        rated: "PG-13",
    },
    {
        title: "Click",
        released: "2006-06-23T07:00:00.000Z",
        genres: ["Comedy", "Drama", "Fantasy"],
        rating: 6.4,
        votes: 244407,
        rated: "PG-13",
    },
    {
        title: "Charlie and the Chocolate Factory",
        released: "2005-07-15T07:00:00.000Z",
        genres: ["Adventure", "Comedy", "Family"],
        rating: 6.7,
        votes: 315590,
        rated: "PG",
    },
    {
        title: "Wedding Crashers",
        released: "2005-07-15T07:00:00.000Z",
        genres: ["Comedy", "Romance"],
        rating: 7,
        votes: 278410,
        rated: "R",
    },
    {
        title: "War of the Worlds",
        released: "2005-06-29T07:00:00.000Z",
        genres: ["Adventure", "Sci-Fi", "Thriller"],
        rating: 6.5,
        votes: 330847,
        rated: "PG-13",
    },
    {
        title: "Batman Begins",
        released: "2005-06-15T07:00:00.000Z",
        genres: ["Action", "Adventure"],
        rating: 8.3,
        votes: 965047,
        rated: "PG-13",
    },
    {
        title: "Mr. & Mrs. Smith",
        released: "2005-06-10T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 6.5,
        votes: 344697,
        rated: "PG-13",
    },
    {
        title: "The Village",
        released: "2004-07-30T07:00:00.000Z",
        genres: ["Drama", "Mystery", "Romance"],
        rating: 6.5,
        votes: 192051,
        rated: "PG-13",
    },
    {
        title: "The Bourne Supremacy",
        released: "2004-07-23T07:00:00.000Z",
        genres: ["Action", "Mystery", "Thriller"],
        rating: 7.8,
        votes: 338889,
        rated: "PG-13",
    },
    {
        title: "I, Robot",
        released: "2004-07-16T07:00:00.000Z",
        genres: ["Action", "Mystery", "Sci-Fi"],
        rating: 7.1,
        votes: 381911,
        rated: "PG-13",
    },
    {
        title: "Spider-Man 2",
        released: "2004-06-30T07:00:00.000Z",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 7.3,
        votes: 406228,
        rated: "PG-13",
    },
    {
        title: "Dodgeball: A True Underdog Story",
        released: "2004-06-18T07:00:00.000Z",
        genres: ["Comedy", "Sport"],
        rating: 6.7,
        votes: 182999,
        rated: "PG-13",
    },
    {
        title: "Bad Boys II",
        released: "2003-07-18T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 6.6,
        votes: 176122,
        rated: "R",
    },
    {
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        released: "2003-07-09T07:00:00.000Z",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 8.1,
        votes: 800218,
        rated: "PG-13",
    },
    {
        title: "Terminator 3: Rise of the Machines",
        released: "2003-07-02T07:00:00.000Z",
        genres: ["Action", "Sci-Fi"],
        rating: 6.4,
        votes: 301849,
        rated: "R",
    },
    {
        title: "Hulk",
        released: "2003-06-20T07:00:00.000Z",
        genres: ["Action", "Sci-Fi"],
        rating: 5.7,
        votes: 210613,
        rated: "PG-13",
    },
    {
        title: "2 Fast 2 Furious",
        released: "2003-06-06T07:00:00.000Z",
        genres: ["Action", "Crime", "Thriller"],
        rating: 5.8,
        votes: 188950,
        rated: "PG-13",
    },
    {
        title: "Signs",
        released: "2002-08-02T07:00:00.000Z",
        genres: ["Drama", "Sci-Fi", "Thriller"],
        rating: 6.7,
        votes: 268897,
        rated: "PG-13",
    },
    {
        title: "Austin Powers in Goldmember",
        released: "2002-07-26T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 6.2,
        votes: 161309,
        rated: "PG-13",
    },
    {
        title: "Men in Black II",
        released: "2002-07-03T07:00:00.000Z",
        genres: ["Action", "Adventure", "Comedy"],
        rating: 6.1,
        votes: 268229,
        rated: "PG-13",
    },
    {
        title: "Lilo & Stitch",
        released: "2002-06-21T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Comedy"],
        rating: 7.2,
        votes: 115634,
        rated: "PG",
    },
    {
        title: "Scooby-Doo",
        released: "2002-06-14T07:00:00.000Z",
        genres: ["Adventure", "Comedy", "Mystery"],
        rating: 4.9,
        votes: 70429,
        rated: "PG",
    },
    {
        title: "American Pie 2",
        released: "2001-08-10T07:00:00.000Z",
        genres: ["Comedy"],
        rating: 6.4,
        votes: 198752,
        rated: "R",
    },
    {
        title: "Rush Hour 2",
        released: "2001-08-03T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 6.6,
        votes: 158746,
        rated: "PG-13",
    },
    {
        title: "Planet of the Apes",
        released: "2001-07-27T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 5.7,
        votes: 176544,
        rated: "PG-13",
    },
    {
        title: "Jurassic Park III",
        released: "2001-07-18T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 5.9,
        votes: 216472,
        rated: "PG-13",
    },
    {
        title: "Nutty Professor II: The Klumps",
        released: "2000-07-28T07:00:00.000Z",
        genres: ["Comedy", "Romance", "Sci-Fi"],
        rating: 4.3,
        votes: 39109,
        rated: "PG-13",
    },
    {
        title: "What Lies Beneath",
        released: "2000-07-21T07:00:00.000Z",
        genres: ["Drama", "Fantasy", "Horror"],
        rating: 6.6,
        votes: 97832,
        rated: "PG-13",
    },
    {
        title: "X-Men",
        released: "2000-07-14T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 7.4,
        votes: 449284,
        rated: "PG-13",
    },
    {
        title: "Scary Movie",
        released: "2000-07-07T07:00:00.000Z",
        genres: ["Comedy"],
        rating: 6.2,
        votes: 185562,
        rated: "R",
    },
    {
        title: "The Perfect Storm",
        released: "2000-06-30T07:00:00.000Z",
        genres: ["Action", "Adventure", "Drama"],
        rating: 6.4,
        votes: 132399,
        rated: "PG-13",
    },
    {
        title: "The Sixth Sense",
        released: "1999-08-06T07:00:00.000Z",
        genres: ["Drama", "Mystery", "Thriller"],
        rating: 8.1,
        votes: 696786,
        rated: "PG-13",
    },
    {
        title: "Runaway Bride",
        released: "1999-07-30T07:00:00.000Z",
        genres: ["Comedy", "Romance"],
        rating: 5.5,
        votes: 73501,
        rated: "PG",
    },
    {
        title: "American Pie",
        released: "1999-07-09T07:00:00.000Z",
        genres: ["Comedy"],
        rating: 7,
        votes: 313224,
        rated: "R",
    },
    {
        title: "Big Daddy",
        released: "1999-06-25T07:00:00.000Z",
        genres: ["Comedy", "Drama"],
        rating: 6.4,
        votes: 160147,
        rated: "PG-13",
    },
    {
        title: "Tarzan",
        released: "1999-06-18T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Family"],
        rating: 7.2,
        votes: 141995,
        rated: "G",
    },
    {
        title: "Austin Powers: The Spy Who Shagged Me",
        released: "1999-06-11T07:00:00.000Z",
        genres: ["Action", "Adventure", "Comedy"],
        rating: 6.6,
        votes: 179866,
        rated: "PG-13",
    },
    {
        title: "Saving Private Ryan",
        released: "1998-07-24T07:00:00.000Z",
        genres: ["Action", "Drama", "War"],
        rating: 8.6,
        votes: 872122,
        rated: "R",
    },
    {
        title: "There's Something About Mary",
        released: "1998-07-15T07:00:00.000Z",
        genres: ["Comedy", "Romance"],
        rating: 7.1,
        votes: 245544,
        rated: "R",
    },
    {
        title: "Lethal Weapon 4",
        released: "1998-07-10T07:00:00.000Z",
        genres: ["Action", "Crime", "Thriller"],
        rating: 6.6,
        votes: 126457,
        rated: "R",
    },
    {
        title: "Armageddon",
        released: "1998-07-01T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.6,
        votes: 319038,
        rated: "PG-13",
    },
    {
        title: "Doctor Dolittle",
        released: "1998-06-26T07:00:00.000Z",
        genres: ["Comedy", "Family", "Fantasy"],
        rating: 5.3,
        votes: 73587,
        rated: "PG-13",
    },
    {
        title: "Air Force One",
        released: "1997-07-25T07:00:00.000Z",
        genres: ["Action", "Adventure", "Drama"],
        rating: 6.4,
        votes: 145068,
        rated: "R",
    },
    {
        title: "Men in Black",
        released: "1997-07-02T07:00:00.000Z",
        genres: ["Adventure", "Comedy", "Family"],
        rating: 7.3,
        votes: 397652,
        rated: "PG-13",
    },
    {
        title: "Face/Off",
        released: "1997-06-27T07:00:00.000Z",
        genres: ["Action", "Crime", "Sci-Fi"],
        rating: 7.3,
        votes: 281650,
        rated: "R",
    },
    {
        title: "Batman & Robin",
        released: "1997-06-20T07:00:00.000Z",
        genres: ["Action", "Fantasy", "Sci-Fi"],
        rating: 3.7,
        votes: 188119,
        rated: "PG-13",
    },
    {
        title: "My Best Friend's Wedding",
        released: "1997-06-20T07:00:00.000Z",
        genres: ["Comedy", "Romance"],
        rating: 6.3,
        votes: 97238,
        rated: "PG-13",
    },
    {
        title: "A Time to Kill",
        released: "1996-07-24T07:00:00.000Z",
        genres: ["Crime", "Drama", "Thriller"],
        rating: 7.4,
        votes: 98280,
        rated: "R",
    },
    {
        title: "Phenomenon",
        released: "1996-07-03T07:00:00.000Z",
        genres: ["Drama", "Fantasy", "Romance"],
        rating: 6.4,
        votes: 63195,
        rated: "PG",
    },
    {
        title: "Independence Day",
        released: "1996-07-03T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.9,
        votes: 418882,
        rated: "PG-13",
    },
    {
        title: "The Nutty Professor",
        released: "1996-06-28T07:00:00.000Z",
        genres: ["Comedy", "Romance", "Sci-Fi"],
        rating: 5.6,
        votes: 85396,
        rated: "PG-13",
    },
    {
        title: "The Rock",
        released: "1996-06-07T07:00:00.000Z",
        genres: ["Action", "Adventure", "Thriller"],
        rating: 7.4,
        votes: 256938,
        rated: "R",
    },
    {
        title: "Dangerous Minds",
        released: "1995-08-11T07:00:00.000Z",
        genres: ["Biography", "Drama"],
        rating: 6.4,
        votes: 37839,
        rated: "R",
    },
    {
        title: "Waterworld",
        released: "1995-07-28T07:00:00.000Z",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 6.1,
        votes: 143326,
        rated: "PG-13",
    },
    {
        title: "Pocahontas",
        released: "1995-06-23T07:00:00.000Z",
        genres: ["Animation", "Adventure", "Drama"],
        rating: 6.6,
        votes: 118212,
        rated: "G",
    },
    {
        title: "Batman Forever",
        released: "1995-06-16T07:00:00.000Z",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 5.4,
        votes: 189168,
        rated: "PG-13",
    },
    {
        title: "Congo",
        released: "1995-06-09T07:00:00.000Z",
        genres: ["Action", "Adventure", "Mystery"],
        rating: 5,
        votes: 34120,
        rated: "PG-13",
    },
    {
        title: "Clear and Present Danger",
        released: "1994-08-03T07:00:00.000Z",
        genres: ["Action", "Crime", "Drama"],
        rating: 6.9,
        votes: 68997,
        rated: "PG-13",
    },
    {
        title: "The Mask",
        released: "1994-07-29T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 6.9,
        votes: 263187,
        rated: "PG-13",
    },
    {
        title: "True Lies",
        released: "1994-07-15T07:00:00.000Z",
        genres: ["Action", "Comedy", "Thriller"],
        rating: 7.2,
        votes: 188905,
        rated: "R",
    },
    {
        title: "Forrest Gump",
        released: "1994-07-06T07:00:00.000Z",
        genres: ["Drama", "Romance"],
        rating: 8.8,
        votes: 1236853,
        rated: "PG-13",
    },
    {
        title: "Speed",
        released: "1994-06-10T07:00:00.000Z",
        genres: ["Action", "Adventure", "Crime"],
        rating: 7.2,
        votes: 258050,
        rated: "R",
    },
    {
        title: "The Fugitive",
        released: "1993-08-06T07:00:00.000Z",
        genres: ["Action", "Adventure", "Crime"],
        rating: 7.8,
        votes: 211830,
        rated: "PG-13",
    },
    {
        title: "In the Line of Fire",
        released: "1993-07-09T07:00:00.000Z",
        genres: ["Action", "Drama", "Thriller"],
        rating: 7.2,
        votes: 73293,
        rated: "R",
    },
    {
        title: "The Firm",
        released: "1993-06-30T07:00:00.000Z",
        genres: ["Drama", "Mystery", "Thriller"],
        rating: 6.8,
        votes: 88127,
        rated: "R",
    },
    {
        title: "Sleepless in Seattle",
        released: "1993-06-25T07:00:00.000Z",
        genres: ["Comedy", "Drama", "Romance"],
        rating: 6.8,
        votes: 121678,
        rated: "PG",
    },
    {
        title: "Jurassic Park",
        released: "1993-06-11T07:00:00.000Z",
        genres: ["Adventure", "Sci-Fi", "Thriller"],
        rating: 8.1,
        votes: 601312,
        rated: "PG-13",
    },
    {
        title: "The Last of the Mohicans",
        released: "1992-09-25T07:00:00.000Z",
        genres: ["Action", "Adventure", "Drama"],
        rating: 7.8,
        votes: 112195,
        rated: "R",
    },
    {
        title: "Unforgiven",
        released: "1992-08-07T07:00:00.000Z",
        genres: ["Drama", "Western"],
        rating: 8.3,
        votes: 274119,
        rated: "R",
    },
    {
        title: "A League of Their Own",
        released: "1992-07-01T07:00:00.000Z",
        genres: ["Comedy", "Drama", "Sport"],
        rating: 7.2,
        votes: 70520,
        rated: "PG",
    },
    {
        title: "Batman Returns",
        released: "1992-06-19T07:00:00.000Z",
        genres: ["Action"],
        rating: 7,
        votes: 212437,
        rated: "PG-13",
    },
    {
        title: "Patriot Games",
        released: "1992-06-05T07:00:00.000Z",
        genres: ["Action", "Thriller"],
        rating: 6.9,
        votes: 80741,
        rated: "R",
    },
    {
        title: "Hot Shots!",
        released: "1991-07-31T07:00:00.000Z",
        genres: ["Action", "Comedy"],
        rating: 6.7,
        votes: 78236,
        rated: "PG-13",
    },
    {
        title: "Terminator 2: Judgment Day",
        released: "1991-07-03T07:00:00.000Z",
        genres: ["Action", "Sci-Fi"],
        rating: 8.5,
        votes: 734005,
        rated: "R",
    },
    {
        title: "The Naked Gun 2½: The Smell of Fear",
        released: "1991-06-28T07:00:00.000Z",
        genres: ["Comedy", "Crime"],
        rating: 6.8,
        votes: 82425,
        rated: "PG-13",
    },
    {
        title: "Robin Hood: Prince of Thieves",
        released: "1991-06-14T07:00:00.000Z",
        genres: ["Action", "Adventure", "Drama"],
        rating: 6.9,
        votes: 143950,
        rated: "PG-13",
    },
    {
        title: "City Slickers",
        released: "1991-06-07T07:00:00.000Z",
        genres: ["Comedy"],
        rating: 6.7,
        votes: 38968,
        rated: "PG-13",
    },
    {
        title: "Presumed Innocent",
        released: "1990-07-27T07:00:00.000Z",
        genres: ["Mystery", "Thriller"],
        rating: 6.9,
        votes: 28947,
        rated: "R",
    },
    {
        title: "Ghost",
        released: "1990-07-13T07:00:00.000Z",
        genres: ["Drama", "Fantasy", "Romance"],
        rating: 7,
        votes: 152717,
        rated: "PG-13",
    },
    {
        title: "Die Hard 2",
        released: "1990-07-04T07:00:00.000Z",
        genres: ["Action", "Thriller"],
        rating: 7.1,
        votes: 267702,
        rated: "R",
    },
    {
        title: "Days of Thunder",
        released: "1990-06-27T07:00:00.000Z",
        genres: ["Action", "Drama", "Sport"],
        rating: 5.9,
        votes: 59821,
        rated: "PG-13",
    },
    {
        title: "Dick Tracy",
        released: "1990-06-15T07:00:00.000Z",
        genres: ["Action", "Comedy", "Crime"],
        rating: 6.1,
        votes: 47595,
        rated: "PG",
    },
];

const movieGenre = {
    Action: "#ffc8f0",
    Comedy: "#cbf2bd",
    Animation: "#afe9ff",
    Drama: "#ffb09e",
    Other: "#fff2b4"
}
const topGenres = ["Action", "Comedy", "Drama", "Animation"];


const petalsRate = {
    G: "M50,90 C50,90 -30,25 50,10 L50,90 C50,90 130,25 50,10",
    PG: "M-35 0 C-25 25 25 25 35 0 C50 25 25 75 0 100 C-25 75 -50 25 -35 0",
    PG13: "M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0",
    R: "M0 0 C50 25 50 75 0 100 C-50 75 -50 25 0 0"
}

// const petalPath = "M50,10 C65,10 80,25 80,40 C80,55 65,70 50,70 C35,70 20,55 20,40 C20,25 35,10 50,10 Z";
const petalPath = "M50,90 C50,90 -30,25 50,10 L50,90 C50,90 130,25 50,10";


function moviesDataFun() {

    const body = document.body;
    const html = `
    <svg id="container" width=1000 height=100 >
        <path d='${petalPath}' fill='' stroke='#000' stroke-width=2 transform='translate(100, 0)'/>
        <path d='${petalPath}' fill='' stroke='#000' stroke-width=2 transform='translate(200, 0)'/>
        <path d='${petalPath}' fill='' stroke='#000' stroke-width=2 transform='translate(300, 0)'/>
        <path d='${petalPath}' fill='' stroke='#000' stroke-width=2 transform='translate(400, 0)'/>
        <path d='${petalPath}' fill='' stroke='#000' stroke-width=2 transform='translate(500, 0)'/>
    </svg>
    `;
    console.log(html);

    body.innerHTML = html;

    const svg = d3.select("#container").selectAll("path")
        .data(moviesData)
        .attr('fill', d => movieGenre[d.genres[0]] || movieGenre["Other"])
        .attr('fill-opacity', 0.7)
        .attr('stroke-width', 2)
        .attr('stroke', d => movieGenre[d.genres[0]] || movieGenre["Other"])
        .classed('movie-petal', true)

    console.log(svg);

    return svg;
    // return svg.selectAll("rect").data(moviesData).enter().append("rect");


}

// moviesDataFun();

const createPetalsForMovies = () => {
    // 1. Setup Container
    document.body.style.margin = "0";
    document.body.innerHTML = `<svg id="container" style="display: block; width: 100%;"></svg>`;
    const container = document.getElementById("container");

    const renderGrid = () => {
        const svgWidth = window.innerWidth;
        const colWidth = 120; // Horizontal space per petal
        const rowHeight = 150; // Vertical space per petal
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));

        // Calculate total required height and update SVG
        const numRows = Math.ceil(moviesData.length / itemsPerRow);
        console.log({
            itemsPerRow,
            numRows
        });
        const totalHeight = numRows * rowHeight;
        container.setAttribute("height", totalHeight);
        container.setAttribute("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        // Clear existing petals for re-render on resize
        container.innerHTML = '';

        moviesData.forEach((movie, index) => {
            const row = Math.floor(index / itemsPerRow);
            const col = index % itemsPerRow;

            // Calculate centered position within the grid cell
            const x = (col * colWidth) + (colWidth / 2);
            const y = (row * rowHeight) + (rowHeight / 2);

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

            // Handle PG-13 key mismatch and fallback
            const ratingKey = movie.rated.replace("-", "");
            const d = petalsRate[ratingKey] || petalsRate[movie.rated] || petalsRate.R;

            // Fix missing '#' in Comedy color if necessary
            let fillColor = movieGenre[movie.genres[0]] || movieGenre["Other"];
            if (fillColor.startsWith('cbf')) fillColor = '#' + fillColor;
            let strokeColor = fillColor;

            path.setAttribute("d", d);
            path.setAttribute("fill", fillColor);
            path.setAttribute("stroke", strokeColor);
            // Slight opacity to match the aesthetic of the screenshot
            path.setAttribute("stroke-width", "2");
            path.setAttribute("fill-opacity", "0.8");
            path.setAttribute("transform", `translate(${x}, ${y}) scale(0.6)`);

            container.appendChild(path);
        });
    };

    // Initial Render
    renderGrid();

    // 2. Responsive Listener
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderGrid, 100); // Debounce for performance
    });
};

// createPetalsForMovies();


const createPetalsForMoviesD3 = () => {
    // 1. Setup Container
    document.body.style.margin = "0";
    document.body.innerHTML = `<svg id="container" style="display: block; width: 100%;"></svg>`;

    const svg = d3.select("#container");

    const renderGrid = () => {
        const svgWidth = window.innerWidth;
        const colWidth = 120;
        const rowHeight = 150;
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));

        const numRows = Math.ceil(moviesData.length / itemsPerRow);
        const totalHeight = numRows * rowHeight;

        svg
            .attr("height", totalHeight)
            .attr("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        // D3 data binding
        const petals = svg
            .selectAll("path")
            .data(moviesData, (d, i) => i); // Use index as key

        // Remove old elements
        petals.exit().remove();

        // Update existing + enter new elements
        petals
            .enter()
            .append("path")
            .merge(petals) // Combine enter + update selections
            .attr("d", d => {
                const ratingKey = d.rated.replace("-", "");
                return petalsRate[ratingKey] || petalsRate[d.rated] || petalsRate.R;
            })
            .attr("fill", d => {
                let fillColor = movieGenre[d.genres[0]] || movieGenre["Other"];
                return fillColor.startsWith('cbf') ? '#' + fillColor : fillColor;
            })
            .attr("stroke", d => {
                let fillColor = movieGenre[d.genres[0]] || movieGenre["Other"];
                return fillColor.startsWith('cbf') ? '#' + fillColor : fillColor;
            })
            .attr("stroke-width", "2")
            .attr("fill-opacity", "0.8")
            .attr("transform", (d, i) => {
                const row = Math.floor(i / itemsPerRow);
                const col = i % itemsPerRow;
                const x = (col * colWidth) + (colWidth / 2);
                const y = (row * rowHeight) + (rowHeight / 2);
                return `translate(${x}, ${y})`;
                // return `translate(${x}, ${y}) scale(${d.rating}) `;
            });
    };

    // Initial Render
    renderGrid();

    // 2. Responsive Listener with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderGrid, 100);
    });
};

// createPetalsForMoviesD3();


////////// SCALE


function toKnowScale() {
    /** FrontEndMasters - D3 Course  Scale Example */
const fmData = [90, 30, 58, 29, 60, 1, 14, 47];

// Best practice: Use fixed internal dimensions + viewBox for responsiveness
const fmWidth = 800;
const fmHeight = 600;
const fmMargin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
};

const fmSvg = d3.select('body')
    .append('svg')
    // viewBox defines internal coordinate system
    .attr('viewBox', `0 0 ${fmWidth} ${fmHeight}`)
    // CSS controls actual size on screen (responsive)
    .style('width', '80vw')
    .style('height', '80vh')
    .style('max-width', '100%')
    .style('border', '1px dashed pink')
    .style('display', 'block')
    .style('margin', '0 auto')

const xScale = d3.scaleBand()
    .domain(d3.range(fmData.length))
    .range([fmMargin.left, fmWidth - fmMargin.right])
    .padding(0.34)

const max = d3.max(fmData, d => d)

const yScale = d3.scaleLinear()
    .domain([0, max])
    .range([fmHeight - fmMargin.bottom, fmMargin.top])

fmSvg.selectAll('rect')
    .data(fmData).enter().append('rect')
    .attr('x', (d, i) => xScale(i))
    .attr('y', d => yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => (fmHeight - fmMargin.bottom) - yScale(d))
    .attr('fill', 'pink')



const scale = d3.scaleLinear()
    .domain([0, d3.max(moviesData, d => d.rating)])
    .range([0.5, 1.5]);

scale(1); // Example usage
}

// toKnowScale();



function createPetalMovies3DScale(){

    document.body.style.margin = "0";
    document.body.innerHTML = `<svg id="container" style="display: block; width: 100%;"></svg>`;

    const svg = d3.select("#container");

    // votes → scale (size of petals)
    const minMaxVotes = d3.extent(moviesData, d => d.votes);
    const sizeScale = d3.scaleLinear()
        .domain(minMaxVotes)
        .range([0.3, 1.0]);

    const renderGrid = () => {
        const svgWidth = window.innerWidth;
        const colWidth = 120;
        const rowHeight = 150;
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));

        const numRows = Math.ceil(moviesData.length / itemsPerRow);
        const totalHeight = numRows * rowHeight;

        svg
            .attr("height", totalHeight)
            .attr("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        const petals = svg
            .selectAll("path")
            .data(moviesData, (d, i) => i);

        petals.exit().remove();

        petals
            .enter()
            .append("path")
            .merge(petals)
            .attr("d", d => {
                const ratingKey = d.rated.replace("-", "");
                return petalsRate[ratingKey] || petalsRate[d.rated] || petalsRate.R;
            })
            .attr("fill", d => {
                let fillColor = movieGenre[d.genres[0]] || movieGenre["Other"];
                return fillColor.startsWith('cbf') ? '#' + fillColor : fillColor;
            })
            .attr("stroke", d => {
                let fillColor = movieGenre[d.genres[0]] || movieGenre["Other"];
                return fillColor.startsWith('cbf') ? '#' + fillColor : fillColor;
            })
            .attr("stroke-width", "2")
            .attr("fill-opacity", "0.8")
            .attr("transform", (d, i) => {
                const row = Math.floor(i / itemsPerRow);
                const col = i % itemsPerRow;
                const x = (col * colWidth) + (colWidth / 2);
                const y = (row * rowHeight) + (rowHeight / 2);
                return `translate(${x}, ${y}) scale(${sizeScale(d.votes)})`;
            });
    };

    renderGrid();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderGrid, 100);
    });
}

// createPetalMovies3DScale();


/* FrontEndMasters - D3 Course  Group Elements Example with genres  */

function createPetalFlowers() {
    document.body.style.margin = "0";
    document.body.innerHTML = `<svg id="container" style="display: block; width: 100%;"></svg>`;

    const svg = d3.select("#container");

    const minMaxVotes = d3.extent(moviesData, d => d.votes);
    const sizeScale = d3.scaleLinear()
        .domain(minMaxVotes)
        .range([0.3, 1.0]);

    const colorScale = d3.scaleOrdinal()
        .domain(topGenres)
        .range(topGenres.map(g => movieGenre[g]))
        .unknown(movieGenre["Other"]);

    const renderGrid = () => {
        const svgWidth = window.innerWidth;
        const colWidth = 120;
        const rowHeight = 150;
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));

        const numRows = Math.ceil(moviesData.length / itemsPerRow);
        const totalHeight = numRows * rowHeight;

        svg
            .attr("height", totalHeight)
            .attr("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        svg.selectAll("g.flower").remove();

        const groups = svg.selectAll("g.flower")
            .data(moviesData)
            .enter().append("g")
            .attr("class", "flower")
            .attr("transform", (d, i) => {
                const row = Math.floor(i / itemsPerRow);
                const col = i % itemsPerRow;
                const x = (col * colWidth) + (colWidth / 2);
                const y = (row * rowHeight) + (rowHeight / 2);
                return `translate(${x}, ${y}) scale(${sizeScale(d.votes)})`;
            });

        groups.selectAll("path")
            .data(d => {
                const numPetals = d.genres.length;
                return d3.range(numPetals).map(i => ({
                    ...d,
                    genre: d.genres[i],
                    rotate: i * (360 / numPetals)
                }));
            })
            .enter().append("path")
            .attr("d", d => {
                const ratingKey = d.rated.replace("-", "");
                return petalsRate[ratingKey] || petalsRate[d.rated] || petalsRate.R;
            })
            .attr("fill", d => {
                let c = colorScale(d.genre);
                return c && c.startsWith('cbf') ? '#' + c : c;
            })
            .attr("stroke", d => {
                let c = colorScale(d.genre);
                return c && c.startsWith('cbf') ? '#' + c : c;
            })
            .attr("fill-opacity", 0.5)
            .attr("stroke-width", 2)
            .attr("transform", d => `rotate(${d.rotate})`);
    };

    renderGrid();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderGrid, 100);
    });
}

// createPetalFlowers();


function createPetalFlowersQuantize() {
    document.body.style.margin = "0";
    document.body.innerHTML = `<svg id="container" style="display: block; width: 100%;"></svg>`;

    const svg = d3.select("#container");

    const petalCountScale = d3.scaleQuantize()
        .domain(d3.extent(moviesData, d => d.votes))
        .range([3, 4, 5, 6, 7, 8, 9, 10]);

    const sizeScale = d3.scaleLinear()
        .domain(d3.extent(moviesData, d => d.votes))
        .range([0.3, 1.0]);

    const colorScale = d3.scaleOrdinal()
        .domain(topGenres)
        .range(topGenres.map(g => movieGenre[g]))
        .unknown(movieGenre["Other"]);

    const renderGrid = () => {
        const svgWidth = window.innerWidth;
        const colWidth = 120;
        const rowHeight = 150;
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));

        const numRows = Math.ceil(moviesData.length / itemsPerRow);
        const totalHeight = numRows * rowHeight;

        svg
            .attr("height", totalHeight)
            .attr("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        svg.selectAll("g.flower").remove();

        const groups = svg.selectAll("g.flower")
            .data(moviesData)
            .enter().append("g")
            .attr("class", "flower")
            .attr("transform", (d, i) => {
                const row = Math.floor(i / itemsPerRow);
                const col = i % itemsPerRow;
                const x = (col * colWidth) + (colWidth / 2);
                const y = (row * rowHeight) + (rowHeight / 2);
                return `translate(${x}, ${y}) scale(${sizeScale(d.votes)})`;
            });

        groups.selectAll("path")
            .data(d => {
                const numPetals = petalCountScale(d.votes);
                return d3.range(numPetals).map(i => ({
                    ...d,
                    rotate: i * (360 / numPetals)
                }));
            })
            .enter().append("path")
            .attr("d", d => {
                const ratingKey = d.rated.replace("-", "");
                return petalsRate[ratingKey] || petalsRate[d.rated] || petalsRate.R;
            })
            .attr("fill", d => {
                let c = colorScale(d.genres[0]);
                return c && c.startsWith('cbf') ? '#' + c : c;
            })
            .attr("stroke", d => {
                let c = colorScale(d.genres[0]);
                return c && c.startsWith('cbf') ? '#' + c : c;
            })
            .attr("fill-opacity", 0.5)
            .attr("stroke-width", 2)
            .attr("transform", d => `rotate(${d.rotate})`);

            groups.append('text')
            .text(d => d.title)
            .attr('text-anchor', 'middle')
            .attr('dy', 5)
            .attr('font-size', 10)
            .attr('fill', '#333');
    };

    renderGrid();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderGrid, 100);
    });
}

// createPetalFlowersQuantize();


// * Exercise for update DOM Manipulation */

function enterUpdateExit() {
    const svgHeight = 200;
    const rectWidth = 50;

    const dataA = [45, 67, 96, 84, 41];
    const dataB = [33, 62, 84, 10, 45, 22, 2, 60];
    let currentData = dataA;

    const container = d3.select('#bindingExercise').html('');

    const btnRow = container.append('div')
        .style('margin-bottom', '1rem');

    btnRow.append('button').text('Dataset A (5 bars)')
        .style('margin-right', '8px')
        .on('click', () => update(dataA));

    btnRow.append('button').text('Dataset B (8 bars)')
        .on('click', () => update(dataB));

    const svg = container.append('svg')
        .attr('width', rectWidth * 10)
        .attr('height', svgHeight)
        .style('border', '1px dashed pink');

    function update(newData) {
        currentData = newData;
        console.log('currentData:', currentData);

        const rect = svg.selectAll('rect')
            .data(currentData, d => d);

        // EXIT: data no longer present → remove bars
        rect.exit()
            .attr('fill', 'tomato')
            .transition().duration(500)
            .attr('height', 0)
            .attr('y', svgHeight)
            .remove();

            rect.attr('fill', 'lightblue');    

        // ENTER: new data without a bar → create bars
        const enter = rect.enter().append('rect')
            .attr('width', rectWidth - 5)
            .attr('fill', 'pink')
            .attr('y', svgHeight)
            .attr('height', 0);

        // ENTER + UPDATE: position all bars that should exist
        enter.merge(rect)
            .transition().duration(800)
            .attr('x', (d, i) => i * rectWidth)
            .attr('y', d => svgHeight - d)
            .attr('height', d => d)
            // .attr('fill', 'pink');
    }

    update(dataA);
}

// Same exercise but using the modern .join() syntax
function enterUpdateExitJoin() {
    const svgHeight = 200;
    const rectWidth = 50;

    const dataA = [45, 67, 96, 84, 41];
    const dataB = [33, 62, 84, 10, 45, 22, 2, 60];

    const container = d3.select('#bindingExercise').html('');

    const btnRow = container.append('div')
        .style('margin-bottom', '1rem');

    btnRow.append('button').text('Dataset A (5 bars)')
        .style('margin-right', '8px')
        .on('click', () => update(dataA));

    btnRow.append('button').text('Dataset B (8 bars)')
        .on('click', () => update(dataB));

    const svg = container.append('svg')
        .attr('width', rectWidth * 10)
        .attr('height', svgHeight)
        .style('border', '1px dashed pink');

    function update(newData) {
        svg.selectAll('rect')
            .data(newData, d => d)
            .join(
                enter => enter.append('rect')
                    .attr('width', rectWidth - 5)
                    .attr('fill', 'pink')
                    .attr('y', svgHeight)
                    .attr('height', 0)
                    .attr('x', (d, i) => i * rectWidth)
                    .call(el => el.transition().duration(800)
                        .attr('y', d => svgHeight - d)
                        .attr('height', d => d)),
                update => update
                    .call(el => el.transition().duration(800)
                        .attr('x', (d, i) => i * rectWidth)
                        .attr('y', d => svgHeight - d)
                        .attr('height', d => d)
                        .attr('fill', 'lightblue')),
                exit => exit
                    .attr('fill', 'tomato')
                    .call(el => el.transition().duration(500)
                        .attr('height', 0)
                        .attr('y', svgHeight)
                        .remove())
            );
    }

    update(dataA);
}

// enterUpdateExit();       // Old way: enter() + merge() + exit()
// enterUpdateExitJoin();   // New way: join(enter, update, exit)


const transitionSolution = () => {
    const svgHeight = 200;
    const rectWidth = 50;

    const dataA = [45, 67, 96, 84, 41];
    const dataB = [33, 62, 84, 10, 45, 22, 2, 60];

    const container = d3.select('#bindingExercise').html('');

    const btnRow = container.append('div')
        .style('margin-bottom', '1rem');

    btnRow.append('button').text('Dataset A (5 bars)')
        .style('margin-right', '8px')
        .on('click', () => update(dataA));

    btnRow.append('button').text('Dataset B (8 bars)')
        .on('click', () => update(dataB));

    const svg = container.append('svg')
        .attr('width', rectWidth * 10)
        .attr('height', svgHeight)
        .style('border', '1px dashed pink');

        function update(newData) {
            const t = d3.transition().duration(800);

            svg.selectAll('rect')
            .data(newData, d => d)
            .join(
                enter => {
                    return enter.append('rect')
                        .attr('height', 0)
                        .attr('y', svgHeight)
                        .attr('x', (d, i) => i * rectWidth)
                        .attr('fill', 'pink')
                },
                update => update.attr('fill', 'lightblue'),
                exit => {
                    exit.transition(t)
                    .attr('height', 0)
                    .attr('y', svgHeight)
                    .attr('fill', 'tomato')
                }
            )
            .attr('width', rectWidth - 5)
            .transition(t)
            .attr('x', (d, i) => i * rectWidth)
            .attr('y', d => svgHeight - d)
            .attr('height', d => d);
        }

        update(dataA);
}

// transitionSolution(); // New way: join(enter, update, exit) from teacher's solution


function createPetalFlowersFilter() {
    const body = document.body;
    const svgContainer = document.createElement('div');
    svgContainer.id = 'SVG-container';
    svgContainer.innerHTML = `<svg id="container" style="display: block; width: 100%;"></svg>`;
    document.body.style.margin = "0";
    body.appendChild(svgContainer);
    const filterContainer = document.createElement('div');
    filterContainer.id = 'filterContainer';
    // filterContainer.innerHTML = `<div id="filterContainer"></div>`;
    body.prepend(filterContainer);

    const svg = d3.select("#container");

    const genreFilter = document.createElement('div');
    genreFilter.className = 'genre-filter';
    const ratingFilter = document.createElement('div');
    ratingFilter.className = 'rating-filter';
    filterContainer.appendChild(genreFilter);
    filterContainer.appendChild(ratingFilter);
    topGenres.forEach(genre => { 
        const genreLabel = document.createElement('label');
        genreLabel.htmlFor = genre;
        genreLabel.textContent = genre;
        genreFilter.appendChild(genreLabel);
        const genreInput = document.createElement('input');
        genreInput.type = 'checkbox';
        genreInput.name = 'genre';
        genreInput.value = genre;
        genreInput.id = genre;
        genreFilter.appendChild(genreInput);
    })

    const ratingsList = [];
    moviesData.forEach(movie => {
        ratingsList.push(movie.rated);
    });
    const uniqueRatings = [...new Set(ratingsList)];
    uniqueRatings.forEach(rating => {
        const ratingLabel = document.createElement('label');
        ratingLabel.htmlFor = rating;
        ratingLabel.textContent = rating;
        ratingFilter.appendChild(ratingLabel);
        const ratingInput = document.createElement('input');
        ratingInput.type = 'checkbox';
        ratingInput.name = 'rating';
        ratingInput.value = rating;
        ratingInput.id = rating;
        ratingFilter.appendChild(ratingInput);
       
    });

    const genres = document.querySelectorAll('input[name="genre"]');
    const ratings = document.querySelectorAll('input[name="rating"]');


    const petalCountScale = d3.scaleQuantize()
        .domain(d3.extent(moviesData, d => d.votes))
        .range([3, 4, 5, 6, 7, 8, 9, 10]);

    const sizeScale = d3.scaleLinear()
        .domain(d3.extent(moviesData, d => d.votes))
        .range([0.3, 1.0]);

    const colorScale = d3.scaleOrdinal()
        .domain(topGenres)
        .range(topGenres.map(g => movieGenre[g]))
        .unknown(movieGenre["Other"]);

    const renderGrid = (data) => {
        const svgWidth = window.innerWidth;
        const colWidth = 120;
        const rowHeight = 150;
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));

        const numRows = Math.ceil(data.length / itemsPerRow);
        const totalHeight = numRows * rowHeight;

        svg
            .attr("height", totalHeight)
            .attr("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        svg.selectAll("g.flower").remove();

        const groups = svg.selectAll("g.flower")
            .data(data)
            .enter().append("g")
            .attr("class", "flower")
            .attr("transform", (d, i) => {
                const row = Math.floor(i / itemsPerRow);
                const col = i % itemsPerRow;
                const x = (col * colWidth) + (colWidth / 2);
                const y = (row * rowHeight) + (rowHeight / 2);
                return `translate(${x}, ${y}) scale(${sizeScale(d.votes)})`;
            });

        groups.selectAll("path")
            .data(d => {
                const numPetals = petalCountScale(d.votes);
                return d3.range(numPetals).map(i => ({
                    ...d,
                    rotate: i * (360 / numPetals)
                }));
            })
            .enter().append("path")
            .attr("d", d => {
                const ratingKey = d.rated.replace("-", "");
                return petalsRate[ratingKey] || petalsRate[d.rated] || petalsRate.R;
            })
            .attr("fill", d => {
                let c = colorScale(d.genres[0]);
                return c && c.startsWith('cbf') ? '#' + c : c;
            })
            .attr("stroke", d => {
                let c = colorScale(d.genres[0]);
                return c && c.startsWith('cbf') ? '#' + c : c;
            })
            .attr("fill-opacity", 0.5)
            .attr("stroke-width", 2)
            .attr("transform", d => `rotate(${d.rotate})`);

            groups.append('text')
            .text(d => d.title)
            .attr('text-anchor', 'middle')
            .attr('dy', 5)
            .attr('font-size', 10)
            .attr('fill', '#333');
    };

    renderGrid(moviesData);


    function getFilterData () {
        console.log('genres:', genres);
        console.log('ratings:', ratings);
        const checkedGenres = [...document.querySelectorAll('input[name="genre"]:checked')].map(genre => genre.value);
        const checkedRatings = [...document.querySelectorAll('input[name="rating"]:checked')].map(rating => rating.value);
        return moviesData.filter(movie => {
            const genreMatch = checkedGenres.length === 0 || movie.genres.some(genre => checkedGenres.includes(genre));
            const ratingMatch = checkedRatings.length === 0 || checkedRatings.includes(movie.rated);
            return genreMatch && ratingMatch;
        })
            
 
    }

    genres.forEach(genre => {
        genre.addEventListener('change', () => renderGrid(getFilterData()))
    })
    ratings.forEach(rating => {
        rating.addEventListener('change', () => renderGrid(getFilterData()))
    })

}
// createPetalFlowersFilter(); // Filtering the data based on the genres and ratings


function createPetalFlowersClean() {
    const colWidth = 120, rowHeight = 150;

    const petalCountScale = d3.scaleQuantize()
        .domain(d3.extent(moviesData, d => d.votes))
        .range([3, 4, 5, 6, 7, 8, 9, 10]);

    const sizeScale = d3.scaleLinear()
        .domain(d3.extent(moviesData, d => d.votes))
        .range([0.3, 1.0]);

    const colorScale = d3.scaleOrdinal()
        .domain(topGenres)
        .range(topGenres.map(g => movieGenre[g]))
        .unknown(movieGenre["Other"]);

    const uniqueRatings = [...new Set(moviesData.map(d => d.rated))];

    const wrapper = d3.select("body");
    wrapper.selectAll("#filterContainer, #SVG-container").remove();

    const filters = wrapper.append("div").attr("id", "filterContainer");
    const svg = wrapper.append("div").attr("id", "SVG-container")
        .append("svg").style("display", "block").style("width", "100%");

    function addFilterGroup(container, label, items, name) {
        const group = container.append("div").attr("class", `${name}-filter`);
        group.append("span").text(label).style("font-weight", "bold").style("margin-right", "8px");
        items.forEach(item => {
            const lbl = group.append("label").style("cursor", "pointer");
            lbl.append("input")
                .attr("type", "checkbox")
                .attr("name", name)
                .attr("value", item)
                .on("change", onFilterChange);
            lbl.append("span").text(item);
        });
    }

    addFilterGroup(filters, "Genre:", topGenres, "genre");
    addFilterGroup(filters, "Rating:", uniqueRatings, "rating");

    function getFilteredData() {
        const genres = [...document.querySelectorAll('input[name="genre"]:checked')].map(d => d.value);
        const ratings = [...document.querySelectorAll('input[name="rating"]:checked')].map(d => d.value);

        return moviesData.filter(movie => {
            const genreOk = genres.length === 0 || movie.genres.some(g => genres.includes(g));
            const ratingOk = ratings.length === 0 || ratings.includes(movie.rated);
            return genreOk && ratingOk;
        });
    }

    function onFilterChange() {
        renderGrid(getFilteredData());
    }

    function renderGrid(data) {
        const svgWidth = window.innerWidth;
        const itemsPerRow = Math.max(1, Math.floor(svgWidth / colWidth));
        const totalHeight = Math.ceil(data.length / itemsPerRow) * rowHeight;

        svg.attr("height", totalHeight)
            .attr("viewBox", `0 0 ${svgWidth} ${totalHeight}`);

        svg.selectAll("g.flower").remove();

        const groups = svg.selectAll("g.flower")
            .data(data)
            .enter().append("g")
            .attr("class", "flower")
            .attr("transform", (d, i) => {
                const col = i % itemsPerRow;
                const row = Math.floor(i / itemsPerRow);
                return `translate(${col * colWidth + colWidth / 2}, ${row * rowHeight + rowHeight / 2}) scale(${sizeScale(d.votes)})`;
            });

        groups.selectAll("path")
            .data(d => {
                const n = petalCountScale(d.votes);
                return d3.range(n).map(i => ({ ...d, rotate: i * (360 / n) }));
            })
            .enter().append("path")
            .attr("d", d => petalsRate[d.rated.replace("-", "")] || petalsRate[d.rated] || petalsRate.R)
            .attr("fill", d => colorScale(d.genres[0]))
            .attr("stroke", d => colorScale(d.genres[0]))
            .attr("fill-opacity", 0.5)
            .attr("stroke-width", 2)
            .attr("transform", d => `rotate(${d.rotate})`);

        groups.append("text")
            .text(d => d.title)
            .attr("text-anchor", "middle")
            .attr("dy", 5)
            .attr("font-size", 10)
            .attr("fill", "#333");
    }

    renderGrid(moviesData);
}
createPetalFlowersClean();