import Image from 'next/image';

export function ScaredWizard() {
    return(
        <div id="wizard" className="quiz-fill">
        <div className="bubble bubble-bottom">
          <p>You look scared! &#128514; &#128541; &#128526;&nbsp;</p>
        </div>
        <Image src="/images/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
      </div>
    )
}

export function HighScoreWizard() {
    return(
        <div id="wizard" className="quiz-fill end finish">
            <div className="bubble bubble-bottom">
              <p>That's a New High Score!</p>
            </div>
            <Image src="/images/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
          </div>
    )
}

export function UnImpressedWizard() {
    return(
        <div id="wizard" className="quiz-fill end finish">
              <div className="bubble bubble-bottom">
                <p>You Can Do Better :&#40;</p>
              </div>
              <Image src="/images/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
            </div>
    )
}