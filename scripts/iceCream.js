export const generateIcecreamHTML = (dataArray) => {
    let icecreamHTML = ''
    for (const icecreamObject of dataArray) {
        icecreamHTML += `
            <article class="dessert-card">
                <img src="${icecreamObject.img}" />
                <h3>${icecreamObject.name}</h3>
                <p>${icecreamObject.description}</p>
            </article>   
        `
    }
    return icecreamHTML
}