window.addEventListener('resize', function () {
    if (window.innerWidth <= 920) {
        document.getElementById('midle__paragraftext-start').innerHTML = 'Most calendars are designed for teams.';
        document.getElementById('midle__paragraftext-end').innerHTML = ' ';

    } else {
        document.getElementById('midle__paragraftext-start').innerHTML = 'Most calendars are designed for teams. Slate is designed';
        document.getElementById('midle__paragraftext-end').innerHTML = 'for freelancers.';
    }
});