const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backGroundColor = estilosBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = backGroundColor
    p.style.color = '#ffff';
}