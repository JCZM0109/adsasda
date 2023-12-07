import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";
import { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(null);
  const { t, i18n } = useTranslation(["common"]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLng = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.blogo}>
        <Image
          src="/assets/logowhite.png"
          alt="SDC logo"
          fill={true}
          className={styles.logonavbar}
          // layout="responsive"
          // width={100}
          // height={65}
        />
      </div>
      <div className={styles.menuContainer}>
        {/* Icono de menú que muestra/oculta el menú desplegable */}
        <div className={styles.menuIcon}>
          {/* ☰ */}
          <IconButton onClick={toggleMenu}>
            <MenuIcon className={styles.materialIcon} />
            <div
              style={{
                color: "white",
                margin: "auto 10px",
                fontSize: "16px",
              }}
              onClick={() => {
                changeLng();
              }}
            >
              {i18n.language.toUpperCase()}
            </div>
          </IconButton>

          <Menu
            open={menuVisible}
            onClose={toggleMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Inicio</MenuItem>
            <MenuItem>Procedimientos</MenuItem>
            <MenuItem>Acerca de nosotros</MenuItem>
            <MenuItem>Casos de éxito</MenuItem>
          </Menu>
        </div>

        {/* Menú desplegable */}

        <div className={styles.menuOptions}>
          <NavBarOptions changeLng={() => changeLng()} i18n={i18n} />
        </div>
      </div>
    </div>
  );
};
