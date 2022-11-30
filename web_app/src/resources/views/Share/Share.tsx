import React from 'react'
import Wrapper from '../../components/layout/Wrapper'
import { IoIosPlay } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

import './share.css';

export default function Share() {
    const id: string = String(useParams().id);

    const handleClipBoard = async () => {
        
        share();
        await navigator.clipboard.writeText(document.location.href);
    }

    const share = async () => {
        await navigator.share({
            title: 'envia ai',
            text: 'Dowload de arquivo',
            url: document.location.href,
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }

    return (
        <Wrapper>
            <div className='link_info_box width_up'>
                <span>{document.location.href}</span>
                <HiOutlineClipboardCopy onClick={handleClipBoard} />
            </div>
            <Link to="#" className='button_box' onClick={() => {
                document.location.href = `http://localhost:4040/api/download/${id}`
            }}>
                <div className='button width_up'>
                    <span>Download</span>
                </div>
            </Link>
            <Link to='/' className='to_home'>
                <IoIosPlay />
                Voltar para o inicio
            </Link>
        </Wrapper>
    )
}
