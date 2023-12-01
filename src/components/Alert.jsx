import Image from 'next/image';
import erin from '../../public/images/erin.svg';

export default function Alert({ message, setMessage }) {
    return (
        <>
            <div className="message">
                <div>
                    {message}
                </div>
                <Image src={erin} alt="Cartoon Erin"
                    style={{            
                        height: '100%',
                        width: '100%',
                        inset: 0,
                        color: 'transparent'
                    }}
                    priority={true}
                />
                <button className="log-btn message-btn" onClick={() => setMessage("")}>
                    Ok
                </button>
            </div>
        </>
    )
}