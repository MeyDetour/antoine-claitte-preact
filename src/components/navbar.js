export default function NavbarResponsif  (){
    const openNavbarResponsive = function () {
        const nav =   document.querySelector('.navbarResponsiveOpen')
        if (nav.style.display ==="none"){
            nav.style.display = 'flex';
            document.querySelector('html').style.overflowY = 'hidden'
        }else{
            nav.style.display = 'none';

            document.querySelector('html').style.overflowY = 'auto'
        }
    }

    return (
        <>
        <div className="navbarResponsive">
            <span>logo</span>
            <svg onClick={openNavbarResponsive} width="20" height="15" viewBox="0 0 20 15" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="20" height="2" fill="#0D071B"/>
                <rect x="10" y="6.5" width="10" height="2" fill="#0D071B"/>
                <rect y="12.5" width="20" height="2" fill="#0D071B"/>
            </svg>

        </div>
    <div className="navbarResponsiveOpen">
        <span>A propos</span>
        <span>Projets</span>
        <span>Contact</span>

    </div>
</>
)
}