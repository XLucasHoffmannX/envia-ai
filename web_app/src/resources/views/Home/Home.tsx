import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import HomeAnimation from '../../assets/animation/home-anim.json';
import Wrapper from '../../components/layout/Wrapper';


export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HomeAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Wrapper>
            <div className='home_animation'>
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <Link to="/upload" className='button_box'>
                <div className='button'>
                    <span>Vamos lá</span>
                </div>
            </Link>
        </Wrapper>
    )
}
