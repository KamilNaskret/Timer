

class Timer{
    constructor(){
        this.days=null;
        this.hours=null;
        this.minutes=null;
        this.seconds=null;
        this.daysCount=0;
        this.hoursCount=0;
        this.minutesCount=0;
        this.secondsCount=0;
        
    }
    init(){
        this.days = document.querySelector(".days");
        this.hours = document.querySelector(".hours");
        this.minutes = document.querySelector(".minutes");
        this.seconds = document.querySelector(".seconds");
        this.countdown();
        this.setValue();
    }
    countdown(){
        const newYear = new Date("2021-01-01");
        const nowDate = new Date();
        let days = Math.floor((newYear-nowDate)/1000/3600/24);
        let hours = Math.floor((newYear-nowDate)/1000/3600)%24-1;
        let minutes = Math.floor((newYear-nowDate)/1000/60)%60;
        let seconds = Math.floor((newYear-nowDate)/1000)%60;
        this.daysCount=days;
        this.hoursCount=hours;
        this.minutesCount=minutes;
        this.secondsCount=seconds;
    }
    setValue(){
        this.days.innerHTML=this.daysCount;
        this.hours.innerHTML=this.hoursCount;
        this.minutes.innerHTML=this.minutesCount;
        this.seconds.innerHTML=this.secondsCount;

    }
}

const timer = new Timer();
setInterval(timer.init.bind(timer),1000);

