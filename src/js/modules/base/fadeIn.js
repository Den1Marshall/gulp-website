export const fadeIn = (clickTarget, changingElement, duration = 400, displayProperty = 'initial') => {
    if (clickTarget) {
        clickTarget.addEventListener('click', () => {
            changingElement.style.display = displayProperty
            changingElement.style.animation = `fade ${duration}ms 1`
            setTimeout(() => {
                changingElement.style.animation = ``
            }, duration);
        })
    } else {
        changingElement.style.display = displayProperty
        changingElement.style.animation = `fade ${duration}ms 1`
        setTimeout(() => {
            changingElement.style.animation = ``
        }, duration);
    }
}