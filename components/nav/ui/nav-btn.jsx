const NavBtn = (props) => {
      return (
            <div id="btn" className='cursor-pointer border border-nav-border-gray p-[5px] rounded-lg center_with_grid w-fit h-fit bg-white hover:bg-nav-border-gray ease-linear'>
                  <div style={{maxWidth: 25,maxHeight: 25}}>
                        {props.children}  
                  </div>
            </div>
      );
}

export default NavBtn;