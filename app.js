const counter = document.getElementById('counter');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const clearBtn = document.getElementById('clear');
  const errorDiv = document.getElementById('error');

  let count = 0;

  function updateCounter() {
    counter.innerHTML = count;
    if (count === 0) {
      clearBtn.style.display = 'none';
      decrementBtn.disabled = true;
      errorDiv.style.display = 'block';
    } else {
      clearBtn.style.display = 'block';
      decrementBtn.disabled = false;
      errorDiv.style.display = 'none';
    }
  }

  incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
  });

  decrementBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      updateCounter();
    }
  });

  clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
  });

  updateCounter();