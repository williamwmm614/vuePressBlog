function addIcon() {
 let sideBarWrap = document.getElementsByClassName('sidebar')[0]
 let divEle = document.createElement('div')
 divEle.classList.add('sideBar-banner')
 let imgEle = document.createElement('img')
 imgEle.src = '../images/sideBar_banner.png'
 divEle.append(imgEle)
 sideBarWrap.insertBefore(divEle, sideBarWrap.children[0])
}

setTimeout('addIcon()', 1000)
