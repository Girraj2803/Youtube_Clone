
const Usetime = (para)=>{
    const time = new Date(para);
    const now = new Date();

    const diff = now - time;
    const inyear = diff / (1000 * 60 * 60 * 24 * 365.25);
    const indays = diff / (1000 * 60 * 60 * 24);
    const inhours = diff / (1000 * 60 * 60);
    const inmonths = diff / (1000 * 60 * 60 * 24 * 31);
    
    if (inhours <= 24) {
        return `${Math.floor(inhours)} hours ago`;
    } else if (indays <= 31) {
        return `${Math.floor(indays)} days ago`;
    } else if (inmonths <= 12) {
        return `${Math.floor(inmonths)} months ago`;
    } else {
        return `${Math.floor(inyear)} years ago`;
    }
}

export default Usetime;