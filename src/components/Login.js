
function Login(){
    return (
        <div className='loginContainer'>
            <div className='loginWrapper'>
                <div className='ImageContainer'>
                    <img src='/img/logo.png' alt='bookImg' className='bookImg'/>
                </div>
                <div className='mainContainer'>
                    <div className='emailContainer'>
                        <span>Email : </span>
                        <input type='email' className='email' name='email'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;