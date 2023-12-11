const activeLink = (e, className) => {
    console.log(e.target);
    const navDOM = document.getElementsByClassName(className);
    console.log(navDOM[0]);
}

export default activeLink