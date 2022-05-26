const SectionTitle = ({title}) => {
      const link = title.replace(/([^\w\s]|\s+)/g, "-");
      return (
            <h2 id={link} className='text-main-blue text-xl font-semibold my-2'>
                  {title}
            </h2>
      );
}

export default SectionTitle;