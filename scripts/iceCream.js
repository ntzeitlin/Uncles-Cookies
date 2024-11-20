export const generateIcecreamHTML = (dataArray) => {
    let icecreamHTML = ''
    for (const icecreamObject of dataArray) {
        icecreamHTML += `
            <article class="dessert-card">
                <img src="${icecreamObject.img}" />
                <div class="dessert-description">
                    <h3>${icecreamObject.name}</h3>
                    <p>${icecreamObject.description}</p>
                </div>
            </article>   
        `
    }
    return icecreamHTML
}