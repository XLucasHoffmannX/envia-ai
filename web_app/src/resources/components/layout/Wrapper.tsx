import React from 'react';
import Logo from '../../assets/images/logo.png';

type Props = {
    children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }: any) => {
    return (
        <div className='container'>
            <header className='header'>
                <img src={Logo} alt="" />
                <h2>Compartilhe arquivos de forma rápida e fácil</h2>
            </header>
            <main className='main'>
                {children}
            </main>
        </div>
    )
}

export default Wrapper;