import './css/Header.css';

function Header(){
    return(
        <div className='headerContainer'>
            <div className='headerWrapper'>
                <div className='logoContainer'>
                    <img className='logoImg' alt='BookBook_Logo' src='/img/logo.png'/>
                </div>
                <div className='menuContainer'>
                    <div>메뉴1</div>
                    <div>메뉴1</div>
                    <div>메뉴1</div>
                    <div>메뉴1</div>
                </div>
            </div>

        </div>
    );
}

export default Header;