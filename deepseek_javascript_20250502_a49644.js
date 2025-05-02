// 1. Estado Global
let empenhos = [];
let faturamentos = [];
let editEmpenhoId = null;
let editFaturamentoId = null;

// 2. Inicialização
const init = () => {
    carregarDadosDoStorage();
    carregarDados();
    initChartExecucao();
    initChartDespesas();
};

// 3. Persistência de Dados
const carregarDadosDoStorage = () => {
    // Carrega dados do localStorage
};

const salvarDados = () => {
    // Salva dados no localStorage
};

// 4. Formatação
const formatarMoeda = (valor) => {
    // Formata valores monetários
};

const formatarData = (isoDate) => {
    // Formata datas BR
};

// 5. Cálculos Financeiros
const calcularTotalLiquidadoEmpenho = (empenhoId) => {
    // Calcula total liquidado por empenho
};

const calcularSaldoDisponivelEmpenho = (empenho) => {
    // Calcula saldo disponível
};

// 6. Renderização UI
const renderizarTabelaEmpenhos = () => {
    // Atualiza tabela de empenhos
};

const renderizarTabelaFaturamento = () => {
    // Atualiza tabela de faturamento
};

// 7. CRUD Operations
const salvarEmpenho = (event) => {
    // Salva/Atualiza empenho
};

const salvarFaturamento = (event) => {
    // Salva/Atualiza faturamento
};

// 8. Import/Export
const exportarJson = () => {
    // Exporta dados para JSON
};

const importarJson = (event) => {
    // Importa dados de JSON
};

// 9. Validações
const validarSequenciaDatas = (faturamentoData) => {
    // Valida ordem cronológica
};

// 10. Utilitários
const exibirAlerta = (mensagem, tipo = 'success') => {
    // Exibe mensagens flutuantes
};

const openModal = (tipo, id) => {
    // Gerencia modais
};

// 11. Event Listeners
document.addEventListener('DOMContentLoaded', init);