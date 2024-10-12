window.addEventListener("load", function(){
    Chart.defaults.color = '#fff'
    Chart.defaults.borderColor = '#444'

    const getDataColors = opacity => {
        const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
        return colors.map(color => opacity ? `${color + opacity}` : color)
    }
    
    const ctx = document.getElementById("myChart")
    
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 32, 85];

    new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                labels: xValues,
                backgroundColor: getDataColors(80),
                borderColor: "#222",
                data: yValues
            }]
        },
        options: {
            animation: true,
            title: {
                display: false
            }
        }
    });
})