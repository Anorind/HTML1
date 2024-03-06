class Auditorium {
    constructor(name, seats, faculty) {
        this.name = name;
        this.seats = seats;
        this.faculty = faculty;
    }
}

class Group {
    constructor(name, students, faculty) {
        this.name = name;
        this.students = students;
        this.faculty = faculty;
    }
}
function displayAuditoriums(auditoriums) {
    let auditoriumsHtml = '';
    auditoriums.forEach(auditorium => {
        auditoriumsHtml += `<p>Назва: ${auditorium.name}, Кількість місць: ${auditorium.seats}, Факультет: ${auditorium.faculty}</p>`;
    });
    document.getElementById('auditoriums').innerHTML += auditoriumsHtml;
}

function displayAuditoriumsForFaculty(auditoriums, faculty) {
    let filteredAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === faculty);
    displayAuditoriums(filteredAuditoriums);
}

function displaySuitableAuditoriums(auditoriums, group) {
    let suitableAuditoriums = auditoriums.filter(auditorium => auditorium.seats >= group.students && auditorium.faculty === group.faculty);
    displayAuditoriums(suitableAuditoriums);
}

function sortAuditoriumsBySeats(auditoriums) {
    return auditoriums.sort((a, b) => a.seats - b.seats);
}

function sortAuditoriumsByName(auditoriums) {
    return auditoriums.sort((a, b) => a.name.localeCompare(b.name));
}