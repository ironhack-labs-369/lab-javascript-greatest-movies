const data = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const mapped = movies.map((movie) => {
        return movie.director;
    });
    return mapped;
}
getAllDirectors(data);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const filtered = directors.filter((director) => {
    if (movies.indexOf(director) === -1) {
        return director;
    }
});
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    count = 0;
    const dramas = arr.filter((movie) => {
        if (
            movie.director == 'Steven Spielberg' &&
            movie.genre.includes('Drama')
        ) {
            return true;
        }
    });
    return dramas.length;
}
howManyMovies(data);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (!arr.length) {
        return 0;
    }
    const sumRate = arr.reduce((acc, val) => {
        return acc + Number(val.rate);
    }, 0);
    let avgRate = Number((sumRate / arr.length).toFixed(2));

    console.log('avgRate', avgRate);
    return avgRate;
}

ratesAverage(data);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    if (!arr.length) {
        return 0;
    }
    let counter = 0;
    const sumRateDramas = arr
        .filter((movie) => movie.genre == 'Drama')
        .reduce((acc, val) => {
            counter++;
            return acc + val.rate;
        }, 0);
    if (counter === 0) {
        return counter;
    }
    const avgRateDramas = Number((sumRateDramas / counter).toFixed(2));
    console.log('avgRateDramas', avgRateDramas);
    return avgRateDramas;
}

dramaMoviesRate(data);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const sorted = [...arr].sort((a, b) => {
        if (a.year == b.year && a.title.localeCompare(b.title) == -1) {
            return b - a;
        }
        return a.year - b.year;
    });

    console.log('sorted', sorted);
    return sorted;
}

orderByYear(data);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const alphabetOrder = [...arr].sort((a, b) => {
        if (a.title.localeCompare(b.title) == 1) {
            return a - b;
        }
    });
    // for (let i = 0; i < 20; i++) {
    //     console.log('movie title: ', alphabetOrder[i].title);
    // }

    console.log('first20', alphabetOrder.slice(-20));
    return JSON.stringify(alphabetOrder.slice(-20));
}

orderAlphabetically(data);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const turnedToMinutes = arr.map((movie) => {
        return {
            ...movie,
            duration:
                Number(movie.duration.split(' ')[0].replace('h', '') * 60) +
                Number(movie.duration.split(' ')[1].replace('min', '')),
        };
    });
    console.log('turned', turnedToMinutes);
    return turnedToMinutes;
}
turnHoursToMinutes(data);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
