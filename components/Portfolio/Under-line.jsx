const UnderLine = (props) => {
      return (
            <div className={'inline-block relative'}>
                  <span>{props.children}</span>
                  <img className="absolute" src={'/portfolio/text_lines/'+props.imgName} alt='img' />

            </div>
      );
}

export default UnderLine;