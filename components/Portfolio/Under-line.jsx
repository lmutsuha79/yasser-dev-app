const UnderLine = ({text,imgName}) => {
      return (
            <div className={'inline-block relative'}>
                  <span>{text}</span>
                  <img className="absolute" src={'/portfolio/text_lines/'+imgName} alt='img' />

            </div>
      );
}

export default UnderLine;