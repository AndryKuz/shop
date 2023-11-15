import React from "react";
import { Link } from "react-router-dom";

import cl from "../../styles/Header.module.scss";

import { ROUTES } from "../../utils/routes";

import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.jpg";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={cl.info}>
        <div className={cl.user}>
          <div
            className={cl.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cl.username}>Guest</div>
        </div>
        <form className={cl.form}>
          <div className={cl.icon}>
            <svg
              className={cl.search}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
            </svg>
          </div>
          <div className={cl.input}>
            <input
              type="text"
              name="search"
              placeholder="Search ....."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          <div>
            <svg
              className={cl.clearInp}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height="512px"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`
          .st0{display:inline;}
          .st1{fill:none;stroke:#000000;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
          .st2{display:none;}
        `}
              </style>
              <g className="st2" id="cross">
                <g className="st0">
                  <line
                    className="st1"
                    x1="112.5"
                    x2="401"
                    y1="112.5"
                    y2="401"
                  />
                  <line
                    className="st1"
                    x1="401"
                    x2="112.5"
                    y1="112.5"
                    y2="401"
                  />
                </g>
              </g>
              <g id="cross_copy">
                <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" />
              </g>
            </svg>
          </div>
          {false && <div className={cl.box}></div>}
        </form>

        <div className={cl.account}>
          <Link to={ROUTES} className={cl.favourites}>
            <svg
              className={cl.heart}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_2"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              xmlSpace="preserve"
            >
              <g>
                <path d="M50,91.5C50,91.5,50,91.5,50,91.5c-0.8,0-1.6-0.3-2.2-0.9L8.5,51.1c-4.9-4.8-7.5-11.6-7.3-18.7c0.4-7.1,3.7-13.8,9.1-18.4   c4.5-3.6,9.9-5.5,15.6-5.5c6.9,0,13.7,2.8,18.6,7.7l5.5,5.5l5.5-5.4c9.6-9.6,24.3-10.5,34.2-2c5.4,4.3,8.7,10.8,9.1,17.9   c0.4,7.1-2.3,14.1-7.3,19.1L52.1,90.7C51.6,91.2,50.8,91.5,50,91.5z M48.6,87.1C48.6,87.1,48.6,87.1,48.6,87.1L48.6,87.1z    M25.9,13.5c-4.6,0-8.9,1.5-12.5,4.4c-4.3,3.7-7-9-7.3,14.7C6,38.3,8.1,43.7,12,47.5l38,38.2l38-38c4-4,6.1-9.7,5.8-15.3   c-0.3-5.6-2.9-10.8-7.3-14.3c-7.9-6.8-19.7-6.1-27.5,1.7l-9,8.9l-9-9C37.1,15.7,31.5,13.5,25.9,13.5z" />
              </g>
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={cl.cart}>
            <svg
              className={cl.busket}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g data-name="1" id="_1">
                <path d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z" />
                <path d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z" />
                <path d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z" />
                <path d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z" />
              </g>
            </svg>
            <span className={cl.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
