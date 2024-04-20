const hourTime = document.getElementById("hour-time");
const dateTime = document.getElementById("hour-date");


function time () {
    const Htime = new Date().getHours()
    
    const Mtime = new Date().getMinutes()
   
    const Dtime = new Date().getDate()
    let months = ["հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր",]
    let M = new Date()
    let Motime = months[M.getMonth()]
    let days = ["Կիր", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"]
    let D = new Date()
    let Datime = days[D.getDay()]


    dateTime.innerHTML = `${Dtime} ${Motime}, ${Datime}`
    hourTime.innerHTML = `${Htime}:${Mtime < 10 ? `0${Mtime}` : Mtime}`
    
}
time()

setInterval(time,60000)


0