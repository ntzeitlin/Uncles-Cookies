export const generateCookieHTML = (dataArray) => {
    let cookieHTML = ''
    for (const cookieObject of dataArray) {
        cookieHTML += `
            <article class="dessert-card">
                <img src="${cookieObject.img}" />
                <div class="dessert-description">
                    <h3>${cookieObject.name}</h3>
                    <p>${cookieObject.description}</p>
                </div>

            </article>   
        `
    }
    return cookieHTML
}