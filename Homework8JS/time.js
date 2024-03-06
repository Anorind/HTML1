function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.displayTime = function() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    };

    this.addSeconds = function(sec) {
        var totalSeconds = this.seconds + sec;
        this.seconds = totalSeconds % 60;
        this.addMinutes(Math.floor(totalSeconds / 60));
    };

    this.addMinutes = function(min) {
        var totalMinutes = this.minutes + min;
        this.minutes = totalMinutes % 60;
        this.addHours(Math.floor(totalMinutes / 60));
    };

    this.addHours = function(hr) {
        var totalHours = this.hours + hr;
        this.hours = totalHours % 24;
    };
}

window.onload = function() {
    var time = new Time(20, 30, 45);
    document.getElementById('result').innerHTML = 
        'Time: '+ time.displayTime() + '<br>';

    time.addSeconds(30);
    document.getElementById('result').innerHTML += 
        'Add 30 sec: '+ time.displayTime() + '<br>';

    time.addMinutes(15);
    document.getElementById('result').innerHTML += 
        'Add 15 min: '+ time.displayTime() + '<br>';

    time.addHours(2);
    document.getElementById('result').innerHTML += 
        'Add 2 hours: '+ time.displayTime();
}