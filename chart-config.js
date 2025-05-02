let chartExecucao, chartDespesas;

const initChartExecucao = () => {
    const ctx = document.getElementById('chartExecucao').getContext('2d');
    chartExecucao = new Chart(ctx, {
        type: 'bar',
        data: { /* ... */ },
        options: { /* ... */ }
    });
};

const initChartDespesas = () => {
    const ctx = document.getElementById('chartDespesas').getContext('2d');
    chartDespesas = new Chart(ctx, {
        type: 'pie',
        data: { /* ... */ },
        options: { /* ... */ }
    });
};

const atualizarGraficos = () => {
    // Atualiza dados dos gráficos
    const dados = calcularDadosGraficos();
    
    chartExecucao.data.datasets[0].data = dados.empenhado;
    chartExecucao.data.datasets[1].data = dados.liquidado;
    chartExecucao.update();

    chartDespesas.data.datasets[0].data = dados.despesas;
    chartDespesas.update();
};
