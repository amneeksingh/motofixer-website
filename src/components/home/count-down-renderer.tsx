import styles from '../../app/css/home.module.css'

interface Props {
    total: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    completed: boolean;
}


const CountDownRenderer = ({ days, hours, minutes, seconds, completed }: Props) => {
    return (
        <>
            <div className="countdown bg-black text-white opacity-80 mt-28">
                {completed ? (<div className='flex justify-center p-10'>
                    <span>We are Live!</span>
                </div>) : (
                    <div className="container">
                        <div className="flex justify-center" >
                            <div className={`countdown-item p-4 text-center ${styles.kode_mono}`}>
                                <div className="countdown-number text-[60px]" id="countdown-days">{days ? days : 0}</div>
                                <div className="countdown-label text-[30px]">days</div>
                            </div>
                            <div className={`countdown-item p-4 text-center ${styles.kode_mono}`}>
                                <div className="countdown-number text-[60px]" id="countdown-hours">{hours ? hours : 0}</div>
                                <div className="countdown-label text-[30px]">hours</div>
                            </div>

                            <div className={`countdown-item p-4 text-center ${styles.kode_mono}`}>
                                <div className="countdown-number text-[60px]" id="countdown-minutes">{minutes ? minutes : 0}</div>
                                <div className="countdown-label text-[30px]">minutes</div>
                            </div>

                            <div className={`countdown-item p-4 text-center ${styles.kode_mono}`}>
                                <div className="countdown-number text-[60px]" id="countdown-seconds">{seconds ? seconds : 0}</div>
                                <div className="countdown-label text-[30px]">seconds</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    )
}

export default CountDownRenderer