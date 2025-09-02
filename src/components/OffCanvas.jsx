import { useRef, useEffect, useState } from "react";
import { Offcanvas } from "bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faHome,
  faUsers,
  faBriefcase,
  faChartLine,
  faCog,
  faUserTie,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

// ✅ 아이콘 매핑 테이블
const iconMap = {
  home: faHome,
  users: faUsers,
  briefcase: faBriefcase,
  chart: faChartLine,
  cog: faCog,
  userTie: faUserTie,
  file: faFileAlt,
};

// ✅ 아이콘 매핑 검증 함수
const validateIconKey = (key, title) => {
  if (!key) {
    console.warn(`[IconMap] '${title}' 메뉴는 icon 값이 없음`);
    return null;
  }
  if (!iconMap[key]) {
    console.error(`[IconMap] '${title}' 메뉴의 iconKey='${key}'는 iconMap에 매핑되지 않음`);
    return null;
  }
  return iconMap[key];
};

function OffCanvas({ buttonLabel = "메뉴", title = "사이드 메뉴" }) {
  const offCanvasRef = useRef(null);
  const [menuData, setMenuData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("menuData");
    if (stored) {
      setMenuData(JSON.parse(stored));
    } else {
      const defaultMenu = [
        { title: "대시보드", path: "/dashboard", icon: "home" },
        {
          title: "업무 관리",
          icon: "briefcase",
          children: [
            { title: "직원목록", path: "/app2", icon: "userTie" },
            { title: "회원 관리", path: "/members", icon: "users" },
            { title: "설정", path: "/settings", icon: "cog" },
          ],
        },
        {
          title: "리포트",
          icon: "chart",
          children: [
            { title: "매출 현황", path: "/report/sales", icon: "chart" },
            { title: "사용자 로그", path: "/report/users", icon: "file" },
          ],
        },
      ];
      localStorage.setItem("menuData", JSON.stringify(defaultMenu));
      setMenuData(defaultMenu);
    }
  }, []);

  const openOffCanvas = () => {
    const offcanvas = new Offcanvas(offCanvasRef.current);
    offcanvas.show();
  };

  const closeOffCanvas = () => {
    const offcanvas = Offcanvas.getInstance(offCanvasRef.current);
    if (offcanvas) offcanvas.hide();
  };

  const toggleSubmenu = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      {/* 토글 버튼 */}
      <button className="btn btn-secondary" onClick={openOffCanvas}>
        {buttonLabel}
      </button>

      {/* Bootstrap OffCanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" ref={offCanvasRef}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="닫기"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="space-y-2">
            {menuData.map((menu, idx) => {
              const menuIcon = validateIconKey(menu.icon, menu.title);
              return (
                <li key={idx}>
                  {menu.path ? (
                    <Link
                      to={menu.path}
                      className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 font-semibold text-blue-600"
                      onClick={closeOffCanvas}
                    >
                      {menuIcon && <FontAwesomeIcon icon={menuIcon} />}
                      {menu.title}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100 font-semibold"
                        onClick={() => toggleSubmenu(idx)}
                      >
                        <span className="flex items-center gap-2">
                          {menuIcon && <FontAwesomeIcon icon={menuIcon} />}
                          {menu.title}
                        </span>
                        <FontAwesomeIcon
                          icon={openIndex === idx ? faChevronDown : faChevronRight}
                          className="ml-2 text-gray-500"
                        />
                      </button>
                      {menu.children && openIndex === idx && (
                        <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
                          {menu.children.map((child, cidx) => {
                            const childIcon = validateIconKey(child.icon, child.title);
                            return (
                              <li key={cidx}>
                                <Link
                                  to={child.path}
                                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-50 text-blue-500"
                                  onClick={closeOffCanvas}
                                >
                                  {childIcon && <FontAwesomeIcon icon={childIcon} />}
                                  {child.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
