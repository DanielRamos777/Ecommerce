import './Footer.css'
import facebook from './icon/facebook.svg'
import instagram from './icon/instagram.svg'
import twitter from './icon/twitter.svg'
import youtube from './icon/youtube.svg'

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Siguenos en nuestras redes sociales</h3>
                <a target="_blank" href="https://www.facebook.com/" to='/facebook'><img src={facebook} alt="Logo de Facebook"/></a>
                <a target="_blank" href="https://www.instagram.com/" to='/facebook'><img src={instagram} alt="Logo de Instagram"/></a>
                <a target="_blank" href="https://twitter.com/" to='/facebook'><img src={twitter} alt="Logo de Twitter"/></a>
                <a target="_blank" href="https://www.youtube.com/" to='/facebook'><img src={youtube} alt="Logo de You tube"/></a>
            </div>
        <p className='Copyright'>Copyright - Oscar Daniel Ramos Villalobos - Estudiante de Coderhouse del curso de JS React - Comisión 47200</p>
    </footer>
    );
}

export default Footer