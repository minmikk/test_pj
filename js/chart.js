const ctx = document.querySelector('.graph');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{
            data: [100,200,300,400,500,600,1000,2000,3000,600,300,800],
            borderColor: [
                'rgba(134, 248, 255, 1)'
            ],
            pointStyle: false,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// tab : ACTIVE
const list = document.querySelectorAll('.field_menu');
function siblings(el) {
    let sibChildren = el.parentElement.children;
    let sibArr = [];
    Array.from(sibChildren).forEach(x => {
        sibArr.push(x)
    });
    return sibArr.filter(node => node != el);
};
list.forEach((btn, idx) => {
    btn.addEventListener('click',function(e){
        e.preventDefault();
        siblings(e.currentTarget).forEach((i) => {
            i.classList.remove('on')
        });
        list[idx].classList.add('on')
    });
});