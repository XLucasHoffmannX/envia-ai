import React from 'react';
import Wrapper from '../../components/layout/Wrapper';
import Lottie from 'react-lottie';
import UploadAnimation from '../../assets/animation/upload-archive.json';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { IoIosPlay } from 'react-icons/io';
import { MdArchive } from 'react-icons/md';
import './upload.css';

export default function Upload() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: UploadAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [openProgress, setOpenProgress] = React.useState<boolean>(false);
    const [load, setLoad] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>();
    const [file, setFile] = React.useState<Blob|any>();
    const [percent, setPercent] = React.useState<string>('0%');
    const [status, setStatus] = React.useState<string>();
    const [fileName, setFileName] = React.useState<string>();
    const uploadRef = React.useRef<any>();
    const progressRef = React.useRef<any>();

    const UploadFile = () => {
        const file = uploadRef.current.files[0];
        setFileName(file.name)
        setFile(file);
        const formData = new FormData();
        formData.append("archive", file);
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", ProgressHandler, false);
        xhr.open("POST", "/");
        xhr.send(formData);
    };

    const ProgressHandler = (e: any) => {
        setOpenProgress(true);
        setStatus(`Realizado ${e.loaded} bytes de ${e.total}`);
        let percent = (e.loaded / e.total) * 100;

        setPercent(`${Math.round(percent)}%`);
    };

    const handleSubmit = async () => {
        setLoad(true);
        sessionStorage.setItem("envia-key", `${uuidv4()}${fileName}`);
        const session = sessionStorage.getItem("envia-key");
        const formData = new FormData();

        formData.append("key", String(session))
        formData.append("archive", file);

        axios.post('http://localhost:4040/api/upload', formData).then((res) => {
            if (res.data) {
                document.location.href = `/upload/${res.data.key}`;

                setLoad(false);
            }
        }).catch(e => {
            if (e) setError('Ocorreu um problema no upload!');
        })
    }

    return (
        <Wrapper>
            <div className='drop_box'>
                <input type="file" name="file" ref={uploadRef} onChange={UploadFile} />
                <div className='drop_box_animation'>
                    <Lottie
                        options={defaultOptions}
                    />
                </div>
                <h2>Clique ou arraste seu arquivo</h2>
                <p style={{ color: "red" }}>{error}</p>
            </div>
            {
                openProgress ?
                    <div className='progress_box width_up'>
                        <MdArchive />
                        <div className='control_progress'>
                            <div className='control_progress_info'>
                                <span className='control_progress_name'>{fileName}</span>
                                <span className='control_progress_percent'>{percent}</span>
                            </div>
                            <div className='progress'>
                                <div className='progress_controller' ref={progressRef} style={{ width: percent }}></div>
                            </div>
                        </div>
                    </div>
                    : null
            }
            <span className='status_bytes'>{status}</span>
            {
                percent === '100%' && (
                    load ?
                        <Link to="#" className='button_box ' onClick={handleSubmit}>
                            <div className='button width_up button_opacity'>
                                <span>Aguarde ...</span>
                            </div>
                        </Link>
                        :
                        <Link to="#" className='button_box' onClick={handleSubmit}>
                            <div className='button width_up'>
                                <span>Compartilhar</span>
                            </div>
                        </Link>
                )

            }
            <Link to='/' className='to_home'>
                <IoIosPlay />
                Voltar para o inicio
            </Link>
        </Wrapper>
    )
}
