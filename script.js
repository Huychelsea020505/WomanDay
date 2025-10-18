function burstHearts() {
    const count = 16;
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.textContent = '❤';
      s.style.position = 'absolute';
      s.style.left = (50 + (Math.random() * 20 - 10)) + 'vw';
      s.style.top = '55vh';
      s.style.fontSize = (18 + Math.random() * 18) + 'px';
      s.style.color = '#ff5c93';
      s.style.opacity = '0.95';
      s.style.transform = 'translate(-50%, -50%)';
      s.style.transition = 'transform 900ms cubic-bezier(.2,.8,.2,1), opacity 900ms linear';
      container.appendChild(s);
      requestAnimationFrame(() => {
        const dx = (Math.random() * 2 - 1) * 120;
        const dy = - (80 + Math.random() * 140);
        s.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
        s.style.opacity = '0';
      });
    }

    setTimeout(() => container.remove(), 1000);
  }

  function togglePetals() {
    const petals = document.querySelector('.petals');
    if (!petals) return;
    const isHidden = petals.style.display === 'none';
    petals.style.display = isHidden ? '' : 'none';}