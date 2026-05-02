function changeAccessibilityStyle(mode) {
    document.body.classList.remove('hc-mode', 'large-text-mode');

    if (mode === 'large') {
        document.body.classList.add('large-text-mode');
    } else if (mode === 'contrast') {
        document.body.classList.add('hc-mode');
    } else if (mode === 'large-contrast') {
        document.body.classList.add('large-text-mode', 'hc-mode');
    }
}