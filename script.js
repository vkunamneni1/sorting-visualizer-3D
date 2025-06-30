let numbers = [8, 3, 5, 4, 7, 6, 1, 2, 9, 10, 12, 11], bars = [], isAnimating = false;

window.onload = function() { bars = document.querySelectorAll('a-box'); };

function shuffle() {
    if (isAnimating) return;
    
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    updateAllBars();
}

function updateAllBars() {
    for (let i = 0; i < numbers.length; i++) {
        bars[i].setAttribute('position', `${i * 1.5 - 8} ${numbers[i] / 2} 0`);
        bars[i].setAttribute('height', numbers[i]);
        if (bars[i].getAttribute('color') !== '#2ecc71') {
            bars[i].setAttribute('color', '#3498db');
        }
    }
}

function bubbleSort() {
    if (isAnimating) {
        return;   
    }
    isAnimating = true;
    
    let i = 0;
    let j = 0;
    
    function nextStep() {
        if (i >= numbers.length - 1) {
            bars[0].setAttribute('color', '#2ecc71');
            isAnimating = false;
            return;
        }
        
        if (j >= numbers.length - i - 1) {
            bars[numbers.length - 1 - i].setAttribute('color', '#2ecc71');
            i++;
            j = 0;
            setTimeout(nextStep, 100);
            return;
        }
        
        if (bars[j].getAttribute('color') !== '#2ecc71') {
            bars[j].setAttribute('color', '#e74c3c');
        }
        if (bars[j + 1].getAttribute('color') !== '#2ecc71') {
            bars[j + 1].setAttribute('color', '#e74c3c');
        }
        
        setTimeout(function() {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                
                updateAllBars();
                
                if (bars[j].getAttribute('color') !== '#2ecc71') {
                    bars[j].setAttribute('color', '#f39c12');
                }
                if (bars[j + 1].getAttribute('color') !== '#2ecc71') {
                    bars[j + 1].setAttribute('color', '#f39c12');
                }
                
                setTimeout(function() {
                    if (bars[j].getAttribute('color') !== '#2ecc71') {
                        bars[j].setAttribute('color', '#3498db');
                    }
                    if (bars[j + 1].getAttribute('color') !== '#2ecc71') {
                        bars[j + 1].setAttribute('color', '#3498db');
                    }
                    j++;
                    nextStep();
                }, 400);

            } else {



                if (bars[j].getAttribute('color') !== '#2ecc71') {
                    bars[j].setAttribute('color', '#3498db');
                }
                if (bars[j + 1].getAttribute('color') !== '#2ecc71') {
                    bars[j + 1].setAttribute('color', '#3498db');
                }
                j++;
                nextStep();
            }
        }, 800);
    }
    
    nextStep();
}


