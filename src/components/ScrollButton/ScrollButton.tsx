import "./styles.css";

const ScrollButton = () => {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return (
        <button className="scroll-to-top shadow" onClick={scrollToTop}>
        ↑ Top
      </button>
    );
}

export default ScrollButton;