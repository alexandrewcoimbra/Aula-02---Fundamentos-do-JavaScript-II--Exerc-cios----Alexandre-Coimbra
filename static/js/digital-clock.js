$(document).ready(() => {
    // Selecionando os elementos do DOM

    const $clock = $(".clock");
    const $date = $(".date");
    const $toggleButton = $("#toggleButton")
    
    // Atualiza o relógio
    const updateClock = () => $clock.text(new Date().toLocaleTimeString());
    
     
    
    const formatDayOfweek = (dayOfWeek) => {
        const daysOfWeek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira","Sexta-Feira", "Sábado"]
        return daysOfWeek[dayOfWeek];
    }
    
    const formatMonth = (month) => {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        return monthNames[month];
    }
    
    const formatDay = (day) => String(day).padStart(2, "0");
    
    const updateDate = () => {
        const today = new Date();
        const dayOfWeek = formatDayOfweek(today.getDay());
        const month = formatMonth(today.getMonth());
        const day = formatDay(today.getDate());
        const year = today.getFullYear();
    
        $date.text(`${dayOfWeek}, ${day} de ${month} de ${year}`);
    
    };
    
    // setInterval() -> Executar uma ação em um determinado intervalo para sempre!
    // setTimeout() -> Executar uma ação em um determinado intervalo uma única vez.
    let clockTimer = setInterval(updateClock, 1000);
    
    // Controla o estado do relógio
    let isPaused = false;
    
    const toggleTimer = () => {
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(clockTimer);
        } else {
            updateClock()
            clockTimer = setInterval(updateClock, 1000);
        }
    
        $toggleButton.text(isPaused ? "Resumir" : "Pausar");
        $toggleButton.css("background-color", isPaused ? "#ADE25D" : "rgb(6, 164, 236)");
    };
    
    $toggleButton.click(toggleTimer);
    
    
    updateClock();
    updateDate();

})

