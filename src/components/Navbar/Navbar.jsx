import { useState } from "react";
import styled from "styled-components";

import logo from "../../assets/logo.png";
import flag from "../../assets/flag.png";

import { FiLock } from "react-icons/fi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const links = [
    { href: "#", text: "Home" },
    { href: "#", text: "Map" },
    { href: "#", text: "Contact" },
    { href: "#", text: "News" },
  ];

  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="Cryptocurrency logo" />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>

      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={`link-${index}`}>
                <a href={link.href}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="login-btn">
          <div className="flag">
            <img src={flag} alt="Flag Icon" />
            <span>English</span>
          </div>
          <button>
            <FiLock /> Login & Registration
          </button>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;

  .brand {
    display: flex;
    align-items: center;
    .logo {
      img {
        height: 5vh;
      }
    }
    .toggle {
      display: none;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        &:first-of-type,
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: white;
        border-radius: 0.3rem;
        padding: 0.8rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;

        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    margin: 0;
    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background-color: black;
      margin-top: 5rem;
      width: 100vw;
      padding: 5rem 0;
      transition: 0.4s ease-in-out;
      flex-direction: column;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }

    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;

export default Navbar;
