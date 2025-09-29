function mostrarTela(idDaTela) {
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => {
        tela.classList.remove('ativa');
    });

    const telaAtiva = document.getElementById(idDaTela);
    if (telaAtiva) {
        telaAtiva.classList.add('ativa');
    }
    
    const navLinks = document.querySelectorAll('.sidebar-desktop .nav-link, .sidebar-mobile .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `mostrarTela('${idDaTela}')`) {
            link.classList.add('active');
        }
    });

    if (idDaTela === 'ranking') {
        criarGraficoHistorico();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarTela('dashboard');
});


let meuGrafico = null;

function criarGraficoHistorico() {
    const ctx = document.getElementById('graficoPontos');
    
    if (ctx && !meuGrafico) { 
        meuGrafico = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Junho', 'Julho', 'Agosto', 'Setembro'],
                datasets: [{
                    label: 'Pontos Acumulados',
                    data: [100, 700, 1203, 1250],
                    borderColor: '#DC4405',
                    backgroundColor: 'rgba(220, 68, 5, 0.1)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}