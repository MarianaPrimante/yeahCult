const panels = document.querySelectorAll('.panel');

toggleOpen = () => {
  this.classList.toggle('open');
}

toggleActive = (e) => {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
