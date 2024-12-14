  // Eventos
  document.getElementById('startGame').addEventListener('click', startGame);
  document.getElementById('hireEmployee').addEventListener('click', hireEmployee);
  document.getElementById('fireEmployee').addEventListener('click', fireEmployee);
  document.getElementById('investMarketing').addEventListener('click', investMarketing);
  document.getElementById('increaseProduction').addEventListener('click', increaseProduction);

let gameState = {
    companyName: '',
    sector: '',
    money: 100000,
    employees: 10,
    satisfaction: 75,
  };
  
  // Iniciar o jogo
  function startGame() {
    const companyName = document.getElementById('companyName').value.trim();
    const sector = document.getElementById('sector').value;
  
    if (!companyName) {
      alert('Por favor, insira o nome da empresa!');
      return;
    }
  
    // Configuração inicial do estado do jogo
    gameState.companyName = companyName;
    gameState.sector = sector;
  
    // Atualizar cabeçalho e exibir dashboard
    document.getElementById('companyDisplay').textContent = companyName;
    toggleView('setup', 'dashboard');
    updateUI();
  }
  
  // Alternar entre seções
  function toggleView(hide, show) {
    document.getElementById(hide).classList.add('hidden');
    document.getElementById(show).classList.remove('hidden');
  }
  
  // Atualizar interface
  function updateUI() {
    document.getElementById('money').textContent = gameState.money.toLocaleString('pt-BR');
    document.getElementById('employees').textContent = gameState.employees;
    document.getElementById('satisfaction').textContent = `${gameState.satisfaction}%`;
  }
  
  // Ações
  function hireEmployee() {
    if (gameState.money >= 5000) {
      gameState.money -= 5000;
      gameState.employees += 1;
      updateUI();
    } else {
      alert('Dinheiro insuficiente para contratar um funcionário!');
    }
  }
  
  function fireEmployee() {
    if (gameState.employees > 1) {
      gameState.money += 3000;
      gameState.employees -= 1;
      updateUI();
    } else {
      alert('Você não pode demitir o último funcionário!');
    }
  }
  
  function investMarketing() {
    if (gameState.money >= 10000) {
      gameState.money -= 10000;
      gameState.satisfaction = Math.min(100, gameState.satisfaction + 10);
      updateUI();
    } else {
      alert('Dinheiro insuficiente para investir em marketing!');
    }
  }
  
  function increaseProduction() {
    if (gameState.money >= 7000) {
      gameState.money -= 7000;
      gameState.satisfaction = Math.max(0, gameState.satisfaction - 5);
      updateUI();
    } else {
      alert('Dinheiro insuficiente para aumentar a produção!');
    }
  }
  

  