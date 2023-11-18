import Image from 'next/legacy/image';
import erin from '../../public/images/erin.svg';

export default function Alert ({ message, setMessage}) {
    return (
        <>
            <div className="message">
                        <div>
                            {message}
                        </div>
                        <Image src={erin} alt="cartoon erin" layout='responsive'/>
                        <button className="log-btn message-btn" onClick={() => setMessage("")}>
                            Ok
                        </button>
                    </div>
        </>
    )
}