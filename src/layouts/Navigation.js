import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss';
import cx from 'classnames';
import basantLogo from '../media/logo/BASANT_LOGO.png';

const links = [
  { link: '/', name: 'Home' },
  { link: '/events', name: 'Events' },
  { link: '/gallery', name: 'Gallery' },
  { link: '/about-us', name: 'About Us' },
  // { link: '/sponser', name: 'Sponsors', auth: true },
  { link: '/user', name: 'Profile', auth: true },
]
const style = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "12px",
    marginLeft: "20px",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = style.buttonHover.backgroundColor;
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = style.button.backgroundColor;
};

const NavItem = ({ name, link, handleClick }) => (
  <NavLink to={link} onClick={handleClick} className={state => cx(
    styles['router-link'], 'link',
    { [styles.active]: state.isActive }
  )}>
    {name}
  </NavLink>
)

const Navigation = ({ user }) => {
  const toggleMobileNav = () => {
    const mobileNav = document.querySelector(`.${styles.mobile}`);
    const mobileNavBtns = document.querySelectorAll(`.${styles['mobile-hamburger-btn']}`);
    mobileNavBtns.forEach(btn => {
      btn.classList.toggle(styles.active);
    })
    mobileNav.classList.toggle(styles.active);
    if (mobileNav.classList.contains(styles.active)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <header>
      <nav className={styles.nav} id="nav">
        <div className={styles.logo}>
          <NavLink to={'/'}>
            <img
              style={{ width: "50px", height: "30px", paddingRight: "5px" }}
              src={basantLogo}
              alt="Basant Logo"
            />
          </NavLink>
          <NavLink to={'/'}>Basant</NavLink>
        </div>
        <div className={cx(styles["router-links"], styles.desktop)}>
          {links.filter(link => !link.onlyMobile && (!link.auth || user.user)).map(link => <NavItem key={link.name} {...link} />)}
          <a
              href="https://docs.google.com/forms/d/104eIdR4cfyMLkc-24J0OvLuFDrNcIcP4GT8T1KNov_I/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              style={style.button}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Reg. Form
            </a>
          {/* {!user.user && (
            <NavItem link={'/sponser'} name={'Sponsors'} />
          )} */}
          {/* {user.user && user.admin && (
            <NavItem link={'/admin'} name={'Admin'} />
          )} */}
        </div>
        <button aria-label="Menu" className={styles['mobile-hamburger-btn']} type='button'
          onClick={(e) => { e.preventDefault(); toggleMobileNav(); }}>
          Close
        </button>
      </nav>
      <nav className={styles.mobile}>
        <button aria-label="Menu" className={styles['mobile-hamburger-btn']} type='button'
          onClick={(e) => { e.preventDefault(); toggleMobileNav(); }}>
          Close
        </button>
        <ul className={styles["router-links"]}>
          {links.filter(link => !link.auth || user.user).map(link =>
            <li key={link.name}><NavItem handleClick={toggleMobileNav} {...link} /></li>
          )}
          {/* {!user.user && (
            <li key={'noauth'}><NavItem handleClick={toggleMobileNav}
              {...{ link: '/sponser', name: 'Sponsors' }} /></li>
          )} */}
          {/* {user.user && user.admin && (
            <li key={'noauth'}><NavItem handleClick={toggleMobileNav}
              {...{ link: '/admin', name: 'Admin' }} /></li>
          )} */}
          <li>
            <a
              href="https://docs.google.com/forms/d/104eIdR4cfyMLkc-24J0OvLuFDrNcIcP4GT8T1KNov_I/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              style={style.button}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Reg. Form
            </a>
          </li>
        </ul>
        <div className={styles['nav-footer']}>
          &copy;2025 BASANT IIT(ISM) DHANBAD
        </div>
      </nav>
    </header>
  )
}

export default Navigation;