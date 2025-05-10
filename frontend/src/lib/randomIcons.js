

export const randomIcons = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    return `/covers/${randomNumber}.png`
}