function calculateCopies() {
    // Get input values
    const nivelInicial = parseInt(document.getElementById('nivel-inicial').value) || 0;
    const nivelDesejado = parseInt(document.getElementById('nivel-desejado').value) || 0;
    
    // Validate inputs
    if (nivelInicial < 0 || nivelInicial > 80 || 
        nivelDesejado < 1 || nivelDesejado > 80 ||
        nivelInicial > nivelDesejado) {
        clear();
        return;
    }
    
    // Stub calculation - replace with actual logic
    const copiesNeeded = calculateLevelUpCopies(nivelInicial, nivelDesejado);
    
    // Display result
    document.getElementById('copias-necessarias').textContent = copiesNeeded;
    document.getElementById('results').style.display = 'block';
}

function calculateLevelUpCopies(inicial, final) {
    if (inicial === final) {
        return 0;
    }

    let sum = 0;
    for (let i = inicial + 1; i <= final; i++) {
        sum += getCopiesForLevel(i);
    }
    return sum;
}

function getCopiesForLevel(targetLevel) {
    if (targetLevel < 22) {
        return Math.trunc(targetLevel / 2 + 1);
    }

    if (targetLevel < 41) {
        return targetLevel - 10;
    }

    if (targetLevel < 46) {
        return (targetLevel - 40) * 2 + 30;
    }

    if (targetLevel < 50) {
        return (targetLevel - 45) * 3 + 40;
    }

    if (targetLevel < 56) {
        return (targetLevel - 50) * 4 + 55;
    }

    if (targetLevel < 61) {
        return (targetLevel - 55) * 5 + 75;
    }

    if (targetLevel < 65) {
        return (targetLevel - 60) * 15 + 100;
    }

    if (targetLevel == 65) {
        return 180;
    }

    if (targetLevel < 70) {
        return (targetLevel - 65) * 5 + 180;
    }

    if (targetLevel < 72) {
        return (targetLevel - 69) * 10 + 200;
    }

    return (targetLevel - 71) * 5 + 220;
}

function clear() {
    document.getElementById('results').style.display = 'none';
}

calculateCopies();
