export const setDomFontSize = (): void => {
    const width = document.documentElement.clientWidth || document.body.clientWidth
    const fontsize = `${(width <= 1400 ? 1400 : (width > 1920 ? 1920 : width)) / 100}px`;
    (document.getElementsByTagName('html')[0].style as any)['font-size'] = fontsize
}

window.addEventListener('resize', setDomFontSize) 
